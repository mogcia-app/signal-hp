import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { ReactNode } from "react";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://signalapp.com";
const SITE_NAME = "Signal.";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}｜あなた専属のSNS AI秘書`,
  },
  description:
    "Instagram運用で止まりやすい振り返りと改善を、Signal.が実務レベルで支援。投稿と分析結果の入力をもとに、AIが次アクションまで提案します。",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME}｜あなた専属のSNS AI秘書`,
    description:
      "Instagram運用のPDCAを、投稿・分析入力を起点にAIが継続支援。改善提案と次月アクションに接続できます。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} OGP`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}｜あなた専属のSNS AI秘書`,
    description:
      "Instagram運用で止まりやすい振り返りと改善を、Signal.が実務レベルで支援。",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "g4OAU_6aZjujbDlX688yg_dezRgpehllGzkhHyqoimg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {IS_PRODUCTION && (
          <>
            <Script
              src="https://cdn.consentmanager.net/delivery/autoblocking/4700d9d682e36.js"
              data-cmp-ab="1"
              data-cmp-host="c.delivery.consentmanager.net"
              data-cmp-cdn="cdn.consentmanager.net"
              data-cmp-codesrc="16"
              strategy="afterInteractive"
            />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DDKKBG4WSK" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DDKKBG4WSK');
              `}
            </Script>
          </>
        )}
        <meta property="og:site_name" content={SITE_NAME} />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
