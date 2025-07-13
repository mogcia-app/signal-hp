export default function DiagnosisPage() {
  return (
    <>
      {/* 1️⃣ 診断セクション */}
      <section className="w-full bg-[#fff3ea] py-30 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-8">SNS無料診断お申し込み</h1>
           <p className="mb-8 text-gray-700">
  AIと専門スタッフがあなたのSNSをじっくり分析し、<br/>
  本気で伸ばすためのプランを<span className="font-bold text-[#ff8a15]">オーダーメイド資料</span>にて提案します。<br/>
  そのため1〜7営業日ほどお時間をいただきますが、<br/>
  他にはない「あなた専用の戦略」をお届けします。
</p>       
          </div>

          <div className="flex justify-center">
            <img 
              src="/images/0602.jpg" 
              alt="診断イメージ" 
              className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mt-16 bg-gray-50 py-12 px-6 rounded-xl shadow-inner">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-[#ff8a15] mb-6 text-center">
      オーダーメイド資料とは？
    </h2>
    <p className="text-center text-gray-700 mb-8">
      無料診断では、あなたのSNSを詳しく分析し<br/>
      以下のような内容をオーダーメイドでお届けします。
    </p>
  
<div className="grid md:grid-cols-2 gap-8">
  {/* AIが自動で分析 */}
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-[#ff8a15] mb-4">AIが分析すること</h3>
    
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
      <h4 className="text-lg font-semibold mb-2">アカウントの現状分析</h4>
      <p className="text-sm text-gray-600">
        投稿内容・ターゲット・ブランドイメージをもとに、今のアカウントの強みや弱みをAIが可視化します。
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
      <h4 className="text-lg font-semibold mb-2">最適な投稿テーマ</h4>
      <p className="text-sm text-gray-600">
        どんな切り口・ハッシュタグ・クリエイティブが響きやすいかを1ヶ月分提案。
      </p>
    </div>
     <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
      <h4 className="text-lg font-semibold mb-2">目標達成の逆算プラン</h4>
     <p className="text-sm text-gray-600">
  カスタマージャーニーに沿って、何周目にどんな投稿をすればいいか？
  アカウントの数字がどれくらい下がったらどこを改善すべきか？
  具体的なPDCAレポートもお届けします。
</p>
    </div>
  </div>

  {/* 専門スタッフが提案 */}
  <div className="space-y-6">
  <h3 className="text-xl font-bold text-[#ff8a15] mb-4">専門スタッフが提案すること</h3>

  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
    <h4 className="text-lg font-semibold mb-2">ユーザー目線の課題発見</h4>
    <p className="text-sm text-gray-600">
      専任スタッフがフォロワー視点で「どこで離脱するか」「何が刺さっていないか」を
      客観的に分析し、改善ポイントを提案します。
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
    <h4 className="text-lg font-semibold mb-2">差別化・ブランディングのポイント</h4>
    <p className="text-sm text-gray-600">
      同業他社とどう差別化し、ファンを作るか。店舗やブランドに合った長期視点の提案も行います。
    </p>
  </div>

  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
    <h4 className="text-lg font-semibold mb-2">運用の効率化・続けやすさ</h4>
    <p className="text-sm text-gray-600">
      無理のない運用フローや役割分担、投稿ネタのストック方法までサポート。
      施策が続かない原因を洗い出し、継続できる体制を整えます。
    </p>
  </div>
</div>

</div>

  </div>
</section>


      {/* 2️⃣ フォームセクション */}
      <section className="w-full py-20 px-6">
        <div className="mb-10 text-center">
  <h2 className="text-2xl font-bold mb-4 text-[#ff8a15]">無料診断お申し込みフォーム</h2>
  <p className="text-gray-700 max-w-2xl mx-auto">
    入力内容が具体的であるほど、より実践的な診断が可能です。
    <br />
    レポートはPDF形式でお届けします。
    <br />
    SNSは、どれだけ本気で取り組むかで結果が大きく変わります。
<br />
「本気でSNSを伸ばしたい」と思っている方に
この無料診断をおすすめしています。
<br />
    まずはレポートをご覧いただき、今後のSNS戦略にお役立てください。
  </p>
</div>

        <div className="max-w-3xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: `
   <form class="formrun space-y-4 bg-gray-50 p-6 rounded-xl shadow" action="https://form.run/api/v1/r/6emid1n25ptrxqjyjvocdymh" method="post">
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">お名前</label>
    <input name="お名前" type="text" class="w-full border p-3 rounded" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">メールアドレス [必須]</label>
    <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required class="w-full border p-3 rounded" />
    <div data-formrun-show-if-error="メールアドレス" class="text-red-500 text-xs mt-1">メールアドレスを正しく入力してください</div>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">SNSの種類</label>
    <select name="SNSの種類" class="w-full border p-3 rounded">
      <option value="">選択してください</option>
      <option value="Instagram">Instagram</option>
      <option value="X (旧Twitter)">X (旧Twitter)</option>
      <option value="TikTok">TikTok</option>
      <option value="YouTube">YouTube</option>
    </select>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">SNSアカウント名またはURL</label>
    <input name="SNSアカウント" type="text" class="w-full border p-3 rounded" placeholder="@xxxxxx" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">事業ジャンル（例：韓国風カフェ / 苺大福専門店）</label>
    <textarea name="事業ジャンル" class="w-full border p-3 rounded"></textarea>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">ブランドの世界観・投稿トーン</label>
    <textarea name="世界観・トーン" class="w-full border p-3 rounded" placeholder="例：店内は高級感×黒基調、投稿はPOPな黄色イメージ"></textarea>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">目標フォロワー数</label>
    <input name="目標フォロワー数" type="text" class="w-full border p-3 rounded" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">ターゲット層（できるだけ具体的に）</label>
    <input name="ターゲット層" type="text" class="w-full border p-3 rounded" placeholder="例：20代前半・流行に敏感な女性" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">現在のお悩み・課題</label>
    <textarea name="現在のお悩み" class="w-full border p-3 rounded" placeholder="例：投稿が伸びない、リーチが増えない"></textarea>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">アカウントのゴール</label>
    <textarea name="アカウントのゴール" class="w-full border p-3 rounded" placeholder="例：店舗集客・ECで月50件購入など"></textarea>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">その他ご相談・気になること</label>
    <textarea name="その他相談したいこと" class="w-full border p-3 rounded" placeholder="例：広告は使うべき？競合との差別化ポイントなど"></textarea>
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700">個人情報利用同意 [必須]</label>
    <input type="checkbox" name="個人情報利用同意" data-formrun-required class="mr-2" />
    <span>同意します</span>
    <div data-formrun-show-if-error="個人情報利用同意" class="text-red-500 text-xs mt-1">同意してください</div>
  </div>
  <div class="_formrun_gotcha">
    <style>.formrun_gotcha{position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
    <label>If you are a human, ignore this field</label>
    <input type="text" name="_formrun_gotcha" tabindex="-1" />
  </div>
  <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." class="w-full bg-[#ff8a15] text-white py-3 rounded hover:bg-orange-600 transition">
    診断を申し込む
  </button>
</form>
<script src="https://sdk.form.run/js/v2/formrun.js"></script>

          `}} />
        </div>
      </section>
    </>
  );
}
