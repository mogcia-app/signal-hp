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
  本気で伸ばすためのプランを<span className="font-bold text-[#ff8a15]">オーダーメイド</span>で提案します。<br/>
  そのため2〜3営業日ほどお時間をいただきますが、<br/>
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
      どんな提案が届くの？
    </h2>
    <p className="text-center text-gray-700 mb-8">
      無料診断では、あなたのSNSを詳しく分析し<br/>
      以下のような内容をオーダーメイドでお届けします。
    </p>
   <div className="grid md:grid-cols-3 gap-8">
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
    <h3 className="text-lg font-semibold mb-2">アカウントの現状分析</h3>
    <p className="text-sm text-gray-600">
      投稿内容・ターゲット・ブランドイメージをもとに、今のSNSの強みや弱みを明確にします。
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
    <h3 className="text-lg font-semibold mb-2">目標達成の逆算プラン</h3>
    <p className="text-sm text-gray-600">
      フォロワー数やアカウントの目的など、ゴールから逆算してどんな投稿や施策が必要かを具体的に提案。
    </p>
  </div>
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#ff8a15] shadow hover:shadow-xl transform hover:scale-105 transition">
    <h3 className="text-lg font-semibold mb-2">あなた専用の投稿戦略</h3>
    <p className="text-sm text-gray-600">
      AIが傾向を分析し、実際にどんな切り口・ハッシュタグ・テーマで攻めるかを1ヶ月分具体化します。
    </p>
  </div>
</div>

  </div>
</section>


      {/* 2️⃣ フォームセクション */}
      <section className="w-full py-20 px-6">
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
    <label class="block mb-1 text-sm font-medium text-gray-700">SNSアカウント</label>
    <input name="SNSアカウント" type="text" class="w-full border p-3 rounded" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">目標フォロワー数</label>
    <input name="目標フォロワー数" type="text" class="w-full border p-3 rounded" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">ターゲット層（例：20代前半・自分磨き好き）</label>
    <input name="ターゲット層" type="text" class="w-full border p-3 rounded" />
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">現在のお悩み</label>
    <textarea name="現在のお悩み" class="w-full border p-3 rounded"></textarea>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">アカウントのゴール</label>
    <textarea name="アカウントのゴール" class="w-full border p-3 rounded"></textarea>
  </div>
  <div>
    <label class="block mb-1 text-sm font-medium text-gray-700">その他相談したいこと</label>
    <textarea name="その他相談したいこと" class="w-full border p-3 rounded"></textarea>
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
