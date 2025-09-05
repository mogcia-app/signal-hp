// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ContactModal from "@/components/ContactModal";
import DiagnosisPopup from "@/components/DiagnosisPopup";

import type { ReactNode } from "react";
import Script from "next/script";

// 本番ドメイン（環境変数があればそちら優先）
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://signalapp.com";
const SITE_NAME = "Signal.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}｜SNS運用の90%を自動化するAIマーケティングツール`,
  },
  description:
    "SNS戦略設計から投稿作成・分析改善までAIが自動化。InstagramやTikTok運用の時間を90%削減し、フォロワー増加と成果創出を加速。無料診断で最適な運用プランをご提案。",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      // 高解像度を追加したい場合は下記を増やす
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME}｜SNS運用の90%を自動化するAIマーケティングツール`,
    description:
      "SNS戦略設計から投稿作成・分析改善までAIが自動化。InstagramやTikTok運用の時間を90%削減し、フォロワー増加と成果創出を加速。",
    images: [
      {
        url: "/ogp.png", // 1200x630 推奨
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} OGP`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}｜SNS運用の90%を自動化するAIマーケティングツール`,
    description:
      "SNS戦略設計から投稿作成・分析改善までAIが自動化。InstagramやTikTok運用の時間を90%削減し、フォロワー増加と成果創出を加速。",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Search Console のサイト所有権確認（あなたのコードをセット）
  verification: {
    google: "ACxQJR4t09wu6j7Skb1yFuM_NcjFkCvzYxgjd-i7dk0",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Cookie Consent Manager */}
        <Script
          src="https://cdn.consentmanager.net/delivery/autoblocking/4700d9d682e36.js"
          data-cmp-ab="1"
          data-cmp-host="c.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DDKKBG4WSK" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DDKKBG4WSK');
          `}
        </Script>
        {/* サイト名の明示（検索結果のラベル対策） */}
        <meta property="og:site_name" content={SITE_NAME} />
      </head>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>

        <DiagnosisPopup />
        {/* <ContactModal /> */}

        <Footer />
      </body>
    </html>
  );
}
