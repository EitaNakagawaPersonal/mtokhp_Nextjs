import Image from 'next/image';

const Hero = () => {
  return (
    // フルブリード背景画像 + ダークオーバーレイで強い区切りを作る
    <section className="relative font-serif-jp w-full">
      <div className="absolute inset-0 z-0">
        <Image src="/images/resin-table/resin1.jpg" alt="レジンテーブル" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="bg-transparent">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 左: テキスト */}
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-8">レジンテーブル事業</h1>
              <div className="text-lg opacity-95 leading-relaxed space-y-4">
                <p>木とレジンが織りなす、世界にひとつだけの美。</p>
                <p>職人の感性と確かな技術が生み出す、唯一無二のレジンテーブル。</p>
                <p>素材の魅力を最大限に引き出し、空間に新たな価値を創造します。</p>
                <p>暮らしやビジネスシーンに、上質な存在感を。</p>
                <p>マツオカ建材のレジン事業部が、その想いをかたちにします。</p>
              </div>
            </div>

            {/* 右: 補助情報（空白） */}
            <div className="flex justify-end md:justify-end">
              {/* intentionally left blank for visual balance */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;