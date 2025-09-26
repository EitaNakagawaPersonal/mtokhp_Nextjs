// import Image from 'next/image';

// const shipbuildingData = {
//     title: "木材事業部 造船資材課",
//     description: [
//         "進水台・トリガー・盤木・油板・木甲板などを扱っております。",
//         "特に盤木や進水台シェアは国内トップです。",
//         "(樹種は南洋材及び国産堅木など)",
//         "\u00A0",
//         "サイズ、穴あけ等に関して特殊加工が可能であり、",
//         "木材・鉄材・コンクリ材まで幅広く扱っていることが弊社の強みです。"
//     ]
// };

// export default function Top() {
//     return (
//         <section className="font-serif-jp">
//             {/* 親コンテナの高さを画面の60%に（PC時） */}
//             <div className="grid md:grid-cols-2 min-h-[50vh] md:min-h-[70vh]">

//                 {/* 左カラム: テキスト */}
//                 <div className="bg-[#00305b] text-white p-15 flex flex-col justify-center">
//                     <div className="max-w-xl mx-auto pt-14">
//                         <h2 className="text-3xl sm:text-5xl font-bold mb-10">
//                             {shipbuildingData.title}
//                         </h2>

//                         <div className="space-y-4">
//                             {shipbuildingData.description.map((paragraph, index) => (
//                                 <p key={index} className="leading-relaxed text-lg">
//                                     {paragraph}
//                                 </p>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* 右カラム: 画像 */}
//                 <div className="relative min-h-[50vh] md:min-h-[60vh]">
//                     <Image 
//                         src="/images/shipbuilding-main.jpg"
//                         alt="造船資材イメージ" 
//                         layout="fill" 
//                         objectFit="cover" 
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }

import Image from 'next/image';

const shipbuildingData = {
    title: "木材事業部 造船資材課",
    description: [
        "進水台・トリガー・盤木・油板・木甲板などを扱っております。",
        "特に盤木や進水台シェアは国内トップです。",
        "(樹種は南洋材及び国産堅木など)",
        "\u00A0",
        "サイズ、穴あけ等に関して特殊加工が可能であり、",
        "木材・鉄材・コンクリ材まで幅広く扱っていることが弊社の強みです。"
    ]
};

export default function Top() {
    return (
        <section className="font-serif-jp">
            <div className="relative md:grid md:grid-cols-2 min-h-[50vh] md:min-h-[70vh]">
                
                {/* 背景画像 (順番は先に) */}
                <div className="relative min-h-[50vh] md:min-h-[60vh]">
                    <Image 
                        src="/images/shipbuilding-main.jpg"
                        alt="造船資材イメージ" 
                        layout="fill" 
                        objectFit="cover"
                        priority
                    />
                </div>
                
                {/* テキストブロック */}
                {/* 変更点①: justify-end で下揃えにし、px, pb で余白を調整。背景の黒い透過を削除 */}
                <div className="absolute inset-0 text-white px-8 pb-12 flex flex-col justify-end md:static md:bg-[#00305b] md:p-15 md:justify-center">
                    {/* 変更点②: drop-shadowでテキストに影をつけ、PCでは解除 */}
                    <div className="max-w-xl mx-auto drop-shadow-2xl md:drop-shadow-none">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-10">
                            {shipbuildingData.title}
                        </h2>
                        <div className="space-y-4">
                            {shipbuildingData.description.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed text-lg">
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