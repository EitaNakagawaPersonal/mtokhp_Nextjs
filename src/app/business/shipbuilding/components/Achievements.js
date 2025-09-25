"use client";
import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const achievementsData = [
    { title: "【函館ドック様】進水台トリガー", imageUrl: "/images/achievement1.png" },
    { title: "【某修繕ドック】特殊緩衝材", imageUrl: "/images/achievement2.png" },
    { title: "【佐伯重工業㈱様】ピンブロック・矢盤木", imageUrl: "/images/achievement3.png" },
    { title: "【㈱臼杵造船様 船台(ヘッド式)", imageUrl: "/images/achievement4.png" }
    ];

export default function Achievements() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 underline">納入実績</h2>

            {/* Swiperスライダー */}
            <div className="max-w-5xl mx-auto mb-24">
                <Swiper
                    modules={[Navigation, Pagination]} // 左右の矢印と下の点々(ページネーション)を有効にする
                    navigation // 左右の矢印を表示
                    pagination={{ clickable: true }} // 下の点々をクリック可能にする
                    loop={true} // 無限ループを有効にする
                    spaceBetween={30} // スライド間の余白
                    // 画面サイズごとのスライド表示枚数を設定
                    breakpoints={{
                        // 640px以上で2枚表示
                        640: {
                          slidesPerView: 2,
                        },
                        // 1024px以上で3枚表示
                        1024: {
                          slidesPerView: 3,
                        },
                      }}
                >
                    {achievementsData.map((item, index) => (
                        // 各スライドはSwiperSlideコンポーネントで囲む
                        <SwiperSlide key={index}>
                            <div 
                                className="text-center cursor-pointer group"
                                onClick={() => setSelectedImage(item.imageUrl)}
                            >
                                <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg transition-shadow group-hover:shadow-xl">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* --- ライトボックス（画像拡大表示） --- */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-4xl max-h-full">
                        <Image
                            src={selectedImage}
                            alt="拡大画像"
                            width={1920}
                            height={1080}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '90vh' }}
                        />
                    </div>
                    <button 
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                    >
                        <XMarkIcon className="w-8 h-8" />
                    </button>
                </div>
            )}
            <h3 className="font-bold">主なお取引企業 (順不同)</h3>
            <p>三菱重工業㈱、今治造船㈱、㈱大島造船所、尾道造船㈱、佐世保重工業㈱、㈱三和ドック、常石造船㈱、函館どつく㈱、㈱三浦造船所、三井E&S造船㈱、アスク・サンシンエンジニアリング㈱、双日マリンアンドエンジニアリング㈱、長崎船舶装備㈱、平井海運㈱、㈱みうら、㈱ワイ・エフ・エフ　他</p>
        </section>
    );
}