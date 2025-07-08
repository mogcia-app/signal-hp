"use client";
"use client";
export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
      <p className="mb-4 text-gray-600">
        ご質問やご相談は以下のフォームからお気軽にお送りください。
      </p>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://form.run/embed/@marina-ishida-8PSsDnkMfFs4zKFWzhze?embed=direct"
          style={{ width: '100%', height: '600px', border: 'none' }}
          frameBorder="0"
        ></iframe>
      </div>
    </main>
  );
}
