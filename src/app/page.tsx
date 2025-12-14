'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import AboutSignalSection from '@/components/AboutSignalSection'
import { useEffect, useState } from 'react'

// 円グラフコンポーネント
function CircularProgress({ value, size = 200, strokeWidth = 15 }: { value: number; size?: number; strokeWidth?: number }) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (animatedValue / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value)
    }, 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* 背景円 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth={strokeWidth}
      />
      {/* プログレス円 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="white"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-2000 ease-out"
      />
    </svg>
  )
}

// 統計円グラフコンポーネント
function StatCircle({ 
  value, 
  unit, 
  title, 
  subtitle, 
  percentage, 
  showPercentage = true 
}: { 
  value: number; 
  unit: string; 
  title: string; 
  subtitle: string; 
  percentage: number;
  showPercentage?: boolean;
}) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const size = 160
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (animatedValue / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(percentage)
    }, 200)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative mb-6">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* 背景円 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
          />
          {/* プログレス円 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ff8a15"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-2000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ff8a15]">{value}</span>
              {unit && <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700">{unit}</span>}
            </div>
            {showPercentage && (
              <div className="text-base font-semibold text-slate-500 mt-1">{percentage}%</div>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 text-center">{title}</h3>
      <p className="text-sm text-slate-600 text-center">{subtitle}</p>
    </div>
  )
}

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
<section 
  className="relative w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center overflow-hidden border-b border-slate-200 pt-[4.5rem] pb-6 sm:pt-[5.5rem] sm:pb-8 md:pb-10 lg:pt-[6.5rem] lg:pb-12"
  style={{
    backgroundImage: 'url(/images/Signal.002.svg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="relative z-10 w-full">
    <div className="flex flex-col items-start justify-center px-4 sm:px-6 md:pl-12 lg:pl-16 xl:pl-24 2xl:pl-32">

      {/* === テキスト === */}
      <div className="relative z-20 space-y-3 sm:space-y-4 md:space-y-5 text-left max-w-lg w-full">

        {/* === タイトル === */}
        <h1 className="text-[28px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-black tracking-tight leading-tight text-white drop-shadow-lg">
          Signal.
        </h1>

        {/* === サブタイトル === */}
        <h2 className="text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-black tracking-tight leading-tight text-white drop-shadow-lg">
          SNS運用の90％を自動化
        </h2>

        {/* === サブコピー === */}
        <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed font-medium drop-shadow-md">
        ノウハウ不要で、続けられるSNS運用を<br />
        AIが学習して、負担のない投稿サイクルを実現
        </p>

        {/* === CTA === */}
        <div className="pt-4 sm:pt-5 md:pt-6 lg:pt-7 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-[#ff8a15] border-2 border-white text-xs sm:text-sm md:text-base font-bold rounded-lg shadow-xl hover:bg-slate-50 hover:border-slate-200 transition-all duration-300 w-fit sm:w-auto"
          >
            問い合わせをする
            
          </a>

          <a
            href="/features"
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white text-slate-900 text-xs sm:text-sm md:text-base font-bold rounded-lg hover:bg-slate-50 transition-all duration-300 w-fit sm:w-auto"
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
          こんなお悩みありませんか？
        </h2>
        <p className="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
        SNS運用で、多くの企業様が共通して抱える課題があります<br />
        代表的なものを、以下にまとめました
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


<AboutSignalSection />


{/* ================== 数字で見るSignal. ================== */}
<section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* ヘッダー */}
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
        <span className="text-slate-900">数字で見る Signal<span className="text-[#ff8a15]">.</span></span>
      </h2>
      <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
        数字が証明する、Signal.の実力
      </p>
    </div>

    {/* 統計 - 円グラフ形式 */}
    <div className="space-y-12 lg:space-y-16">
      {/* 上段: 2つ */}
      <div className="grid gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
        {/* 90% 自動化 */}
        <StatCircle 
          value={90} 
          unit="%" 
          title="SNS運用を自動化"
          subtitle="あなたは「投稿ボタン」を押すだけ"
          percentage={90}
          showPercentage={false}
        />

        {/* 5分 - 時間短縮 */}
        <StatCircle 
          value={5} 
          unit="分" 
          title="1投稿あたりの運用時間"
          subtitle="従来: 30-60分 → Signal.: 5分"
          percentage={83}
          showPercentage={false}
        />
      </div>

      {/* 下段: 3つ */}
      <div className="grid gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* 0 ネタ切れ */}
        <StatCircle 
          value={0} 
          unit="" 
          title="ネタ切れ"
          subtitle="AIが無限に投稿テーマを提案"
          percentage={0}
          showPercentage={false}
        />

        {/* 4時間短縮 */}
        <StatCircle 
          value={4} 
          unit="時間" 
          title="撮影準備短縮"
          subtitle="従来: 5-8時間 → Signal.: 1時間"
          percentage={50}
          showPercentage={false}
        />

        {/* 10+ 分析項目 */}
        <StatCircle 
          value={10} 
          unit="+" 
          title="自動分析項目"
          subtitle="従来: 3-5項目 → Signal.: 10+項目"
          percentage={100}
          showPercentage={false}
        />
      </div>
    </div>
  </div>
</section>



{/* ================== 導入フロー ================== */}
<section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto space-y-12">
    <div className="text-center space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#ff8a15] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] shadow-sm">
        Flow
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
        Signal<span className="text-[#ff8a15]">.</span>導入までの5ステップ
      </h2>
      
    </div>

    <div className="mt-8 lg:mt-12">
      <div className="space-y-6 lg:space-y-8">
        {/* 上段: 2つ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-6">
          {flowSteps.slice(0, 2).map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold shadow-lg mb-4 lg:h-16 lg:w-16">
                  {item.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center flex-1">{item.caption}</p>
            </div>
          ))}
        </div>
        {/* 下段: 3つ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {flowSteps.slice(2, 5).map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold shadow-lg mb-4 lg:h-16 lg:w-16">
                  {item.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center flex-1">{item.caption}</p>
            </div>
          ))}
        </div>
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
<section className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-7xl mx-auto space-y-8">
    <div className="text-center space-y-3">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff8a15]/10 text-[#ff8a15] rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
        Value Gap
      </div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
        Signal<span className="text-[#ff8a15]">.</span>と他社ツールの違い
      </h2>
      <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
        「AIを入れたのに運用が回らない」──そんな声に応えるために、Signal<span className="text-[#ff8a15]">.</span>が生まれました。<br />
        Signal<span className="text-[#ff8a15]">.</span>は、ツール単体では拾いきれない戦略・制作・改善までを伴走チームとAIで完結させます。
      </p>
    </div>

    <div className="overflow-x-auto">
      <div className="relative min-w-[860px] rounded-[32px] bg-white overflow-hidden border border-slate-200">
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
