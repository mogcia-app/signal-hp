"use client";
import { useState } from "react";

export default function DiagnosisPopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-2xl rounded-xl p-6 max-w-sm border-2 border-[#ff8a15] z-50 transition transform hover:scale-105">
      {/* ✕ 閉じるボタン */}
      <button 
        onClick={() => setVisible(false)} 
        className="absolute top-2 right-3 text-gray-400 hover:text-[#ff8a15] text-2xl"
        aria-label="閉じる"
      >
        &times;
      </button>

      {/* 上部イメージ */}
      <div className="flex justify-center mb-4">
        <img src="/images/0602.jpg" alt="SNS診断" className="w-32 h-32 mx-auto mb-4" />
      </div>

      {/* テキスト & ボタン */}
      <h3 className="text-xl font-bold mb-2 text-[#ff8a15] text-center">
       Signal.をご検討中の皆様へ<br />
        SNS無料診断受付中
      </h3>
      <p className="text-sm text-gray-700 mb-4 text-center">
        本気でSNSを伸ばしたい方限定で<br />
        AIと専門スタッフがあなたのSNSを無料診断します。<br />
       
      </p>
      <div className="flex justify-center">
        <a
          href="/diagnosis"
          className="inline-block bg-[#ff8a15] text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
        >
          無料診断を申し込む
        </a>
      </div>
    </div>
  );
}
