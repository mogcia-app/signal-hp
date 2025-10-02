import Link from 'next/link'
import Header from '@/components/Header'


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />

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
<section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
  
  {/* 高級感のある背景装飾 */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-[#ff8a15]/10 to-transparent rounded-lg filter blur-3xl"></div>
    <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-[#ff8a15]/8 to-transparent rounded-lg filter blur-3xl"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-slate-50/20"></div>
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
      
      {/* 左テキスト */}
      <div className="text-center lg:text-left space-y-6 lg:space-y-8">
        {/* 高級感のあるバッジ */}
        <div className="inline-flex items-center  px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-800 rounded-lg text-sm font-semibold mb-8 border border-slate-200/50 shadow-xl">
          <div className="w-2 h-2 bg-gradient-to-r from-[#ff8a15] to-orange-600 rounded-lg mr-3"></div>
          <span className="tracking-wide">SNS運用自動化ツール</span>
        </div>
        
        {/* 高級感のあるメインタイトル */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-slate-900 leading-tight">
          SNS運用の
          <span className="text-[#ff8a15] font-bold">90%</span>
          を AIが自動化
          
        </h2>
        
        {/* 高級感のある説明文 */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl lg:max-w-none font-light tracking-wide">
          Instagram、YouTube、X、TikTokの4つのSNSを<br />AIが一括管理。
          <br className="hidden sm:block" />
          <span className="text-slate-500">無料診断で御社に最適な運用プランをご提案。</span>
        </p>
        
        {/* 高級感のある特徴ポイント */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="flex items-center justify-center sm:justify-start space-x-4 text-slate-700 bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg border border-slate-100/50">
            <div className="w-6 h-6 bg-gradient-to-br from-[#ff8a15] to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide">4つのSNS対応</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-4 text-slate-700 bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg border border-slate-100/50">
            <div className="w-6 h-6 bg-gradient-to-br from-[#ff8a15] to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide">SNS担当者の人材確保不要</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-4 text-slate-700 bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg border border-slate-100/50">
            <div className="w-6 h-6 bg-gradient-to-br from-[#ff8a15] to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide">無料診断実施中</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start space-x-4 text-slate-700 bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-lg border border-slate-100/50">
            <div className="w-6 h-6 bg-gradient-to-br from-[#ff8a15] to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium tracking-wide">作業効率化</span>
          </div>
        </div>

        {/* 高級感のあるCTAボタン */}
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#ff8a15] to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-[#ff8a15] transition-all duration-500 text-center shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 border border-orange-500/20"
          >
            <span className="tracking-wide">お問い合わせはコチラ</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/diagnosis"
            className="group inline-flex items-center justify-center px-10 py-5 bg-white/90 backdrop-blur-sm text-slate-800 rounded-lg font-semibold hover:bg-white border-2 border-slate-200 hover:border-slate-300 transition-all duration-500 text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
          >
            <span className="tracking-wide">無料診断を受ける</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* 右側：重ね合わせ画像 */}
      <div className="flex flex-col items-center lg:items-end">
        <div className="relative">
          <img
            src="/images/aaa.jpg"
            alt="Signal. ダッシュボード"
            className="w-full h-auto max-w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl rounded-lg"
          />
          
          {/* 右下に重ねる画像 */}
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
            <img
              src="/images/0602.jpg"
              alt="Signal. PDCA × 強み × 進化するAI分析"
              className="w-40 h-auto lg:w-48 xl:w-56 rounded-md shadow-lg border border-white/50"
            />
          </div>
        </div>
        
        {/* 画像の下のテキスト */}
        <div className="mt-6 text-center lg:text-right max-w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2">
            AIが導くSNS運用の未来
          </h3>
          <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
            90%の作業を自動化し、あなたのビジネスを次のレベルへ。
            <br className="hidden sm:block" />
            データに基づく戦略で、確実な成果を実現します。
          </p>
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
<section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
  {/* 装飾要素 */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff8a15]/5 to-orange-500/5 rounded-lg -translate-y-32 translate-x-32"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-slate-200/20 to-transparent rounded-lg translate-y-24 -translate-x-24"></div>
  
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center mb-20">
     
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-8 leading-tight">
        こんなお悩みありませんか？
       
      </h2>
      
      {/* シンプルな下線 */}
      <div className="w-24 h-1 bg-[#ff8a15] mx-auto"></div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
      {/* 1 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/flag.svg" alt="投稿が伸びない" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-2xl mb-6 text-slate-800 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">投稿が伸びない</h3>
        <p className="text-slate-600 text-lg leading-relaxed text-center font-light">
          投稿しても「いいね」や保存が伸びず、どんな内容が刺さるのか分からない。
        </p>
      </div>

      {/* 2 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/chart.svg" alt="売上に繋がらない" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-2xl mb-6 text-slate-800 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">売上に繋がらない</h3>
        <p className="text-slate-600 text-lg leading-relaxed text-center font-light">
          フォロワーは増えたが、売上や問い合わせに繋がらない。
        </p>
      </div>

      {/* 3 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/003.svg" alt="SNS担当がいない" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-2xl mb-6 text-slate-800 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">SNSノウハウ・担当がいない</h3>
        <p className="text-slate-600 text-lg leading-relaxed text-center font-light">
          社内にSNS運用のノウハウを持つ人材がおらず、採用にもコストがかかってしまう。
        </p>
      </div>

      {/* 4 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/ai.svg" alt="AIを使っても成果が出ない" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-2xl mb-6 text-slate-800 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">AIを使っても成果が出ない</h3>
        <p className="text-slate-600 text-lg leading-relaxed text-center font-light">
          話題のAIツールを取り入れても運用にうまく活かせず成果が出ない。
        </p>
      </div>

      {/* 5 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/9780.svg" alt="強みが伝わらない" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-2xl mb-6 text-slate-800 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">強みが伝わらない</h3>
        <p className="text-slate-600 text-lg leading-relaxed text-center font-light">
          せっかくの商品やサービスの魅力が、SNSでうまく差別化されず顧客に届かない。
        </p>
      </div>

      {/* 6 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/004.svg" alt="運用に手が回らない" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-2xl mb-6 text-slate-800 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">運用に手が回らない</h3>
        <p className="text-slate-600 text-lg leading-relaxed text-center font-light">
          SNSを改善したくても、日々の業務に追われて何からどう手をつければいいのか分からない。
        </p>
      </div>
    </div>
  </div>
</section>

<div className="w-full border-t border-gray-200 my-4"></div>


{/* ================== 解決宣言ブロック ================== */}
<section className="py-24 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    {/* シンプルなバッジ */}
    <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-700 rounded-lg text-sm font-semibold mb-12 border border-slate-200/50 shadow-lg">
      <div className="w-2 h-2 bg-[#ff8a15] rounded-lg mr-3"></div>
      <span className="tracking-wide">SNS運用で悩んでいるあなたへ</span>
    </div>

    {/* シンプルな見出し */}
    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-slate-900 mb-12 leading-tight">
      その悩み
      <span className="block font-light text-slate-800">
        Signal<span className="text-[#ff8a15]">.</span>で解決できます
      </span>
    </h2>

    {/* シンプルな下線 */}
    <div className="w-32 h-1 bg-[#ff8a15] mx-auto mb-16"></div>

    <div className="text-center text-slate-600 max-w-4xl mx-auto space-y-6 text-lg sm:text-xl leading-relaxed font-light">
      <p className="text-xl sm:text-2xl font-medium text-slate-700">SNSで頑張っても「なぜ伸びないのか」がわからない…</p>
      <p className="text-lg sm:text-xl">Signal. は、御社の強みを言語化し、逆算思考で成果につながる投稿設計へ。</p>
      <p className="text-lg sm:text-xl">伸びない原因をAIとデータ戦略で根本から変え、持続的なSNS投稿を実現します。</p>
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
    <div className="grid grid-cols-1 gap-10 lg:gap-12 mb-24">
      {/* 1 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-6 -left-6 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/ai-card1.svg" alt="AI強み診断" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-xl mb-4 text-gray-900 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">目標から逆算、AIが導く成果への最短ルート</h3>
        <p className="text-gray-700 text-base leading-relaxed text-center">
          運用目標から逆算し、AIが達成までの戦略を提案。
          投稿文の作成から分析まで、一貫してAIがサポートするので、
          目標がブレることなく、自然にPDCAが回るSNS運用を実現できます。
        </p>
      </div>
      
      {/* 2 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-6 -left-6 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/ai-card2.svg" alt="KPI逆算プラン" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-xl mb-4 text-gray-900 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">御社の目的に合わせたカスタマイズ</h3>
        <p className="text-gray-700 text-base leading-relaxed text-center">
          必要なページ・不要な項目を選定し、御社のSNS戦略にぴったり合う
          ツールを構築することで複雑な分析や運用がラクになり、
          「これなら続けられる」と感じてもらえるツール仕組みになります。
        </p>
      </div>
      
      {/* 3 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-10 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-[#ff8a15]/20 hover:-translate-y-3">
        {/* 左上に重ねる画像 */}
        <div className="absolute -top-6 -left-6 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <img src="/images/ai-card3.svg" alt="カルテ" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-xl mb-4 text-gray-900 text-center group-hover:text-[#ff8a15] transition-colors duration-300 pt-6">SNS運用をデータ資産に変えるカルテ</h3>
        <p className="text-gray-700 text-base leading-relaxed text-center">
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
<section className="py-24 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-slate-900">数字で見る  Signal<span className="text-[#ff8a15]">.</span></span>
      
      </h2>
      
      <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
        数字が証明する、Signal.の実力
      </p>
    </div>

    {/* 統計カード */}
    <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
      {/* 90% 自動化 - メインカード */}
      <div className="lg:col-span-2 group relative">
        <div className="bg-gradient-to-br from-[#ff8a15] to-orange-600 p-8 lg:p-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-white">
            <div className="flex items-center justify-between mb-6">
              <div className="text-white/90 text-lg font-medium">SNS運用の自動化率</div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="text-7xl lg:text-8xl font-black mb-4 group-hover:scale-105 transition-transform duration-300">
              90<span className="text-5xl lg:text-6xl">%</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">完全自動化</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              SNS運用の90%をAIが自動化。残り10%は戦略判断のみ。
              人的リソースを大幅削減し、コスト最適化を実現。
            </p>
            
            {/* 比較ボックス */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white/90 mb-2">従来のSNS運用</h4>
                <div className="text-2xl font-bold text-white/80 mb-1">100%手動</div>
                <p className="text-xs text-white/70">企画・作成・投稿・分析すべて手作業</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-2">Signal.でのSNS運用</h4>
                <div className="text-2xl font-bold text-white mb-1">90%自動化</div>
                <p className="text-xs text-white/90">AIが自動実行、戦略判断のみ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5分 - 時間短縮 */}
      <div className="group relative">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff8a15]/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
              5<span className="text-2xl lg:text-3xl text-slate-600">分</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">1投稿あたりの運用時間</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが自動提案するため、投稿準備時間を大幅短縮
            </p>
            
            {/* 追加の詳細説明 */}
            <div className="text-left">
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来の運用時間</h4>
                <div className="text-2xl font-bold text-slate-600 line-through">30-60分</div>
                <p className="text-xs text-slate-500 mt-1">ネタ探し・構成・画像選定</p>
              </div>
              
              <div className="bg-[#ff8a15]/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#ff8a15] mb-2">Signal.での運用時間</h4>
                <div className="text-2xl font-bold text-[#ff8a15]">5分</div>
                <p className="text-xs text-slate-600 mt-1">AI提案を確認・微調整のみ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 下段の統計カード */}
    <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-3">
      {/* 0 ネタ切れ */}
      <div className="group relative">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">ネタ切れ</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが無限に投稿テーマを提案
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left">
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来のネタ探し</h4>
                <div className="text-lg font-bold text-slate-600">毎日悩む</div>
                <p className="text-xs text-slate-500 mt-1">アイデア枯渇・時間浪費</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-700 mb-2">Signal.でのネタ探し</h4>
                <div className="text-lg font-bold text-green-600">0回</div>
                <p className="text-xs text-green-600 mt-1">AIが自動で無限提案</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4時間短縮 */}
      <div className="group relative">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
              4<span className="text-2xl lg:text-3xl text-slate-600">時間</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">撮影準備短縮</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが絵コンテとサムネイルを自動生成
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left">
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来の撮影準備</h4>
                <div className="text-lg font-bold text-slate-600">6-8時間</div>
                <p className="text-xs text-slate-500 mt-1">企画・絵コンテ・準備</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-700 mb-2">Signal.での撮影準備</h4>
                <div className="text-lg font-bold text-blue-600">2-4時間</div>
                <p className="text-xs text-blue-600 mt-1">AIが自動で絵コンテ生成</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30+ 分析項目 */}
      <div className="group relative">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
              30<span className="text-2xl lg:text-3xl text-slate-600">+</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">自動分析項目</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが多角的にデータを分析・提案
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left">
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来の分析</h4>
                <div className="text-lg font-bold text-slate-600">3-5項目</div>
                <p className="text-xs text-slate-500 mt-1">手動集計・限定的</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-purple-700 mb-2">Signal.での分析</h4>
                <div className="text-lg font-bold text-purple-600">30+項目</div>
                <p className="text-xs text-purple-600 mt-1">AIが自動で多角的分析</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="w-full border-t border-gray-300 my-4"></div>



{/* ================== 提供できる価値 ================== */}
<section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
  {/* 背景装飾 */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff8a15]/5 to-orange-500/5 rounded-lg -translate-y-32 translate-x-32"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-slate-200/20 to-transparent rounded-lg translate-y-24 -translate-x-24"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-lg mb-8 border border-[#ff8a15]/20">
        <div className="w-2 h-2 bg-[#ff8a15] rounded-lg mr-3 animate-pulse"></div>
        <span className="text-slate-700 text-sm font-medium">提供価値</span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-slate-900">Signal<span className="text-[#ff8a15]">.</span>が提供できる価値</span>
        
      </h2>
      
      <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
        6つの核心価値で、SNS運用を根本から変革
      </p>
    </div>

    {/* 価値カード */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* 1. AI提案 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#ff8a15] to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            投稿目的に合わせた<span className="text-[#ff8a15]">ネタを提案</span>
          </h3>
        </div>
        
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          AIがあなたのKPI計画を元に戦略を設計。目的に沿った具体的な次の投稿が見えるから、効率よいSNS運用が可能です。
        </p>

        {/* 比較ボックス */}
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-slate-800 mb-1">従来のネタ探し</h4>
            <p className="text-xs text-slate-600">毎日悩む・アイデア枯渇</p>
          </div>
          
          <div className="bg-gradient-to-r from-[#ff8a15]/10 to-orange-100 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-[#ff8a15] mb-1">Signal.でのネタ探し</h4>
            <p className="text-xs text-orange-700">AIが自動で無限提案</p>
          </div>
        </div>
      </div>

      {/* 2. KPI逆算 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            KPIから<span className="text-[#ff8a15]">逆算した</span>SNS計画
          </h3>
        </div>
        
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          投稿目標を設定するだけで、AIが逆算して最適な投稿頻度やテーマを自動で設計。目標達成に直結するSNS運用を実現します。
        </p>

        {/* 比較ボックス */}
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-slate-800 mb-1">従来の計画</h4>
            <p className="text-xs text-slate-600">感覚的・目標と乖離</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-blue-700 mb-1">Signal.での計画</h4>
            <p className="text-xs text-blue-700">KPIから逆算・成果直結</p>
          </div>
        </div>
      </div>

      {/* 3. ノウハウ不要 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            <span className="text-[#ff8a15]">ノウハウ不要</span>でSNS運用が可能
          </h3>
        </div>
        
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          投稿ネタもハッシュタグもAIが提案してくれるので、専門スタッフを雇うより低コストで、高水準のSNS運用が始められます。
        </p>

        {/* 比較ボックス */}
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-slate-800 mb-1">従来の運用</h4>
            <p className="text-xs text-slate-600">専門知識必須・高コスト</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-green-700 mb-1">Signal.での運用</h4>
            <p className="text-xs text-green-700">ノウハウ不要・低コスト</p>
          </div>
        </div>
      </div>

      {/* 4. SNS特化AI */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            <span className="text-[#ff8a15]">SNSに特化したAI</span>で最適化
          </h3>
        </div>
        
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          Signal.はInstagramやXなど、それぞれのSNS専用AIを搭載。汎用AIでは難しい投稿の一貫性を維持しながら、目的に合わせて次の投稿戦略を自動提案。
        </p>

        {/* 比較ボックス */}
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-slate-800 mb-1">汎用AI</h4>
            <p className="text-xs text-slate-600">一貫性なし・SNS特性無視</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-purple-700 mb-1">Signal.のSNS特化AI</h4>
            <p className="text-xs text-purple-700">一貫性維持・SNS特性考慮</p>
          </div>
        </div>
      </div>

      {/* 5. サポート体制 */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            万全な<span className="text-[#ff8a15]">サポート</span>体制
          </h3>
        </div>
        
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          投稿戦略はAIに任せつつ、専門スタッフが定期的なミーティングで成果をチェック。ツールの使い方やSNSの運用方法も手厚くサポートし、スムーズに運用できます。
        </p>

        {/* 比較ボックス */}
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-slate-800 mb-1">従来のサポート</h4>
            <p className="text-xs text-slate-600">ツールのみ・サポート不足</p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-indigo-700 mb-1">Signal.のサポート</h4>
            <p className="text-xs text-indigo-700">AI+人・完全サポート</p>
          </div>
        </div>
      </div>

      {/* 6. カスタマイズ */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            御社専用ツールに<span className="text-[#ff8a15]">カスタマイズ</span>
          </h3>
        </div>
        
        <p className="text-slate-600 text-base leading-relaxed mb-6 text-center">
          SNSの活用目的や業種特性に合わせて、オリジナルAIごとカスタマイズ。自社の強みを最大限に活かせる仕組みを構築し、一過性ではない再現可能な成果を生み出します。
        </p>

        {/* 比較ボックス */}
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-slate-800 mb-1">汎用ツール</h4>
            <p className="text-xs text-slate-600">画一的・自社特性無視</p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-3">
            <h4 className="text-sm font-semibold text-pink-700 mb-1">Signal.のカスタマイズ</h4>
            <p className="text-xs text-pink-700">オーダーメイド・自社特化</p>
          </div>
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
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {item.step}
              </div>
            </div>
            
            {/* カード */}
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-orange-300 mt-8">
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
{/* ================== 料金プラン ================== */}
<section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-slate-50 to-orange-50/20 relative overflow-hidden">
  {/* 背景装飾 */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#ff8a15]/5 to-orange-500/5 rounded-lg -translate-y-32 -translate-x-32"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-slate-200/20 to-transparent rounded-lg translate-y-24 translate-x-24"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-lg mb-8 border border-[#ff8a15]/20">
        <div className="w-2 h-2 bg-[#ff8a15] rounded-lg mr-3 animate-pulse"></div>
        <span className="text-slate-700 text-sm font-medium">料金プラン</span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-slate-900">事業規模に合わせた</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff8a15] to-orange-400">
          最適プラン
        </span>
      </h2>
      
      <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
        3つのプランから、御社に最適なSNS運用ソリューションを選択
      </p>
    </div>

    {/* 料金プランカード */}
    <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-3">
      {/* 1SNSプラン */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            1SNSプラン
          </h3>
          
          <p className="text-slate-600 mb-6">
            単一SNSに特化したプラン
          </p>
          
          <div className="mb-8">
            <div className="text-4xl font-black text-slate-900 mb-2">月額6万円</div>
            <div className="text-sm text-slate-500">Instagram、X、TikTok、YouTubeから1つ選択</div>
          </div>
        </div>

        {/* 機能リスト */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700">1SNS専用AI</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700">基本機能すべて</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700">専任スタッフサポート</span>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105">
          無料相談
        </button>
      </div>

      {/* 2SNSプラン（おすすめ） */}
      <div className="group relative bg-gradient-to-br from-[#ff8a15] to-orange-600 p-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 transform scale-105">
        {/* おすすめバッジ */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white text-[#ff8a15] px-6 py-2 rounded-lg font-bold text-sm shadow-lg">
            おすすめ
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">
            2SNSプラン
          </h3>
          
          <p className="text-white/90 mb-6">
            複数SNSを効率的に運用
          </p>
          
          <div className="mb-8">
            <div className="text-4xl font-black text-white mb-2">月額8万円</div>
            <div className="text-sm text-white/80">2つのSNSを同時運用</div>
          </div>
        </div>

        {/* 機能リスト */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">2SNS専用AI</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">クロスプラットフォーム連携</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white/20 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">専任スタッフサポート</span>
          </div>
        </div>

        <button className="w-full bg-white text-[#ff8a15] px-6 py-4 rounded-lg font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105">
          無料相談
        </button>
      </div>

      {/* チームプラン */}
      <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100/50">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ff8a15] transition-colors duration-300">
            チームプラン
          </h3>
          
          <p className="text-slate-600 mb-6">
            大規模チーム向けの本格プラン
          </p>
          
          <div className="mb-8">
            <div className="text-4xl font-black text-slate-900 mb-2">月額12万円〜</div>
            <div className="text-sm text-slate-500">チーム規模に応じてカスタム</div>
          </div>
        </div>

        {/* 機能リスト */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700">全SNS対応</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700">複数メンバー管理</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-slate-700">戦略進行ミーティング</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105">
          お問い合わせ
        </button>
      </div>
    </div>

    {/* 下部の説明 */}
    <div className="text-center mt-16">
      <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 border border-slate-200/50">
        <h3 className="text-xl font-bold text-slate-900 mb-4">すべてのプランに含まれる</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-[#ff8a15] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            無料診断・コンサルティング
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-[#ff8a15] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            AI自動化機能
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-[#ff8a15] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            30日間無料トライアル
          </div>
        </div>
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
