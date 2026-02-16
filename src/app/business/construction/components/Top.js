import Image from 'next/image';

const constructionData = {
    title: "​木材事業部 建築資材課",
    description: [
        "プロの方からdiy初心者の方まで",
        "お客様のニーズにお答えできる製材品を取り揃えております",
        "また ご希望のサイズなどあればオーダー加工も受けたまっております。",
        "​（ＡＤ・KD材、寺社仏閣で使用する特殊な寸法材も対応可能）"
    ]
};

export default function Top() {
    return (
        // フルブリード背景画像 + ダークオーバーレイで強い区切りを作る
        <section className="relative font-serif-jp w-full">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/construction-main.jpg"
                    alt="建設資材イメージ" 
                    fill 
                    className="object-cover" 
                />
                <div className="absolute inset-0 bg-black/35" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="min-h-[75vh] md:min-h-[60vh] flex flex-col justify-center text-white">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-8"> 
                            {constructionData.title}
                        </h2>
                        <div className="space-y-6">
                            {constructionData.description.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed text-lg opacity-95"> 
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