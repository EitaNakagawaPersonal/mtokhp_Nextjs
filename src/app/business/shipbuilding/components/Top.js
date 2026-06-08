import Image from 'next/image';

//トップ画面のテキスト
const shipbuildingData = {
  title: "造船資材事業",
  description: [
    "強度と機能を兼ね備えた木材で、",
    "世界に誇る日本の造船産業を支える。",
  ]
};


export default function Top() {
  return (
    // フルブリード背景画像 + ダークオーバーレイで強い区切りを作る
    <section className="relative font-serif-jp w-full">
      <div className="absolute inset-0 z-0">
        <Image src="/images/shipbuilding-main.jpg" alt="造船資材イメージ" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="min-h-[75vh] md:min-h-[60vh] flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
              {shipbuildingData.title}
            </h2>
            <div className="space-y-2">
              {shipbuildingData.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-lg sm:text-xl opacity-95">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}