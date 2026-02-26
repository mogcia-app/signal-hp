"use client";
import Image from "next/image";
import Script from "next/script";

export default function ContactPage() {
  const fieldClass =
    "w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 sm:text-base focus:border-[#ff8a15] focus:ring-2 focus:ring-[#ff8a15]/20 transition-colors";

  return (
    <>
    <section className="px-4 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 border border-[#efdfc7] bg-[#fffaf2] px-5 py-8 md:grid-cols-2 md:items-center md:gap-10 md:px-8 md:py-10 lg:px-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.08em] text-[#ff8a15]">CONTACT</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            料金・機能・導入フローなど、気になる点はお気軽にお問い合わせください。
            現在の運用状況をお伺いしながら、最適な活用方法をご案内します。
          </p>
         
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/n1.png"
            alt="お問い合わせイメージ"
            width={420}
            height={420}
            className="h-auto w-[200px] max-w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          />
        </div>
      </div>
    </section>

      <main className="px-4 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[860px] border border-slate-200 bg-white p-5 sm:p-8">
          <h2 className="text-center text-xl font-semibold text-slate-900 sm:text-2xl">
            お問い合わせフォーム
          </h2>
         
          <form
            className="formrun mt-6 space-y-5 sm:mt-8 sm:space-y-6"
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
    className={fieldClass}
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
    className={fieldClass}
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
    className={fieldClass}
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
    className={fieldClass}
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
    SNSアカウント <span className="text-gray-500">[任意]</span>
  </label>
  <input
    name="SNSアカウント"
    type="text"
    placeholder="@"
    className={fieldClass}
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
    className={fieldClass}
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
    className={`${fieldClass} resize-none`}
    rows={5}
  ></textarea>
  <div data-formrun-show-if-error="お問い合わせ内容" className="text-red-600 text-sm mt-1">
    お問い合わせ内容を入力してください
  </div>
</div>

{/* ロボット確認 */}
<div>
  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      name="私はロボットではありません"
      data-formrun-required
      className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 bg-gray-100 text-[#ff8a15] focus:ring-2 focus:ring-[#ff8a15]"
    />
    <span className="text-sm leading-relaxed text-gray-700">私はロボットではありません <span className="text-red-500 font-semibold">[必須]</span></span>
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
          <div className="pt-6 text-center">
            <button
              type="submit"
              data-formrun-error-text="未入力の項目があります"
              data-formrun-submitting-text="送信中..."
              className="w-full bg-[#ff8a15] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#ea7e12] sm:w-auto"
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
