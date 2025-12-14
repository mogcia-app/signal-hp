"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 sm:py-5 px-4 sm:px-6 lg:px-8 shadow-sm bg-white z-50">
      {/* ロゴ */}
      <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-900 hover:opacity-80 transition">
        Signal<span className="text-[#ff8a15]">.</span>
      </Link>

      {/* PC用メニュー */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link href="/features" className="text-sm lg:text-base text-gray-700 hover:text-[#ff8a15] transition font-medium">
          Signal.の特徴
        </Link>
        <Link href="/faq" className="text-sm lg:text-base text-gray-700 hover:text-[#ff8a15] transition font-medium">
          よくある質問
        </Link>
        <Link href="/diagnosis" className="text-sm lg:text-base text-gray-700 hover:text-[#ff8a15] transition font-medium">
          SNS無料診断
        </Link>
        <Link
          href="/contact"
          className="bg-[#ff8a15] text-white px-5 lg:px-6 py-2.5 lg:py-3 hover:bg-orange-600 transition font-bold text-sm lg:text-base"
        >
          お問い合わせ
        </Link>
      </nav>

      {/* スマホ用ハンバーガー */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none flex flex-col gap-1.5 p-2"
        aria-label="メニューを開く"
      >
        <div className={`w-6 h-0.5 bg-[#ff8a15] transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-[#ff8a15] transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-[#ff8a15] transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* スマホメニュー */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-6 space-y-4 md:hidden animate-in slide-in-from-top-2">
          <Link 
            href="/features" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#ff8a15] transition font-medium py-2"
          >
            Signal.の特徴
          </Link>
          <Link 
            href="/faq" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#ff8a15] transition font-medium py-2"
          >
            よくある質問
          </Link>
          <Link 
            href="/diagnosis" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 hover:text-[#ff8a15] transition font-medium py-2"
          >
            SNS無料診断
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#ff8a15] text-white px-4 py-3 hover:bg-orange-600 transition font-bold mt-4"
          >
            お問い合わせ
          </Link>
        </div>
      )}

    </header>
  );
}
