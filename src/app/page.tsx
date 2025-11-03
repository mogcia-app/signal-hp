import Link from 'next/link'
import Image from 'next/image'
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
<section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[80vh] flex items-center bg-white overflow-hidden border-b border-slate-200 py-12 sm:py-16 lg:py-0">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
      
      {/* ビジュアル - モバイルでは上、デスクトップでは右 */}
      <div className="relative flex items-center justify-center lg:justify-start z-10 w-full lg:absolute lg:right-0 lg:inset-y-0 lg:-ml-6 lg:w-auto order-1 lg:order-2 mt-12 lg:mt-0">
        <div className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-none lg:w-[560px] xl:w-[640px]">
          <video
            src="/images/istockphoto-2167803333-640_adpp_is.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* テキストコンテンツ - モバイルでは下、デスクトップでは左 */}
      <div className="relative z-20 space-y-6 sm:space-y-8 text-left max-w-2xl w-full lg:w-auto order-2 lg:order-1">
        

        {/* タイトル */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
          Signal<span className="text-[#ff8a15]">.</span>
        </h1>

          {/* 英語タグライン */}
          <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-[0.15em] mb-3 sm:mb-4">
          AI-Driven Social Media Management for Business
        </p>

        {/* サブコピー */}
        <p className="text-lg sm:text-xl md:text-[22px] text-slate-700 leading-relaxed font-light">
          御社オリジナルのAIが<br className="hidden sm:block" />
          一貫性のある戦略でSNS運用を支援
        </p>

        {/* 説明コピー */}
        <p className="text-base sm:text-[17px] text-slate-500 leading-relaxed font-normal max-w-xl">
          投稿企画から分析・改善までをAIが自動化<br className="hidden sm:block" />
        </p>

        {/* CTAボタン群 */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-[#ff8a15] text-white font-bold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300"
          >
            お問い合わせ
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href=""
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 border-2 border-slate-300 font-bold text-base sm:text-lg rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
          >
            SNS無料診断
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





{/* ================== こんなお悩みありませんか？ ================== */}
<section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
  
  <div className="relative max-w-5xl mx-auto">
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-xl sm:text-[28px] lg:text-[30px] font-light tracking-tight text-slate-900 mb-6 sm:mb-8 leading-tight text-center px-2">
          SNS運用に関してこんな<span className="relative inline-block font-bold">
            <span className="relative z-10">お悩み</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#ff8a15] opacity-60 -rotate-1"></span>
          </span>ありませんか？
        </h2>
      </div>
     
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
      {/* 1. 投稿が伸びない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/flag.svg" alt="投稿が伸びない" className="h-[140px] sm:h-[180px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          投稿が伸びない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          「いいね」や保存が伸びず<br className="hidden sm:block" />
          効果的なコンテンツが分からない
        </p>
      </div>

      {/* 2. 売上に繋がらない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/chart.svg" alt="売上に繋がらない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          売上に繋がらない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          フォロワーは増えたものの<br className="hidden sm:block" />
          実際の成果につながらない
        </p>
      </div>

      {/* 3. SNSノウハウ・担当がいない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/003.svg" alt="SNS担当がいない" className="h-[110px] sm:h-[130px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          ノウハウ・担当がいない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          専門知識を持つ人材がおらず<br className="hidden sm:block" />
          採用コストもかかる
        </p>
      </div>

      {/* 4. AIを使っても成果が出ない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/ai.svg" alt="AIを使っても成果が出ない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          AI活用がうまくいかない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          最新ツールを試しても<br className="hidden sm:block" />
          運用に活かせず成果が出ない
        </p>
      </div>

      {/* 5. 強みが伝わらない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/9780.svg" alt="強みが伝わらない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          強みが伝わらない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          商品・サービスの魅力が<br className="hidden sm:block" />
          SNSで差別化できず届かない
        </p>
      </div>

      {/* 6. 運用に手が回らない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/004.svg" alt="運用に手が回らない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          運用に手が回らない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          日々の業務に追われ<br className="hidden sm:block" />
          改善の手がつけられない
        </p>
      </div>
    </div>
  </div>
</section>




{/* ================== 解決宣言 + 3つの仕組み ================== */}
<section className="pt-8 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 bg-white overflow-visible">
  {/* 三角形のデコレーション */}
  <div className="flex flex-col items-center gap-2 mb-8 sm:mb-12">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L20 0L10 20L0 0Z" fill="#ff8a15"/>
    </svg>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L20 0L10 20L0 0Z" fill="#ff8a15"/>
    </svg>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L20 0L10 20L0 0Z" fill="#ff8a15"/>
    </svg>
  </div>
  <div className="max-w-7xl mx-auto">
    {/* 解決宣言 */}
    {/*<div className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-[35px] sm:text-[35px] lg:text-[35px] xl:text-[35px] font-light tracking-tight text-slate-900 mb-8 leading-tight">
        その悩み <span className="font-light text-slate-800"><span className="font-bold">Signal<span className="text-[#ff8a15]">.</span></span>で解決できます</span>
      </h2>

      <div className="text-center text-slate-600 max-w-4xl mx-auto space-y-4 text-lg sm:text-xl leading-relaxed font-light">
        <p className="text-xl sm:text-2xl font-medium text-slate-700">SNSで頑張っても「なぜ伸びないのか」がわからない…</p>
        <p className="text-lg sm:text-xl">Signal. は、御社の強みを言語化し、逆算思考で成果につながる投稿設計へ</p>
        <p className="text-lg sm:text-xl">伸びない原因をAIとデータ戦略で根本から変え、持続的なSNS投稿を実現します</p>
      </div>
    </div>*/}

    {/* SNS運用のハードルを下げるサポート */}
    <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
      <div className="bg-gradient-to-r from-[#ff8a15]/10 to-orange-50 border border-[#ff8a15]/20 p-6 sm:p-8 lg:p-12 rounded-lg">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            今からSNSを始めたいけど<br className="hidden lg:block" />ハードルが高い
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            その悩み、Signal<span className="text-[#ff8a15]">.</span>が解決します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Signal.×専任スタッフ */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#ff8a15] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                AI
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Signal<span className="text-[#ff8a15]">.</span> × 専任スタッフ
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              AIと人のWサポートで、SNS運用をトータルにサポートします
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">AIが投稿内容を自動生成</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">データ分析による改善提案</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">専任スタッフが撮影・編集をサポート</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">ブランディングに合わせた提案</span>
              </div>
            </div>
          </div>

          {/* こんな方におすすめ */}
          <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff8a15] to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                ✨
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                こんな方におすすめ
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              SNSやってみたいけど、知識もなく続くか不安...
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">SNS運用のノウハウがない</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">投稿する時間がない</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">運用を一から始めたい</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#ff8a15] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">専門スタッフを雇う予算がない</span>
              </div>
            </div>
          </div>
        </div>

        {/* アカウント開設支援 */}
        <div className="mt-8 bg-white p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          {/* アカウント開設支援セクション */}
          <div className="mb-8 pb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a15] to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                🚀
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                アカウント開設支援
              </h3>
            </div>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 text-center">
              プロフィール文や導線設計まで、集客に効果的な設定をワンストップで実現<br />初めての方でも、ブランディングに最適化された設定で安心して始められます
            </p>
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 text-center">
              できること
            </h4>
            <div className="flex justify-center">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
                <div className="flex items-start gap-2">
                  <span className="text-[#ff8a15] text-base">•</span>
                  <span className="text-gray-700 text-base">ブランディング設計</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#ff8a15] text-base">•</span>
                  <span className="text-gray-700 text-base">プロフィール文考案</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#ff8a15] text-base">•</span>
                  <span className="text-gray-700 text-base">HPやCTAへの導線設計</span>
                </div>
              </div>
            </div>
          </div>

          {/* なぜプロに任せるべきか */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 text-center">
              なぜ、アカウント開設をプロに任せるべきか？
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* プロに任せるメリット */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-6 lg:p-8 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✓
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900">
                    プロに任せるメリット
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">ブランディングに最適化された設定</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">集客に効果的なプロフィール設計</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">コンバージョンを意識した導線設計</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">時間と手間を削減</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">専門知識を活かした最適化</span>
                  </div>
                </div>
              </div>

              {/* 自分で設定するデメリット */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 p-6 lg:p-8 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    ✗
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900">
                    自分で設定するデメリット
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">ブランディングが一貫しない可能性</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">効果的なプロフィール文の作成が難しい</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">導線設計の知識が不足しがち</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">設定に時間がかかる</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 text-sm mt-1">•</span>
                    <span className="text-gray-700 text-sm">最適化の機会損失</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 3つの仕組み */}
    <div className="mt-12 sm:mt-16 lg:mt-20 max-w-7xl mx-auto overflow-visible">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-center px-2">
          Signal<span className="text-[#ff8a15]">.</span> だから実現できる 
          <span className="text-[#ff8a15]">３つ</span>の仕組み
        </h3>
        
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed text-center px-4">
          これからのSNS運用は、ただ投稿するだけでは戦えません<br className="hidden sm:block"/>
          AI × データ戦略で、SNSを一歩先へ
        </p>

        {/* 3つの特徴 */}
        <div className="space-y-20 sm:space-y-32 lg:space-y-40 xl:space-y-48 overflow-visible">
          {/* 1 */}
          <div className="relative bg-white shadow-lg border border-gray-100 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 hover:shadow-xl transition-shadow duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col sm:block">
            <div className="absolute -top-6 sm:-top-8 left-2 sm:left-4 lg:-top-14 lg:left-6 z-30">
              <span className="text-[#ff8a15] font-bold text-5xl sm:text-6xl lg:text-8xl">01</span>
            </div>
            <div className="relative z-20 pr-0 lg:pr-[350px] xl:pr-[400px] pt-12 sm:pt-14 lg:pt-12 order-1 sm:order-none">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl lg:text-2xl mb-4 text-gray-900 leading-tight">
                    <span className="relative">
                      目標から逆算、AIが導く成果への最短ルート
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 opacity-60 -z-10"></span>
                    </span>
                  </h3>
                  <h4 className="font-semibold text-lg lg:text-xl mb-3 text-gray-800">目標設定から戦略提案まで自動で算出</h4>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    フォロワー数やKPIなどの目標を設定すると、AIが達成までの具体的な戦略を自動算出。<br />月間・週間の投稿目標や、リール・フィード・ストーリーの最適な投稿回数を提案します。
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    目標達成シミュレーションで、実現可能性を可視化しながら計画的なSNS運用を実現します。
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-base text-gray-900 mb-3">ポイント</p>
                    <div className="flex flex-row flex-wrap lg:flex-row lg:items-start gap-2 lg:gap-4 lg:justify-end">
                      <div className="flex-1 min-w-0 lg:flex-none lg:px-4">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed text-left lg:text-right">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2 lg:ml-2 lg:mr-0 mb-1 sm:mb-2">1</span>
                            目標設定と戦略自動算出
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">運用計画を設定すると<br />AIが達成までの戦略を自動算出</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 lg:flex-none">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed text-left lg:text-right">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2 lg:ml-2 lg:mr-0 mb-1 sm:mb-2">2</span>
                            フォロワー増加推移予測
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">フォロワー数の増加予測を<br />AIが算出します</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 lg:flex-none">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed text-left lg:text-right">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2 lg:ml-2 lg:mr-0 mb-1 sm:mb-2">3</span>
                            現実的な目標案
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">目標設定が高すぎる場合は<br />より現実的な目標案を提案</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 画像 - モバイル時は非表示、デスクトップ時は絶対配置 */}
            <div className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 right-0 sm:right-0 lg:right-10 sm:max-w-[240px] lg:max-w-[320px] xl:max-w-[380px] h-auto z-10 pointer-events-none sm:w-[240px] lg:w-[320px] xl:w-[380px]">
              <img
                src="/images/02202.png"
                alt="目標から逆算、AIが導く成果への最短ルート"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* 2 */}
          <div className="relative bg-white shadow-lg border border-gray-100 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 hover:shadow-xl transition-shadow duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col sm:block">
            <div className="absolute -top-6 sm:-top-8 right-2 sm:right-4 lg:-top-14 lg:right-6 z-30">
              <span className="text-[#ff8a15] font-bold text-5xl sm:text-6xl lg:text-8xl">02</span>
            </div>
            <div className="relative z-20 flex pt-12 sm:pt-14 lg:pt-12 order-1 sm:order-none">
              <div className="flex items-start gap-4 ml-auto max-w-2xl">
                <div className="flex-1">
                  <h3 className="font-bold text-xl lg:text-2xl mb-4 text-gray-900 leading-tight">
                    <span className="relative">
                      御社の目的に合わせたカスタマイズ
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 opacity-60 -z-10"></span>
                    </span>
                  </h3>
                  <h4 className="font-semibold text-lg lg:text-xl mb-3 text-gray-800">柔軟な設定で最適な投稿計画を実現</h4>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    投稿頻度やスケジュールを自由に設定し、御社専用のAIが運用スタイルに合わせた<br />投稿日と投稿内容をご提案します。
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    1週間のスケジュールから個別の投稿内容まで細かく調整でき、理想的なSNS運用を実現します。
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-base text-gray-900 mb-3">ポイント</p>
                    <div className="flex flex-row flex-wrap lg:flex-row gap-2 lg:gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2">1</span>
                            投稿頻度の自由な設定
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">週の投稿回数や月間の投稿回数をカスタマイズできます</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2">2</span>
                            週間投稿カスタマイズ
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">AIが最適な投稿日をご提案</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2">3</span>
                            個別投稿内容の詳細編集
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">各投稿日の投稿内容をご提案</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 画像 - モバイル時は非表示、デスクトップ時は絶対配置 */}
            <div className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 left-0 sm:left-[20px] lg:left-[50px] sm:max-w-[220px] lg:max-w-[320px] xl:max-w-[380px] h-auto z-10 pointer-events-none sm:w-[220px] lg:w-[320px] xl:w-[380px]">
              <img src="/images/0101.png" alt="御社の目的に合わせたカスタマイズ" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          {/* 3 */}
          <div className="relative bg-white shadow-lg border border-gray-100 px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 hover:shadow-xl transition-shadow duration-300 min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col sm:block">
            <div className="absolute -top-6 sm:-top-8 left-2 sm:left-4 lg:-top-14 lg:left-6 z-30">
              <span className="text-[#ff8a15] font-bold text-5xl sm:text-6xl lg:text-8xl">03</span>
            </div>
            <div className="relative z-20 pr-0 lg:pr-[350px] xl:pr-[400px] pt-12 sm:pt-14 lg:pt-12 order-1 sm:order-none">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-xl lg:text-2xl mb-4 text-gray-900 leading-tight">
                    <span className="relative">
                      SNS運用をデータ資産に変えるカルテ
                      <span className="absolute bottom-0 left-0 w-full h-3 bg-orange-300 opacity-60 -z-10"></span>
                    </span>
                  </h3>
                  <h4 className="font-semibold text-lg lg:text-xl mb-3 text-gray-800">AIが投稿文と動画構成を自動生成</h4>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    投稿文の作成や編集から、リール動画の起承転結までAIが自動で生成。<br />よく使う文言を保存して効率的に投稿作成ができます。
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    診断や投稿計画をカルテに蓄積し、専用AIが学習を重ねることで提案精度が進化し続けます。
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-base text-gray-900 mb-3">ポイント</p>
                    <div className="flex flex-row flex-wrap lg:flex-row lg:items-start gap-2 lg:gap-4 lg:justify-end">
                      <div className="flex-1 min-w-0 lg:flex-none lg:px-4">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed text-left lg:text-right">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2 lg:ml-2 lg:mr-0 mb-1 sm:mb-2">1</span>
                            AI投稿文生成
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">タイトルや投稿文を<br />AIが自動で生成します</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 lg:flex-none">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed text-left lg:text-right">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2 lg:ml-2 lg:mr-0 mb-1 sm:mb-2">2</span>
                            動画構成の自動生成
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">起承転結の動画構成を<br />AIが提案します</span>
                        </p>
                      </div>
                      <div className="flex-1 min-w-0 lg:flex-none">
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed text-left lg:text-right">
                          <span className="font-semibold text-gray-900">
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#ff8a15] text-white text-xs font-bold mr-1 sm:mr-2 lg:ml-2 lg:mr-0 mb-1 sm:mb-2">3</span>
                            よく使う文言の管理
                          </span><br/>
                          <span className="text-[10px] sm:text-xs lg:text-sm">頻繁に使う文言を<br />保存して再利用可能</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 画像 - モバイル時は非表示、デスクトップ時は絶対配置 */}
            <div className="hidden sm:block sm:absolute sm:top-1/2 sm:-translate-y-1/2 right-0 sm:right-0 lg:right-10 sm:max-w-[240px] lg:max-w-[320px] xl:max-w-[380px] h-auto z-10 pointer-events-none sm:w-[240px] lg:w-[320px] xl:w-[380px]">
              <img
                src="/images/0330.png"
                alt="SNS運用をデータ資産に変えるカルテ"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
    </div>
  </div>
</section>

{/*<section className="py-20 px-4 sm:px-6 bg-gray-50">
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
</section>*/}

{/* ================== 数字で見るSignal. ================== */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
        <span className="text-slate-900">数字で見る Signal<span className="text-[#ff8a15]">.</span></span>
      </h2>
      <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
        数字が証明する、Signal.の実力
      </p>
    </div>

    {/* 統計カード */}
    <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
      {/* 90% 自動化 - メインカード */}
      <div className="lg:col-span-2 group relative">
        <div className="bg-gradient-to-br from-[#ff8a15] to-orange-600 p-6 lg:p-10 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="text-white">
            <div className="flex items-center justify-between mb-6">
              <div className="text-white/90 text-base lg:text-lg font-medium">SNS運用の</div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="text-6xl lg:text-7xl xl:text-8xl font-black mb-3 group-hover:scale-105 transition-transform duration-300">
              90<span className="text-4xl lg:text-5xl xl:text-6xl">%</span>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-bold mb-3">完全AI化</h3>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6">
              SNS運用の90%をAIが自動化。<br />人的リソースを大幅削減し、コスト最適化を実現。
            </p>
            
            {/* 比較ボックス */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white/90 mb-2">従来のSNS運用</h4>
                <div className="text-xl lg:text-2xl font-bold text-white/80 mb-1">100%手動</div>
                <p className="text-xs text-white/70">企画・作成・投稿・分析すべて手作業</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-2">Signal.でのSNS運用</h4>
                <div className="text-xl lg:text-2xl font-bold text-white mb-1">90%自動化</div>
                <p className="text-xs text-white/90">AIが企画・作成・分析まで行うので、投稿と戦略判断のみ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5分 - 時間短縮 */}
      <div className="group relative">
        <div className="bg-white p-6 lg:p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff8a15]/10 rounded-lg flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <svg className="w-6 h-6 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
              5<span className="text-2xl lg:text-3xl text-slate-600">分</span>
            </div>
            
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">1投稿あたりの運用時間</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが自動提案するため、投稿準備時間を大幅短縮
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left space-y-3">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来の運用時間</h4>
                <div className="text-xl lg:text-2xl font-bold text-slate-600 line-through">30-60分</div>
                <p className="text-xs text-slate-500 mt-1">ネタ探し・構成・画像選定</p>
              </div>
              
              <div className="bg-[#ff8a15]/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#ff8a15] mb-2">Signal.での運用時間</h4>
                <div className="text-xl lg:text-2xl font-bold text-[#ff8a15]">5分</div>
                <p className="text-xs text-slate-600 mt-1">AI提案を確認・指示通りに撮影するのみ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 下段の統計カード */}
    <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3">
      {/* 0 ネタ切れ */}
      <div className="group relative">
        <div className="bg-white p-6 lg:p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff8a15]/10 rounded-lg flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <svg className="w-6 h-6 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
            
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">ネタ切れ</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが無限に投稿テーマを提案
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left space-y-3">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来のネタ探し</h4>
                <div className="text-xl lg:text-2xl font-bold text-slate-600">毎日悩む</div>
                <p className="text-xs text-slate-500 mt-1">アイデア枯渇・時間浪費</p>
              </div>
              
              <div className="bg-[#ff8a15]/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#ff8a15] mb-2">Signal.でのネタ探し</h4>
                <div className="text-xl lg:text-2xl font-bold text-[#ff8a15]">0回</div>
                <p className="text-xs text-slate-600 mt-1">AIが自動で無限提案</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4時間短縮 */}
      <div className="group relative">
        <div className="bg-white p-6 lg:p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff8a15]/10 rounded-lg flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <svg className="w-6 h-6 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
              4<span className="text-2xl lg:text-3xl text-slate-600">時間</span>
            </div>
            
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">撮影準備短縮</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが絵コンテとサムネイルを自動生成
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left space-y-3">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来の撮影準備</h4>
                <div className="text-xl lg:text-2xl font-bold text-slate-600">5-8時間</div>
                <p className="text-xs text-slate-500 mt-1">企画・絵コンテ・準備</p>
              </div>
              
              <div className="bg-[#ff8a15]/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#ff8a15] mb-2">Signal.での撮影準備</h4>
                <div className="text-xl lg:text-2xl font-bold text-[#ff8a15]">1時間</div>
                <p className="text-xs text-slate-600 mt-1">AIが自動で動画内容生成</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30+ 分析項目 */}
      <div className="group relative">
        <div className="bg-white p-6 lg:p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#ff8a15]/10 rounded-lg flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <svg className="w-6 h-6 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            
            <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
              10<span className="text-2xl lg:text-3xl text-slate-600">+</span>
            </div>
            
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">自動分析項目</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              AIが多角的にデータを分析・提案
            </p>
            
            {/* 比較ボックス */}
            <div className="text-left space-y-3">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">従来の分析</h4>
                <div className="text-xl lg:text-2xl font-bold text-slate-600">3-5項目</div>
                <p className="text-xs text-slate-500 mt-1">手動集計・限定的</p>
              </div>
              
              <div className="bg-[#ff8a15]/5 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#ff8a15] mb-2">Signal.での分析</h4>
                <div className="text-xl lg:text-2xl font-bold text-[#ff8a15]">10+項目</div>
                <p className="text-xs text-slate-600 mt-1">AIが自動で多角的分析</p>
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
{false && <section className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
 

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
</section>}
{/*<div className="w-full border-t border-gray-300 my-4"></div>*/}
{/* ================== 導入ステップ詳細 ================== */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        導入までの流れ
      </h2>
      <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
        最短約1ヶ月でご利用開始可能
      </p>
    </div>

    {/* ステップカード */}
    <div className="space-y-8 lg:space-y-12 mb-12 lg:mb-16">
      {/* ステップ1 */}
      <div className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4 lg:min-w-[200px]">
            <div className="w-16 h-16 bg-[#ff8a15] text-white text-xl font-bold flex items-center justify-center">
              01
            </div>
            <div className="text-4xl">📞</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              お問い合わせ（1分）
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              フォームからお気軽にお問い合わせください。<br />
              翌営業日にご連絡いたします。
            </p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">所要時間：</span>1分
            </div>
          </div>
        </div>
      </div>

      {/* ステップ2 */}
      <div className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4 lg:min-w-[200px]">
            <div className="w-16 h-16 bg-[#ff8a15] text-white text-xl font-bold flex items-center justify-center">
              02
            </div>
            <div className="text-4xl">💬</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              無料診断（30分）
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              現在のSNS運用状況や課題を詳しくヒアリング<br />
              御社に最適なプランをご提案いたします。
            </p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">所要時間：</span>60分
            </div>
          </div>
        </div>
      </div>

      {/* ステップ3 */}
      <div className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4 lg:min-w-[200px]">
            <div className="w-16 h-16 bg-[#ff8a15] text-white text-xl font-bold flex items-center justify-center">
              03
            </div>
            <div className="text-4xl">⚙️</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              カスタマイズ（2-3週間）
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              御社のSNS運用目的や業種特性に合わせたオリジナルAIを構築します。
            </p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">所要時間：</span>2-3週間
            </div>
          </div>
        </div>
      </div>

      {/* ステップ4 */}
      <div className="bg-white border border-gray-200 p-6 lg:p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-4 lg:min-w-[200px]">
            <div className="w-16 h-16 bg-[#ff8a15] text-white text-xl font-bold flex items-center justify-center">
              04
            </div>
            <div className="text-4xl">🚀</div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              運用開始（サポート付き）
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              計画設定や操作レクチャーでスムーズに導入。<br />
              改善レポートや次のアクションも継続的に提案します。
            </p>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">サポート：</div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#ff8a15] mr-2">✓</span>
                  <span>導入時レクチャー</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff8a15] mr-2">✓</span>
                  <span>定期的な改善提案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff8a15] mr-2">✓</span>
                  <span>専任スタッフによるサポート</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 補足テキスト */}
    <div className="bg-gray-50 border border-gray-200 p-6 lg:p-8 text-center">
      <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
        <span className="font-semibold text-gray-900">安心のサポート体制</span><br />
        導入後も専門スタッフが定期的に成果をチェックし、改善提案をいたします。
      </p>
    </div>
  </div>
</section>
{/* ================== 料金プラン ================== */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
        料金プラン
      </h2>
      <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
       このほかにも様々なプランをご用意しています。お気軽にお問い合わせください。
      </p>
    </div>

    {/* 料金プランカード */}
    <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
      {/* 1SNSプラン */}
      <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="text-center mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
         アカウント開設支援
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6">
            今からSNSを始める方におすすめです
          </p>
          <div className="mb-5 sm:mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">¥15,000</div>
            <div className="text-xs sm:text-sm text-gray-500">Instagram・X・TikTokから1つ選択</div>
          </div>
        </div>

        {/* 機能リスト */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[#ff8a15] text-xs">✓</span>
            </div>
            <span className="text-gray-700 text-sm">ブランディング設計</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[#ff8a15] text-xs">✓</span>
            </div>
            <span className="text-gray-700 text-sm">プロフィール文作成</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[#ff8a15] text-xs">✓</span>
            </div>
            <span className="text-gray-700 text-sm">導線設計</span>
          </div>
        </div>

        <button className="w-full bg-[#ff8a15] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors">
          お問い合わせ
        </button>
      </div>

      {/* 2SNSプラン（おすすめ） */}
      <div className="relative bg-gradient-to-br from-[#ff8a15] to-orange-600 p-5 sm:p-6 lg:p-8 rounded-lg shadow-lg border-2 border-[#ff8a15]">
        {/* おすすめバッジ */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-white text-[#ff8a15] px-3 sm:px-4 py-1 rounded-full font-bold text-xs shadow-md">
            おすすめ
          </div>
        </div>

        <div className="text-center mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
            Signal.
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mb-5 sm:mb-6">
            AIを活用してSNS業務改善を行いたい方におすすめ
          </p>
          <div className="mb-5 sm:mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">¥60,000</div>
            <div className="text-xs sm:text-sm text-white/80">Instagram・X・TikTokから1つ選択</div>
          </div>
        </div>

        {/* 機能リスト */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-white text-sm">御社専用AI</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-white text-sm">SNS無料診断</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-white text-sm">専任スタッフサポート</span>
          </div>
        </div>

        <button className="w-full bg-white text-[#ff8a15] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-white/90 transition-colors">
          お問い合わせ
        </button>
      </div>

      {/* チームプラン */}
      <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="text-center mb-5 sm:mb-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            SNS運用代行
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6">
            Signal.と専任スタッフのWサポート
          </p>
          <div className="mb-5 sm:mb-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">¥180,000〜</div>
            <div className="text-xs sm:text-sm text-gray-500">Instagram・X・TikTokから1つ選択</div>
          </div>
        </div>

        {/* 機能リスト */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[#ff8a15] text-xs">✓</span>
            </div>
            <span className="text-gray-700 text-sm">Signal.を活用したSNS運用</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[#ff8a15] text-xs">✓</span>
            </div>
            <span className="text-gray-700 text-sm">撮影・編集代行</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#ff8a15]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-[#ff8a15] text-xs">✓</span>
            </div>
            <span className="text-gray-700 text-sm">月１回のミーティング</span>
          </div>
        </div>

        <button className="w-full bg-[#ff8a15] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors">
          お問い合わせ
        </button>
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
