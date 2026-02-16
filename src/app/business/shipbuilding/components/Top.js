import Image from 'next/image';

//トップ画面のテキスト
const shipbuildingData = {
  title: "木材事業部 造船資材課",
  description: [
    "進水台・トリガー・盤木・油板・木甲板などを扱っております。",
    "特に盤木や進水台シェアは国内トップです。",
    "(樹種は南洋材及び国産堅木など)",
    "サイズ、穴あけ等に関して特殊加工が可能であり、",
    "木材・鉄材・コンクリ材まで幅広く扱っていることが弊社の強みです。"
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
        <div className="bg-transparent">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 左: テキスト */}
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                {shipbuildingData.title}
              </h2>
              <div className="space-y-6 text-lg opacity-95 leading-relaxed">
                {shipbuildingData.description.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* 右: 補助情報（空白） - ビジュアルバランス用 */}
            <div className="flex justify-end md:justify-end">
              {/* intentionally left blank for visual balance */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}