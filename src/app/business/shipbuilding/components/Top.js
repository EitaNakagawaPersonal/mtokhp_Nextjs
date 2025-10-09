import Image from 'next/image';

//トップ画面のテキスト
const shipbuildingData = {
  title: "木材事業部 造船資材課",
  description: [
    "進水台・トリガー・盤木・油板・木甲板などを扱っております。",
    "特に盤木や進水台シェアは国内トップです。",
    "(樹種は南洋材及び国産堅木など)",
    '\u00A0',
    "サイズ、穴あけ等に関して特殊加工が可能であり、",
    "木材・鉄材・コンクリ材まで幅広く扱っていることが弊社の強みです。"
  ]
};


export default function Top() {
  return (
    // 👇 pt-20 (ヘッダー分の余白) を削除しました
    <section className="font-serif-jp">
      <div className="md:grid md:grid-cols-2">
        
        {/* --- スマホ表示用のレイアウト --- */}
        <div className="relative min-h-[75vh] md:hidden">
          {/* 背景画像 */}
          <Image 
            src="/images/shipbuilding-main.jpg"
            alt="造船資材イメージ" 
            layout="fill" 
            objectFit="cover" 
            className="brightness-50"
          />
          {/* テキストコンテンツ */}
          {/* 👇 コンテンツに直接ヘッダー分の余白(pt-20)を追加 */}
          <div className="relative z-10 h-full flex flex-col justify-center text-white p-8 pt-20">
            <h2 className="text-4xl font-bold mb-8"> 
              {shipbuildingData.title}
            </h2>
            <div className="space-y-4">
              {shipbuildingData.description.map((paragraph, index) => (
                <p key={index} className="leading-normal text-lg"> 
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* --- PC表示用のレイアウト --- */}
        {/* 左カラム: テキスト */}
        <div className="hidden md:flex flex-col justify-center bg-[#00305b] text-white px-12 py-24 order-1">
          <div className="max-w-xl mx-auto"> 
            <h2 className="text-4xl sm:text-5xl font-bold mb-8"> 
              {shipbuildingData.title}
            </h2>
            <div className="space-y-6">
              {shipbuildingData.description.map((paragraph, index) => (
                <p key={index} className="leading-normal text-lg"> 
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* 右カラム: 画像 */}
        <div className="hidden md:block relative order-2">
          <Image 
            src="/images/shipbuilding-main.jpg"
            alt="造船資材イメージ" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>

      </div>
    </section>
  );
}