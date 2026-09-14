"use client";
import { useState } from 'react';

export default function Contact() {
  const contactVideo = "/videos/contact_video.mp4";
  
  // フォームの送信状態を管理するためのstate
  const [status, setStatus] = useState('');

  // フォームが送信されたときの処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルト送信（画面遷移）をキャンセル
    setStatus('送信中...');

    const form = e.target;
    const data = new FormData(form);

    try {
      // タイムアウト設定を追加
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒

      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setStatus('送信しました。ありがとうございます！');
        form.reset();
      } else {
        // ステータスコード別のエラーハンドリング
        if (response.status === 400) {
          setStatus('入力項目が不正です。もう一度確認してください。');
        } else if (response.status === 429) {
          setStatus('送信が多すぎます。しばらく後にお試しください。');
        } else {
          setStatus(`エラーが発生しました（${response.status}）。もう一度お試しください。`);
        }
      }
    } catch (error) {
      // タイムアウトエラー
      if (error.name === 'AbortError') {
        setStatus('送信がタイムアウトしました。通信環境を確認してください。');
      }
      // ネットワークエラー
      else if (error instanceof TypeError) {
        setStatus('ネットワーク接続がありません。接続を確認してください。');
      }
      // その他のエラー
      else {
        setStatus('予期しないエラーが発生しました。');
        console.error('Contact form error:', error);
      }
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden">
      {/* 背景動画 */}
      <video
        src={contactVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1] blur-sm"
      ></video>
      
      {/* 背景のオーバーレイ */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 全体のコンテンツコンテナ */}
      <div className="relative container mx-auto px-4 py-16 sm:py-24">
        
        {/* --- 上部: お問い合わせフォーム --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 sm:mb-24">
          {/* 左側: タイトルと説明 */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">お問い合わせフォーム</h2>
            <p className="leading-relaxed">
              「DIY用にこんな板が欲しい」<br />
              「特殊な寸法の材だけど大丈夫？」など、<br />
              どんなお問い合わせでもご対応させていただきます！
            </p>
          </div>

          {/* 右側: フォーム本体 */}
          {/* 👇 onSubmitイベントハンドラを追加 */}
          <form 
            onSubmit={handleSubmit}
            action={process.env.NEXT_PUBLIC_FORMSPREE_URL}  
            method="POST" 
            className="space-y-4"
          >
            {/* ... (input, labelタグは変更なし) ... */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">氏名/法人名 *</label>
              <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-500 bg-white/10 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">E-Mail *</label>
              <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-500 bg-white/10 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-gray-200 mb-1">TEL</label>
              <input type="tel" id="tel" name="tel" className="w-full p-3 border border-gray-500 bg-white/10 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">お問い合わせ内容</label>
              <textarea id="message" name="message" rows={6} className="w-full p-3 border border-gray-500 bg-white/10 text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50"
                disabled={status === '送信中...'}
              >
                {status === '送信中...' ? '送信中...' : '送信する'}
              </button>
            </div>
            {status && <p className="text-white text-center mt-4">{status}</p>}
          </form>
        </div>

        {/* --- 下部: マップと住所 --- */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* 木材部 */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">木材部</h3>
            <div className="space-y-1 mb-4">
              <p>〒876-0822 大分県佐伯市西浜2-39</p>
              <p>TEL: 0972-22-2611</p>
              <p>
                Email:{" "}
                <a href="mailto:matuoka@cronos.ocn.ne.jp" className="underline hover:text-blue-300">
                  matuoka@cronos.ocn.ne.jp
                </a>
              </p>
            </div>
            <div className="w-full aspect-video overflow-hidden rounded-md shadow-lg">
              <iframe
                title="木材部 地図"
                src="https://www.google.com/maps?q=%E5%A4%A7%E5%88%86%E7%9C%8C%E4%BD%90%E4%BC%AF%E5%B8%82%E8%A5%BF%E6%B5%9C2-39&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* 建材部 */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">建材部</h3>
            <div className="space-y-1 mb-4">
              <p>〒876-0851 大分県佐伯市常盤東町9-5</p>
              <p>TEL: 0972-23-2611</p>
              <p>
                Email:{" "}
                <a href="mailto:matuokakenzai@fancy.ocn.ne.jp" className="underline hover:text-blue-300">
                  matuokakenzai@fancy.ocn.ne.jp
                </a>
              </p>
            </div>
            <div className="w-full aspect-video overflow-hidden rounded-md shadow-lg">
              <iframe
                title="建材部 地図"
                src="https://www.google.com/maps?q=%E5%A4%A7%E5%88%86%E7%9C%8C%E4%BD%90%E4%BC%AF%E5%B8%82%E5%B8%B8%E7%9B%A4%E6%9D%B1%E7%94%BA9-5&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}