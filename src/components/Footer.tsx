import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700 text-sm items-start">

        {/* 左ロゴ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Signal<span className="text-[#ff8a15]">.</span>
          </h2>
          <p className="text-[13px] text-black mb-2">
            オリジナルAIが逆算思考で戦略を専用設計。<br />
            一貫性を持ったPDCAで御社の強みを最大限に<br />活かし、
            SNSを次の成長へつなげます。
          </p>
        </div>

        {/* 右側3カラム */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-[#ff8a15] mb-4">Service</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="hover:text-[#ff8a15] transition">機能</Link></li>
              <li><Link href="/price" className="hover:text-[#ff8a15] transition">料金</Link></li>
              <li><Link href="/flow" className="hover:text-[#ff8a15] transition">導入までの流れ</Link></li>
              <li><Link href="/faq" className="hover:text-[#ff8a15] transition">よくある質問</Link></li>
              <li><Link href="/document" className="hover:text-[#ff8a15] transition">資料をダウンロード</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#ff8a15] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/company" className="hover:text-[#ff8a15] transition">運営会社</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#ff8a15] mb-4">Campaigns</h4>
            <ul className="space-y-2">
              <li><Link href="/partners" className="hover:text-[#ff8a15] transition">パートナー制度</Link></li>
            </ul>
            <h4 className="font-bold text-[#ff8a15] mt-6 mb-3">お問い合わせ</h4>
            <p className="text-xs text-gray-500 mb-1">平日 10:00〜17:00</p>
            <p className="text-xs text-gray-500 mb-3">翌営業日にご連絡いたします。</p>
            <p className="text-xs text-gray-500 mb-3">
            TEL: <a href="tel:092-517-9804" className="hover:text-[#ff8a15] transition">092-517-9804</a>
           </p>
            <a href="mailto:info@xxxxx.jp" className="hover:text-[#ff8a15] transition">info@xxxxx.jp</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs py-6 border-t border-gray-100">
        © 2025 Signal. All rights reserved.
      </div>
    </footer>
  );
}
