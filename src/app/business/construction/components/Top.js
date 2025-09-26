import Image from 'next/image';

const constructionData = {
    title: "​木材事業部 建築資材課",
    description: [
        "プロの方からdiy初心者の方まで",
        "\u00A0",
        "お客様のニーズにお答えできる製材品を取り揃えております",
        "また ご希望のサイズなどあればオーダー加工も受けたまっております。",
        "​（ＡＤ・KD材、寺社仏閣で使用する特殊な寸法材も対応可能）"
    ]
};

export default function Top() {
    return (
        <section className="font-serif-jp">
            <div className="relative md:grid md:grid-cols-2 min-h-[50vh] md:min-h-[70vh]">
                {/* 画像 */}
                <div className="relative min-h-[50vh] md:min-h-[60vh]">
                    <Image 
                        src="/images/construction-main.jpg"
                        alt="建設資材イメージ" 
                        layout="fill" 
                        objectFit="cover"
                        priority
                    />
                </div>
                
                {/* テキストブロック */}
                <div className="absolute inset-0 text-black px-8 pb-16 flex flex-col justify-end md:static md:bg-[#f2debf] md:p-15 md:justify-center">
                    <div className="max-w-xl mx-auto drop-shadow-xl md:drop-shadow-none">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-10">
                            {constructionData.title}
                        </h2>
                        <div className="space-y-4">
                            {constructionData.description.map((paragraph, index) => (
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