export default function PricePage() {
  return (
    <div>

      {/* メインビュー */}
      <div className="w-full py-20 px-6 bg-gradient-to-r from-[#fff7ed] to-[#ffb76f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* 左側テキスト */}
          <div>
            <h1 className="text-3xl font-bold mb-8">
              料金プラン
            </h1>
            <p className="text-gray-700 mb-8">
            Signal.は御社のSNS運用に合わせて柔軟にカスタマイズ可能です。
           <br />まずはお気軽にご相談ください。
           </p>
        <a
           href="/contact"
           className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
        >
          無料相談してみる
        </a>

          </div>

          {/* 右側イメージ */}
          <div className="w-full flex justify-end">
            <img
              src="/images/1226.svg"
              alt="料金イメージ"
              className="w-[600px] max-w-md h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* プラン一覧 */}
      {/* ================== 料金 ================== */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4 text-[#000000]">料金プラン</h2>
    <p className="text-gray-600 text-base mb-10">
      事業規模や運用体制に合わせて最適なプランをご提案します。
    </p>

    <div className="grid gap-8 md:grid-cols-3">

       <div className="border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#ff8a15] mb-2">カスタマイズ</h3>
        <p className="text-gray-700 mb-4">ご予算や目的に合わせてカスタム可能です</p>
        <div className="text-2xl font-bold mb-4">月額3万円〜</div>
        <ul className="text-sm text-gray-600 mb-6 space-y-2">
           <li>1SNSのみ契約</li>
          <li>カスタマイズページ</li>
          <li>オプション機能多数</li>
        </ul>
        <button className="bg-[#ff8a15] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
          カスタム相談
        </button>
      </div>

  <div className="relative border-2 border-[#ff8a15] bg-[#ff8a15]/5 rounded-xl pt-8 p-6 hover:shadow-xl transition">
 <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
  bg-[#ff8a15] text-white text-lg font-extrabold px-6 py-3 rounded-full shadow-lg">
  おすすめ
</span>
  <h3 className="text-xl font-bold text-[#ff8a15] mb-2">スターター</h3>
 <p className="text-gray-700 mb-4">SNS運用を本格的に始めたい方へ</p>
  <div className="text-2xl font-bold mb-4">月額6万円</div>
  <ul className="text-sm text-gray-600 mb-6 space-y-2">
    <li>1SNSのみ契約</li>
    <li>ツールの基本機能</li>
    <li>専任スタッフサポート</li>
  </ul>
  <button className="bg-[#ff8a15] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
    無料相談
  </button>
</div>

  
      <div className="border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-[#ff8a15] mb-2">ビジネス（チーム）</h3>
        <p className="text-gray-700 mb-4">チーム利用向け</p>
        <div className="text-2xl font-bold mb-4">月額12万円</div>
        <ul className="text-sm text-gray-600 mb-6 space-y-2">
          <li>複数メンバー管理</li>
          <li>チーム別KPIレポート</li>
          <li>戦略進行ミーティング</li>
        </ul>
        <button className="bg-[#ff8a15] text-white px-6 py-2 rounded-full hover:bg-orange-500 transition">
          詳しく相談
        </button>
      </div>


    </div>
  </div>
</section>

<section className="w-full py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center text-[#000000]">料金に関するよくあるご質問</h2>
    
    <div className="space-y-6">
      <details className="p-6 border rounded-xl">
        <summary className="text-lg font-bold cursor-pointer text-[#ff8a15]">
          契約期間はありますか？
        </summary>
        <p className="mt-4 text-gray-600">
       SNSは成果が見えるまでに一定期間が必要なため、1年間のご契約を基本としております。<br />
    1年間しっかりPDCAを回すことで、効果を最大化することを目的としています。
  </p>
      </details>

     <details className="p-6 border rounded-xl">
  <summary className="text-lg font-bold cursor-pointer text-[#ff8a15]">
    契約期間中でもSNSの追加やツールのカスタマイズは可能ですか？
  </summary>
  <p className="mt-4 text-gray-600">
  はい、可能です。運用状況やビジネスの成長に応じてSNSを追加したり、
  ツールをカスタマイズしながら、<br />より良いSNS運営をサポートします。
  詳しくはお気軽にご相談ください。
</p>
</details>

      <details className="p-6 border rounded-xl">
        <summary className="text-lg font-bold cursor-pointer text-[#ff8a15]">
          複数SNSを管理した場合、料金はどうなりますか？
        </summary>
        <p className="mt-4 text-gray-600">
          追加のSNSごとに月額料金がプラスされます。詳細はお問い合わせください。
        </p>
      </details>

      <details className="p-6 border rounded-xl">
        <summary className="text-lg font-bold cursor-pointer text-[#ff8a15]">
          初期費用はかかりますか？
        </summary>
        <p className="mt-4 text-gray-600">
  初期費用として15万円を頂戴しております。
  ヒアリングを通じて御社に最適なツールやAIを構築するための<br />
  カスタマイズ費用となります。
</p>
      </details>

      <details className="p-6 border rounded-xl">
        <summary className="text-lg font-bold cursor-pointer text-[#ff8a15]">
          支払い方法は？
        </summary>
        <p className="mt-4 text-gray-600">
          請求書払い（銀行振込）に対応しています。
        </p>
      </details>

      
    </div>
  </div>
</section>



<section className="w-full py-8 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid text-center md:grid-cols-2 gap-12 items-center">
    
    {/* 左：テキスト & CTA */}
    <div className="relative bg-[#ff8a15] text-white py-12 px-8 rounded-xl overflow-hidden">
     <div className="flex items-center justify-center gap-3 mb-8">
  {/* 左の丸 */}
  <div className="flex gap-2">
    <div className="w-2 h-2 bg-white rounded-full"></div>
    <div className="w-2 h-2 bg-white rounded-full"></div>
    <div className="w-2 h-2 bg-white rounded-full"></div>
  </div>

  {/* 見出し */}
  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
  無料相談で、御社だけのSNS戦略を見つけませんか？
</h3>

  {/* 右の丸 */}
  <div className="flex gap-2">
    <div className="w-2 h-2 bg-white rounded-full"></div>
    <div className="w-2 h-2 bg-white rounded-full"></div>
    <div className="w-2 h-2 bg-white rounded-full"></div>
  </div>
</div>

 <p className="text-lg mt-12 mb-2">
  これからSNSを本格的に始めたい方。<br />
  すでに投稿を頑張っているけれど、<br />
  「数字が伸びない」「次に何をすればいいか分からない」<br />
  と感じている方へ。
  <br /><br />
  Signal.は、AIと専門スタッフの力で、<br />
  御社だけのSNS戦略をゼロから一緒に設計し、<br />
  運用のお悩みを解決します。
  <br /><br />
  投稿内容の提案から週次の振り返りまで。<br />
  いつの間にか止まってしまいがちなSNSを、<br />
  継続しやすい仕組みに変えていきませんか？
  <br /><br />
  まずはお気軽にオンラインでご相談ください。<br />
  御社の状況や目標をお伺いし、<br />
  どんな形でSignal.を活用できるか、<br />
  具体的にご提案させていただきます。
</p>

    <div className="flex items-center justify-start">
 <a 
  href="/contact" 
  className="
    inline-block 
    bg-white 
    text-[#ff8a15] 
    text-sm sm:text-base 
    px-6 sm:px-8 md:px-10 
    py-3 sm:py-4 
    rounded-full 
    font-bold 
    hover:bg-gray-100 
    transition
  "
>
  相談する
</a>

</div>



    </div>


  </div>
</section>

    </div>
  );
}
