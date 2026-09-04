"use client";

import { useState } from "react";

export default function FaqSection() {
  const [category, setCategory] = useState<"all" | "service" | "price" | "security">("all");

  const faqs = [
    {
      category: "service",
      question: "どこまで自動化できますか？",
      answer: "Instagramプロフェッショナルアカウントを接続すると、投稿情報やパフォーマンスデータをSignal.上で確認できます。また、Signal.から投稿および予約投稿を行えます。投稿内容と公開日時は、お客様自身で確認・設定していただきます。",
    },
    {
      category: "price",
      question: "料金についての質問",
      answer: "月額プラン制で、必要に応じて投稿作成や運用支援などの代行サービスもご案内します。",
    },
    {
      category: "security",
      question: "セキュリティについての質問",
      answer: "お客様のデータは暗号化され安全に管理されています。",
    },
    {
      category: "service",
      question: "Instagramとの接続や設定は難しいですか？",
      answer: "お客様自身が管理するInstagramプロフェッショナルアカウントを接続して利用します。接続後は、対象アカウントの投稿情報やパフォーマンスデータをSignal.上で確認できます。",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">よくある質問</h2>

      {/* カテゴリボタン */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { key: "all", label: "全て" },
          { key: "service", label: "サービス" },
          { key: "price", label: "料金" },
          { key: "security", label: "セキュリティ" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setCategory(item.key as any)}
            className={`px-4 py-2 rounded-full border font-bold transition ${
              category === item.key
                ? "bg-[#ff8a15] text-white border-[#ff8a15]"
                : "border-[#ff8a15] text-[#ff8a15] hover:bg-[#ff8a15] hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* FAQリスト */}
      <div className="space-y-6">
  {faqs
    .filter((faq) => category === "all" || faq.category === category)
    .map((faq, index) => (
      <details
        key={index}
        className="p-6 border border-gray-300 rounded"
      >
        <summary className="text-xl font-bold cursor-pointer text-[#ff8a15]">
          {faq.question}
        </summary>
        <p className="mt-4 text-gray-600">{faq.answer}</p>
      </details>
    ))}
</div>
    </section>
  );
}
