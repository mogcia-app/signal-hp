import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
  {/* import ContactModal from "@/components/ContactModal"; */}
import DiagnosisPopup from "@/components/DiagnosisPopup";


import type { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  title: "Signal. - SNS特化AIツール",
  description: "Signal.はSNS運用をAIで効率化する逆算型PDCAツールです。",
  icons: {
    icon: '/favicon-32x32.png', // ←ここで設定
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
