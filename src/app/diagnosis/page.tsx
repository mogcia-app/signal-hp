export default function DiagnosisPage() {
  return (
    <>
      {/* 1️⃣ 診断セクション */}
      <section className="w-full bg-[#fff3ea] py-30 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-8">SNS無料診断お申し込み</h1>
            <p className="mb-8 text-gray-700">
              AIと専門スタッフがあなたのSNSを診断し、
              <br/>
              無料で改善プランを提案します。
              <br/>
              お申し込み後、2〜3営業日以内にメールでお届けします。
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
                <label class="block mb-1 text-sm font-medium text-gray-700">SNSアカウント</label>
                <input name="SNSアカウント" type="text" class="w-full border p-3 rounded" />
              </div>
              <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">目標フォロワー数</label>
                <input name="目標フォロワー数" type="text" class="w-full border p-3 rounded" />
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
