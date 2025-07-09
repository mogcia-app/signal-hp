import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
   <section className="w-full bg-gradient-to-r from-[#fff3ea] to-white py-12 md:py-16 lg:py-20 px-6">

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
<p className="text-gray-900 text-base sm:text-lg md:text-xl mb-4">
  目標フォロワー数やKPIを入力すると、
  <span className="text-[#ff8a15] font-semibold">AIが逆算して</span><br />
  最適な投稿本数や進捗シナリオを自動設計
</p>

<p className="text-gray-900 text-sm sm:text-base md:text-lg mb-4">
  投稿カテゴリやターゲットを選択するだけで<br />
  AIが戦略を提案し、投稿シミュレーションで成果を可視化します
</p>

<p className="text-gray-900 text-sm sm:text-base md:text-lg">
  計画ページで作成したデータは、右側でAIが分析・アドバイス<br />
  データに基づき最短で成果を上げるSNS運用を実現します
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
  投稿をAIと一緒に作り上げるワークスペース<br />
  手動入力はもちろん<br />
  <span className="text-[#ff8a15] font-semibold">
    AIに投稿文やハッシュタグの生成、投稿時間の提案
  </span><br />
  まで任せられます
</p>
<p className="text-black text-sm sm:text-base md:text-lg mb-4">
  また、計画ページで立てた戦略や目標は右側に自動的に反映されるので<br />
  投稿を作成しながらいつでも計画を見直せます。
</p>
<p className="text-black text-sm sm:text-base md:text-lg">
  よく使う定型フレーズやハッシュタグは管理可能で<br />
  次回以降の投稿作成もスムーズ<br />
  投稿編集や改善を手間なく続けられます
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
              src="/images/126.svg"
              alt="AI履歴"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
<h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 mb-6 text-[#ff8a15]">
  SNSごとのAI履歴
</h3>
<p className="text-black text-base sm:text-lg md:text-xl mb-4">
  SNSごとにこれまでAIに設定した内容や過去の計画履歴を一覧で確認可能<br />
  御社だけのAIデータ資産として蓄積し、運用改善に活かせます。
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
    <section className="w-full py-20 px-6 bg-[#ff8a15] text-white text-center mb-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          SNS運用、AIと一緒に次のステージへ。
        </h2>
        <p className="text-lg mb-8">
          強み分析からPDCA改善まで、Signal.がトータルでサポートします。
          まずは無料相談で、御社に合わせたプランをご提案します。
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#ff8a15] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition inline-block"
        >
          無料相談してみる
        </Link>
      </div>
    </section>

    </div>
  );
}
