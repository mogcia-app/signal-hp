export default function ThankYouPage() {
  return (
    <div className="max-w-4xl mx-auto py-30 px-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#ff8a15]">お問い合わせありがとうございます</h1>
      <p className="text-gray-700 text-lg mb-6">
        フォームの送信が完了しました。<br />
        担当者が確認し、翌営業日までにご連絡差し上げますので<br />
        しばらくお待ちください。
        <br /><br />
        SNS無料診断レポートに関しましては2-7営業日以内にお送りしております。
      </p>
      <a
        href="/"
        className="inline-block mt-8 bg-[#ff8a15] text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
      >
        トップページへ戻る
      </a>
    </div>
  );
}
