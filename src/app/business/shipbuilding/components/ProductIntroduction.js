"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

const productData = [
  { title: "【コンクリート盤木】", imageUrl: "/images/1_concrete_bangi.jpg" },
  { title: "【組盤木】", imageUrl: "/images/2_kumibangi.jpg" },
  { title: "【進水台トリガー】", imageUrl: "/images/3_shinsuidaitrigger.jpg" },
  { title: "【滑走台・浮力台】", imageUrl: "/images/4_kassoudaihuryokudai.jpg" },
  { title: "【鋼製進水用台車】(引上げ船台)", imageUrl: "/images/5_hikiagehunedai.jpg" },
  { title: "【R盤木】", imageUrl: "/images/6_rbangi.jpg" },
  { title: "【矢盤木】", imageUrl: "/images/7_yabangi.jpg" },
  { title: "【クッションボード】", imageUrl: "/images/8_cushionboard.jpg" },
  { title: "【ピンブロック】", imageUrl: "/images/9_pinblock.jpg" },
];

export default function ProductIntroduction() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const updateActiveIndex = () => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) {
      return;
    }

    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(viewportCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-800">Products</h2>
          <p className="mt-2 pb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            製品紹介
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateActiveIndex}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
        >
          {productData.map((card, index) => (
            <button
              key={`${card.title}-${index}`}
              type="button"
              onClick={() => setSelectedImage(card.imageUrl)}
              className="group block w-[82%] shrink-0 snap-center overflow-hidden rounded-lg bg-white text-center shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-[46%] lg:w-[31%]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 31vw"
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

        <div className="mt-2 flex items-center justify-center gap-2">
          {productData.map((_, index) => (
            <span
              key={`dot-${index}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-blue-700" : "bg-gray-300"
              }`}
              aria-hidden="true"
            />
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