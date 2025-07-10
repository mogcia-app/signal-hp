import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
  <section className="w-full bg-gradient-to-r from-[#fff3ea] to-white pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-[#ff8a15] font-bold mb-2 text-sm uppercase">
        日本発SNS特化AI
      </p>
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold mb-4">
  Signal<span className="text-[#ff8a15]">.</span>が実現する<br />新しいSNS運用
</h1>
<p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-[16px]">
  AI × データ × PDCAで、SNSの戦略立案から運用までを完全サポート
  <br />
  投稿計画や分析に悩む時間をゼロにし、御社の強みを最大化します
</p>

    </div>
    <div>
      <img
        src="/images/monitor.png"
        alt="SNS AI Dashboard"
        className="w-full h-auto rounded-lg shadow-lg mt-8"
      />
    </div>
  </div>
</section>

      {/* Features Grid */}
<section className="w-full py-12 px-6">
  <div className="max-w-7xl mx-auto mb-8">
    <div className="flex items-center justify-center mb-6">
      <div className="flex-grow border-t border-[#ff8a15]"></div>
      <h2 className="text-3xl font-bold mx-4 whitespace-nowrap">
        Signal<span className="text-[#ff8a15]">.</span>の主な機能
      </h2>
      <div className="flex-grow border-t border-[#ff8a15]"></div>
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
              src="/images/122.svg"
              alt="計画ページ"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[20px] font-bold mb-4 text-[#ff8a15]">
  計画ページ
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
<div className="w-full border-t border-[#ff8a15]/30 my-4"></div>

      {/* Feature 2 */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2 flex justify-end w-full">
        <img
        src="/images/125.svg"
        alt="強み診断"
         className="w-full h-auto rounded-lg shadow-lg"
        />
       </div>
          <div className="md:order-1">
       <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 mb-6 text-[#ff8a15]">
  投稿ラボ
</h3>
<p className="text-black text-base sm:text-lg md:text-xl mb-4">
  投稿をAIと一緒に作り上げるワークスペース。<br />
  手動入力はもちろん、<br />
  <span className="text-[#ff8a15] font-semibold">
    AIに投稿文やハッシュタグの生成、投稿時間の提案
  </span>
  まで任せられます。
</p>
<p className="text-black text-sm sm:text-base md:text-lg mb-4">
  また、<span className="text-[#ff8a15] font-semibold">計画ページで立てた戦略や目標</span>は右側に自動的に反映されるので、<br />
  投稿を作成しながらいつでも計画を見直せます。
</p>
<p className="text-black text-sm sm:text-base md:text-lg">
  よく使う<span className="text-[#ff8a15] font-semibold">定型フレーズやハッシュタグは管理可能</span>で、<br />
  次回以降の投稿作成もスムーズ。<br />
  <span className="text-[#ff8a15] font-semibold">投稿編集や改善を手間なく続けられます。</span>
</p>




          </div>
        </div>
      </section>
<div className="w-full border-t border-[#ff8a15]/30 my-4"></div>

      {/* Feature 3 */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/2323.svg"
              alt="AI履歴"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
<h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 mb-6 text-[#ff8a15]">
  AI履歴
</h3>
<p className="text-black text-base sm:text-lg md:text-xl mb-4">
  これまで
  <span className="text-[#ff8a15] font-semibold">AIが御社に提案してきた戦略や投稿アイデア</span>を、<br />
  理由や狙いも含めて一つひとつ蓄積し、一覧化しています。
</p>

<p className="text-black text-sm sm:text-base md:text-lg mb-4">
  『いつ、どんな狙いでどんな施策を行ってきたのか？』が一目で分かるので、<br />
  これまでの運用を再分析したり、次の方向性を見直す際に
  <span className="text-[#ff8a15] font-semibold">大きなヒント</span>となります。
</p>

<p className="text-black text-sm sm:text-base md:text-lg">
  さらにこの履歴は、
  <span className="text-[#ff8a15] font-semibold">御社のSNS運用の“資産”そのもの</span>。<br />
  使い込むほどに御社だけの独自データとして蓄積されていくため、<br />
  SNS担当が変わっても戦略の流れや成功パターンを簡単に引き継げ、
  <span className="text-[#ff8a15] font-semibold">一貫性やクオリティを長期的に保つ</span>ことができます。
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
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">投稿分析</h4>
        <p className="text-gray-600 text-sm">投稿結果を手動入力することでAIが解析</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">定型フレーズ管理</h4>
        <p className="text-gray-600 text-sm">よく使うキャプションやハッシュタグを<br />一括管理</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">分析グラフ</h4>
        <p className="text-gray-600 text-sm">エンゲージメント別やフォロワー推移を<br />グラフで可視化</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">SNSごとに特化したAI</h4>
        <p className="text-gray-600 text-sm">InstagramやXなど媒体別の最適AIを搭載</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">月次レポート</h4>
        <p className="text-gray-600 text-sm">月ごとの成果を自動レポート化</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">投稿シミュレーション</h4>
        <p className="text-gray-600 text-sm">投稿計画を立てるとKPI達成率をAIが予測</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">AIフィードバック</h4>
        <p className="text-gray-600 text-sm">投稿ごとにAIが改善点や伸ばすべき点を<br />提案</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">マルチガイド</h4>
        <p className="text-gray-600 text-sm">SNSごとの運用方法やお役立ち情報<br />Signal.の使い方をいつでも確認可能</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">スケジュールページ</h4>
        <p className="text-gray-600 text-sm">投稿予定を一目で確認・管理</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">過去の投稿一覧</h4>
        <p className="text-gray-600 text-sm">過去投稿を保存率や反応別に振り返り</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">ToDoリスト</h4>
        <p className="text-gray-600 text-sm">SNS運用のタスクをダッシュボードで管理</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">Signal.からのお知らせ</h4>
        <p className="text-gray-600 text-sm">新機能や運用ヒントを随時お届け</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">今日すべきこと</h4>
        <p className="text-gray-600 text-sm">今日優先すべきタスクを提示</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">目標の進捗状況</h4>
        <p className="text-gray-600 text-sm">設定した目標の達成率を常時チェック</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">直近の投稿アドバイス</h4>
        <p className="text-gray-600 text-sm">最近の投稿をAIが再評価し改善を提案</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">AIによる伸び悩み診断</h4>
        <p className="text-gray-600 text-sm">投稿が伸びない原因をAIが特定</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">目標までの実績グラフ</h4>
        <p className="text-gray-600 text-sm">目標までの進捗をグラフで追跡</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">
          投稿時間×エンゲージメント別<br />ヒートマップ
        </h4>
        <p className="text-gray-600 text-sm">最も反応の良い時間帯を色で可視化</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">動画分析</h4>
        <p className="text-gray-600 text-sm">AIが最初の5秒間の印象を分析</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">画像分析</h4>
        <p className="text-gray-600 text-sm">投稿画像の訴求ポイントをAIが解析</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">おすすめサムネイル画像生成</h4>
        <p className="text-gray-600 text-sm">AIが最適なサムネイルを自動作成</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">おすすめ動画絵コンテ生成</h4>
        <p className="text-gray-600 text-sm">動画構成のアイデアをAIが提示</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">ヒアリング</h4>
        <p className="text-gray-600 text-sm">ブランドの基本情報や注力したい商品などAIに覚えさせることが可能です</p>
      </div>
      <div className="p-4 border border-[#ff8a15] rounded-lg">
        <h4 className="font-bold text-[#ff8a15] mb-2">投稿戦略アドバイス</h4>
        <p className="text-gray-600 text-sm">戦略視点から投稿の方向性をAIが提案</p>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-16 px-6 bg-white">
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
  <div className="p-4 border border-[#ff8a15] rounded-lg flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-[#ff8a15] mb-2">LINE通知</h4>
      <p className="text-gray-600 text-sm">
        重要な分析結果やリマインダーをLINEへ送信
      </p>
    </div>
  </div>
  <div className="p-4 border border-[#ff8a15] rounded-lg flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-[#ff8a15] mb-2">ショップ連携</h4>
      <p className="text-gray-600 text-sm">
        ECサイトと連携して商品データを活用
      </p>
    </div>
  </div>
  <div className="p-4 border border-[#ff8a15] rounded-lg flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-[#ff8a15] mb-2">多言語分析</h4>
      <p className="text-gray-600 text-sm">
        海外市場に向けた投稿の反応もAIが解析
      </p>
    </div>
  </div>
  <div className="p-4 border border-[#ff8a15] rounded-lg flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-[#ff8a15] mb-2">タスク割り当て</h4>
      <p className="text-gray-600 text-sm">
        投稿計画や改善アクションをメンバーごとに割り当て
      </p>
    </div>
  </div>
  <div className="p-4 border border-[#ff8a15] rounded-lg flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-[#ff8a15] mb-2">承認フロー</h4>
      <p className="text-gray-600 text-sm">
        上長承認が必要な投稿を管理者がチェック＆承認
      </p>
    </div>
  </div>
  <div className="p-4 border border-[#ff8a15] rounded-lg flex flex-col justify-between h-full">
    <div>
      <h4 className="font-bold text-[#ff8a15] mb-2">API連携</h4>
      <p className="text-gray-600 text-sm">
        社内基幹システムや顧客管理ツールと連動
      </p>
    </div>
  </div>
</div>

  </div>
</section>


      {/* CTA */}
    
<section className="w-full py-8 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid text-center md:grid-cols-2 gap-12 items-center">
    
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


    </div>
  );
}
