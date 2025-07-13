export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 py-16 px-6">
      <h1 className="text-3xl font-bold text-[#ff8a15] mb-8 text-center">
        営業からご案内を受けたお客様へ
      </h1>

   <p className="text-gray-700 leading-relaxed mb-6">
  この度は、私たちからのメールやお電話にお時間をいただきありがとうございます。
  <br /><br />
  <span>
    Signal<span className="text-[#ff8a15]">.</span>
  </span>は、AIとSNS運用の専門スタッフがダブルで支えることで、
  「いつか伸びるだろう」とただ続けるSNSから、
  やるべきことが明確になるSNS運用へと変えていくツールです。
  <br /><br />
  SNSは、続ける中で思うように成果が見えず、
  気づけば手が止まってしまう方も少なくありません。
  <br /><br />
  どこを改善し、何に注力すればいいのか。
  その道筋がはっきりすれば、無理なく続けられ、
  ビジネスにしっかり繋がるSNSを作ることができます。
  <br /><br />
  今回、SNS運用に取り組む皆様のお役に立ちたくご連絡を差し上げました。
</p>

      <div className="my-12 bg-gray-50 p-8 rounded-xl shadow-inner">
       <h2 className="text-2xl font-bold mb-4">
  Signal<span className="text-[#ff8a15]">.</span>について
</h2>
        <p className="text-gray-700 mb-4">
         <span>
    Signal<span className="text-[#ff8a15]">.</span>
  </span>はSNS運用をAIで効率化する逆算型PDCAツールです。
          SNS運用にかかる約90%削減しつつ、
          しっかり目標達成に繋げる、新感覚の課題解決ツールになります。
          <br /><br />
          ただSNS運用で一番大切なのは、
          <strong>「本気でSNSを頑張りたい」という気持ち</strong>です。
        </p>
        <p className="text-gray-700">
          業種や目的によって、SNSでのPDCAやカスタマージャーニーは全く異なります。
          <br /><br />
          だからこそ、私たちはカスタマイズ型ツールでオンリーワンの
          <strong> <span>
    Signal<span className="text-[#ff8a15]">.</span>
  </span></strong>を開発し、
          AIと人的サポートのW体制で、
          日々のSNS運用を支えたいと思っています。
          <br /><br />
        まずはSNS無料診断やお問い合わせを通して、
        現状のお悩みを解決するヒントを見つけていただければ幸いです。
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
