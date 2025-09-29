import { BsBoxSeam } from 'react-icons/bs';

const strengths = [
    {
        icon: <BsBoxSeam className="h-12 w-12 text-blue-800" />,
        title: 'ワンストップ対応力',
        description: (
            <>
                建築に必要な全ての資材を一括で手配し、
                <br />
                現場への配達まで責任を持って丁寧に対応。
                <br />
                お客様の手間を大幅に削減します。
            </>
        ),
    },
];

export default function ConstructionStrengths() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Our Strengths</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        建築資材事業部の強み
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        資材調達のあらゆる手間を解消し、<br />
                        お客様のプロジェクトを円滑に進めます。
                    </p>
                </div>

                <div className="mt-16">
                    {/* 強みが1つのため、中央に配置 */}
                    <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
                        {strengths.map((strength) => (
                            <div key={strength.title} className="p-8 bg-white/70 backdrop-blur-md rounded-lg shadow-lg text-center flex flex-col">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto">
                                        {strength.icon}
                                    </div>
                                    <h3 className="mt-5 text-xl sm:text-lg font-bold text-gray-900">{strength.title}</h3>
                                </div>
                                <div className="mt-2 flex-grow">
                                    <p className="text-sm sm:text-base text-gray-600 text-center">{strength.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}