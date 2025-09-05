"use client";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            お問い合わせ
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            ご不明な点があれば、どんな些細なことでもお気軽にお問い合わせください。
            専任スタッフが御社の状況を丁寧にヒアリングし、最適な導入方法や活用法をご提案いたします。
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-[#ff8a15] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              無料相談実施中
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-[#ff8a15] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24時間以内に返信
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/1006.svg"
            alt="お問い合わせイメージ"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full h-auto"
          />
        </div>
      </div>
    </section>

      <main className="max-w-2xl mx-auto p-8 bg-white">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
            お問い合わせフォーム
          </h2>
          <form
            className="formrun space-y-6"
            action="https://form.run/api/v1/r/575mkrql9bi4nj5njblfa6e6"
            method="post"
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

{/* 役職 */}
<div>
  <label className="block mb-2 font-medium text-gray-700">
    役職 <span className="text-gray-500">[任意]</span>
  </label>
  <input
    name="役職"
    type="text"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
  />
</div>

{/* お問い合わせ種別 */}
<div>
  <label className="block mb-2 font-medium text-gray-700">
    お問い合わせ種別 <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <select
    name="お問い合わせ種別"
    data-formrun-required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
  >
    <option value="">選択してください</option>
    <option value="ツールについて質問">オンライン相談</option>
    <option value="資料請求">資料請求</option>
    <option value="見積・導入相談">見積・導入相談</option>
    <option value="パートナー提携">パートナー提携</option>
    <option value="その他">その他</option>
  </select>
  <div data-formrun-show-if-error="お問い合わせ種別" className="text-red-600 text-sm mt-1">
    お問い合わせ種別を選択してください
  </div>
</div>

{/* 公式SNSアカウント */}
<div>
  <label className="block mb-2 font-medium text-gray-700">
    公式SNSアカウント <span className="text-gray-500">[任意]</span>
  </label>
  <input
    name="公式SNSアカウント"
    type="text"
    placeholder="@"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
  />
</div>

{/* どこで見つけた？ */}
<div>
  <label className="block mb-2 font-medium text-gray-700">
    どこでこのサイトを見つけましたか？ <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <select
    name="流入経路"
    data-formrun-required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors"
  >
    <option value="">選択してください</option>
    <option value="Google検索">Google検索</option>
    <option value="SNS（X / Instagramなど）">SNS（X / Instagramなど）</option>
    <option value="知人の紹介">知人の紹介</option>
    <option value="その他">その他</option>
  </select>
  <div data-formrun-show-if-error="流入経路" className="text-red-600 text-sm mt-1">
    選択してください
  </div>
</div>

{/* お問い合わせ内容 */}
<div>
  <label className="block mb-2 font-medium text-gray-700">
    お問い合わせ内容 <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <textarea
    name="お問い合わせ内容"
    data-formrun-required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#ff8a15]/20 focus:border-[#ff8a15] transition-colors resize-none"
    rows={5}
  ></textarea>
  <div data-formrun-show-if-error="お問い合わせ内容" className="text-red-600 text-sm mt-1">
    お問い合わせ内容を入力してください
  </div>
</div>

{/* ロボット確認 */}
<div>
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      name="私はロボットではありません"
      data-formrun-required
      className="mr-3 w-4 h-4 text-[#ff8a15] bg-gray-100 border-gray-300 rounded focus:ring-[#ff8a15] focus:ring-2"
    />
    <span className="text-gray-700">私はロボットではありません <span className="text-red-500 font-semibold">[必須]</span></span>
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
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              送信
            </button>
          </div>
        </form>
        </div>
      </main>

      {/* formrun SDK */}
      <Script
        src="https://sdk.form.run/js/v2/formrun.js"
        strategy="afterInteractive"
      />
    </>
  );
}
