export default function PageName() {
  return (
    <div className="w-full">
      {/* ================== メインビュー ================== */}
   <div className="w-full py-20 px-6 bg-gradient-to-r from-[#fff7ed] to-[#ffb76f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-12">
  <div>
    <h1 className="text-3xl font-bold mb-8">
      導入までの流れ
    </h1>
    <p className="text-gray-700 mb-8">
      ツールの導入から運用まで、専任スタッフが伴走。
      <br />AIを活用したSNS戦略を御社に最適化します。
      <br />御社のSNS運用に合わせて柔軟にカスタマイズ可能です。
      <br />まずはお気軽にご相談ください。
    </p>
    <a
      href="/contact"
      className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
    >
      無料相談してみる
    </a>
  </div>

  <div className="w-full ">
    <img
      src="/images/000.svg"
      alt="導入イメージ"
      className="w-[500px] max-w-md h-auto rounded-lg"
    />
  </div>
</div>
</div>


      {/* ================== 導入までの流れ（カード） ================== */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
         
          <p className="text-gray-600">
            Signal.はヒアリングからツール完成まで約1ヶ月でご利用開始可能です。
            <br />専任スタッフが設計から運用までしっかり伴走いたします。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5 px-6">
          {[
            { step: "01", title: "お問い合わせ", desc: "フォームからお気軽に。翌営業日にご連絡します。" },
            { step: "02", title: "ヒアリング", desc: "運用状況を詳しくヒアリング。" },
            { step: "03", title: "カスタマイズ", desc: "御社SNSに合わせツールを専用設計。" },
            { step: "04", title: "導入開始", desc: "計画設定・操作レクチャーでスムーズに。" },
            { step: "05", title: "運用サポート", desc: "改善レポート・次のアクションも継続提案。" },
          ].map((item, idx) => (
            <div key={idx} className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">
              <div className="absolute -top-4 left-4 bg-white px-3 py-1 rounded-full border border-[#ff8a15] text-[#ff8a15] font-bold shadow">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-[#ff8a15] mb-2 mt-4">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ================== 導入ステップ詳細 ================== */}
        <div className="space-y-12 mt-12 max-w-5xl mx-auto px-6">
          {[
            {
              num: "1",
              title: "お問い合わせ",
              text: "まずはフォームまたはお電話からご連絡ください。専任スタッフが迅速にご対応し、オンラインミーティングの日程をご提案します。"
            },
            {
              num: "2",
              title: "ヒアリング・現状分析",
              text: "約60分のオンライン面談にて、現在のSNS運用状況や課題、今後の目標について詳しくお伺いします。その上で、最適な戦略設計の方向性を一緒に検討します。"
            },
            {
              num: "3",
              title: "ご契約",
              text: "ご予算やSNSの運用規模に合わせ、最適なプランをご提案。内容にご納得いただいた上で正式にご契約いただきます。"
            },
            {
              num: "4",
              title: "AIカスタマイズ・設計",
              text: "ヒアリング内容をもとに、御社専用にAIをチューニング。必要に応じてヒアリングページや管理画面をカスタマイズし、最適な運用環境を整備します。"
            },
            {
              num: "5",
              title: "初期設定・操作レクチャー",
              text: "御社データを設定した後、管理画面の使い方やPDCAサイクルの進め方を丁寧にレクチャーいたします。"
            },
            {
              num: "6",
              title: "運用開始 & 伴走サポート",
              text: "運用を開始後も、月次ミーティングやチャットで改善提案を継続。専任スタッフが伴走しながらSNS運用の成果を最大化します。"
            },
            {
              num: "7",
              title: "いつでも相談できる体制",
              text: "ご契約後は専用のグループチャットへご招待。気になることがあればいつでもご質問ください。スピーディにサポートいたします。"
            },
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#ff8a15] text-[#ff8a15] flex items-center justify-center text-xl font-bold">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#ff8a15]">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== 無料トライアルセクション ================== */}

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
