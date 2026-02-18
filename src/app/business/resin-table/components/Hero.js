import Image from 'next/image';

const Hero = () => {
  return (
    // フルブリード背景画像 + ダークオーバーレイで強い区切りを作る
    <section className="relative font-serif-jp w-full">
      <div className="absolute inset-0 z-0">
        <Image src="/images/resin-table/resin1.jpg" alt="レジンテーブル" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="min-h-[75vh] md:min-h-[60vh] flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">レジンテーブル事業</h2>
            <div className="space-y-6">
              <p className="leading-relaxed text-lg opacity-95">木とレジンが織りなす、世界にひとつだけの美。</p>
              <p className="leading-relaxed text-lg opacity-95">職人の感性と確かな技術が生み出す、唯一無二のレジンテーブル。</p>
              <p className="leading-relaxed text-lg opacity-95">素材の魅力を最大限に引き出し、空間に新たな価値を創造します。</p>
              <p className="leading-relaxed text-lg opacity-95">暮らしやビジネスシーンに、上質な存在感を。</p>
              <p className="leading-relaxed text-lg opacity-95">マツオカ建材のレジン事業部が、その想いをかたちにします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;