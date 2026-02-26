"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#service", label: "サービス" },
  { href: "/#features", label: "機能" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "よくある質問" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[54px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-16">
        <div>
          <Link href="/" className="text-[20px] font-semibold tracking-tight text-black transition hover:opacity-80">
          Signal<span className="text-[#ff8a15]">.</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-[#ff8a15] whitespace-nowrap">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-[#ff8a15] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#e47910]">
            お問い合わせ
          </Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2 md:hidden" aria-label="メニューを開く">
          <span className={`h-0.5 w-6 bg-[#ff8a15] transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#ff8a15] transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-[#ff8a15] transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden sm:px-8">
          <nav className="space-y-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-1 text-sm font-semibold text-slate-700">
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex bg-[#ff8a15] px-5 py-2.5 text-sm font-bold text-white"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
