import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
  {/* import ContactModal from "@/components/ContactModal"; */}
import DiagnosisPopup from "@/components/DiagnosisPopup";


import type { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  title: "Signal.｜SNS運用の90%を自動化するAIマーケティングツール",
  description:
    "SNS戦略設計から投稿作成・分析改善までAIが自動化。InstagramやTikTok運用の時間を90%削減し、フォロワー増加と成果創出を加速。無料診断で最適な運用プランをご提案。",
  icons: {
    icon: '/favicon.png',
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
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DDKKBG4WSK');
          `}
        </Script>
      </head>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
      <main className="flex-grow">{children}</main>
<DiagnosisPopup />


  {/* <ContactModal />*/}
<Footer />

      </body>
    </html>
  );
}
