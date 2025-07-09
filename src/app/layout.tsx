import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

import type { ReactNode } from "react";

export const metadata = {
  title: "Signal. - SNS特化AIツール",
  description: "Signal.はSNS運用をAIで効率化する逆算型PDCAツールです。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
          <ContactModal />  {/* ←ここに追加 */}
        <Footer />
      </body>
    </html>
  );
}
