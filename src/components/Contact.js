// src/app/components/Contact.js

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
          <form className="space-y-4">
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
          {/* Googleマップ */}
          <div className="w-full h-[400px] mb-12 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.5833215535546!2d131.8841986763456!3d33.14695537351185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a6b281f6c46b%3A0x633d7db2724ee627!2z77yI5qCq77yJ44Oe44OE44Km44Jq!5e0!3m2!1sja!2sjp!4v1724226526148!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* 住所 */}
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left text-white">
            <div>
              <h3 className="font-bold text-lg mb-2">【木材部】</h3>
              <p>〒876-0822 大分県佐伯市西浜2-39</p>
              <p>0972-22-2611</p>
              <p>matuoka@cronos.ocn.ne.jp</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">【建材部】</h3>
              <p>〒876-0851 大分県佐伯市常盤東町9-5</p>
              <p>0972-23-2611</p>
              <p>matuokakenzai@fancy.ocn.ne.jp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}