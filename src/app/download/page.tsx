"use client";
import Script from "next/script";
import { useState } from "react";

export default function DownloadPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Formrunに送信
    const form = e.currentTarget;
    const formrunEndpoint = "https://form.run/api/v1/r/575mkrql9bi4nj5njblfa6e6";
    
    // ここでフォーム送信処理
    // 実際の実装では、FormrunのAPIに送信するか、別の方法で処理
    
    // 送信成功後、ダウンロード可能にする
    setIsSubmitted(true);
    
    // PDFファイルのダウンロード（実際のファイルパスに変更してください）
    // window.location.href = '/documents/signal-brochure.pdf';
  };

  return (
    <>
      <section className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            資料ダウンロード
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Signal.の詳細なサービス資料をダウンロードいただけます。
            <br />
            以下のフォームにご入力いただき、送信ボタンを押してください。
          </p>
        </div>
      </section>

      <main className="max-w-2xl mx-auto p-8 bg-white">
        {!isSubmitted ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
              資料請求フォーム
            </h2>
            <form
              className="formrun space-y-6"
              action="https://form.run/api/v1/r/575mkrql9bi4nj5njblfa6e6"
              method="post"
              onSubmit={handleSubmit}
            >
              {/* お名前 */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  お名前 <span className="text-red-500 font-semibold">[必須]</span>
                </label>
                <input
                  name="お名前"
                  type="text"
                  data-formrun-required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
                />
                <div data-formrun-show-if-error="お名前" className="text-red-600 text-sm mt-1">
                  お名前を入力してください
                </div>
              </div>

              {/* 企業名 */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  企業名 <span className="text-red-500 font-semibold">[必須]</span>
                </label>
                <input
                  name="企業名"
                  type="text"
                  data-formrun-required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
                />
                <div data-formrun-show-if-error="企業名" className="text-red-600 text-sm mt-1">
                  企業名を入力してください
                </div>
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  メールアドレス <span className="text-red-500 font-semibold">[必須]</span>
                </label>
                <input
                  name="メールアドレス"
                  type="email"
                  data-formrun-required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
                />
                <div data-formrun-show-if-error="メールアドレス" className="text-red-600 text-sm mt-1">
                  メールアドレスを入力してください
                </div>
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  電話番号 <span className="text-gray-500">[任意]</span>
                </label>
                <input
                  name="電話番号"
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
                />
              </div>

              {/* お問い合わせ種別を固定 */}
              <input type="hidden" name="お問い合わせ種別" value="資料請求" />

              {/* ロボット確認 */}
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="私はロボットではありません"
                    data-formrun-required
                    className="mr-3 w-4 h-4 text-[#ff8a15] bg-gray-100 border-gray-300 rounded focus:ring-[#ff8a15] focus:ring-2"
                  />
                  <span className="text-gray-700">
                    私はロボットではありません <span className="text-red-500 font-semibold">[必須]</span>
                  </span>
                </label>
                <div data-formrun-show-if-error="私はロボットではありません" className="text-red-600 text-sm mt-1">
                  確認にチェックを入れてください
                </div>
              </div>

              {/* bot対策 */}
              <div
                className="_formrun_gotcha"
                style={{
                  position: "absolute",
                  height: "1px",
                  width: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="_formrun_gotcha">
                  If you are a human, ignore this field
                </label>
                <input
                  type="text"
                  name="_formrun_gotcha"
                  id="_formrun_gotcha"
                  tabIndex={-1}
                />
              </div>

              {/* 送信ボタン */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  data-formrun-error-text="未入力の項目があります"
                  data-formrun-submitting-text="送信中..."
                  className="bg-[#ff8a15] text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg w-full"
                >
                  資料をダウンロード
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                ご送信ありがとうございました
              </h2>
              <p className="text-gray-600 mb-8">
                資料のダウンロードが完了しました。
                <br />
                ご入力いただいたメールアドレスにも資料をお送りいたします。
              </p>
              <a
                href="/documents/signal-brochure.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff8a15] text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                資料をダウンロード
              </a>
            </div>
            <a
              href="/"
              className="text-[#ff8a15] hover:underline"
            >
              トップページに戻る
            </a>
          </div>
        )}
      </main>

      {/* formrun SDK */}
      <Script
        src="https://sdk.form.run/js/v2/formrun.js"
        strategy="afterInteractive"
      />
    </>
  );
}


