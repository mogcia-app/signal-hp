export default function DiagnosisPage() {
  return (
    <>
      {/* 1️⃣ ヒーローセクション */}
      <section className="relative w-full bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-20 px-4 sm:px-6 lg:py-32 overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-200 rounded-full opacity-20 translate-x-24 translate-y-24"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                無料診断サービス
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                SNS無料診断
                <span className="block text-orange-500">お申し込み</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed space-y-4">
                <span className="block">
                  AIと専門スタッフがあなたのSNSをじっくり分析し、
                </span>
                <span className="block">
                  本気で伸ばすためのプランを
                  <span className="font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded">
                    オーダーメイド資料
                  </span>
                  にて提案します。
                </span>
                <span className="block text-gray-600">
                  そのため1〜7営業日ほどお時間をいただきますが、
                  他にはない「あなた専用の戦略」をお届けします。
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI自動分析
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  専門スタッフ対応
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  完全無料
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
                <img 
                  src="/images/0602.jpg" 
                  alt="診断イメージ" 
                  className="relative w-[280px] sm:w-[320px] lg:w-[380px] xl:w-[420px] h-auto rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ オーダーメイド資料セクション */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              オーダーメイド資料とは？
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              無料診断では、あなたのSNSを詳しく分析し
              以下のような内容をオーダーメイドでお届けします。
            </p>
          </div>
        
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* AIが自動で分析 */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AIが分析すること</h3>
                <p className="text-gray-600">最新のAI技術による客観的な分析</p>
              </div>
              
              <div className="space-y-6">
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">アカウントの現状分析</h4>
                      <p className="text-gray-600 leading-relaxed">
                        投稿内容・ターゲット・ブランドイメージをもとに、今のアカウントの強みや弱みをAIが可視化します。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">最適な投稿テーマ</h4>
                      <p className="text-gray-600 leading-relaxed">
                        どんなハッシュタグや投稿ジャンル・施策が響きやすいかを提案。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">目標達成の逆算プラン</h4>
                      <p className="text-gray-600 leading-relaxed">
                        カスタマージャーニーに沿って、何周目にどんな投稿をすればいいか？
                        アカウントの数字がどれくらい下がったらどこを改善すべきか？
                        具体的なPDCAレポートもお届けします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 専門スタッフが提案 */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">専門スタッフが提案すること</h3>
                <p className="text-gray-600">豊富な経験に基づく実践的なアドバイス</p>
              </div>

              <div className="space-y-6">
                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">ユーザー目線の課題発見</h4>
                      <p className="text-gray-600 leading-relaxed">
                        専任スタッフがフォロワー視点で「どこで離脱するか」「何が刺さっていないか」を
                        客観的に分析し、改善ポイントを提案します。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h6m-6 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2m0 0h6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">差別化・ブランディングのポイント</h4>
                      <p className="text-gray-600 leading-relaxed">
                        同業他社とどう差別化し、ファンを作るか。店舗やブランドに合った長期視点の提案も行います。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">運用の効率化・続けやすさ</h4>
                      <p className="text-gray-600 leading-relaxed">
                        無理のない運用フローや、投稿ネタのストック方法までサポート。
                        施策が続かない原因を洗い出し、継続できる体制を整えます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ フォームセクション */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              無料診断お申し込みフォーム
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-gray-700">
                入力内容が具体的であるほど、より実践的な診断が可能です。
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                レポートはPDF形式でお届けします
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            <div dangerouslySetInnerHTML={{ __html: `
              <form class="formrun space-y-6" action="https://form.run/api/v1/r/6emid1n25ptrxqjyjvocdymh" method="post">
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">お名前</label>
                    <input name="お名前" type="text" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">メールアドレス <span class="text-red-500">*</span></label>
                    <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
                    <div data-formrun-show-if-error="メールアドレス" class="text-red-500 text-xs mt-2">メールアドレスを正しく入力してください</div>
                  </div>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">SNSの種類</label>
                    <select name="SNSの種類" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                      <option value="">選択してください</option>
                      <option value="Instagram">Instagram</option>
                      <option value="X (旧Twitter)">X (旧Twitter)</option>
                      <option value="TikTok">TikTok</option>
                      <option value="YouTube">YouTube</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">SNSアカウント名またはURL</label>
                    <input name="SNSアカウント" type="text" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" placeholder="@xxxxxx" />
                  </div>
                </div>
                
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700">事業ジャンル</label>
                  <textarea name="事業ジャンル" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" placeholder="例：韓国風カフェ / 〇〇を使った苺大福専門店など"></textarea>
                </div>
                
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700">ブランドの世界観・投稿トーン</label>
                  <textarea name="世界観・トーン" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" placeholder="例：店内は高級感×黒基調、投稿はPOPな黄色イメージ"></textarea>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">目標フォロワー数</label>
                    <input name="目標フォロワー数" type="text" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">ターゲット層</label>
                    <input name="ターゲット層" type="text" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" placeholder="例：20代前半・流行に敏感な女性" />
                  </div>
                </div>
                
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700">SNS運用人数</label>
                  <textarea name="SNS運用人数" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" placeholder="例：全て１人で運用している/投稿・編集１名・撮影２名・分析１名など"></textarea>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">HP URL</label>
                    <textarea name="HP URL" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="2"></textarea>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-gray-700">SNS歴</label>
                    <textarea name="SNS歴" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="2" placeholder="例：Instagram3ヶ月など"></textarea>
                  </div>
                </div>
                
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700">現在のお悩み・課題</label>
                  <textarea name="現在のお悩み" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" placeholder="例：投稿が伸びない、リーチが増えない"></textarea>
                </div>
                
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700">アカウントのゴール</label>
                  <textarea name="アカウントのゴール" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" placeholder="例：店舗集客・ECで月50件購入など"></textarea>
                </div>
                
                <div>
                  <label class="block mb-2 text-sm font-semibold text-gray-700">その他ご相談・気になること</label>
                  <textarea name="その他相談したいこと" class="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200" rows="3" placeholder="例：広告は使うべき？競合との差別化ポイントなど"></textarea>
                </div>
                
                <div class="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <div class="flex items-start space-x-3">
                    <input type="checkbox" name="個人情報利用同意" data-formrun-required class="mt-1 w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
                    <div>
                      <label class="text-sm font-semibold text-gray-700">個人情報利用同意 <span class="text-red-500">*</span></label>
                      <p class="text-sm text-gray-600 mt-1">同意します</p>
                      <div data-formrun-show-if-error="個人情報利用同意" class="text-red-500 text-xs mt-2">同意してください</div>
                    </div>
                  </div>
                </div>
                
                <div class="_formrun_gotcha">
                  <style>.formrun_gotcha{position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
                  <label>If you are a human, ignore this field</label>
                  <input type="text" name="_formrun_gotcha" tabindex="-1" />
                </div>
                
                <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." class="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  診断を申し込む
                </button>
              </form>
              <script src="https://sdk.form.run/js/v2/formrun.js"></script>
            `}} />
          </div>
        </div>
      </section>
    </>
  );
}
