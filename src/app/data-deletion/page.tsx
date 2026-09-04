export default function DataDeletionPage() {
  return (
    <div className="max-w-4xl mx-auto py-30 px-6">
      <h1 className="text-3xl font-bold mb-8">データ削除</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Signal.に保存されたInstagram連携情報および利用者情報の削除を希望する場合は、Signal.の設定画面から削除手続きを行うか、登録メールアドレスから
          <a href="mailto:info@mogcia.jp" className="mx-1 font-semibold text-[#ff8a15] underline">
            info@mogcia.jp
          </a>
          までご連絡ください。
        </p>

        <p>
          削除対象には、Instagram接続情報、同期済みの投稿・分析情報、予約投稿、アップロードした画像・動画およびSignal.の利用アカウントが含まれます。法令上またはセキュリティ上保存が必要な情報を除き、確認後に削除します。
        </p>

        <div className="border border-[#efdfc7] bg-[#fffaf2] p-6">
          <h2 className="text-xl font-semibold text-slate-900">お問い合わせ窓口</h2>
          <p className="mt-4">
            運営会社：株式会社MOGCIA
            <br />運営会社サイト：https://www.mogcia.net/
            <br />お問い合わせ：info@mogcia.jp
            <br />サポート窓口：support@mogcia.com
            <br />セキュリティ窓口：security@mogcia.com
          </p>
        </div>
      </div>
    </div>
  );
}
