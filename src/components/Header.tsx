"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 shadow bg-white z-50">
      {/* ロゴ */}
      <Link href="/" className="text-[25px] font-bold text-gray-900">
        Signal<span className="text-[#ff8a15]">.</span>
      </Link>

      {/* PC用メニュー */}
      <nav className="hidden md:flex gap-6">
        <Link href="/features" className="text-gray-600 hover:text-[#ff8a15]">機能</Link>
        <Link href="/price" className="text-gray-600 hover:text-[#ff8a15]">料金</Link>
        <Link href="/flow" className="text-gray-600 hover:text-[#ff8a15]">導入までの流れ</Link>
        <Link href="/faq" className="text-gray-600 hover:text-[#ff8a15]">よくある質問</Link>
        <Link href="/document" className="text-gray-600 hover:text-[#ff8a15]">資料</Link>
        <Link
          href="/contact"
          className="bg-[#ff8a15] text-white px-4 py-2 rounded-full hover:bg-orange-500 transition"
        >
          お問い合わせ
        </Link>
      </nav>

      {/* スマホ用ハンバーガー */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
      >
        {/* シンプルなハンバーガーアイコン */}
        <div className="w-6 h-0.5 bg-[#ff8a15] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#ff8a15] mb-1"></div>
        <div className="w-6 h-0.5 bg-[#ff8a15]"></div>
      </button>

      {/* スマホメニュー */}
     {isOpen && (
  <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 space-y-4 md:hidden">
    <div className="flex justify-end mb-4">
      <button
        onClick={() => setIsOpen(false)}
        className="text-3xl text-gray-600 hover:text-[#ff8a15] transition"
        aria-label="メニューを閉じる"
      >
        &times;
      </button>
    </div>
    <Link href="/features" className="block text-gray-600 hover:text-[#ff8a15]">機能</Link>
    <Link href="/price" className="block text-gray-600 hover:text-[#ff8a15]">料金</Link>
    <Link href="/flow" className="block text-gray-600 hover:text-[#ff8a15]">導入までの流れ</Link>
    <Link href="/faq" className="block text-gray-600 hover:text-[#ff8a15]">よくある質問</Link>
    <Link href="/document" className="block text-gray-600 hover:text-[#ff8a15]">資料</Link>
    <Link
      href="/contact"
      className="block text-center bg-[#ff8a15] text-white px-4 py-2 rounded-full hover:bg-orange-500 transition"
    >
      お問い合わせ
    </Link>
  </div>
)}

    </header>
  );
}
