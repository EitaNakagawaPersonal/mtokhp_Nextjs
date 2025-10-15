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
            <div className="md:grid md:grid-cols-2">
                
                {/* --- スマホ表示用のレイアウト (md未満で表示) --- */}
                <div className="relative min-h-[75vh] md:hidden">
                    {/* 背景画像 */}
                    <Image 
                        src="/images/construction-main.jpg"
                        alt="建設資材イメージ" 
                        layout="fill" 
                        objectFit="cover" 
                        className="brightness-50" // 画像を少し暗くする
                    />
                    {/* テキストコンテンツ */}
                    {/* 変更箇所: pt-20を削除して中央揃えを正しく機能させる */}
                    <div className="relative z-10 h-full flex flex-col justify-center text-white p-8">
                        <h2 className="text-4xl font-bold mb-8"> 
                            {constructionData.title}
                        </h2>
                        <div className="space-y-4">
                            {constructionData.description.map((paragraph, index) => (
                                <p key={index} className="leading-normal text-lg"> 
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- PC表示用のレイアウト (md以上で表示) --- */}
                {/* 左カラム: テキスト */}
                <div className="hidden md:flex flex-col justify-center bg-[#f2debf] text-gray-800 px-12 py-24 order-1">
                    <div className="max-w-xl mx-auto"> 
                        <h2 className="text-4xl sm:text-5xl font-bold mb-8"> 
                            {constructionData.title}
                        </h2>
                        <div className="space-y-6">
                            {constructionData.description.map((paragraph, index) => (
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
                        src="/images/construction-main.jpg"
                        alt="建設資材イメージ" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>

            </div>
        </section>
    );
}