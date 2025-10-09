"use client";

import { useState } from 'react';
import Image from 'next/image';

// Swiper関連のインポート
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

// Swiperの基本スタイルと、今回使う機能のスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// 表示する画像のデータ（実際の画像パスに差し替えてください）
const galleryData = [
  { id: 1, imageUrl: "/images/products/kitchen.jpg", alt: "キッチン" },
  { id: 2, imageUrl: "/images/products/carport.jpg", alt: "カーポート" },
  { id: 3, imageUrl: "/images/products/toilet.jpg", alt: "トイレ" },
  { id: 4, imageUrl: "/images/products/bathroom.jpg", alt: "バスルーム" },
  { id: 5, imageUrl: "/images/products/window.jpg", alt: "窓" },
  { id: 6, imageUrl: "/images/products/floor.jpg", alt: "フローリング" },
  { id: 7, imageUrl: "/images/products/bricks.jpg", alt: "壁材" },
  { id: 8, imageUrl: "/images/products/storage.jpg", alt: "収納" },
];

export default function ProductGallery() {
  // サムネイル用のSwiperインスタンスをstateで管理
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Products</h2>
          <p className="mt-2 text-3xl font-extrabold pb-10 text-gray-900 tracking-tight sm:text-4xl">
              製品紹介
          </p>
      </div>

        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className="w-full rounded-lg shadow-lg"
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- サムネイル用のスライダー --- */}
        <Swiper
          modules={[Thumbs]}
          // 👇 このスライダーのインスタンスをstateに保存
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={5} // 表示するサムネイルの数
          watchSlidesProgress={true}
          className="mt-4"
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id} className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="relative w-full aspect-square">
                 <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- お取引企業様 --- */}
        <div className="mt-16 text-center text-gray-700">
            <h3 className="font-semibold">お取引企業様(順不同)</h3>
            <p className="mt-2 text-sm">
                YKKAP㈱、タカラスタンダード㈱、㈱LIXIL、パナソニック㈱　他
            </p>
        </div>

      </div>
    </section>
  );
}