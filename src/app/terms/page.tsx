export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-40 px-6">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          この利用規約（以下「本規約」といいます）は、株式会社MOGCIA（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
          本サービスをご利用されるお客様（以下「ユーザー」といいます）は、本規約に同意の上、本サービスをご利用ください。
        </p>

        <h2 className="text-xl font-semibold mt-6">第1条（適用）</h2>
        <p>
          本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
        </p>

        <h2 className="text-xl font-semibold mt-6">第2条（利用登録）</h2>
        <p>
          登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することで、利用登録が完了します。
        </p>

        <h2 className="text-xl font-semibold mt-6">第3条（禁止事項）</h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
        <ul className="list-disc list-inside ml-4">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当社のサービス運営を妨害する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">第4条（本サービスの提供の停止等）</h2>
        <p>
          当社は、以下のいずれかに該当する場合には、ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断できるものとします。
          <br />
          1. システムの保守点検または更新を行う場合
          <br />
          2. 天災地変や停電等の不可抗力によりサービスの提供が困難となった場合
        </p>

        <h2 className="text-xl font-semibold mt-6">第5条（免責事項）</h2>
        <p>
          当社の債務不履行責任は、当社の故意または重過失によらない限り免責されるものとします。
          また、本サービスに関してユーザーと他のユーザーまたは第三者との間に生じた取引、連絡、紛争等については、
          当社は一切責任を負いません。
        </p>

        <h2 className="text-xl font-semibold mt-6">第6条（規約の変更）</h2>
        <p>
          当社は必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更できます。
          変更後の利用規約は、本ウェブサイト上に掲載した時点から効力を生じるものとします。
        </p>

        <h2 className="text-xl font-semibold mt-6">第7条（準拠法・裁判管轄）</h2>
        <p>
          本規約の解釈にあたっては、日本法を準拠法とします。
          本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
        </p>

        <p className="mt-8 text-sm text-gray-500">制定日：2025年7月9日</p>
      </div>
    </div>
  );
}
