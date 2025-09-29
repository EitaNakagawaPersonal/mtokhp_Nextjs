import { CubeTransparentIcon, BuildingOffice2Icon, SparklesIcon } from '@heroicons/react/24/outline';

// ご提供いただいた文章を3つの強みに分けてデータ化
const strengths = [
    {
        icon: <CubeTransparentIcon className="h-12 w-12 text-blue-800" />,
        title: '豊富な樹種の取り扱い',
        description: 'アピトン、米松、杉など、大型船の建造にも対応した耐久性のある素材を各種取り揃えております。',
    },
    {
        icon: <BuildingOffice2Icon className="h-12 w-12 text-blue-800" />,
        title: '関連製品の一貫製造',
        description: '船の進水台やコンクリ盤木なども全て自社で製造。高品質な製品を安定して供給することが可能です。',
    },
    {
        icon: <SparklesIcon className="h-12 w-12 text-blue-800" />,
        title: '高級木甲板にも対応',
        description: '意匠性が求められるクリやチークといった高級木材を使用した、特別な木甲板の製作も承っております。',
    },
];

export default function Strengths() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Our Strengths</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        木材のプロフェッショナルとしての強み
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        多種多様な木材の知識と確かな技術力で、お客様の造船プロジェクトを強力にサポートします。
                    </p>
                </div>

                <div className="mt-16">
                    {/* 強みをグリッドレイアウトで表示 (今回は3つのため、lgでは3列表示に調整) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {strengths.map((strength) => (
                            <div key={strength.title} className="p-8 bg-white/70 backdrop-blur-md rounded-lg shadow-lg text-center flex flex-col">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                                        {strength.icon}
                                    </div>
                                    <h3 className="mt-5 text-xl font-bold text-gray-900">{strength.title}</h3>
                                </div>
                                <div className="mt-2 flex-grow">
                                    <p className="text-base text-gray-600 text-left">{strength.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}