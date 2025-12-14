import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="w-full pt-40 pb-20 md:pt-48 md:pb-28 lg:pt-56 lg:pb-36 px-6"
        style={{
          backgroundImage: 'url(/images/point16.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div></div>
    <div className="text-right max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ml-auto">
      <p className="text-[#ff8a15] font-bold mb-2 text-sm uppercase">
        SNS特化型AI
      </p>
      <p className="text-base sm:text-lg md:text-xl text-black mb-2 sm:mb-3">
        Signal<span className="text-[#ff8a15]">.</span>が実現する
      </p>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold mb-4 sm:mb-6">
        新しいSNS運用のカタチ
      </h1>
      <div className="text-gray-800 text-[0.7rem] sm:text-base md:text-lg lg:text-[16px] space-y-2">
        <p>AI × データ × PDCAで、戦略立案から運用まで完全サポート</p>
        <p>投稿計画や分析の時間を削減し、御社の強みを最大化します</p>
      </div>

    </div>
   
  </div>
</section>

{/* ================== Signal.の特徴まとめ ================== */}
<section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
      Signal<span className="text-[#ff8a15]">.</span>の特徴を5つまとめました
    </h2>
    <p className="text-lg sm:text-xl text-slate-600 mb-6">
      戦略立案から運用改善まで、AIとデータでSNS運用を完全サポート
    </p>
    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
      Signal<span className="text-[#ff8a15]">.</span>は、単なるAIツールではありません。常に学習を続けるAI、PDCAサイクルによる継続改善、クライアントに最適化された具体的な投稿案、多角的で深いデータ分析、そして高いカスタマイズ性。これら5つの特徴が組み合わさることで、御社のSNS運用を効率化し、成果を最大化します。
    </p>
  </div>
</section>

{/* ================== 新規セクション ================== */}
<section 
  className="relative w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-white mt-4 mb-4"
  style={{
    backgroundImage: 'url(/images/point1.svg)',
    backgroundSize: '50%',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
  }}
>
  <div className="relative z-10 max-w-[90rem] mx-auto">
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold text-sm sm:text-base lg:text-lg">
          1
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
          AIが学び続ける仕組み
        </h2>
      </div>
      <div className="text-left max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-4">
        <div className="text-sm sm:text-base lg:text-lg text-slate-900 leading-loose space-y-8">
          <p>
            Signal.のAIは、マスターコンテキストとRAG、LLMを活用して常に学習を重ねます
          </p>
          <p>
            過去の投稿履歴やターゲット情報、トーン、NGワード、成功・失敗パターンを分析し<br />
            各アカウントに最適化された提案を生成
          </p>
          <p>
            類似投稿の成功例を自動で抽出し、失敗パターンは回避されるため、提案の精度は<br />
            使うほど向上します
          </p>
          <p>
            さらにブランド設定や口調、世界観も反映され、一貫性のある提案が可能です
          </p>
          <p>
            こうして学び続けるAIの知見は、クライアントの成果向上に直結し<br />
            日々の投稿戦略をより効果的にサポートします
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================== 新規セクション2 ================== */}
<section 
  className="relative w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-white mt-4 mb-4"
  style={{
    backgroundImage: 'url(/images/point2.svg)',
    backgroundSize: '50%',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
  }}
>
  <div className="relative z-10 max-w-[90rem] mx-auto">
    <div className="text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold text-sm sm:text-base lg:text-lg">
          2
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
          PDCAで継続改善
        </h2>
      </div>
      <div className="text-left max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-4">
        <div className="text-sm sm:text-base lg:text-lg text-slate-900 leading-loose space-y-8">
          <p>
            <span className="font-bold">Plan（計画）</span>
          </p>
          <p>
            投稿戦略やKPI目標を設定可能です<br />
            設定内容に応じてAIが逆算して目標シュミレーション・目標戦略を生成
          </p>
          <p>
            <span className="font-bold">Do（実行）</span>
          </p>
          <p>
            日々の投稿文やハッシュタグ生成はもちろん、ワンポイントアドバイスもAIが提案<br />
            コメント返信のアシストやスケジュール管理も簡単にできます
          </p>
          <p>
            <span className="font-bold">Check（評価）</span>
          </p>
          <p>
            KPIの達成度や投稿単位の成果をAIが分析<br />
            過去の投稿との比較、成功/改善ポイントの可視化が可能です
          </p>
          <p>
            <span className="font-bold">Act（改善）</span>
          </p>
          <p>
            次回投稿や戦略に反映する具体的な改善案をAIが生成<br />
            継続的に計画・実行・評価・改善のループを回しながら、効率の良いSNS運用が実現できます
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================== 新規セクション3 ================== */}
<section 
  className="relative w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-white mt-4 mb-4"
  style={{
    backgroundImage: 'url(/images/pointo3.svg)',
    backgroundSize: '50%',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
  }}
>
  <div className="relative z-10 max-w-[90rem] mx-auto">
    <div className="text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold text-sm sm:text-base lg:text-lg">
          3
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
        具体的な投稿案を提示
        </h2>
      </div>
      <div className="text-left max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-4">
        <div className="text-sm sm:text-base lg:text-lg text-slate-900 leading-loose space-y-8">
          <p>
            一般的なAIは抽象的な投稿案が多いためクライアントの世界観に沿った提案や<br />
            課題解決を目的とした投稿文の作成にならないことがほとんどですが
          </p>
          <p>
            Signal.は過去の分析データを元にタイトルやキャプション、ハッシュタグを自動提案
          </p>
          <p>
            また、投稿形態に合わせて、ワンポイントアドバイスも提案します<br />
            フィード投稿では生成文に沿った画像の枚数や撮影についてのアドバイス<br />
            リール投稿では生成文に合わせて起承転結を簡潔に生成
          </p>
          <p>
            これにより、社内に撮影の知識がなくとも投稿文に合わせた撮影方法を<br />
            クライアントに提案可能です
          </p>
          <p>
            毎日の投稿データや月次レポートからAIが学習していくため<br />
            使えば使うほど、クライアント専用AIとしてより最適な投稿案を提案できます
          </p>
          <p>
            データに基づいた運用で成果につなげ、表面的ではなく、実践に直結するAI支援を実現可能です
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================== 新規セクション4 ================== */}
<section 
  className="relative w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-white mt-4 mb-4"
  style={{
    backgroundImage: 'url(/images/pointo4.svg)',
    backgroundSize: '50%',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
  }}
>
  <div className="relative z-10 max-w-[90rem] mx-auto">
    <div className="text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold text-sm sm:text-base lg:text-lg">
          4
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
        多角的で深い分析
        </h2>
      </div>
      <div className="text-left max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-4">
        <div className="text-sm sm:text-base lg:text-lg text-slate-900 leading-loose space-y-8">
          <p>
            Signal.は投稿データを多角的に分析し、単なる数字ではなく、具体的な改善策まで提示
          </p>
          <p>
            過去30件の投稿を個別に解析し、成功パターンや改善ポイントを自動で検出<br />
            KPIやリーチ、保存、エンゲージメント、フォロワー増加など74項目以上の指標を<br />
            統合して分析するためどの投稿がどのKPIに寄与しているか一瞬で把握可能です
          </p>
          <p>
            また月次レポートでは、フィードやリールの統計、オーディエンス属性まで詳細に把握できます<br />
            投稿文やハッシュタグ、投稿時間の比較を行い、過去の成功例と違いを明確化
          </p>
          <p>
            分析結果は次の投稿提案に反映され、PDCAサイクルを回しながら継続改善が可能です<br />
            データに基づいた判断で、より効果的な投稿運用をサポートします
          </p>
          <p>
            表面的な数字にとどまらず、実践的で行動につながるインサイトを提供します
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ================== 新規セクション5 ================== */}
<section 
  className="relative w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-white mt-4 mb-4"
  style={{
    backgroundImage: 'url(/images/point5.svg)',
    backgroundSize: '50%',
    backgroundPosition: 'right top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'local',
  }}
>
  <div className="relative z-10 max-w-[90rem] mx-auto">
    <div className="text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#ff8a15] text-white font-bold text-sm sm:text-base lg:text-lg">
          5
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
        高いカスタマイズ性
        </h2>
      </div>
      <div className="text-left max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mt-4">
        <div className="text-sm sm:text-base lg:text-lg text-slate-900 leading-loose space-y-8">
          <p>
            Signal.はすべてのAI提案にカスタマイズ設定を反映
          </p>
          <p>
            ブランド設定やトーン、口調、世界観、商品登録など細かく調整可能です
          </p>
          <p>
            NGワードや禁止構成、CTA方針も設定でき、一貫性を保ったAIが<br />
            業種やターゲット、クライアントの世界観に応じた、投稿提案を行います
          </p>
          <p>
            クライアントに合わせた提案がAIから直接届くため、運用効率も向上し<br />
            マーケティング戦略に沿った内容で、手作業での調整を大幅に削減できます
          </p>
          <p>
            結果として、ブランドイメージを守りながら、一貫した運用が可能です
          </p>
        </div>
      </div>
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
