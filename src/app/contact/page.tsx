"use client";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
    <section className="w-full bg-[#fff3ea] py-30 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-3xl font-bold mb-8">{`お問い合わせページ`}</h1>
      <p className="text-gray-600 mb-8">
        {`ご不明な点があれば、どんな些細なことでもお気軽にお問い合わせください。`}
        <br />
        {`専任スタッフが御社の状況を丁寧にヒアリングし`}
        <br />
        {`最適な導入方法や活用法をご提案いたします。`}
      </p>
    </div>

    <div className="flex justify-center">
      <img
        src="/images/1006.svg"
        alt="FAQイメージ"
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full h-auto"
      />
    </div>
  </div>
</section>

      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
        <form
          className="formrun space-y-6"
          action="https://form.run/api/v1/r/575mkrql9bi4nj5njblfa6e6"
          method="post"
        >
         {/* お名前 */}
<div>
  <label className="block mb-1 font-medium">
    お名前 <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <input
    name="お名前"
    type="text"
    data-formrun-required
    className="w-full border rounded p-2"
  />
  <div data-formrun-show-if-error="お名前" className="text-red-600 text-sm mt-1">
    お名前を入力してください
  </div>
</div>

{/* 企業名 */}
<div>
  <label className="block mb-1 font-medium">
    企業名 <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <input
    name="企業名"
    type="text"
    data-formrun-required
    className="w-full border rounded p-2"
  />
  <div data-formrun-show-if-error="企業名" className="text-red-600 text-sm mt-1">
    企業名を入力してください
  </div>
</div>

{/* 役職 */}
<div>
  <label className="block mb-1 font-medium">
    役職 <span className="text-gray-500">[任意]</span>
  </label>
  <input
    name="役職"
    type="text"
    className="w-full border rounded p-2"
  />
</div>

{/* お問い合わせ種別 */}
<div>
  <label className="block mb-1 font-medium">
    お問い合わせ種別 <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <select
    name="お問い合わせ種別"
    data-formrun-required
    className="w-full border rounded p-2"
  >
    <option value="">選択してください</option>
    <option value="ツールについて質問">ツールについて質問</option>
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
  <label className="block mb-1 font-medium">
    公式SNSアカウント <span className="text-gray-500">[任意]</span>
  </label>
  <input
    name="公式SNSアカウント"
    type="text"
    placeholder="@"
    className="w-full border rounded p-2"
  />
</div>

{/* どこで見つけた？ */}
<div>
  <label className="block mb-1 font-medium">
    どこでこのサイトを見つけましたか？ <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <select
    name="流入経路"
    data-formrun-required
    className="w-full border rounded p-2"
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
  <label className="block mb-1 font-medium">
    お問い合わせ内容 <span className="text-red-500 font-semibold">[必須]</span>
  </label>
  <textarea
    name="お問い合わせ内容"
    data-formrun-required
    className="w-full border rounded p-2"
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
      className="mr-2"
    />
    私はロボットではありません <span className="text-red-500 font-semibold">[必須]</span>
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
          <button
            type="submit"
            data-formrun-error-text="未入力の項目があります"
            data-formrun-submitting-text="送信中..."
            className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
          >
            送信
          </button>
        </form>
      </main>

      {/* formrun SDK */}
      <Script
        src="https://sdk.form.run/js/v2/formrun.js"
        strategy="afterInteractive"
      />
    </>
  );
}
