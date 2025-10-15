"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const galleryData = [
  { id: 1, imageUrl: "/images/products/residential-building.avif", alt: "住宅建築材 一式" },
  { id: 2, imageUrl: "/images/products/civil-engineering.avif", alt: "土木用資材" },
  { id: 3, imageUrl: "/images/products/pallets-and-packaging.avif", alt: "パレット・梱包資材" },
];

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlideTitle, setActiveSlideTitle] = useState(galleryData[0].alt);

  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Products</h2>
          <p className="mt-2 text-3xl font-extrabold pb-10 text-gray-900 tracking-tight sm:text-4xl">
              製品紹介
          </p>
        </div>

        {/* --- メインのスライダー --- */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onSlideChange={(swiper) => {
            setActiveSlideTitle(galleryData[swiper.realIndex].alt);
          }}
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

        <h3 className="mt-4 text-center text-xl font-semibold text-gray-800">
          {activeSlideTitle}
        </h3>

        {/* --- サムネイル用のスライダー --- */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3} // 表示枚数を3枚に変更
          watchSlidesProgress={true}
          className="mt-4"
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id} className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              {/* 👇 画像とテキストをまとめるdivを追加 */}
              <div className="text-center">
                <div className="relative w-full aspect-square">
                   <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                {/* 👇 画像の下に題名を追加 */}
                <p className="mt-2 text-sm text-gray-700 truncate">{item.alt}</p>
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