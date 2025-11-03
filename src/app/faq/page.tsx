export default function FaqPage() {
  return (
    <div className="w-full">

      {/* メインビュー */}
    {/* <section className="w-full bg-[#fff3ea] py-30 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-3xl font-bold mb-8">よくある質問</h1>
      <p className="text-gray-600 mb-8">
        Signal.の導入を検討いただく際によくいただくご質問をまとめました。
        <br />
        ご不明な点があれば、どんな些細なことでもお気軽にお問い合わせください。<br />
        専任スタッフが御社の状況を丁寧にヒアリングし<br />
        最適な導入方法や活用法をご提案いたします。
      </p>
      <a
        href="/contact"
        className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
      >
        無料相談してみる
      </a>
    </div>

   <div className="flex justify-center">
  <img 
    src="/images/1012.svg" 
    alt="FAQイメージ" 
    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full h-auto"
  />
</div>

  </div>
</section>*/}


      {/* よくある質問 */}
      <section className="max-w-7xl mx-auto py-18 px-6 mt-12">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            よくある質問
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Signal.の導入を検討いただく際によくいただくご質問をまとめました。<br />
            ご不明な点があれば、お気軽にお問い合わせください。
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              q: "最低契約期間はどのくらいですか？",
              a: "基本的に1年間のご契約をお願いしております。SNSでしっかり成果を出すために、まずは1年間の伴走をおすすめしています。"
            },
            {
              q: "導入までどのくらいの期間がかかりますか？",
              a: "ヒアリングからAIカスタマイズまで含めて最短で約1ヶ月程度での運用開始が可能です。"
            },
            {
              q: "途中でプラン変更はできますか？",
              a: "可能です。運用状況に応じて、上位プラン・下位プランへいつでも切り替えいただけます。"
            },
            {
              q: "SNSを途中で追加できますか？",
              a: "もちろん可能です。ツールやAIを追加SNSに合わせて再設計しますのでご安心ください。"
            },
             {
    q: "運用開始後のサポート内容は？",
    a: "月次の改善ミーティングやチャットサポートを通じて、運用が安定するまでしっかり伴走します。"
  },
  {
    q: "どのSNSに対応していますか？",
    a: "Instagram、X（旧Twitter）、TikTokに対応。複数SNSの統合管理が可能です。"
  },
  {
    q: "AIが具体的に何をしてくれるのですか？",
    a: "1つ1つの投稿分析はもちろん、投稿戦略やPDCAを自動で回して次の一手を提案します。"
  },
  {
    q: "投稿作成や画像もAIがやってくれるの？",
    a: "AIが投稿文・ハッシュタグ生成の他に投稿内容に最適な画像の提案しますが撮影などは御社にてお願いしております。"
  },
  {
    q: "他ツールとの違いは何ですか？",
    a: "御社専用にAIをカスタマイズし、課題に直結するAI分析を行います。従来のSNSツールとは一線を画す戦略特化型です。"
  },
  {
    q: "どのタイミングで費用が発生しますか？",
    a: "ツール引渡し月からスタートします。"
  }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-3 sm:gap-4 mb-4">
                <span className="text-lg sm:text-xl font-bold text-[#ff8a15] flex-shrink-0">Q</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {item.q}
                </h3>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <span className="text-base sm:text-lg font-bold text-gray-500 flex-shrink-0">A</span>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
