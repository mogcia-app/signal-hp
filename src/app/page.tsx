import Link from 'next/link'
import Header from '@/components/Header'


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
          {/* 右下固定ボタン */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link href="/contact">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
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
<section className="relative w-full bg-gray-50 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
  
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
      
      {/* 左テキスト */}
      <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
        {/* バッジ */}
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4 border border-gray-200">
          <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
          SNS運用90%自動化
        </div>
        
        {/* メインタイトル */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          SNS運用の90%を
          <span className="block">AIが自動化<span className="text-[#ff8a15]">.</span></span>
        </h2>
        
        {/* 説明文 */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-none">
          Instagram、YouTube、X、TikTokの4つのSNSをAIが一括管理。
          無料診断で御社に最適な運用プランをご提案。
        </p>
        
        {/* 特徴ポイント */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">4つのSNS対応</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">SNS担当者の人材確保不要</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">無料診断実施中</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-600">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">作業効率化</span>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 text-center"
          >
            お問い合わせはコチラ
          </a>
          <a
            href="/diagnosis"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 border border-gray-300 hover:border-gray-400 transition-colors duration-200 text-center"
          >
            無料診断を受ける
          </a>
        </div>
      </div>

      {/* 右側：ツール画面プレビューセクション */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-full max-w-lg lg:max-w-xl">
          {/* メイン画面のみ表示 */}
          <div className="flex justify-center">
            <img
              src="/images/monitor.png"
              alt="Signal. ダッシュボード"
              className="w-full h-auto max-w-sm lg:max-w-md rounded-xl shadow-2xl border-4 border-white"
            />
          </div>

          {/* ツールの特徴説明 */}
          <div className="mt-8 space-y-3">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">本格的なSNS運用ツール</h3>
              <p className="text-sm text-gray-600">ダッシュボード、投稿管理、分析レポート</p>
            </div>
            
            {/* 機能アイコン */}
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-500 rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">分析</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-500 rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">投稿</span>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-500 rounded-lg mx-auto mb-1 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">管理</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="w-full border-t border-gray-200 my-4"></div>

{/* <section className="mt-4 mb-4 text-center">
  <p className="text-gray-600 mb-3 text-sm">
    Signal.ができた背景やサービスへの想いをまとめました。
  </p>
  <a
    href="/about"
    className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
  >
  営業からご案内を受けたお客様へ
  </a>
</section> */}


{/* ================== こんなお悩みありませんか？ ================== */}
<section className="py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        こんなお悩みありませんか？
      </h2>
      
      {/* シンプルな下線 */}
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-12"></div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* 1 */}
      <div className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/flag.svg" alt="投稿が伸びない" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">投稿が伸びない</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          投稿しても「いいね」や保存が伸びず、どんな内容が刺さるのか分からない。
        </p>
      </div>

      {/* 2 */}
      <div className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/chart.svg" alt="売上に繋がらない" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">売上に繋がらない</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          フォロワーは増えたが、売上や問い合わせに繋がらない。
        </p>
      </div>

      {/* 3 */}
      <div className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/003.svg" alt="SNS担当がいない" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">SNSノウハウ・担当がいない</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          社内にSNS運用のノウハウを持つ人材がおらず、採用にもコストがかかってしまう。
        </p>
      </div>

      {/* 4 */}
      <div className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/ai.svg" alt="AIを使っても成果が出ない" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">AIを使っても成果が出ない</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          話題のAIツールを取り入れても運用にうまく活かせず成果が出ない。
        </p>
      </div>

      {/* 5 */}
      <div className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/9780.svg" alt="強みが伝わらない" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">強みが伝わらない</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          せっかくの商品やサービスの魅力が、SNSでうまく差別化されず顧客に届かない。
        </p>
      </div>

      {/* 6 */}
      <div className="group relative bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/004.svg" alt="運用に手が回らない" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">運用に手が回らない</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          SNSを改善したくても、日々の業務に追われて何からどう手をつければいいのか分からない。
        </p>
      </div>
    </div>
  </div>
</section>

<div className="w-full border-t border-gray-200 my-4"></div>


{/* ================== 解決宣言ブロック ================== */}
<section className="py-20 px-4 sm:px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* シンプルなバッジ */}
    <div className="inline-block bg-gray-900 text-white text-sm font-semibold py-2 px-6 rounded-full mb-8">
      SNS運用で悩んでいるあなたへ
    </div>

    {/* 見出し */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
      その悩み、<span>Signal<span className="text-[#ff8a15]">.</span></span>で解決できます
    </h2>

    <div className="text-center text-gray-600 max-w-3xl mx-auto space-y-4 text-base sm:text-lg leading-relaxed">
      <p className="text-lg sm:text-xl">SNSで頑張っても「なぜ伸びないのか」がわからない…</p>
      <p>Signal. は、御社の強みを言語化し、逆算思考で成果につながる投稿設計へ。</p>
      <p>伸びない原因をAIとデータ戦略で根本から変え、持続的なSNS投稿を実現します。</p>
    </div>
  </div>
</section>
<div className="w-full border-t border-gray-200 my-4"></div>

<section className="py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* 3つ仕組み見出し */}
    <div className="text-center mb-16">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
        Signal<span className="text-[#ff8a15]">.</span> だから実現できる 
        <span className="text-[#ff8a15] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">３つ</span>
        の仕組み
      </h3>

      <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg md:text-xl">
        これからのSNS運用は、ただ投稿するだけでは戦えません。<br/>
        AI × データ戦略で、SNSを一歩先へ。
      </p>
    </div>

    {/* 上の3枚（ツールでできること） */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {/* 1 */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/ai-card1.svg" alt="AI強み診断" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">目標から逆算、AIが導く成果への最短ルート</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          運用目標から逆算し、AIが達成までの戦略を提案。
          投稿文の作成から分析まで、一貫してAIがサポートするので、
          目標がブレることなく、自然にPDCAが回るSNS運用を実現できます。
        </p>
      </div>
      
      {/* 2 */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/ai-card2.svg" alt="KPI逆算プラン" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">御社の目的に合わせたカスタマイズ</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          必要なページ・不要な項目を選定し、御社のSNS戦略にぴったり合う
          ツールを構築することで複雑な分析や運用がラクになり、
          「これなら続けられる」と感じてもらえるツール仕組みになります。
        </p>
      </div>
      
      {/* 3 */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <img src="/images/ai-card3.svg" alt="カルテ" className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">SNS運用をデータ資産に変えるカルテ</h3>
        <p className="text-gray-600 text-sm leading-relaxed text-center">
          診断や投稿計画をカルテに蓄積し、
          専用AIが学習を重ねることで提案精度が進化し続けます。
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-4 sm:px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">こんな企業様にオススメです</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        様々な業界・目的に合わせて、Signal.が最適なソリューションを提供します
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {[
        {
          title: "購入に繋げたい",
          text: "SNSのフォロワーは増えたけど、肝心の購入に繋がっていない…。ECへの導線を強化したい方に。",
          icon: "🛒"
        },
        {
          title: "世界観を伝えたい",
          text: "高単価商品やギフト商材を扱っていて、SNSでもブランドの世界観をしっかり打ち出したい方に。",
          icon: "✨"
        },
        {
          title: "戦略的に運用したい",
          text: "投稿をただ続けるだけじゃなく、PDCAを回して数値を改善し、継続的にSNSを強化していきたい方に。",
          icon: "📊"
        },
        {
          title: "採用を強化したい",
          text: "SNSで職場の雰囲気や社員のリアルな声を発信し、求人媒体だけでは出会えない人材にアプローチ。",
          icon: "👥"
        },
        {
          title: "SNSを始めたい",
          text: "何から投稿すれば良いかわからない方へ。AIが業界・目的に合わせて投稿戦略を専用設計。初めてでも安心。",
          icon: "🚀"
        },
        {
          title: "新ブランドや新店舗の立ち上げ",
          text: "初期段階からAIが購買心理や市場データをもとに戦略を設計。ブレずにSNSで認知を広げ、スタートダッシュを支援。",
          icon: "🏪"
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 shadow-sm hover:shadow-md flex flex-col"
        >
          <div className="text-3xl mb-4 text-center">
            {item.icon}
          </div>
          <h3 className="font-bold text-lg mb-3 text-gray-900 text-center">{item.title}</h3>
          <p className="text-gray-600 text-sm flex-grow text-center leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================== 数字で見るSignal. ================== */}
<div className="w-full border-t border-gray-200 my-4"></div>
<section className="py-20 px-4 sm:px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
      数字で見る<span className="text-gray-900">Signal</span><span className="text-[#ff8a15]">.</span>
    </h2>

    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
      数字を通して、Signal.がどのようにSNS運用を支えているかわかりやすくまとめました。
    </p>

    <div className="grid gap-8 lg:gap-12 md:grid-cols-3 mb-16">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">1投稿あたりのSNS運用時間</h3>
        <div className="font-extrabold tracking-tight mb-6">
          <span className="text-[#ff8a15] text-4xl sm:text-5xl lg:text-6xl">5</span>
          <span className="text-gray-900 text-xl sm:text-2xl ml-2">分</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          AIが次に投稿すべきテーマを自動で提案。
          もう迷わず、計画的にSNSを運用できます。
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">SNSの投稿ネタ切れ</h3>
        <div className="font-extrabold tracking-tight mb-6">
          <span className="text-[#ff8a15] text-4xl sm:text-5xl lg:text-6xl">0</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          AIがSNSデータやターゲットに合わせた投稿提案で、「ネタ探し」に悩むことはありません。
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">撮影準備を</h3>
        <div className="font-extrabold tracking-tight mb-6">
          <span className="text-[#ff8a15] text-4xl sm:text-5xl lg:text-6xl">4</span>
          <span className="text-gray-900 text-xl sm:text-2xl ml-2">時間短縮</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          AIが投稿文に沿ったサムネイル画像や絵コンテを作成。
          どんなシーンで何を撮影するか悩む時間がなくなり、スムーズに撮影可能です。
        </p>
      </div>
    </div>

    <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">AIが自動分析する項目は</h3>
        <div className="font-extrabold tracking-tight mb-6">
          <span className="text-[#ff8a15] text-4xl sm:text-5xl lg:text-6xl">30</span>
          <span className="text-gray-900 text-xl sm:text-2xl ml-2">項目以上</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          投稿結果を入力するだけで、AIが30項目以上のデータをチェック。
          計画に基づいて次にすべき施策を提案するので投稿の方向性がブレず自信を持ってSNS運用を続けられます。
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">SNS運用の</h3>
        <div className="font-extrabold tracking-tight mb-6">
          <span className="text-[#ff8a15] text-4xl sm:text-5xl lg:text-6xl">90%</span>
          <span className="text-gray-900 text-xl sm:text-2xl ml-2">自動化</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          SNS運用の約90%はAIが自動化し、人的リソースや固定費を大幅に最適化。
          残りの10%は経営判断やブランド戦略に基づく調整領域。
          全てをAIに任せず、御社独自の戦略資産としてSNS運用を構築できるのがSignal.の強みです。
        </p>
      </div>
    </div>
  </div>
</section>
<div className="w-full border-t border-gray-300 my-4"></div>



{/* ================== 提供できる価値 ================== */}
<section className="py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-16">
      Signal<span className="text-[#ff8a15]">.</span>が提供できる価値
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
  <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">
    投稿目的に合わせた<span className="text-[#ff8a15]">ネタを提案</span>
  </h3>
  <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
    AIがあなたのKPI計画を元に戦略を設計。<br />
    目的に沿った具体的な次の投稿が見えるから、<br />
    効率よいSNS運用が可能です。
  </p>

  <div className="flex gap-2 flex-wrap justify-center">
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">AI提案</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">構成アドバイス</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">目的別最適化</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">SNSに特化したAI</span>
    <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">データ活用</span>
  </div>
</div>


    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
      <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">
        KPIから<span className="text-[#ff8a15]">逆算した</span>SNS計画
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
        投稿目標を設定するだけで、<br />
        AIが逆算して最適な投稿頻度やテーマを<br />
        自動で設計。<br />
        目標達成に直結するSNS運用を実現します。
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">成果に直結</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">目標設定</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">AI自動設計</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">効率化</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">PDCA強化</span>
      </div>
    </div>

    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
       <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">
         <span className="text-[#ff8a15]">ノウハウ不要</span>でSNS運用が可能
       </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
        投稿ネタもハッシュタグもAIが提案してくれるので、<br />
        専門スタッフを雇うより低コストで、<br />
        高水準のSNS運用が始められます。
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">プロ戦略</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">ミス削減</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">人件費削減</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">コスト最適化</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">戦略的SNS</span>
      </div>
    </div>

   
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">
          <span className="text-[#ff8a15]">SNSに特化したAI</span>で最適化
        </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
        Signal.はInstagramやXなど、それぞれのSNS専用AIを搭載。<br />
        汎用AIでは難しい投稿の一貫性を維持しながら、<br />
        目的に合わせて次の投稿戦略を自動提案。
      </p>
       <div className="flex gap-2 flex-wrap justify-center">
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">SNS専用AI</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">一貫性維持</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">世界観強化</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">自動提案</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">ブランド構築</span>
      </div>
    </div>

   
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
       <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">
        万全な<span className="text-[#ff8a15]">サポート</span>体制
       </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
        投稿戦略はAIに任せつつ、<br />
        専門スタッフが定期的なミーティングで<br />
        成果をチェック。<br />
        ツールの使い方やSNSの運用方法も<br />
        手厚くサポートし、スムーズに運用できます。
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">定期ミーティング</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">使い方支援</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">完全サポート</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">長期支援</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">ハイブリッド運用</span>
      </div>
    </div>

    
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
      <h3 className="font-bold text-lg mb-4 text-gray-900 text-center">
        御社専用ツールに<span className="text-[#ff8a15]">カスタマイズ</span>
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
        SNSの活用目的や業種特性に合わせて、<br />
        オリジナルAIごとカスタマイズ。<br />
        自社の強みを最大限に活かせる仕組みを<br />
        構築し、<br />
        一過性ではない再現可能な成果を生み出します。
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">オーダーメイド戦略</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">再現性高</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">強み解析</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">事業特化</span>
        <span className="bg-[#ff8a15]/10 text-[#ff8a15] text-xs px-3 py-1 rounded-full">差別化</span>
      </div>
    </div>
    </div>
  </div>
</section>
<div className="w-full border-t border-gray-300 my-4"></div>
 {/* ================== 導入ステップ詳細 ================== */}
<section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">導入フロー</h2>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
        Signal.はヒアリングからツール完成まで最短約1ヶ月でご利用開始可能です。
        専任スタッフが設計から運用までしっかり伴走いたします。
      </p>
    </div>

    <div className="relative">
      {/* 接続線 */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 transform -translate-y-1/2 z-0"></div>
      
      <div className="grid gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
        {[
          { 
            step: "01", 
            title: "お問い合わせ", 
            desc: "フォームからお気軽に。翌営業日にご連絡します。",
            icon: "📞"
          },
          { 
            step: "02", 
            title: "ヒアリング", 
            desc: "運用状況を詳しくヒアリング。",
            icon: "💬"
          },
          { 
            step: "03", 
            title: "カスタマイズ", 
            desc: "御社SNSに合わせツールを専用設計。",
            icon: "⚙️"
          },
          { 
            step: "04", 
            title: "導入開始", 
            desc: "計画設定・操作レクチャーでスムーズに。",
            icon: "🚀"
          },
          { 
            step: "05", 
            title: "運用サポート", 
            desc: "改善レポート・次のアクションも継続提案。",
            icon: "📈"
          },
        ].map((item, idx) => (
          <div key={idx} className="group relative">
            {/* ステップ番号 */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {item.step}
              </div>
            </div>
            
            {/* カード */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-orange-300 mt-8">
              {/* アイコン */}
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              {/* タイトル */}
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 text-center">
                {item.title}
              </h3>
              
              {/* 説明 */}
              <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
<div className="w-full border-t border-gray-300 my-4"></div>
{/* ================== 料金 ================== */}
<section className="py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">料金プラン</h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
      事業規模や運用体制に合わせて最適なプランをご提案します。
    </p>

    <div className="grid gap-8 lg:gap-12 md:grid-cols-3">
      {/* カスタマイズ */}
      <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">カスタマイズ</h3>
        <p className="text-gray-600 mb-6">ご予算や目的に合わせてカスタム可能です</p>
        <div className="text-3xl font-bold text-gray-900 mb-6">月額3万円〜</div>
        <ul className="text-sm text-gray-600 mb-8 space-y-3 text-left">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            1SNSのみ契約
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            カスタマイズページ
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            オプション機能多数
          </li>
        </ul>
        <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          カスタム相談
        </button>
      </div>
    
      {/* スターター（おすすめ） */}
      <div className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border-2 border-gray-900">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-full">
          おすすめ
        </span>
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">スターター</h3>
        <p className="text-gray-600 mb-6">SNS運用を本格的に始めたい方へ</p>
        <div className="text-3xl font-bold text-gray-900 mb-6">月額6万円</div>
        <ul className="text-sm text-gray-600 mb-8 space-y-3 text-left">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            1SNSのみ契約
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            ツールの基本機能
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            専任スタッフサポート
          </li>
        </ul>
        <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          無料相談
        </button>
      </div>

      {/* ビジネス（チーム） */}
      <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200">
        <div className="w-20 h-20 bg-[#ff8a15]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12 text-[#ff8a15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">ビジネス（チーム）</h3>
        <p className="text-gray-600 mb-6">チーム利用向け</p>
        <div className="text-3xl font-bold text-gray-900 mb-6">月額12万円</div>
        <ul className="text-sm text-gray-600 mb-8 space-y-3 text-left">
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            複数メンバー管理
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            チーム別KPIレポート
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            戦略進行ミーティング
          </li>
        </ul>
        <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          詳しく相談
        </button>
      </div>
    </div>
  </div>
</section>

<div className="w-full border-t border-gray-300 my-4"></div>
<section className="w-full py-20 px-4 sm:px-6 bg-gray-900 relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center relative z-10">
    {/* メインタイトル */}
    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
      無料相談で、御社だけの<br className="hidden sm:block" />
      <span className="text-[#ff8a15]">SNS戦略</span>を見つけませんか？
    </h3>
    
    {/* サブタイトル */}
    <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
      AIと専門スタッフが、御社のSNS運用を<br className="hidden sm:block" />
      ゼロから一緒に設計し、継続しやすい仕組みに変えます
    </p>
    
    {/* 特徴ポイント */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
      <div className="flex items-center justify-center space-x-3 text-white/90">
        <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-lg font-semibold">完全無料</span>
      </div>
      <div className="flex items-center justify-center space-x-3 text-white/90">
        <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-lg font-semibold">オンライン対応</span>
      </div>
      <div className="flex items-center justify-center space-x-3 text-white/90">
        <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-lg font-semibold">翌営業日連絡</span>
      </div>
    </div>
    
    {/* メインCTAボタン */}
    <div className="mb-8">
      <a 
        href="/contact" 
        className="inline-block bg-white text-gray-900 text-xl sm:text-2xl font-bold px-12 py-5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        無料相談を始める
      </a>
    </div>
    
    {/* 補足テキスト */}
    <p className="text-white/80 text-base sm:text-lg">
      お気軽にご相談ください。御社の状況をお聞かせいただければ、<br className="hidden sm:block" />
      最適なソリューションを具体的にご提案いたします。
    </p>
  </div>
</section>

{/* ================== Signalなら全部解決 ================== */}

{/* ================== よくある質問 ================== */}
 
{/* ================== 導入するとどう変わる？ ================== */}

{/* ================== CTA ================== */}


     
    </div>
  )
}
