"use client";

import Image from "next/image";
import { useState } from "react";

type TargetCard = {
  title: string;
  desc: string;
  mediaType?: "image" | "video";
  mediaSrc?: string;
};

const targets: TargetCard[] = [
  {
    title: "SNSを売上・集客につなげたい",
    desc: "Instagramを事業成長に活かしたい中小企業・店舗・D2Cブランドに最適です",
    mediaType: "image",
    mediaSrc: "/images/w1.png",
  },
  {
    title: "少人数でも運用の質を落としたくない",
    desc: "1〜3名体制でも、改善の優先順位が明確になり、安定した運用が続けられます",
    mediaType: "image",
    mediaSrc: "/images/w4.png",
  },
  {
    title: "複数アカウントの改善を効率化したい",
    desc: "アカウントの目的別に学習したAIが運用をサポートするので、アカウントごとの改善もスムーズです",
    mediaType: "image",
    mediaSrc: "/images/w3.png",
  },
  {
    title: "振り返りと改善を習慣化したい",
    desc: "投稿して終わりになりがちな運用でも、次の一手まで自然につながります",
    mediaType: "image",
    mediaSrc: "/images/w2.png",
  },
];



const effectCards = [
  {
    no: "1",
    title: "振り返り時間を短縮",
    body: "投稿ごとの分析データをまとめて数値化し、振り返りにかかる時間を短くします。",
    mediaType: "video",
    mediaSrc: "/images/s1.mp4",
  },
  {
    no: "2",
    title: "次の施策がすぐ決まる",
    body: "分析結果をもとに、次に打つ施策をAIが提案。スムーズな改善が可能です。",
    mediaType: "video",
    mediaSrc: "/images/s3.mp4",
  },
  {
    no: "3",
    title: "SNS運用を仕組み化",
    body: "投稿から振り返りまでの流れを整え、誰が担当しても継続できる運用体制をつくれます",
    mediaType: "video",
    mediaSrc: "/images/s2.mp4",
  },
  {
    no: "4",
    title: "良い投稿を再現しやすい",
    body: "反応の良かった投稿パターンをすぐに反映。AIで再現しやすい状態を作れます。",
    mediaType: "video",
    mediaSrc: "/images/s4.mp4",
  },
];

const painPoints = [
  {
    icon: "/images/003.svg",
    title: "SNS運用が続かない",
    desc: "投稿準備から振り返りまで手作業が多く、日々の業務に追われて運用が止まりがち",
  },
  {
    icon: "/images/9780.svg",
    title: "何を分析すればいいか分からない",
    desc: "どの数字を見ればよいか分からず、投稿後の振り返りが感覚頼りになってしまう",
  },
  {
    icon: "/images/ai-card3.svg",
    title: "運用が属人化してしまう",
    desc: "担当者ごとに判断基準が異なり、チームで同じ品質を保ちながら運用しにくい",
  },
];

const whatsCards = [
  { no: "1", title: "AIが学び続ける仕組み", desc: "使うほどアカウントの傾向を学習し、提案が自社に最適化。運用するほど精度が高まります", mediaType: "image", mediaSrc: "/images/lpsig1.png" },
  { no: "2", title: "多角的で深い分析", desc: "10項目以上を自動分析し、どの投稿がどのKPIに貢献したかを一目で把握できます", mediaType: "video", mediaSrc: "/images/ai14.mp4" },
  { no: "3", title: "PDCAで継続改善", desc: "振り返りから来月の施策提案まで自動で連携。毎月の運用改善を止めずに回せます", mediaType: "video", mediaSrc: "/images/ai15.mp4" },
  { no: "4", title: "具体的な投稿案を提示", desc: "そのまま使える投稿ハッシュタグを生成。もう投稿ネタに悩むことはありません", mediaType: "video", mediaSrc: "/images/ai13.mp4" },
  { no: "5", title: "次の一手が見える化", desc: "投稿後の分析で終わらず、次にすべきアクションまで具体的に提案します", mediaType: "video", mediaSrc: "/images/ai12.mp4" },
];

const featureReasons = [
  {
    label: "REASON 01",
    title: "運用計画から投稿文作成まで1ページで完結",
    body: "月初に方針を決めるだけで終わらず、週間の投稿テーマ設計、日々の投稿文作成、ハッシュタグの最適化、今月の成果までを同じ画面で管理できます。複数のページを行き来する必要がないため、作業の抜け漏れや確認ミスを減らしながら、運用の流れを止めずに回せる状態をつくれます。",
    mediaType: "image",
    mediaSrc: "/images/top01.png",
  },
  {
    label: "REASON 02",
    title: "投稿データと画像内容をまとめて分析",
    body: "いいね・保存・リーチなどの投稿データだけを見るのではなく、実際に使った画像の構図や見せ方、テキスト量、トーンの傾向までまとめて確認できます。数字とクリエイティブを切り離さずに振り返れるので、なぜ反応が良かったのか、どこを直せば次に改善できるのかを具体的に整理しやすくなります。",
    mediaType: "image",
    mediaSrc: "/images/f2.png",
  },
  {
    label: "REASON 03",
    title: "月次の振り返りが次につながる",
   body: "月次レポートはAI自動生成。その月に見えた傾向や課題を次月の具体施策にそのまま反映できるため、振り返りと実行が分断されません。毎月の学びを確実に次の運用へ反映し、止まりにくい改善サイクルを継続できます。",
    mediaType: "image",
    mediaSrc: "/images/f3.png",
  },
];

const moreFeatureCards = [
  { category: "投稿", title: "分析データの振り返り", mediaType: "image", mediaSrc: "/images/m1.png" },
  { category: "分析", title: "KPIに寄与した投稿一覧", mediaType: "image", mediaSrc: "/images/m2.png" },
  { category: "相談", title: "AIチャットで気軽に相談", mediaType: "image", mediaSrc: "/images/m7.png" },
  { category: "改善", title: "投稿別の改善提案", mediaType: "image", mediaSrc: "/images/m3.png" },
  { category: "レポート", title: "月次レポート自動生成", mediaType: "image", mediaSrc: "/images/m.png" },
  { category: "学習", title: "成功パターンの蓄積", mediaType: "image", mediaSrc: "/images/m5.png" },
  { category: "運用", title: "アカウント管理の一元化", mediaType: "image", mediaSrc: "/images/m6.png" },
  { category: "計画", title: "投稿テーマ自動作成", mediaType: "image", mediaSrc: "/images/m8.png" },
];

const plans = [
  {
    name: "スタンダードプラン",
    posting: "月4回の投稿",
    monthly: "15,000円",
    operation: "40,000円",
    editing: "20,000円",
  },
  {
    name: "ベーシックプラン",
    posting: "月8回の投稿",
    monthly: "30,000円",
    operation: "80,000円",
    editing: "40,000円",
  },
  {
    name: "プロ",
    posting: "無制限",
    monthly: "60,000円",
    operation: "要相談",
    editing: "要相談",
  },
];

const faqs = [
  {
    q: "どこまで自動化できますか？",
    a: "投稿と分析データの入力を起点に、要因整理・改善提案・次アクション設計までを自動化できます。投稿作業そのものは手動運用です。",
  },
  {
    q: "対応しているSNSは何ですか？",
    a: "現在はInstagram運用に特化しています。運用改善に必要な分析・振り返り・提案フローを一貫して支援します。",
  },
  {
    q: "導入までどれくらいかかりますか？",
    a: "お問い合わせ後、ヒアリングと初期設定を行い、最短で数日以内に運用開始できます。体制や目的に合わせて導入手順を調整します。",
  },
  {
    q: "料金はどう決まりますか？",
    a: "基本は月額15,000円からで、詳細は運用内容に応じてご案内します。まずはお問い合わせ時に現状の運用体制をお聞かせください。",
  },
  {
    q: "導入後のサポートはありますか？",
    a: "はい。運用中の不明点や活用相談に対応しながら、継続的に改善サイクルを回せるようサポートします。",
  },
  {
    q: "完全自動運用ですか？",
    a: "投稿作業自体は手動で行っていただきますが、入力後のデータ整理・示唆抽出・改善提案・次月計画の設計までをAIが自動で支援します。運用判断にかかる工数を大幅に削減できます。"
  },
  {
    q: "対応しているSNSは何ですか？",
    a: "現在はInstagram運用に特化しています。今後は他SNSへの対応も順次拡張予定です。"
  },
  {
    q: "専門知識がなくても使えますか？",
    a: "はい。専門知識不要で運用可能です。分析結果は自動で整理され、次に取るべきアクションまで提示されます。"
  },
  {
    q: "設定やデータ入力は難しいですか？",
    a: "基本的な投稿データの入力のみで利用開始できます。複雑な分析設定や専門的な操作は不要です。"
  }
];

const onboardingFlow = [
  { step: "01", title: "お問い合わせ", desc: "運用状況とご相談内容を確認します。", mediaType: "image", mediaSrc: "/images/g1.png" },
  { step: "02", title: "初回ヒアリング", desc: "目的・体制・課題を整理します。", mediaType: "image", mediaSrc: "/images/g2.png" },
  { step: "03", title: "初期設定", desc: "運用方針とアカウント情報を設定します。", mediaType: "image", mediaSrc: "/images/g3.png" },
  { step: "04", title: "運用開始", desc: "投稿と分析入力を起点に改善を開始します。", mediaType: "image", mediaSrc: "/images/g4.png" },
  { step: "05", title: "サポート", desc: "ご不明点等ございましたらご気軽にご連絡ください", mediaType: "image", mediaSrc: "/images/g5.png" },
];

export default function Home() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const activeFeature = featureReasons[activeFeatureIndex] || featureReasons[0];

  const renderWhatsCardMedia = (card: { no?: string; title: string; mediaType?: string; mediaSrc?: string }, className = "h-full w-full") => {
    if (card.mediaType === "video" && card.mediaSrc) {
      return (
        <video className={`${className} object-cover object-center`} autoPlay muted loop playsInline>
          <source src={card.mediaSrc} type="video/mp4" />
        </video>
      );
    }

    return (
      <Image
        src={card.mediaSrc || "/images/placeholder.svg"}
        alt={`${card.title}のアイコン`}
        width={640}
        height={360}
        className={`${className} object-contain`}
      />
    );
  };

  return (
    <div className="bg-white text-slate-900">
      <section id="demo" className="px-5 pb-16 pt-28 sm:px-8 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="lg:pl-28 xl:pl-36">
            <p className="text-[20px] font-semibold tracking-[0.08em] text-slate-900 sm:text-[20px]">
              あなた専属のSNS AI秘書
            </p>

            <h1 className="mt-5 text-6xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[68px]">
              Signal<span className="text-[#ff8a15]">.</span>
            </h1>

            <p className="mt-5 max-w-[520px] text-base leading-[1.9] text-slate-600 sm:text-[17px]">
            SNS運用の次の一手を AIが自動で提案<br />
            分析も投稿アイデアも全部おまかせ もう悩まないSNS運用へ
            </p>

            <div className="mt-8">
              <a href="/contact" className="inline-flex border border-[#ff8a15] bg-[#ff8a15] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#ea7e12]">
                今すぐ問い合わせをする→
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/top01.png" alt="ヒーロー画像" width={1600} height={900} className="h-[300px] w-full object-cover lg:h-[380px]" />
            </div>
           
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px] bg-white px-6 py-8 sm:px-8 sm:py-10">
          <div className="text-center">
            <p className="text-5xl font-bold tracking-tight text-[#ff8a15] sm:text-6xl">ISSUES</p>
            <p className="mt-2 text-sm font-semibold text-slate-500 sm:text-base">Instagram運用で</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">こんなお悩みありませんか？</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {painPoints.map((item) => (
              <article key={item.title} className="bg-[#fffaf2] p-5 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center">
                    <Image src={item.icon} alt={`${item.title}のアイコン`} width={140} height={140} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-slate-900">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{item.desc}</p>
              </article>
            ))}
          </div>
         
        </div>
      </section>

      
      <section className="bg-white mt-10 px-5 pb-8 pt-6 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1700px] text-center">
          <p className="text-[30px] font-bold tracking-tight sm:text-[30px]">
            <span className="text-[#ff8a15]">what&apos;s </span>
            <span className="text-slate-900">Signal</span>
            <span className="text-[#ff8a15]">.</span>
          </p>
          <h2 className="mt-3 text-[24px] font-semibold text-slate-900 sm:text-[24px]">あなた専属のSNS AI秘書</h2>
          
          <div className="mx-auto mt-5 max-w-4xl space-y-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>SNSの運用計画や運用戦略・投稿案・分析改善までを自動化するSNS運用特化AIです</p>
            <p>運用目的に合わせた提案で、誰でもノウハウ不要で一定のクオリティーを保ったSNS運用を実現します</p>
          </div>

          <div className="mx-auto mt-10 max-w-6xl px-5 py-3 sm:px-8 sm:py-4">
            {whatsCards.map((card, idx) => (
              <article key={card.title} className={`${idx !== whatsCards.length - 1 ? "border-b border-[#eadbc4]" : ""}`}>
                <div className="grid items-center gap-4 py-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 md:py-7">
                  <div className={`mx-auto w-full overflow-hidden rounded-sm bg-white ${card.no === "01" ? "h-[90px] max-w-[170px] md:h-24 md:max-w-[190px]" : "h-[72px] max-w-[140px] md:h-20"}`}>
                    {renderWhatsCardMedia(card)}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3">
                      <p className="text-[20px] font-semibold leading-none text-[#ff8a15]">{card.no}</p>
                      <h3 className="text-[20px] font-semibold leading-tight text-slate-900">{card.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{card.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-slate-900">企業のSNS運用、もう迷わない</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.08] text-slate-900 sm:text-4xl">
              <span className="marker-swipe block">手探り運用から続けられる運用へ</span>
             
            </h2>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-900 sm:text-base">
  <p>
    SNS運用は、投稿を作るだけでは終わりません。テーマの設計、投稿後の反応確認、数字の読み取り、次回への改善まで、
    毎回判断することが多く、担当者ごとの経験値に依存しやすい業務です。忙しい日々の中で「何から見直せばいいか」が
    曖昧になると、更新頻度も改善速度も落ちてしまいます。
  </p>
  <p>
    <span className="font-bold text-slate-900">Signal<span className="text-[#ff8a15]">.</span></span>は、投稿結果の整理から改善アクションの提案までを一つの流れでつなぎ、運用の迷いを減らします。
    チーム内で判断基準をそろえながら、無理なく回せる運用サイクルをつくることで、属人化しないSNS運用を支えます。
  </p>

            </div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <Image src="/images/A_01_office_environment1.png" alt="ビジョン画像" width={1400} height={900} className="h-[260px] w-full object-contain lg:h-[400px]" />
          </div>
        </div>
      </section>


      <section id="service" className="bg-white px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="text-5xl font-bold tracking-tight text-[#ff8a15] sm:text-6xl">INSIGHTS</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Signal<span className="text-[#ff8a15]">.</span>で得られる効果
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          投稿して終わり、数字は見るだけ――
          そんな運用から、改善が回り続ける運用へ
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {effectCards.map((card) => (
              <article key={card.title} className="relative overflow-visible border border-[#efdfc7] bg-[#fdf6ea] pt-7 min-h-[360px]">
                <span className="absolute left-1/2 top-0 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff8a15] text-base font-bold text-white">
                  {card.no}
                </span>
                <div className="bg-[#ff8a15] px-4 py-3 text-center text-xl font-bold text-white">{card.title}</div>
                <div className="space-y-5 px-5 py-6 text-center">
                  <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-md border-2 border-dashed border-[#e8d7bd] bg-[#fffaf2] sm:h-60 sm:w-60">
                    {card.mediaType === "video" && card.mediaSrc ? (
                      <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src={card.mediaSrc} type="video/mp4" />
                      </video>
                    ) : (
                      <Image src="/images/placeholder.svg" alt={`${card.title}の説明画像`} width={320} height={180} className="h-full w-full object-contain p-2" />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{card.body}</p>
                </div>
              </article>
            ))}
          </div>

          
        </div>
      </section>

      <section id="target" className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="text-5xl font-bold tracking-tight text-[#ff8a15] sm:text-6xl">FOR WHO</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-slate-900">こんな企業・担当者に</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            SNS運用を止めずに回したい企業・担当者へ<br />少人数体制でもSNS運用が継続できる体制をつくれます
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {targets.map((target) => (
              <article key={target.title} className="overflow-hidden border border-slate-200 bg-white md:aspect-square">
                <div className="flex h-40 items-center justify-center border-b border-slate-200 md:h-[70%]">
                  {target.mediaType === "video" && target.mediaSrc ? (
                    <video className="h-full w-full object-cover object-center" autoPlay muted loop playsInline>
                      <source src={target.mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={target.mediaSrc || "/images/placeholder.svg"}
                      alt={`${target.title}のイメージ`}
                      width={900}
                      height={600}
                      className="h-[90%] w-[90%] object-contain"
                    />
                  )}
                </div>
                <div className="px-4 py-4 md:h-[30%]">
                  <h3 className="text-xl font-semibold leading-snug text-slate-900">{target.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{target.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="text-center">
            <p className="text-5xl font-bold tracking-tight text-[#ff8a15] sm:text-6xl">FEATURES</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Signal<span className="text-[#ff8a15]">.</span>が選ばれる理由
            </h2>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-medium tracking-[0.08em] text-slate-500">気になる理由をタップして内容を切り替え</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {featureReasons.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveFeatureIndex(index)}
                  className={`rounded-md border px-4 py-3 text-left transition-colors ${
                    activeFeatureIndex === index
                      ? "border-[#ff8a15] bg-[#fff4e8] shadow-[inset_0_0_0_1px_#ff8a15]"
                      : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  <p className={`text-[11px] font-semibold tracking-[0.14em] ${activeFeatureIndex === index ? "text-[#ff8a15]" : "text-slate-500"}`}>{item.label}</p>
                  <p className={`mt-1 text-base leading-tight ${activeFeatureIndex === index ? "font-semibold text-slate-900" : "font-medium text-slate-700"}`}>{item.title}</p>
                </button>
              ))}
            </div>

            <article className="mt-3 grid items-center gap-6 border border-slate-200 bg-white p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-[#ff8a15]">{activeFeature.label}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-slate-900">{activeFeature.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{activeFeature.body}</p>
              </div>
              <div>
                <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-lg">
                  {activeFeature.mediaType === "video" && activeFeature.mediaSrc ? (
                    <video className="h-full w-full object-contain" autoPlay muted loop playsInline>
                      <source src={activeFeature.mediaSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={activeFeature.mediaSrc || "/images/home.png"}
                      alt={`${activeFeature.title}の画面イメージ`}
                      width={1600}
                      height={1000}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 pb-10 pt-6 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="text-center">
            <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">他にもこんな機能があります</p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["投稿管理", "分析", "改善", "レポート", "学習", "運用", "相談", "計画"].map((chip) => (
              <span key={chip} className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-600">
                {chip}
              </span>
            ))}
          </div>

          <div className="more-features-marquee mt-5">
            <div className="more-features-track">
              {[...moreFeatureCards, ...moreFeatureCards].map((item, idx) => (
                <article key={`${item.title}-${idx}`} className="more-feature-card">
                  <div className="more-feature-image">
                    <Image src={item.mediaSrc || "/images/placeholder.svg"} alt={`${item.title}の機能画像`} width={360} height={240} className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-[#ff8a15]">{item.category}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="text-5xl font-bold tracking-tight text-[#ff8a15] sm:text-6xl">PRICE</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">料金プラン</h2>
          <div className="mt-8 overflow-x-auto border border-[#efdfc7] bg-white">
            <table className="min-w-[900px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#fff4e8]">
                  <th className="border border-[#efdfc7] px-4 py-3 text-base font-semibold text-slate-900">プラン</th>
                  <th className="border border-[#efdfc7] px-4 py-3 text-base font-semibold text-slate-900">月額</th>
                  <th className="border border-[#efdfc7] px-4 py-3 text-base font-semibold text-slate-900">運用代行</th>
                  <th className="border border-[#efdfc7] px-4 py-3 text-base font-semibold text-slate-900">編集代行</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#fffaf2]">
                  <td className="border border-[#efdfc7] px-4 py-3 text-sm text-slate-700">単価</td>
                  <td className="border border-[#efdfc7] px-4 py-3 text-sm text-slate-700">-</td>
                  <td className="border border-[#efdfc7] px-4 py-3 text-sm text-slate-700">1投稿 10,000円</td>
                  <td className="border border-[#efdfc7] px-4 py-3 text-sm text-slate-700">1編集 5,000円</td>
                </tr>
                {plans.map((plan) => (
                  <tr key={plan.name}>
                    <td className="border border-[#efdfc7] px-4 py-4 text-lg font-medium text-slate-900">{plan.name}</td>
                    <td className="border border-[#efdfc7] px-4 py-4 text-2xl font-semibold text-slate-900">{plan.monthly}</td>
                    <td className="border border-[#efdfc7] px-4 py-4 text-2xl font-semibold text-slate-900">{plan.operation}</td>
                    <td className="border border-[#efdfc7] px-4 py-4 text-2xl font-semibold text-slate-900">{plan.editing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
          <div className="mt-5">
            <a href="/contact" className="inline-flex bg-[#ff8a15] px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea7e12]">
              料金について問い合わせる
            </a>
          </div>
        </div>
      </section>

      <section id="flow" className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="text-center">
            <p className="text-5xl font-bold tracking-tight text-[#ff8a15] sm:text-6xl">FLOW</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">導入までのフロー</h2>
          </div>
          <div className="mx-auto mt-8 max-w-4xl space-y-3">
            {onboardingFlow.map((item, index) => (
              <div key={item.step}>
                <article className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[120px_1fr] sm:items-center sm:p-6">
                  <div className="sm:border-r sm:border-slate-200 sm:pr-5">
                    <p className="text-xs font-semibold tracking-[0.16em] text-slate-500">STEP</p>
                    <p className="mt-1 text-4xl font-semibold text-slate-900">{item.step}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[88px_1fr] sm:items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white">
                      {item.mediaType === "video" && item.mediaSrc ? (
                        <video className="h-full w-full object-cover object-center" autoPlay muted loop playsInline>
                          <source src={item.mediaSrc} type="video/mp4" />
                        </video>
                      ) : (
                        <Image src={item.mediaSrc || "/images/placeholder.svg"} alt={`${item.title}のアイコン`} width={80} height={80} className="h-12 w-12 object-contain" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </article>
                {index < onboardingFlow.length - 1 && (
                  <div className="py-1 text-center text-[#ff8a15]">▼</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <p className="text-6xl font-bold tracking-tight text-[#ff8a15] sm:text-7xl">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">よくある質問</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Signal.導入にあたってよくいただく質問をまとめています。気になる項目をクリックしてご確認ください。
          </p>

          <div className="mt-10 border-t border-slate-200">
            {faqs.map((item, index) => (
              <details key={`${item.q}-${index}`} className="group border-b border-slate-200">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[#ff8a15] text-xs font-bold text-white">
                    Q
                  </span>
                  <span className="text-base font-semibold text-slate-800">{item.q}</span>
                  <span className="ml-auto text-xl text-[#ff8a15] transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="pb-5 pl-10 pr-2">
                  <p className="text-sm leading-relaxed text-slate-600">A. {item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-[1100px] border border-[#efdfc7] bg-white px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] text-[#ff8a15]">CONTACT</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Signal<span className="text-[#ff8a15]">.</span>に相談する
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                料金・機能・導入フローを、現在の運用体制に合わせてご案内します。まずはお気軽にご相談ください。
              </p>
            </div>
            <a href="/contact" className="inline-flex border border-[#ff8a15] bg-white px-8 py-3 text-sm font-semibold text-[#ff8a15] hover:bg-[#fff4e8]">
              お問い合わせへ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
