export default function FaqPage() {
  return (
    <div className="w-full">

      {/* メインビュー */}
     <section className="w-full bg-[#fff3ea] py-30 px-6">
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
        className="w-[400px] max-w-full h-auto"
      />
    </div>
  </div>
</section>


      {/* よくある質問 */}
      <section className="max-w-7xl mx-auto py-18 px-6">
        <div className="space-y-6">
          {[
            {
              q: "最低契約期間はどのくらいですか？",
              a: "基本的に1年間のご契約をお願いしております。SNSでしっかり成果を出すために、まずは1年間の伴走をおすすめしています。"
            },
            {
              q: "導入までどのくらいの期間がかかりますか？",
              a: "ヒアリングからAIカスタマイズまで含めて約1ヶ月程度で運用開始が可能です。"
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
              q: "ツールを自社専用にカスタマイズできますか？",
              a: "可能です。投稿戦略・KPI・UIなど、ご要望に応じてオリジナルAIや画面を設計できます。"
            },
            {
              q: "無料トライアルは本当に無料ですか？",
              a: "はい。トライアルでは一時的なSNS特化AIをご提供し、費用は一切発生しません。気に入っていただけた場合のみ継続ください。"
            },
             {
    q: "運用開始後のサポート内容は？",
    a: "月次の改善ミーティングやチャットサポートを通じて、運用が安定するまでしっかり伴走します。"
  },
  {
    q: "どのSNSに対応していますか？",
    a: "Instagram、X（旧Twitter）、TikTok、YouTubeに対応。複数SNSの統合管理が可能です。"
  },
  {
    q: "AIが具体的に何をしてくれるのですか？",
    a: "1つ1つの投稿分析はもちろん、投稿戦略やSNSでの強みを診断。PDCAを自動で回して次の一手を提案します。"
  },
  {
    q: "投稿作成や画像もAIがやってくれるの？",
    a: "AIから投稿文ハッシュタグはもちろん、投稿内容に最適なサムネイル画像の提案しますが撮影などは御社にてお願いしております。"
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
            <details 
              key={idx} 
              className="p-6 border rounded-xl cursor-pointer hover:shadow transition"
            >
              <summary className="text-lg font-bold text-[#ff8a15]">
                {item.q}
              </summary>
              <p className="mt-4 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}
