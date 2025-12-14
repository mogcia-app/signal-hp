export default function AboutSignalSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      {/* 背景画像 */}
      <div 
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
        style={{
          backgroundImage: 'url(/images/Signal003.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative h-full w-full flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black drop-shadow-2xl z-10 mb-4 sm:mb-6 text-center">
              Signal<span className="text-[#ff8a15]">.</span>の解決アプローチ
            </h3>
            <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 z-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-black drop-shadow-lg leading-tight">
                ノウハウゼロから続けられるSNS運用へ
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black/80 drop-shadow-md leading-relaxed">
                御社専用AIがあなたの投稿内容を学習し、続けられる仕組みで<br />
                無理なく、迷わず、自然に運用できる環境をつくります
              </p>
            </div>
          </div>

          {/* デスクトップ用の左右テキストレイアウト */}
          <div className="hidden lg:flex lg:justify-between lg:items-start w-full mt-8 lg:mt-12 z-10 px-8 xl:px-16 2xl:px-24">
            <div className="space-y-4 max-w-md">
              <h4 className="text-lg lg:text-xl font-semibold text-black drop-shadow-lg">
                <span className="bg-[#ff8a15]/50 px-1 py-0.5 rounded-sm">
                  学習AIによるアカウント最適化
                </span>
              </h4>
              <p className="text-xs lg:text-sm text-black/90 drop-shadow-md leading-relaxed space-y-2">
                <span className="block">
                  投稿履歴・業種・トーン・NGワード、成功例などの情報を自動で蓄積し、アカウント専用の"学習データベース"を構築します。
                </span>
                <span className="block">
                  使えば使うほど精度が上がるため、担当者が変わっても品質を維持でき、ブランド一貫性を保った投稿生成・分析・提案が可能になります。
                </span>
                <span className="block font-semibold">
                  →属人化を排除し、クライアントごとの対応負荷を大幅に削減
                </span>
              </p>
            </div>
            <div className="space-y-4 max-w-md text-right">
              <h4 className="text-lg lg:text-xl font-semibold text-black drop-shadow-lg">
                <span className="bg-[#ff8a15]/50 px-1 py-0.5 rounded-sm">
                  PDCAによる改善サイクルの継続
                </span>
              </h4>
              <p className="text-xs lg:text-sm text-black/90 drop-shadow-md leading-relaxed space-y-2">
                <span className="block">
                  AIが分析・改善点の抽出から次の投稿案の提案までを自動で実行。<br />誰でもムリなくPDCAを回し続けられる運用体制を実現します。
                </span>
                <span className="block">
                  運用者は「判断」と「クリエイティブ」に集中できるため<br />店舗でもチームでも、工数を増やさずに継続的な改善が可能に。
                </span>
                <span className="block font-semibold">
                  →人手やスキルに依存しない、スケーラブルなSNS運用へ。
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 lg:hidden">
        {/* 学習AIによるアカウント最適化 */}
        <div className="space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-slate-900">
            <span className="bg-[#ff8a15]/50 px-1 py-0.5 rounded-sm">
              学習AIによるアカウント最適化
            </span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            投稿履歴・業種・トーンなどの情報を自動で蓄積し、アカウント専用の"学習データベース"を構築。<br />使えば使うほど精度が上がり、担当者が変わっても品質を維持できます。
          </p>
        </div>

        {/* PDCAによる改善サイクルの継続 */}
        <div className="space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-slate-900">
            <span className="bg-[#ff8a15]/50 px-1 py-0.5 rounded-sm">
              PDCAによる改善サイクルの継続
            </span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            AIが分析・改善点の抽出から次の投稿案の提案までを自動で実行。<br />運用者は「判断」と「クリエイティブ」に集中でき、工数を増やさずに継続的な改善が可能です。
          </p>
        </div>
      </div>
    </section>
  );
}

