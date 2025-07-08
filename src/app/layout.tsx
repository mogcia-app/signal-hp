import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

import type { ReactNode } from "react";

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
