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
  </span>は、AIとSNS運用の専門スタッフのWサポートで
「いつか伸びるだろう」と続けるだけのSNSから、
確実にやるべきことが見えるSNS運用へ変えていくツールです。
<br /><br />
SNSは、ただ投稿を積み重ねても、多くの人が途中で手が止まり、
思うような成果が出せずに終わってしまいます。
<br /><br />
どこを改善し、何に注力すればいいのか。
その道筋がはっきりすることで、
続けやすくなり、ビジネスにきちんと繋がるSNSを作ることができます。
</p>

      <p className="text-gray-700 leading-relaxed mb-6">
       私たちは、もともと別事業でSNSを活用したビジネスをしていました。
<br /><br />
でも、投稿を重ねても思ったほど反応が伸びず、
どこをどう改善すればいいのか分からない時期が長く続きました。
<br /><br />
        ただ情報を発信するだけでなく、
        <strong>目的に合わせたSNS運用の仕組み</strong>を作ったことで、
       運用にかかる時間を大幅に減らしながら、
効率よくSNS運用を続けられるようになりました。
       <br /><br />
       こうした背景を踏まえ、SNS運用に取り組む全ての事業者様のお力になれればと思い、
       ご連絡差し上げております。
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
