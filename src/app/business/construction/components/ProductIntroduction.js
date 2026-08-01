"use client";

import { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

const productData = [
  { title: "住宅建築材 一式", imageUrl: "/images/products/residential-building.avif" },
  { title: "土木用資材", imageUrl: "/images/products/civil-engineering.avif" },
  { title: "パレット・梱包資材", imageUrl: "/images/products/pallets-and-packaging.avif" },
  { title: "丁張板（12×75）", imageUrl: "/images/products/丁張板(12×75).jpg" },
  { title: "垂木（45角）", imageUrl: "/images/products/垂木(45角).jpg" },
  { title: "杭（長さ1,000〜）", imageUrl: "/images/products/杭(長さ1,000〜).jpg" },
  { title: "柱（90角・105角・120角）", imageUrl: "/images/products/柱(90角,105角,120角).jpg" },
  { title: "根太（45×60）", imageUrl: "/images/products/根太(45×60).jpg" },
  { title: "間柱（45×105）", imageUrl: "/images/products/間柱(45×105).jpg" },
];

export default function ProductIntroduction() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-800">Products</h2>
          <p className="mt-2 pb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            製品紹介
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {productData.map((card, index) => (
            <button
              key={`${card.title}-${index}`}
              type="button"
              onClick={() => setSelectedImage(card.imageUrl)}
              className="group block overflow-hidden rounded-lg bg-white text-center shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-bold text-white">画像を拡大</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              </div>
            </button>
          ))}
        </div>

      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-2 py-2 sm:px-4 sm:py-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full w-full max-w-5xl overflow-hidden rounded-none shadow-2xl sm:rounded-2xl">
            <div className="animate-[pop_0.25s_ease-out]">
              <Image
                src={selectedImage}
                alt="拡大画像"
                width={1200}
                height={800}
                className="max-h-[90vh] w-full object-contain"
                sizes="100vw"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>
      ) : null}
    </section>
  );
}