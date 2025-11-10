export default function Contact() {
  const contactVideo = "/videos/contact_video.mp4"; // 動画のパス

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
          <form action="https://formspree.io/f/mqawzjyp" method="POST" className="space-y-4">
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
              <button type="submit" className="px-8 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                送信する
              </button>
            </div>
          </form>
        </div>

        {/* --- 下部: マップと住所 --- */}
        <div>
          {/* ... (マップと住所のコードは変更なし) ... */}
        </div>
      </div>
    </section>
  );
}