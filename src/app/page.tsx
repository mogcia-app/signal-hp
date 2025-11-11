import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'


export default function Home() {
  const comparisonColumns = [
    {
      key: 'signal',
      title: 'SNS運用の90%自動化',
      subtitle: '月額 60,000円',
      footnote: '専任チームのサポート込み',
      badge: 'Signal.',
      highlight: true,
    },
    {
      key: 'tool',
      title: '一般的なAI投稿ツール',
      subtitle: '月額 50,000円',
      footnote: 'サポート・運用代行なし',
      highlight: false,
    },
    {
      key: 'cheap',
      title: '自動投稿ツール',
      subtitle: '月額 10,000円',
      footnote: 'テンプレ配信・自動生成のみ',
      highlight: false,
    },
  ] as const

  const indicatorStyles: Record<string, string> = {
    '◎': 'bg-[#ff8a15] text-white',
    '○': 'bg-[#ff8a15]/20 text-[#ff8a15]',
    '△': 'bg-amber-100 text-amber-600',
    '×': 'bg-slate-200 text-slate-500',
    default: 'bg-slate-200 text-slate-500',
  }

  const comparisonRows = [
    {
      label: 'AI利用回数（上限）',
      signal: { indicator: '◎', detail: '全AI機能を上限なしで利用可能' },
      tool: { indicator: '△', detail: '月50回までなど制限あり' },
      cheap: { indicator: '×', detail: '基本機能のみ利用可' },
    },
    {
      label: 'AI学習・カスタマイズ',
      signal: { indicator: '◎', detail: 'アカウント固有のトーン・NG構成を学習' },
      tool: { indicator: '○', detail: '一般モデルを利用。個別学習なし' },
      cheap: { indicator: '×', detail: 'テンプレ固定' },
    },
    {
      label: '戦略・施策提案',
      signal: { indicator: '◎', detail: '分析データに基づきAIが提案' },
      tool: { indicator: '△', detail: '分析機能のみ、提案はなし' },
      cheap: { indicator: '×', detail: '分析機能なし' },
    },
    {
      label: '制作・投稿支援',
      signal: { indicator: '◎', detail: '投稿文生成に加えて、画像・動画の作り方を具体的にアドバイス' },
      tool: { indicator: '○', detail: '投稿文・ハッシュタグ生成まで対応。撮影・編集は自前' },
      cheap: { indicator: '×', detail: '自動テンプレ生成' },
    },
    {
      label: '運用サポート体制',
      signal: { indicator: '◎', detail: '毎月のミーティングで課題と次の一手を明確化' },
      tool: { indicator: '△', detail: 'メール／チャット対応のみ' },
      cheap: { indicator: '×', detail: 'サポートなし' },
    },
    {
      label: '成果の持続性',
      signal: { indicator: '◎', detail: 'PDCAが自動回り、成果が出続ける構造' },
      tool: { indicator: '○', detail: '改善は自社運用に依存' },
      cheap: { indicator: '×', detail: '成果検証なし' },
    },
  ] as const

  const flowSteps = [
    {
      number: '01',
      title: 'お問い合わせ',
      caption: '翌営業日以内にご連絡いたします。',
    },
    {
      number: '02',
      title: '初回打ち合わせ',
      caption: '現状のSNS運用状況と課題をヒアリング。',
    },
    {
      number: '03',
      title: 'AIカスタマイズ',
      caption: '御社専用AIと運用テンプレを構築。',
    },
    {
      number: '04',
      title: 'ツール引き渡し',
      caption: '使い方説明を行い、初期運用をスタート。',
    },
    {
      number: '05',
      title: '月1ミーティングで伴走',
      caption: '日々の相談にも即対応。',
    },
  ]

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
<section className="relative w-full min-h-[48vh] sm:min-h-[52vh] lg:min-h-[58vh] flex items-center bg-white overflow-hidden border-b border-slate-200 pt-[4.5rem] pb-8 sm:pt-[5.5rem] sm:pb-10 lg:pt-[6.5rem] lg:pb-12">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-10 items-center">

      {/* === ビジュアル === */}
      <div className="relative flex items-center justify-center lg:justify-start z-10 w-full xl:absolute xl:right-0 xl:inset-y-0 xl:-ml-2 xl:w-auto order-1 xl:order-2 mt-6 xl:mt-0">
        <div className="w-full max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none xl:w-[520px]">
          <video
            src="/images/signal.main.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* === テキスト === */}
      <div className="relative z-20 space-y-4 sm:space-y-5 text-left max-w-lg w-full xl:w-auto order-2 xl:order-1">

        {/* === タイトル === */}
        <h1 className="text-[20px] sm:text-[28px] md:text-[40px] lg:text-[40px] font-black tracking-tight leading-tight text-slate-900">
          SNS運用の<span className="text-[#ff8a15]">90％</span>を自動化
        </h1>

        {/* === サブコピー === */}
        <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-medium">
        Signal.は、御社専用AIがSNS運用の90％を自動化<br />投稿づくりも分析も、もう感覚に頼らない運用へ
        </p>

        {/* === CTA === */}
        <div className="pt-5 sm:pt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 text-[0.6rem] sm:text-[0.7rem]">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-[0.65rem] sm:py-3 bg-[#ff8a15] text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300"
          >
            問い合わせをする
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-[0.65rem] sm:py-3 bg-white text-slate-900 border-2 border-slate-300 font-bold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
          >
            サービス概要を見る
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
        <h2 className="text-xl sm:text-[28px] lg:text-[30px] font-semibold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight text-center px-2">
          Signal<span className="text-[#ff8a15]">.</span>が現場で見てきたSNS運用の壁
        </h2>
        <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
          AIを導入しても成果が出ない、外注してもブランドらしさが失われる——<br />そんな相談をいただく企業には、共通する課題がありました。
        </p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
      {/* 1. 投稿が伸びない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/flag.svg" alt="投稿が伸びない" className="h-[140px] sm:h-[180px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          勝ちパターンが見えない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          過去投稿の何が刺さったのか分析できず、<br className="hidden sm:block" />
          次の一手が感覚頼りになってしまう
        </p>
      </div>

      {/* 2. 売上に繋がらない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/chart.svg" alt="売上に繋がらない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          成果に結びつかない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          フォロワーは増えても売上や来店に<br className="hidden sm:block" />
          つながる導線が描けていない
        </p>
      </div>

      {/* 3. SNSノウハウ・担当がいない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/003.svg" alt="SNS担当がいない" className="h-[110px] sm:h-[130px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          ノウハウが分散している
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          担当者の属人的な判断に依存し<br className="hidden sm:block" />
          ノウハウが組織に蓄積されない
        </p>
      </div>

      {/* 4. AIを使っても成果が出ない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/ai.svg" alt="AIを使っても成果が出ない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          AIが現場に馴染まない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          汎用AIを試したもののブランドとの<br className="hidden sm:block" />
          一貫性や精度が合わず定着しない
        </p>
      </div>

      {/* 5. 強みが伝わらない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/9780.svg" alt="強みが伝わらない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          ブランドらしさが伝わらない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          実店舗やサービスの魅力を表現する<br className="hidden sm:block" />
          言葉やビジュアルに落とし込めない
        </p>
      </div>

      {/* 6. 運用に手が回らない */}
      <div className="flex flex-col items-center">
        <div className="h-40 sm:h-48 flex items-center justify-center mb-4 sm:mb-6">
          <img src="/images/004.svg" alt="運用に手が回らない" className="h-[130px] sm:h-[160px] w-auto object-contain" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-slate-800 text-center">
          改善サイクルが回らない
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-center">
          日々の業務に追われて分析が後回し<br className="hidden sm:block" />
          プランが作りっぱなしになる
        </p>
      </div>
    </div>
  </div>
</section>


{/* ================== 他社比較セクション ================== */}
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white border-t border-slate-200/60">
  <div className="max-w-7xl mx-auto space-y-10">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff8a15]/10 text-[#ff8a15] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
        Differentiation
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
  もう「AIだけ」でも「運用代行だけ」でも限界<br />
  Signal<span className="text-[#ff8a15]">.</span>は成果を出すための第三の選択肢
</h2>
<p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
  SNS運用を効率化するだけのAIツール。成果を出すけれどコストが重い代行。<br/>
  Signal.はこの二極の中間ではなく、「AIが動かし、人が磨く」新しい運用モデルです。
</p>
          </div>
          
    <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3">
      {[
        {
          label: "AI投稿ツール",
          tag: "汎用AI",
          color: "bg-slate-100 border-slate-200",
          headline: "自動化で工数は軽くなるが成果が伸び悩み",
          metrics: [
            { name: "投稿自動化", value: "○ 一部自動化", note: "テンプレ文章の生成" },
            { name: "KPI改善", value: "△ 成果は自己責任", note: "戦略・導線設計は手動" },
            { name: "ブランド表現", value: "× 一貫性に課題", note: "プロンプト依存" },
          ],
          pains: [
            "運用の型が社内に蓄積しにくい",
            "分析〜改善は担当者が全て実施",
            "自社の魅力は伝わらない",
          ],
        },
        {
          label: "SNS運用代行",
          tag: "丸投げ",
          color: "bg-slate-100 border-slate-200",
          headline: "成果は出るがコスト高・ノウハウが残らない",
          metrics: [
            { name: "投稿自動化", value: "— 人力対応", note: "スピードは担当次第" },
            { name: "KPI改善", value: "○ 成果は期待可", note: "ただし施策が属人化" },
            { name: "ブランド表現", value: "△ 担当交代でぶれ", note: "知識共有が課題" },
          ],
          pains: [
            "月次レポートを見てもよくわからない",
            "契約終了と同時にノウハウが失われる",
            "追加施策ごとにコスト増",
          ],
        },
        {
          label: "Signal.",
          tag: "ハイブリッド",
          color: "bg-[#ff8a15]/10 border-[#ff8a15]/30",
          headline: "AIと専任チームが成果と再現性を同時に実現",
          metrics: [
            { name: "投稿自動化", value: "◎ 90％自動化", note: "投稿ネタ・ハッシュタグ・改善をAI生成" },
            { name: "目標から逆算", value: "◎ 逆算思考でKPI達成", note: "目標に沿った投稿をAIが提案" },
            { name: "ブランド表現", value: "◎ 一貫性を学習", note: "NGワード設定＆伴走チェック" },
          ],
          pains: [
            "月次レポートでSNS運用を可視化",
            "ノウハウをカルテ化して社内へ共有",
            "制作・投稿まで必要に応じて代行",
          ],
        },
      ].map((option) => (
        <div key={option.label} className={`rounded-2xl border ${option.color} p-6 sm:p-7 lg:p-8 space-y-5 shadow-sm`}> 
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{option.label}</div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/60 text-slate-600 border border-white/70">{option.tag}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
            {option.headline}
          </h3>
        
        <div className="space-y-3">
            {option.metrics.map((metric) => (
              <div key={metric.name} className="rounded-xl bg-white/70 border border-slate-200 px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">{metric.name}</span>
                  <span className="text-sm font-semibold text-slate-900">{metric.value}</span>
          </div>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">{metric.note}</p>
          </div>
            ))}
      </div>

          <div className="space-y-2">
            {option.pains.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#ff8a15]" />
                {item}
          </div>
            ))}
        </div>
          </div>
      ))}
      </div>

    <div className="bg-[#ff8a15]/10 border border-[#ff8a15]/20 rounded-2xl px-6 sm:px-8 py-6 sm:py-8 text-center space-y-3">
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        Signal.は"AI活用のスピード"と"プロの伴走"の両立で、成果と再現性を同時に実現します。現状体制との比較や導入シミュレーションもお気軽にご相談ください。
      </p>
      <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#ff8a15] border border-[#ff8a15] rounded-lg bg-white hover:bg-[#ff8a15]/10 transition">
        問い合わせ
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
      </a>
          </div>
        </div>
</section>


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
    <div className="grid gap-6 lg:gap-8 grid-cols-1 mb-12 lg:mb-16">
      {/* 90% 自動化 - メインカード */}
      <div className="group relative">
        <div className="bg-gradient-to-br from-[#ff8a15] to-orange-600 p-6 lg:p-10 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-white text-[#ff8a15] rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg shadow-[#ff8a15]/30 ring-2 ring-white/40">
                <svg className="w-5 h-5 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                SNS運用の90%をAIが代行
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                あなたは"投稿ボタン"を押すだけ
              </h3>
              <div className="space-y-3 text-base lg:text-lg text-white/90 leading-relaxed">
                <p>企画・原稿作成・ハッシュタグ選定・投稿分析まで、Signal.が自動で実行</p>
                <p>AIが分析データを学習し、次回の戦略を提案します</p>
              </div>
              <div className="flex items-center gap-3 bg-white text-[#000000] rounded-lg px-4 py-3 text-sm font-medium shadow-sm">
                <svg className="w-5 h-5 text-[#ff8a15]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                分析データをAIが整理し、次の一手となる改善案を提案。あなたは判断と実行に集中できます。
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold tracking-wide uppercase text-white/80">自動化できる領域</h4>
                <span className="text-sm text-white/70">従来との比較</span>
            </div>
            
              {/* 表形式（デスクトップ） */}
              <div className="hidden md:grid grid-cols-3 gap-2 bg-white text-slate-900 rounded-none overflow-hidden text-sm shadow-sm border border-slate-100">
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-600">項目</div>
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-600">従来</div>
                <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-600">Signal.</div>

                <div className="px-4 py-4 border-t border-slate-100 font-semibold">企画</div>
                <div className="px-4 py-4 border-t border-slate-100 text-slate-600">手作業でテーマ出し</div>
                <div className="px-4 py-4 border-t border-slate-100 text-[#ff8a15] font-semibold">AIがSNSの目的・事業ジャンルから最適テーマを提案</div>

                <div className="px-4 py-4 border-t border-slate-100 font-semibold">投稿文</div>
                <div className="px-4 py-4 border-t border-slate-100 text-slate-600">担当者がライティング</div>
                <div className="px-4 py-4 border-t border-slate-100 text-[#ff8a15] font-semibold">AIがトーンとブランド設定を反映して自動生成</div>

                <div className="px-4 py-4 border-t border-slate-100 font-semibold">ハッシュタグ</div>
                <div className="px-4 py-4 border-t border-slate-100 text-slate-600">担当者が調査</div>
                <div className="px-4 py-4 border-t border-slate-100 text-[#ff8a15] font-semibold">投稿テーマと親和性の高いハッシュタグをデータから選び抜いて提示</div>

                <div className="px-4 py-4 border-t border-slate-100 font-semibold">分析</div>
                <div className="px-4 py-4 border-t border-slate-100 text-slate-600">毎回スプレッドシート手入力</div>
                <div className="px-4 py-4 border-t border-slate-100 text-[#ff8a15] font-semibold">AIが自動で伸びた投稿を解析し、次の改善策を出力</div>
              </div>
              
              {/* カード形式（モバイル） */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    title: "企画",
                    legacy: "手作業でテーマ出し",
                    signal: "AIが目的・ジャンルから最適テーマを提案",
                  },
                  {
                    title: "投稿文",
                    legacy: "担当者がライティング",
                    signal: "AIがトーンとブランド設定を反映して自動生成",
                  },
                  {
                    title: "ハッシュタグ",
                    legacy: "担当者が調査",
                    signal: "AIがトレンドと一致率から自動選定",
                  },
                  {
                    title: "分析",
                    legacy: "毎回スプレッドシート手入力",
                    signal: "AIが自動で伸びた投稿を解析し、次の改善策を出力",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white text-slate-900 rounded-none p-4 space-y-3 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-600 tracking-wide uppercase">{item.title}</span>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">自動化領域</span>
              </div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">従来</div>
                        <p className="text-sm text-slate-600">{item.legacy}</p>
                      </div>
                      <div className="border-t border-slate-100 pt-2">
                        <div className="text-xs font-semibold text-[#ff8a15] uppercase">Signal.</div>
                        <p className="text-sm text-slate-900">{item.signal}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    {/* 下段の統計カード */}
    <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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



{/* ================== 導入フロー ================== */}
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/60">
  <div className="max-w-7xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#ff8a15] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] shadow-sm">
        Flow
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
        Signal<span className="text-[#ff8a15]">.</span>導入までの4ステップ
      </h2>
      
    </div>

    <div className="relative mt-6">
      <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dashed border-[#ff8a15]/40 lg:left-1/2" aria-hidden="true" />
      <div className="flex flex-col gap-10 lg:gap-14">
        {flowSteps.map((item, index) => (
          <div
            key={item.number}
            className={`relative flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-8 ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold shadow-lg lg:h-14 lg:w-14">
                  {item.number}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 lg:p-7 max-w-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
  </div>
</section>



{/* ================== 料金プラン ================== */}
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff8a15]/10 text-[#ff8a15] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
        Pricing
          </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
        目的に合わせて選べる3つのプラン
      </h2>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
        その他にも様々なプランをご用意しております。詳しくはお問い合わせください。
      </p>
    </div>

    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
          <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">スモールスタート向けサポート</h3>
        <p className="text-sm text-slate-600">
          アカウント開設支援（¥15,000）ではプロフィール設計・導線整備・初期投稿設計までを伴走します。これからSNSを始める企業様に最適です。
        </p>
            </div>
      <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#ff8a15] border border-[#ff8a15] rounded-lg hover:bg-[#ff8a15]/10 transition">
        詳しく相談する
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
          </div>

    <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Signal. 改善伴走プラン",
          price: "¥60,000 / 月",
          description: "自社で運用はできているが伸び悩む方へ",
          recommended: false,
          features: [
            "過去投稿データをSignal.が分解し、伸び悩み要因と改善テーマを可視化",
            "企画・ネタだし・ハッシュタグ選定・投稿分析までSignal.がサポート",
            "専任スタッフとのミーティング",
          ],
        },
        {
          name: "Signal. スタンダード（月4投稿代行）",
          price: "¥120,000 / 月",
          description: "SNS運用にばらつきがある方へ",
          recommended: true,
          features: [
            "Signal.プラン",
            "月4本の投稿を構成・撮影指示・投稿までワンストップで制作代行",
            "月1ミーティングでSNS運用をサポート",
          ],
        },
        {
          name: "Signal. フルサポート（投稿代行＋動画制作）",
          price: "¥180,000 / 月〜",
          description: "これからSNSに力を入れたい方へ",
          recommended: false,
          features: [
            "スタンダードの内容に加え、初期コンセプト設計〜導線整備までを支援",
            "ショート動画・静止画の撮影ディレクション／編集をまるっと対応",
            "SNS立ち上げ研修や運用体制構築を伴走（要望に応じて広告連携）",
          ],
        },
      ].map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border ${plan.recommended ? 'border-[#ff8a15] bg-gradient-to-br from-[#ff8a15] to-orange-600 text-white shadow-xl' : 'border-slate-200 bg-white shadow-sm'} p-6 sm:p-8 flex flex-col gap-5`}
        >
          {plan.recommended && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="bg-white text-[#ff8a15] px-4 py-1 rounded-full text-xs font-semibold shadow">
                人気No.1
        </div>
      </div>
          )}

          <div className="space-y-2">
            <h3 className={`text-xl font-bold ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
            <p className={`text-sm ${plan.recommended ? 'text-white/80' : 'text-slate-600'}`}>{plan.description}</p>
            </div>

          <div>
            <div className={`text-2xl sm:text-3xl font-extrabold ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>{plan.price}</div>
            <div className={`text-xs sm:text-sm ${plan.recommended ? 'text-white/70' : 'text-slate-500'}`}>最低契約期間：12ヶ月</div>
          </div>

          <ul className="space-y-3 text-sm">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className={`mt-1 inline-flex w-5 h-5 items-center justify-center rounded-full ${plan.recommended ? 'bg-white/20 text-white' : 'bg-[#ff8a15]/10 text-[#ff8a15]'}`}>
                  ✓
                </span>
                <span className={plan.recommended ? 'text-white/90 leading-relaxed' : 'text-slate-700 leading-relaxed'}>{feature}</span>
                </li>
            ))}
              </ul>

          <div className="pt-2">
            <a
              href="/contact"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${plan.recommended ? 'bg-white text-[#ff8a15] hover:bg-white/90' : 'bg-[#ff8a15] text-white hover:bg-orange-600'}`}
            >
              プランの詳細を相談する
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            </div>
          </div>
      ))}
        </div>
      </div>
</section>

{/* ================== Value Gap ================== */}
<section className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/60">
  <div className="max-w-7xl mx-auto space-y-8">
    <div className="text-center space-y-3">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff8a15]/10 text-[#ff8a15] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
        Value Gap
      </div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
        ツール任せと伴走設計では、成果までの距離が変わります
      </h2>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
        「AIを入れたのに運用が回らない」──そんな声に応えるために、Signal.が生まれました。<br />
        Signal.は、ツール単体では拾いきれない戦略・制作・改善までを伴走チームとAIで完結させます。
      </p>
    </div>

    <div className="overflow-x-auto">
      <div className="relative min-w-[860px] rounded-[32px] bg-gradient-to-br from-[#ffe8d3] via-white to-[#fff5ec] p-[3px] shadow-[0_40px_80px_-45px_rgba(255,138,21,0.55)]">
        <div className="rounded-[30px] bg-white overflow-hidden border border-white/60">
          <div className="grid grid-cols-[180px_repeat(3,minmax(0,1fr))]">
            <div className="bg-slate-900/95 text-white px-6 sm:px-7 py-6 sm:py-7 text-sm sm:text-base font-semibold tracking-[0.18em] uppercase flex items-center justify-center shadow-inner">
              比較項目
            </div>
            {comparisonColumns.map((column) => (
              <div
                key={column.key}
                className={`px-6 sm:px-7 py-6 sm:py-7 border-l ${
                  column.highlight
                    ? 'relative bg-gradient-to-br from-[#ffe0c5] via-[#fff0e2] to-white text-slate-900 border-[#ffcfa8] shadow-[0_24px_46px_-30px_rgba(255,138,21,0.5)]'
                    : 'bg-slate-900 text-white/90 border-slate-800/80'
                }`}
              >
                {column.highlight && (
                  <span className="absolute inset-y-0 right-0 w-[6px] bg-[#ff8a15]" aria-hidden="true" />
                )}
                <div className="flex items-center gap-2">
                  {column.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white text-[#ff8a15] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm">
                      {column.badge}
                    </span>
                  )}
                  <span className="text-base sm:text-lg font-bold">{column.title}</span>
                </div>
                <p className={`mt-2 text-sm font-semibold ${column.highlight ? 'text-[#ff7115]' : 'text-white'}`}>
                  {column.subtitle}
                </p>
                {column.footnote && (
                  <p className={`mt-1 text-xs ${column.highlight ? 'text-slate-600' : 'text-white/70'}`}>
                    {column.footnote}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="divide-y divide-slate-200 bg-white/95 backdrop-blur-[2px]">
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-[180px_repeat(3,minmax(0,1fr))]">
                <div className="bg-[#f4f6fb] px-6 sm:px-7 py-5 sm:py-6 text-sm sm:text-base font-semibold text-slate-700/90">
                  {row.label}
                </div>
                {comparisonColumns.map((column) => {
                  const cell = row[column.key]
                  const indicatorClass = indicatorStyles[cell?.indicator ?? 'default'] ?? indicatorStyles.default
                  return (
                    <div
                      key={column.key}
                      className={`px-6 sm:px-7 py-5 sm:py-6 border-l border-slate-200 ${
                        column.highlight ? 'bg-[#fff7ef]' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold shadow-sm ${indicatorClass}`}
                        >
                          {cell?.indicator}
                        </span>
                        <p
                          className={`text-sm leading-relaxed ${
                            column.highlight ? 'text-slate-700' : 'text-slate-600'
                          }`}
                        >
                          {cell?.detail}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center space-y-3">
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        AIだけに任せない。人の知見とAIの力で、成果を出し続ける仕組みを<br />
        「迷いながら進むSNS運用」から、「一緒に成長する運用」へ
      </p>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#ff8a15] border border-[#ff8a15] rounded-lg bg-white hover:bg-[#ff8a15]/10 transition"
      >
        問い合わせ
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>




{/* ================== 料金比較 ================== */}
    </div>
  )
}
