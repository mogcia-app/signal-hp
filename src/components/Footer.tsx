import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#efdfc7] bg-[#fffaf2]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:items-start lg:px-16">
        <div className="max-w-[420px]">
          <Link href="/" className="text-[24px] font-semibold tracking-tight text-slate-900 transition hover:opacity-80">
            Signal<span className="text-[#ff8a15]">.</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Instagram運用の振り返りと改善をつなぎ、次のアクションまで迷わず進めるためのSNS運用支援サービスです。
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-slate-500">SITE MAP</p>
          <div className="mt-3 space-y-2 text-sm font-semibold text-slate-700">
            <Link href="/#service" className="block transition hover:text-[#ff8a15]">サービス</Link>
            <Link href="/#features" className="block transition hover:text-[#ff8a15]">機能</Link>
            <Link href="/#pricing" className="block transition hover:text-[#ff8a15]">料金</Link>
            <Link href="/#faq" className="block transition hover:text-[#ff8a15]">よくある質問</Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.12em] text-slate-500">CONTACT</p>
          <Link href="/contact" className="mt-3 inline-flex bg-[#ff8a15] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e47910]">
            お問い合わせ
          </Link>
          <div className="mt-4 space-y-1 text-sm leading-relaxed text-slate-600">
            <p>平日 10:00〜17:00</p>
            <p>翌営業日にご連絡いたします。</p>
            <p>
              <span className="font-medium text-slate-700">TEL:</span>{" "}
              <a href="tel:0925179804" className="transition hover:text-[#ff8a15]">
                092-517-9804
              </a>
            </p>
            <p>
              <a href="mailto:info@signalapp.jp" className="font-medium text-slate-700 transition hover:text-[#ff8a15]">
                info@signalapp.jp
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#efdfc7]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-4 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-16">
          <p>© 2025 Signal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.mogcia.net/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ff8a15]">
              運営会社
            </Link>
            <Link href="/privacy" className="transition hover:text-[#ff8a15]">プライバシーポリシー</Link>
            <Link href="/terms" className="transition hover:text-[#ff8a15]">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
