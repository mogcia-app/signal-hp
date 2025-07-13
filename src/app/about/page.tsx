export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 py-16 px-6">
      <h1 className="text-3xl font-bold text-[#ff8a15] mb-8 text-center">
        営業からご案内を受けたお客様へ
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        この度は、私たちからのメールやお電話にお時間をいただきありがとうございます。
        <br /><br />
        Signal.は、AIとSNS運用の専門スタッフの知見を掛け合わせて、
        「続けるだけのSNS」から「伸びるSNS」へ変えていくことを目指したツールです。
        <br /><br />
        SNSは投稿さえすれば簡単に結果が出るものではありません。
        本気で向き合い、分析し、改善し続けることで初めて数字として現れてきます。
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        私たち自身も、もともとSNSに依存したビジネススタイルで小売業をしていました。
        <br /><br />
        「投稿さえすれば勝手にフォロワーが増えて、購入率も上がる」
        そう信じていましたが、現実は全く違いました。
        <br /><br />
        ただ情報を発信するだけでなく、
        <strong>届けたい人に届く仕組み</strong>を作ったことで、
        売上は大きく変わり、SNSに依存しなくても安定したビジネスが築けるようになりました。
       <br /><br />
       そうした背景から、SNS運用を積極的に取り組んだいらっしゃる事業者様に向けて<br />
       お力添えができる点があるのではと思い、ご連絡させていただいております。
      </p>

      <div className="my-12 bg-gray-50 p-8 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold text-[#ff8a15] mb-4">
         Signal.について
        </h2>
        <p className="text-gray-700 mb-4">
          私たちはSNS投稿にかかるリソースを約90%削減しつつ、
          しっかり結果に繋げる、新感覚の課題解決ツールをご提案しております。
          <br /><br />
          ただ最も大切なのは、
          <strong>「本気でSNSを頑張りたい」という気持ち</strong>です。
        </p>
        <p className="text-gray-700">
          業種や目的によって、SNSでのPDCAやカスタマージャーニーは全く異なります。
          実は、いろんな角度からSNS戦略を立てることが可能です。
          <br /><br />
          だからこそ、私たちはカスタマイズ型ツールでオンリーワンの
          <strong>Signal.</strong>を開発し、
          AIと人的サポートのW体制で、
          あなたの日々のSNS投稿を支えたいと思っています。
          <br /><br />
        まずはSNS無料診断やお問い合わせを通して、
        現在のお悩みを解決するヒントを見つけていただければ幸いです。
        </p>
      </div>

    <div className="text-center flex flex-col md:flex-row justify-center gap-4">
  <a
    href="/diagnosis"
    className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
  >
    無料診断を申し込む
  </a>
  <a
    href="/contact"
    className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
  >
    お問い合わせ
  </a>
</div>

    </div>
  );
}
