import Link from 'next/link'
import Header from '@/components/Header'


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
          {/* 右下固定ボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/contact">
          <button className="bg-[#ff8a15] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition transform">
            ご相談はこちら
          </button>
        </Link>
      </div>

{/* ================== SEOキーワードセクション（非表示） ================== */}
<section className="sr-only">
  SNS運用・AIマーケティングならSignal。
  Instagram、TikTok、X（旧Twitter）、YouTubeを活用し、
  KPI逆算型PDCAで集客・売上アップを実現。
  ECやギフト、高単価商品のブランド構築、
  中小企業・スタートアップのSNS戦略まで
  Signalがトータルでサポートします。
  Signal, SNS運用, Instagram, TikTok, X, Twitter, YouTube, AIマーケティング,
  SNS分析, 保存率, いいね率, KPI, PDCA, ブランディング, EC, ギフト, 小売, 高単価商品,
  スタートアップ支援, 中小企業, SNS広告, 投稿戦略, AI診断, AI分析, コンテンツマーケティング,
  フォロワー増加, 自動化, SNSコンサル, SNSデータ分析, SNS改善, SNSトレンド, mogcia, MOGCIA, MOGCIA Coffee
</section>





 {/* ================== ファーストビュー ================== */}

<section className="w-full  bg-white pt-32 pb-24">

  <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 gap-12">
    
    {/* 左テキスト */}
    <div className="flex-1 text-left">
    <p className="text-[#ff8a15] text-[15px] font-bold mb-2">日本発SNS特化AI</p>
      <h2 className="text-[32px] font-extrabold tracking-tight mb-4 text-[#000000]">
      Signal<span className="text-[#ff8a15]">.</span>で始める、新しいSNSのカタチ
      </h2>
      <p className="text-[18px] text-gray-600 mb-2">
      オリジナルAIが逆算思考で戦略を専用設計。<br />
      一貫性を持ったPDCAで、御社の強みを最大限に活かし<br />
      SNSを次の成長へつなげます。
      </p>
    <div className="flex flex-col items-start gap-4 mb-6">
  <div className="flex items-center gap-3 text-gray-600 text-sm">
    <span className="font-semibold">対応SNS:</span>
    <img src="/images/2.svg" alt="Instagram" className="w-16 h-16" />
    <img src="/images/3.svg" alt="X" className="w-16 h-16" />
    <img src="/images/1.svg" alt="TikTok" className="w-16 h-16" />
    <img src="/images/4.svg" alt="YouTube" className="w-16 h-16" />
  </div>

   <a
   href="/contact"
           className="inline-block bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
        >
          お問い合わせはコチラ
        </a>
</div>

    </div>

    {/* 右イメージ */}
    <div className="flex-1 flex justify-center relative">
      <img
  src="/images/monitor.png"
  alt="Dashboard"
  className="w-full max-w-xl rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform rotate-1"
/>
      <img
        src="/images/001.svg"
        alt="AIイラスト"
        className="absolute bottom-[-20px] right-[20px] w-[40%] translate-x-1/4 translate-y-1/4"
      />
    </div>

  </div>
</section>

<div className="w-full border-t border-[#ff8a15]/30 my-4"></div>

<section className="mt-4 mb-4 text-center">
  <p className="text-gray-600 mb-3 text-sm">
    Signal.ができた背景やサービスへの想いをまとめました。
  </p>
  <a
    href="/about"
    className="inline-block bg-[#ff8a15] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition"
  >
  営業からご案内を受けたお客様へ
  </a>
</section>


{/* ================== こんなお悩みありませんか？ ================== */}
<section className="bg-gray-50 py-20 px-4">
  <div className="max-w-6xl mx-auto text-center"></div>
   <h2 className="text-3xl font-bold mb-2 text-center">
  こんなお悩みありませんか？
</h2>

<div className="relative mb-20">
   <div className="w-[400px] h-[0.5px] bg-[#ff8a15] mx-auto"></div>
  <div className="w-[400px] h-[0.5px] bg-[#ff8a15] mx-auto mt-1"></div>
  <div className="absolute top-[9px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  w-0 h-0 border-l-8 border-r-8 border-t-8 
                  border-l-transparent border-r-transparent border-t-[#ff8a15]">
  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
    {/* 1 */}
    <div className="relative bg-white p-8 pt-20 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition">
      <div className="absolute -top-10 left-1">
        <img src="/images/flag.svg" alt="投稿が伸びない" className="w-35 h-35" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-[#ff8a15] mt-4">投稿が伸びない</h3>
      <p className="text-gray-600 text-sm">
        投稿しても「いいね」や保存が伸びず、どんな内容が刺さるのか分からない。
      </p>
    </div>

    {/* 2 */}
    <div className="relative bg-white p-8 pt-20 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition">
      <div className="absolute -top-4 left-4">
        <img src="/images/chart.svg" alt="売上に繋がらない" className="w-26 h-26" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-[#ff8a15] mt-4">売上に繋がらない</h3>
      <p className="text-gray-600 text-sm">
        フォロワーは増えたが、売上や問い合わせに繋がらない。
      </p>
    </div>

    {/* 3 */}
    <div className="relative bg-white p-8 pt-20 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition">
      <div className="absolute -top-4 left-4">
        <img src="/images/003.svg" alt="SNS担当がいない" className="w-24 h-24" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-[#ff8a15] mt-4">SNSノウハウ・担当がいない</h3>
      <p className="text-gray-600 text-sm">
        社内にSNS運用のノウハウを持つ人材がおらず、採用にもコストがかかってしまう。
      </p>
    </div>

    {/* 4 */}
    <div className="relative bg-white p-8 pt-20 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition">
      <div className="absolute -top-1 left-1">
        <img src="/images/ai.svg" alt="AIを使っても成果が出ない" className="w-20 h-20" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-[#ff8a15] mt-4">AIを使っても成果が出ない</h3>
      <p className="text-gray-600 text-sm">
        話題のAIツールを取り入れても運用にうまく活かせず成果が出ない。
      </p>
    </div>

    {/* 5 */}
    <div className="relative bg-white p-8 pt-20 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition">
      <div className="absolute -top-4 left-4">
        <img src="/images/9780.svg" alt="強みが伝わらない" className="w-24 h-24" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-[#ff8a15] mt-4">強みが伝わらない</h3>
      <p className="text-gray-600 text-sm">
        せっかくの商品やサービスの魅力が、SNSでうまく差別化されず顧客に届かない。
      </p>
    </div>

    {/* 6 */}
    <div className="relative bg-white p-8 pt-20 rounded-2xl shadow hover:-translate-y-1 hover:shadow-lg transition">
      <div className="absolute -top-4 left-4">
        <img src="/images/004.svg" alt="運用に手が回らない" className="w-24 h-24" />
      </div>
      <h3 className="font-bold text-lg mb-2 text-[#ff8a15] mt-4">運用に手が回らない</h3>
      <p className="text-gray-600 text-sm">
        SNSを改善したくても、日々の業務に追われて何からどう手をつければいいのか分からない。
      </p>
    </div>
  </div>
</section>

<div className="w-full border-t border-[#ff8a15]/30 my-4"></div>


{/* ================== 解決宣言ブロック ================== */}
<section className="py-16">
  {/* 吹き出し */}
<div className="flex justify-center mb-6">
  <div className="relative inline-block">
    <span className="bg-[#ff8a15] text-white text-base sm:text-lg md:text-xl font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg">
      SNS運用で悩んでいるあなたへ
    </span>
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0 
                    border-x-8 border-x-transparent border-t-8 border-t-[#ff8a15]">
    </div>
  </div>
</div>


  {/* 見出し */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold text-center mb-12">
  その悩み、<span className="text-[#ff8a15]">Signal.</span>で解決できます
</h2>

<div className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
  <p>SNSで頑張っても「なぜ伸びないのか」がわからない…</p>
  <p>Signal. は、御社の強みを言語化し、逆算思考で成果につながる投稿設計へ。</p>
  <p>伸びない原因をAIとデータ戦略で根本から変え、持続的なSNS投稿を実現します。</p>
</div>



</section>
<div className="w-full border-t border-[#ff8a15]/30 my-4"></div>

<section className="pt-12 pb-6 bg-[#ff8a15]/5">
  {/* 3つ仕組み見出し */}
  <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
  <div className="flex gap-2">
    <div className="w-3 h-3 bg-[#ff8a15] rounded-full"></div>
    <div className="w-3 h-3 bg-[#ff8a15] rounded-full"></div>
    <div className="w-3 h-3 bg-[#ff8a15] rounded-full"></div>
  </div>
  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
    Signal<span className="text-[#ff8a15]">.</span> だから実現できる 
    <span className="text-[#ff8a15] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">３つ</span>
    の仕組み
  </h3>
  <div className="flex gap-2">
    <div className="w-3 h-3 bg-[#ff8a15] rounded-full"></div>
    <div className="w-3 h-3 bg-[#ff8a15] rounded-full"></div>
    <div className="w-3 h-3 bg-[#ff8a15] rounded-full"></div>
  </div>
</div>

<p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-loose text-base sm:text-lg md:text-xl">
  これからのSNS運用は、ただ投稿するだけでは戦えません。<br/>
  AI × データ戦略で、SNSを一歩先へ。
</p>


   {/* 上の3枚（ツールでできること） */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
    {/* 1 */}
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <img src="/images/ai-card1.svg" alt="AI強み診断" className="w-52 h-52 mx-auto mb-4" />
      <h3 className="font-bold text-lg mb-3 text-[#ff8a15]">目標から逆算、AIが導く成果への最短ルート</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        運用目標から逆算し、AIが達成までの
        戦略を提案。<br />
投稿文の作成から分析まで、一貫してAIがサポートするので、
目標がブレることなく、自然にPDCAが回るSNS運用を実現で
きます。
      </p>
    </div>
    {/* 2 */}
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <img src="/images/ai-card2.svg" alt="KPI逆算プラン" className="w-52 h-52 mx-auto mb-4" />
      <h3 className="font-bold text-lg mb-3 text-[#ff8a15]">御社の目的に合わせたカスタマイズ</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        必要なページ・不要な項目を選定し、御社のSNS戦略にぴったり合う
ツールを構築することで<br />
複雑な分析や運用がラクになり、
「これなら続けられる」と感じてもらえるツール仕組みになります。
      </p>
    </div>
    {/* 3 */}
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <img src="/images/ai-card3.svg" alt="カルテ" className="w-52 h-52 mx-auto mb-4" />
      <h3 className="font-bold text-lg mb-3 text-[#ff8a15]">SNS運用をデータ資産に変えるカルテ</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        診断や投稿計画をカルテに蓄積し、
        専用AIが学習を重ねることで<br />
        提案精度が進化し続けます。
      </p>
    </div>
  </div>
</section>

<section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold mb-2">こんな企業様にオススメです</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "購入に繋げたい",
        text: "SNSのフォロワーは増えたけど、肝心の購入に繋がっていない…。ECへの導線を強化したい方に。"
      },
      {
        title: "世界観を伝えたい",
        text: "高単価商品やギフト商材を扱っていて、SNSでもブランドの世界観をしっかり打ち出したい方に。"
      },
      {
        title: "戦略的に運用したい",
        text: "投稿をただ続けるだけじゃなく、PDCAを回して数値を改善し、継続的にSNSを強化していきたい方に。"
      },
      {
        title: "採用を強化したい",
        text: "SNSで職場の雰囲気や社員のリアルな声を発信し、求人媒体だけでは出会えない人材にアプローチ。"
      },
      {
        title: "SNSを始めたい",
        text: "何から投稿すれば良いかわからない方へ。AIが業界・目的に合わせて投稿戦略を専用設計。初めてでも安心。"
      },
      {
        title: "新ブランドや新店舗の立ち上げ",
        text: "初期段階からAIが購買心理や市場データをもとに戦略を設計。ブレずにSNSで認知を広げ、スタートダッシュを支援。"
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-white p-8 rounded-2xl border border-[#ff8a15] hover:-translate-y-1 transition flex flex-col"
      >
        <h3 className="font-bold text-lg mb-2 text-[#ff8a15]">{item.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{item.text}</p>
      </div>
    ))}
  </div>
</section>

{/* ================== 数字で見るSignal. ================== */}
<div className="w-full border-t border-[#ff8a15]/80 my-4"></div>
<section className="py-16 bg-[#ff8a15]/4">
  <div className="max-w-6xl mx-auto text-center px-4">
 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 text-[#000000]">
  数字で見る<span className="text-[#000000]">Signal</span><span className="text-[#ff8a15]">.</span>
</h2>

  <p className="text-gray-600 text-base mt-6 mb-12">
   数字を通して、Signal.がどのように
   SNS運用を支えているかわかりやすくまとめました。
  </p>

    <div className="grid gap-12 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-bold text-[#000000] mb-3">1投稿あたりのSNS運用時間</h3>
       <div className="font-extrabold tracking-tight mb-4 inline-block">
       <span className="text-[#ff8a15] text-[56px]">5</span>
       <span className="text-black text-[22px] ml-2">分</span>
       </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          AIが次に投稿すべきテーマを自動で提案。<br />
          
          もう迷わず、計画的にSNSを運用できます。
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#000000] mb-3">SNSの投稿ネタ切れ</h3>
        <div className="font-extrabold tracking-tight mb-4 inline-block">
       <span className="text-[#ff8a15] text-[56px]">0</span>
       </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          AIがSNSデータやターゲットに合わせた、<br />
         投稿提案で、「ネタ探し」に悩むことはありません。
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#000000] mb-3">撮影準備を</h3>
        <div className="font-extrabold tracking-tight mb-4 inline-block">
       <span className="text-[#ff8a15] text-[56px]">4</span>
       <span className="text-black text-[22px] ml-2">時間短縮</span>
       </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          AIが投稿文に沿った<br />
          サムネイル画像や絵コンテを作成。<br />
          どんなシーンで何を撮影するか<br />
          悩む時間がなくなり、
          スムーズに撮影可能です。
        </p>
      </div>
    </div>

    <div className="grid gap-12 md:grid-cols-2 mt-12">
      <div>
        <h3 className="text-lg font-bold text-[#000000] mb-3">AIが自動分析する項目は</h3>
        <div className="font-extrabold tracking-tight mb-4 inline-block">
       <span className="text-[#ff8a15] text-[56px]">30</span>
       <span className="text-black text-[22px] ml-2">項目以上</span>
       </div>
      <p className="text-gray-700 text-sm leading-relaxed mt-3">
    投稿結果を入力するだけで、AIが30項目以上のデータをチェック。<br />
     計画に基づいて次にすべき施策を提案するので<br />
     投稿の方向性がブレず<br />
     自信を持ってSNS運用を続けられます。
     </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#000000] mb-3">SNS運用の</h3>
       <div className="font-extrabold tracking-tight mb-4 inline-block">
       <span className="text-[#ff8a15] text-[56px]">90%</span>
       <span className="text-black text-[22px] ml-2">自動化</span>
       </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          SNS運用の約90%はAIが自動化し、人的リソースや固定費を大幅に最適化。<br />
          残りの10%は経営判断やブランド戦略に基づく調整領域。<br />
          全てをAIに任せず、御社独自の戦略資産として<br />
          SNS運用を構築できるのがSignal.の強みです。
        </p>
      </div>
    </div>
  </div>
</section>
<div className="w-full border-t border-[#ff8a15]/80 my-4"></div>



{/* ================== 提供できる価値 ================== */}
<section className="max-w-6xl mx-auto py-8 px-4">
  <h2 className="text-3xl font-bold text-center mb-12">
  Signal<span className="text-[#ff8a15]">.</span>が提供できる価値
</h2>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 <div className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">
  <h3 className="font-bold text-lg mb-2">
    <span className="text-black">投稿目的に合わせた</span>
    <span className="text-[#ff8a15]">ネタを提案</span>
  </h3>
  <p className="text-gray-600 text-sm mt-4 mb-0">
  AIがあなたのKPI計画を元に戦略を設計。<br />
  目的に沿った具体的な次の投稿が見えるから、<br />
  効率よいSNS運用が可能です。<br />
</p>

  <p className="text-xs font-semibold text-[#000000] uppercase tracking-wide mt-10 mb-1">
  価値キーワード
  </p>
  <div className="flex gap-1 flex-wrap mt-6 mb-0">
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">AI提案</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">構成アドバイス</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">目的別最適化</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">SNSに特化したAI</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">データ活用</span>
  </div>
</div>


    <div className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">
 
      <h3 className="font-bold text-lg mb-2">
  <span className="text-black">KPIから</span>
  <span className="text-[#ff8a15]">逆算した</span>
  <span className="text-black">SNS計画</span>
</h3>
<p className="text-gray-600 text-sm mb-4">
  投稿目標を設定するだけで、<br />
  AIが逆算して最適な投稿頻度やテーマを<br />
  自動で設計。<br />
  目標達成に直結するSNS運用を実現します。
</p>
  <p className="text-xs font-semibold text-[#000000] uppercase mt-6 mb-3">
  価値キーワード
</p>
 <div className="flex gap-1 flex-wrap mt-6 mb-0">
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">成果に直結</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">目標設定</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">AI自動設計</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">効率化</span>
   <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">PDCA強化</span>
</div>
    </div>

    <div className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">

       <h3 className="font-bold text-lg mb-2">
  <span className="text-[#ff8a15]">ノウハウ不要</span>
  <span className="text-black">でSNS運用が可能</span>
</h3>
      <p className="text-gray-600 text-sm mb-4">
  投稿ネタもハッシュタグもAIが提案してくれるので、<br />
  専門スタッフを雇うより低コストで、<br />
  高水準のSNS運用が始められます。
</p>
 <p className="text-xs font-semibold text-[#000000] uppercase mt-6 mb-3">
  価値キーワード
</p>
      <div className="flex gap-2 flex-wrap  mt-6 mb-3">
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">プロ戦略</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">ミス削減</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">人件費削減</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">コスト最適化</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">戦略的SNS</span>
</div>
    </div>

   
    <div className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">
  
        <h3 className="font-bold text-lg mb-2">
  <span className="text-[#ff8a15]">SNSに特化したAI</span>
  <span className="text-black">で最適化</span>
</h3>
      <p className="text-gray-600 text-sm mb-4">
  Signal.はInstagramやXなど、それぞれのSNS専用AIを搭載。<br />
  汎用AIでは難しい投稿の一貫性を維持しながら、<br />
  目的に合わせて次の投稿戦略を自動提案。<br />
</p>
 <p className="text-xs font-semibold text-[#000000] uppercase mt-8 mb-3">
  価値キーワード
</p>
       <div className="flex gap-2 flex-wrap mt-6 mb-0">
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">SNS専用AI</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">一貫性維持</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">世界観強化</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">自動提案</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">ブランド構築</span>
</div>
    </div>

   
    <div className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">

       <h3 className="font-bold text-lg mb-2">
        <span className="text-black">万全な</span>
  <span className="text-[#ff8a15]">サポート</span>
  <span className="text-black">体制</span>
</h3>
      <p className="text-gray-600 text-sm mb-4">
  投稿戦略はAIに任せつつ、<br />
  専門スタッフが定期的なミーティングで<br />
  成果をチェック。<br />
  ツールの使い方やSNSの運用方法も<br />
 手厚くサポートし、スムーズに運用できます。
</p>
 <p className="text-xs font-semibold text-[#000000] uppercase mt-8 mb-3">
  価値キーワード
</p>   
  <div className="flex gap-2 flex-wrap mt-6 mb-0">
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">定期ミーティング</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">使い方支援</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">完全サポート</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">長期支援</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">ハイブリッド運用</span>
</div>
    </div>

    
    <div className="relative border border-[#ff8a15] rounded-xl p-6 hover:shadow-lg transition">

      <h3 className="font-bold text-lg mb-2">
        <span className="text-black">御社専用ツールに</span>
  <span className="text-[#ff8a15]">カスタマイズ</span>
</h3>
<p className="text-gray-600 text-sm mb-4">
  SNSの活用目的や業種特性に合わせて、<br />
  オリジナルAIごとカスタマイズ。<br />
  自社の強みを最大限に活かせる仕組みを<br />
  構築し、<br />
   一過性ではない再現可能な成果を生み出します。<br />
</p>

      <p className="text-xs font-semibold text-[#000000] uppercase mt-8 mb-3">
  価値キーワード
</p>   
  <div className="flex gap-2 flex-wrap  mt-6 mb-0">
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">オーダーメイド戦略</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">再現性高</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">強み解析</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">事業特化</span>
  <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">差別化</span>
</div>

    </div>

  </div>
</section>
<div className="w-full border-t border-[#ff8a15]/80 my-4"></div>
 {/* ================== 導入ステップ詳細 ================== */}
        <section className="py-8 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#000000]">導入フロー</h2>
          <p className="text-gray-600">
            Signal.はヒアリングからツール完成まで最短約1ヶ月でご利用開始可能です。
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
</section>
<div className="w-full border-t border-[#ff8a15]/80 my-4"></div>
{/* ================== 料金 ================== */}
<section className="py-8 bg-white">
  <div className="max-w-6xl mx-auto  px-4 text-center">
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

<div className="w-full border-t border-[#ff8a15]/80 my-4"></div>
<section className="w-full py-8 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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

{/* ================== Signalなら全部解決 ================== */}

{/* ================== よくある質問 ================== */}
 
{/* ================== 導入するとどう変わる？ ================== */}

{/* ================== CTA ================== */}


     
    </div>
  )
}
