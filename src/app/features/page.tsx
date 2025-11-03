import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-white pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-[#ff8a15] font-bold mb-2 text-sm uppercase">
        SNS特化型AI
      </p>
      <p className="text-base sm:text-lg md:text-xl text-black mb-2 sm:mb-3">
        Signal<span className="text-[#ff8a15]">.</span>が実現する
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold mb-4 sm:mb-6">
        新しいSNS運用のカタチ
      </h1>
      <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-[16px]">
  AI × データ × PDCAで、戦略立案から運用まで完全サポート
  <br />
  投稿計画や分析の時間を削減し、御社の強みを最大化します
</p>

    </div>
    <div>
      <img
        src="/images/istockphoto-1576838337-1024x1024.jpg"
        alt="SNS AI Dashboard"
        className="w-full h-auto  mt-8"
      />
    </div>
  </div>
</section>

      {/* Features Grid */}
<section className="w-full py-12 px-6">
  <div className="max-w-7xl mx-auto mb-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Signal<span className="text-[#ff8a15]">.</span>の主な機能
      </h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
    </div>
   <div className="text-gray-600 text-lg text-center max-w-2xl mx-auto mt-12 mb-4">
  <p>
    実際のツール画面を確認しながら
  </p>
  <p className="mt-2">
    SNS分析・強み診断・PDCA自動化といったSignal.の機能をご紹介します
  </p>
  <p className="mt-2">
    AIとデータを駆使して、御社のSNSをどのように成長へ導くのか<br/>
    ぜひ確認してみてください
  </p>
</div>

  </div>
</section>

      {/* Feature 1 */}
     <section className="w-full py-2 px-6 mb-16">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/02202.png"
              alt="計画ページ"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[20px] font-bold mb-4 text-[#000000]">
  運用計画ページ
</h3>
<p className="text-black text-base sm:text-lg md:text-xl mb-4">
  SNSの目標計画を
  <span className="text-[#ff8a15] font-semibold">1ヶ月、3ヶ月、6ヶ月、1年単位</span>で立てることが可能です。<br />
  目標期間内で達成したいフォロワー数やKPIを入力すると、
  <span className="text-[#ff8a15] font-semibold">
    AIが逆算し、月ごとの投稿数やシナリオを自動設計
  </span>します。
</p>

<p className="text-black text-sm sm:text-base md:text-lg mb-4">
  進行中の目標はいつでも画面右上で確認可能。<br />
  計画がブレず、達成までの道筋を常に把握できます。
</p>

<p className="text-black text-sm sm:text-base md:text-lg">
  また初期導入時には
  <span className="text-[#ff8a15] font-semibold">
    専任スタッフと一緒に計画を作成
  </span>するので安心です。<br />
  ツールやデータ入力に慣れていなくても伴走型で進められ、
  スタートから的確な戦略を設定できます。
</p>


          </div>
        </div>
      </section>
<div className="w-full border-t border-gray-200 my-4"></div>

      {/* Feature 2 */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2 flex justify-end w-full">
        <img
        src="/images/0101.png"
        alt="強み診断"
         className="w-full h-auto rounded-lg shadow-lg"
        />
       </div>
          <div className="md:order-1">
       <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 mb-6 text-[#000000]">
  投稿ラボ
</h3>
<p className="text-black text-base sm:text-lg md:text-xl mb-4">
  1ヶ月のフィード投稿スケジュールを提案するワークスペースです<br />
  投稿頻度（週間・月間の投稿回数、1日の投稿回数）を設定すると<br />
  AIが週間投稿スケジュールを生成
</p>

<p className="text-black text-sm sm:text-base md:text-lg">
  投稿のない日は「投稿なし」と提示してくれるので<br />
  週単位で投稿計画を一目で確認・管理でき<br />
  <span className="text-[#ff8a15] font-semibold">計画的なSNS運用が可能</span>です。
</p>




          </div>
        </div>
      </section>
<div className="w-full border-t border-gray-200 my-4"></div>

      {/* Feature 3 */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/0330.png"
              alt="投稿文エディター"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
<h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 mb-6 text-[#000000]">
  投稿文エディター
</h3>
<p className="text-black text-base sm:text-lg md:text-xl mb-4">
  投稿文を作成・編集するワークスペースです<br />
  投稿日や投稿時間を設定し、タイトルと投稿文を入力できます。
</p>

<p className="text-black text-sm sm:text-base md:text-lg mb-4">
  リール動画投稿では、<span className="text-[#ff8a15] font-semibold">AIで動画構成を生成</span>することができます。<br />
  起（導入）・承（展開）・転（転換）・結（結論）の構成で、<br />
  リール動画の流れを作成できます。
</p>

<p className="text-black text-sm sm:text-base md:text-lg">
  右側には<span className="text-[#ff8a15] font-semibold">よく使う文言を保存・管理</span>する機能があり、<br />
  よく使うフレーズを登録しておくことで、<br />
  効率的に投稿文を作成できます。
</p>

          </div>
        </div>
      </section>

{/* 他にもこんな機能があります */}
  <section className="w-full py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-8 text-[#000000]">
      他にもこんな基本機能があります
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">投稿文AI生成</h4>
        <p className="text-gray-600 text-sm">ボタンひとつでAIが投稿文・ハッシュタグを生成してくれます</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">定型フレーズ管理</h4>
        <p className="text-gray-600 text-sm">よく使うキャプションやハッシュタグを<br />一括管理</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">アカウントスコア</h4>
        <p className="text-gray-600 text-sm">AIがアカウントスコアを生成し<br />グラフで可視化</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">SNSごとに特化したAI</h4>
        <p className="text-gray-600 text-sm">InstagramやXなど媒体別の最適AIを搭載</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">月次レポート</h4>
        <p className="text-gray-600 text-sm">月ごとの成果を自動レポート化</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">投稿シミュレーション</h4>
        <p className="text-gray-600 text-sm">投稿計画を立てるとフォロワー数増加をAIが予測</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">AI戦略</h4>
        <p className="text-gray-600 text-sm">運用計画の内容をもとにAIが戦略を提案</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">ハッシュタグランキング</h4>
        <p className="text-gray-600 text-sm">月ごとに使用したハッシュタグを<br />ランキング形式で表示</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">今週の投稿予定</h4>
        <p className="text-gray-600 text-sm">投稿予定を一目で確認・管理</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">分析待ちの投稿</h4>
        <p className="text-gray-600 text-sm">分析ができていない投稿を一覧で確認</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">目標の進捗状況</h4>
        <p className="text-gray-600 text-sm">設定した目標の達成率を常時チェック</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">投稿一覧</h4>
        <p className="text-gray-600 text-sm">作成済み・分析済みの投稿を一覧で確認可能</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">カスタマージャーニーマップ</h4>
        <p className="text-gray-600 text-sm">興味・認知・検討・行動の各ステップに合わせた投稿ネタをAIが提案</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">注意点・コツ</h4>
        <p className="text-gray-600 text-sm">AIが投稿する上での注意点やコツを提示</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">おすすめ画像提案</h4>
        <p className="text-gray-600 text-sm">AIが生成した投稿文に合わせて、画像の枚数やどんな写真が良いかをアドバイス</p>
      </div>
      <div className="p-4 bg-white shadow-sm border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-2">NG設定</h4>
        <p className="text-gray-600 text-sm">あらかじめNGワードを設定することでAIが投稿生成時にNGワードを避けてくれます</p>
      </div>
      
    </div>
  </div>
</section>

{/*<section className="w-full py-16 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-8 text-[#ff8a15]">
      拡張機能
    </h3>
    <p className="text-black text-[16px] max-w-3xl mx-auto mb-12 text-center">
      Signal.は、チームでのSNS運用をよりスムーズにするための
      多彩な拡張機能を搭載。<br />
      SlackやLINE通知、分析のPDF出力、API連携など、
      貴社の運用体制や課題に合わせて<br />随時アップデートを続けています。
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
  <div className="p-4 bg-white shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">LINE通知</h4>
      <p className="text-gray-600 text-sm">
        重要な分析結果やリマインダーをLINEへ送信
      </p>
    </div>
  </div>
  <div className="p-4 bg-white shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">ショップ連携</h4>
      <p className="text-gray-600 text-sm">
        ECサイトと連携して商品データを活用
      </p>
    </div>
  </div>
  <div className="p-4 bg-white shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">多言語分析</h4>
      <p className="text-gray-600 text-sm">
        海外市場に向けた投稿の反応もAIが解析
      </p>
    </div>
  </div>
  <div className="p-4 bg-white shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">タスク割り当て</h4>
      <p className="text-gray-600 text-sm">
        投稿計画や改善アクションをメンバーごとに割り当て
      </p>
    </div>
  </div>
  <div className="p-4 bg-white shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">承認フロー</h4>
      <p className="text-gray-600 text-sm">
        上長承認が必要な投稿を管理者がチェック＆承認
      </p>
    </div>
  </div>
  <div className="p-4 bg-white shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-gray-900 mb-2">API連携</h4>
      <p className="text-gray-600 text-sm">
        社内基幹システムや顧客管理ツールと連動
      </p>
    </div>
  </div>
</div>

  </div>
</section>*/}


      {/* CTA */}
      <section className="w-full py-16 sm:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Signal<span className="text-[#ff8a15]">.</span>の機能を<br className="sm:hidden" />実際に試してみませんか？
          </h3>

          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            無料相談で、御社のSNS運用の課題を一緒に解決しませんか？<br />
            AIと専門スタッフが、御社だけのSNS戦略をゼロから設計します。
          </p>

          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-[#ff8a15] text-white text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
