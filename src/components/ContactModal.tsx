"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingButton() {
  const pathname = usePathname();
  const isFeaturePage = pathname.startsWith("/features");
  const isDiagnosisPage = pathname.startsWith("/diagnosis");

  return (
    <div className={`fixed right-6 z-50 transition-all ${isDiagnosisPage ? "bottom-24" : "bottom-6"}`}>
      <Link href={isFeaturePage ? "/contact" : "/features"}>
        <button className="bg-[#ff8a15] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform">
          {isFeaturePage ? "ご相談はこちら" : "ツールの機能について詳しく見る"}
        </button>
      </Link>
    </div>
  );
}
