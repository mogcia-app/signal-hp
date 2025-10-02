export default function PageName() {
  return (
    <div className="w-full">
      {/* ================== メインビュー ================== */}
      <div className="relative w-full py-24 px-6 bg-gradient-to-br from-white via-[#fff7ed] to-[#ff8a15]/10 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff8a15]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ff8a15]/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#ff8a15]/5 rounded-full blur-xl"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#ff8a15]/20 px-4 py-2 rounded-lg shadow-lg">
              <div className="w-2 h-2 bg-[#ff8a15] rounded-full animate-pulse"></div>
              <span className="text-[#ff8a15] font-semibold text-sm">導入フロー</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              導入までの
              <span className="text-[#ff8a15]">流れ</span>
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              ツールの導入から運用まで、専任スタッフが伴走。<br />
              AIを活用したSNS戦略を御社に最適化します。<br />
              御社のSNS運用に合わせて柔軟にカスタマイズ可能です。<br />
              まずはお気軽にご相談ください。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#ff8a15] text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                無料相談してみる
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center bg-white text-[#ff8a15] border-2 border-[#ff8a15] px-8 py-4 rounded-lg font-bold hover:bg-[#ff8a15] hover:text-white transition-all duration-300"
              >
                よくある質問
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img
                src="/images/000.svg"
                alt="導入イメージ"
                className="w-full h-auto rounded-lg"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#ff8a15] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#ff8a15]">
                <span className="text-[#ff8a15] font-bold text-lg">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ================== 導入までの流れ（カード） ================== */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ff8a15]/10 border border-[#ff8a15]/20 px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#ff8a15] rounded-full animate-pulse"></div>
              <span className="text-[#ff8a15] font-semibold text-sm">導入ステップ</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              簡単<span className="text-[#ff8a15]">5ステップ</span>で開始
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Signal.はヒアリングからツール完成まで約1ヶ月でご利用開始可能です。<br />
              専任スタッフが設計から運用までしっかり伴走いたします。
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-5">
            {[
              { step: "01", title: "お問い合わせ", desc: "フォームからお気軽に。翌営業日にご連絡します。", icon: "📞" },
              { step: "02", title: "ヒアリング", desc: "運用状況を詳しくヒアリング。", icon: "💬" },
              { step: "03", title: "カスタマイズ", desc: "御社SNSに合わせツールを専用設計。", icon: "⚙️" },
              { step: "04", title: "導入開始", desc: "計画設定・操作レクチャーでスムーズに。", icon: "🚀" },
              { step: "05", title: "運用サポート", desc: "改善レポート・次のアクションも継続提案。", icon: "📈" },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                {/* Connection Line */}
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#ff8a15]/30 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-white/80 backdrop-blur-sm border border-[#ff8a15]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#ff8a15]/40">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-[#ff8a15] text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center">{item.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-[#ff8a15] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff8a15]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== 導入ステップ詳細 ================== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ff8a15]/10 border border-[#ff8a15]/20 px-4 py-2 rounded-lg mb-6">
              <div className="w-2 h-2 bg-[#ff8a15] rounded-full animate-pulse"></div>
              <span className="text-[#ff8a15] font-semibold text-sm">詳細フロー</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              各ステップの<span className="text-[#ff8a15]">詳細</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              導入から運用まで、各段階でどのようなサポートを受けられるかを詳しくご説明します。
            </p>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "お問い合わせ",
                text: "まずはフォームまたはお電話からご連絡ください。専任スタッフが迅速にご対応し、オンラインミーティングの日程をご提案します。",
                icon: "📞",
                color: "from-blue-500 to-blue-600"
              },
              {
                num: "2",
                title: "ヒアリング・現状分析",
                text: "約60分のオンライン面談にて、現在のSNS運用状況や課題、今後の目標について詳しくお伺いします。その上で、最適な戦略設計の方向性を一緒に検討します。",
                icon: "💬",
                color: "from-green-500 to-green-600"
              },
              {
                num: "3",
                title: "ご契約",
                text: "ご予算やSNSの運用規模に合わせ、最適なプランをご提案。内容にご納得いただいた上で正式にご契約いただきます。",
                icon: "📋",
                color: "from-purple-500 to-purple-600"
              },
              {
                num: "4",
                title: "AIカスタマイズ・設計",
                text: "ヒアリング内容をもとに、御社専用にAIをチューニング。必要に応じてヒアリングページや管理画面をカスタマイズし、最適な運用環境を整備します。",
                icon: "⚙️",
                color: "from-orange-500 to-orange-600"
              },
              {
                num: "5",
                title: "初期設定・操作レクチャー",
                text: "御社データを設定した後、管理画面の使い方やPDCAサイクルの進め方を丁寧にレクチャーいたします。",
                icon: "🎓",
                color: "from-teal-500 to-teal-600"
              },
              {
                num: "6",
                title: "運用開始 & 伴走サポート",
                text: "運用を開始後も、月次ミーティングやチャットで改善提案を継続。専任スタッフが伴走しながらSNS運用の成果を最大化します。",
                icon: "🚀",
                color: "from-red-500 to-red-600"
              },
              {
                num: "7",
                title: "いつでも相談できる体制",
                text: "ご契約後は専用のグループチャットへご招待。気になることがあればいつでもご質問ください。スピーディにサポートいたします。",
                icon: "💡",
                color: "from-indigo-500 to-indigo-600"
              },
            ].map((step, idx) => (
              <div key={idx} className="group">
                <div className="flex items-start gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      <span className="text-white font-bold text-xl">{step.num}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-lg">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-[#ff8a15]/30">
                    <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-[#ff8a15] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
                
                {/* Connection Line */}
                {idx < 6 && (
                  <div className="ml-8 mt-4 mb-4 w-0.5 h-8 bg-gradient-to-b from-[#ff8a15]/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== CTA セクション ================== */}
      <section className="py-24 bg-gradient-to-br from-[#ff8a15] via-[#ff8a15] to-[#ff6b00] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-lg mb-8">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm">無料相談</span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              御社だけのSNS戦略を
              <br />
              <span className="text-white/90">一緒に見つけませんか？</span>
            </h2>
            
            {/* Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                これからSNSを本格的に始めたい方。<br />
                すでに投稿を頑張っているけれど、<br />
                「数字が伸びない」「次に何をすればいいか分からない」<br />
                と感じている方へ。
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                Signal.は、AIと専門スタッフの力で、<br />
                御社だけのSNS戦略をゼロから一緒に設計し、<br />
                運用のお悩みを解決します。
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed">
                投稿内容の提案から週次の振り返りまで。<br />
                いつの間にか止まってしまいがちなSNSを、<br />
                継続しやすい仕組みに変えていきませんか？
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white text-[#ff8a15] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                無料相談してみる
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="/faq" 
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#ff8a15] transition-all duration-300"
              >
                よくある質問
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>無料相談</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>翌営業日回答</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>オンライン対応</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
