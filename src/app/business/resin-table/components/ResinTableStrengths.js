import { FaPalette } from 'react-icons/fa';
import { FaRulerHorizontal } from 'react-icons/fa';

const strengths = [
    {
        icon: <FaPalette className="h-12 w-12 text-blue-800" />,
        title: '芸術性とカスタム対応',
        description: (
            <>
                木材の表情を活かした芸術的な製品を製作。
                <br />
                樹種やサイズ、レジンの色味まで、
                <br />
                お客様のニーズに合わせたフルオーダーメイドが可能です。
            </>
        ),
    },
    {
        icon: <FaRulerHorizontal className="h-12 w-12 text-blue-800" />,
        title: '国内最大級の製作サイズ',
        description: (
            <>
                日本でも類を見ない最大8mの
                <br />
                巨大な一枚板天板の製作に対応。
                <br />
                逆目の起きない最高級の仕上がりをお約束します。
                <br />
            </>
        ),
    },
];

export default function ResinTableStrengths() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Our Strengths</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        レジン事業部の強み
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        芸術的な表現力と、それを実現する確かな技術力で、<br />
                        唯一無二の製品を生み出します。
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
                                    <p className="text-base text-gray-600 text-center">{strength.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}