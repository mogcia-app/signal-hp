export default function PartnerPage() {
  return (
    <div className="w-full">

      {/* ========== メインビュー ========== */}
      <section className="w-full bg-[#fff3ea] py-[80px] md:py-[100px] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* 左：テキスト */}
          <div>
            <h1 className="text-3xl font-bold mb-8">パートナー制度</h1>
            <p className="text-gray-600 mb-12">
              Signal.では様々なパートナー制度をご用意しています。<br />
              クライアントのSNS運用課題を、Signal.で解決しませんか？
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
            >
              資料請求・お問い合わせ
            </a>
          </div>

          {/* 右：イメージ */}
          <div className="w-full flex justify-center">
            <img 
              src="/images/0000.svg" 
              alt="パートナー制度イメージ"
              className="w-full sm:w-96 md:w-[500px] h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ========== メリット一覧 ========== */}
 {/* ========== ユーザー紹介制度 ========== */}
<section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-2 gap-6 items-center">
  {/* 左：テキスト */}
  <div className="text-xs sm:text-sm md:text-base">
    <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a15] mb-4">ユーザー紹介制度</h2>
    <p className="text-gray-700 mb-4">
      Signal.をご利用中の企業様が、新たに知人や取引先をご紹介いただける制度です。
      紹介いただいた企業様が導入された際には、利用料の割引や追加サポートなど特典をご用意しています。
    </p>
    <ul className="list-disc list-inside text-gray-600 mb-6">
      <li>紹介先が契約成立で、特典を付与</li>
      <li>ご紹介は何社でもOK</li>
      <li>専任スタッフがご紹介先に丁寧に説明</li>
    </ul>
    <a
      href="/contact"
      className="inline-block bg-[#ff8a15] text-white px-6 py-3 rounded-full font-bold hover:bg-orange-500 transition"
    >
      詳しくお問い合わせ
    </a>
  </div>

  {/* 右：イメージ */}
  <div className="flex justify-center">
    <img
      src="/images/1111.svg"
      alt="紹介制度イメージ"
      className="w-[120px] sm:w-[180px] md:w-[300px] lg:w-[400px] h-auto rounded-lg"
    />
  </div>
</section>

{/* ========== 販売パートナー制度 ========== */}
<section className="w-full py-16 px-6 bg-[#fff7ed] grid grid-cols-2 gap-6 items-center">
  {/* 左：イメージ */}
  <div className="flex justify-center">
    <img 
      src="/images/2222.svg" 
      alt="販売パートナー制度"
      className="w-[120px] sm:w-[180px] md:w-[300px] lg:w-[400px] h-auto rounded-lg"
    />
  </div>

  {/* 右：テキスト */}
  <div className="text-xs sm:text-sm md:text-base">
    <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a15] mb-4">販売パートナー制度</h2>
    <p className="text-gray-700 mb-4">
      Signal.を新たに販売していただけるパートナー様を募集しています。
      SNS戦略ツール × AI という高単価商材で、既存の顧客基盤に新しい提案が可能です。
    </p>
    <ul className="list-disc list-inside text-gray-600 mb-6">
      <li>成約ごとに販売マージンを還元</li>
      <li>営業資料・提案書の提供</li>
      <li>営業同行やオンライン提案のサポートあり</li>
    </ul>
    <a
      href="/contact"
      className="inline-block bg-[#ff8a15] text-white px-6 py-3 rounded-full font-bold hover:bg-orange-500 transition"
    >
      詳しくお問い合わせ
    </a>
  </div>
</section>

{/* ========== 制作会社・広告代理店向け ========== */}
<section className="w-full py-16 px-6 bg-white grid grid-cols-2 gap-6 items-center">
  {/* 左：テキスト */}
  <div className="text-xs sm:text-sm md:text-base">
    <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a15] mb-4">
      制作会社・広告代理店・コンサル企業様向け
    </h2>
    <p className="text-gray-700 mb-4">
      Web制作・広告運用・SNSコンサルなど、既存のサービスと併せて
      Signal.を導入提案いただけるパートナー様を募集しています。
      クライアントのSNS課題を包括的に解決し、売上拡大をサポートします。
    </p>
    <ul className="list-disc list-inside text-gray-600 mb-6">
      <li>既存提案にSignal.を組み合わせて単価UP</li>
      <li>専任スタッフが提案・導入をバックアップ</li>
      <li>ツールのOEM提供も可能</li>
    </ul>
    <a
      href="/contact"
      className="inline-block bg-[#ff8a15] text-white px-6 py-3 rounded-full font-bold hover:bg-orange-500 transition"
    >
      詳しくお問い合わせ
    </a>
  </div>

  {/* 右：イメージ */}
  <div className="flex justify-center">
    <img
      src="/images/3333.svg"
      alt="パートナー提携イメージ"
      className="w-[120px] sm:w-[180px] md:w-[300px] lg:w-[400px] h-auto rounded-lg"
    />
  </div>
</section>

      {/* ========== CTA ========== */}
    </div>
  );
}
