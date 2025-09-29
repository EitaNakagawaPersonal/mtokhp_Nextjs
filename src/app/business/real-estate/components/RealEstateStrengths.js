import { FaHandshake } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const strengths = [
    {
        icon: <FaHandshake className="h-12 w-12 text-blue-800" />,
        title: '創業70年の信頼と地域密着',
        description: '大分県を中心に創業70年。長年培った信頼と知識を基に、常にお客様目線の情報提供を徹底しています。',
    },
    {
        icon: <FaGlobe className="h-12 w-12 text-blue-800" />,
        title: '多言語対応（英語・韓国語）',
        description: '英語・韓国語での対応が可能です。海外のお客様でも、言語の壁なく安心してご相談いただけます。',
    },
];

export default function RealEstateStrengths() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Our Strengths</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        不動産事業部の強み
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        長年の信頼とグローバルな視点で、<br />
                        お客様の不動産に関するあらゆるご相談にお応えします。
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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