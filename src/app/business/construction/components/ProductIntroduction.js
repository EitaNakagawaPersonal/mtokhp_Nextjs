"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

const categorizedProducts = [
  {
    id: "architectural-wood",
    title: "建築用木材",
    products: [
      { title: "住宅建築材 一式", imageUrl: "/images/products/residential-building.avif" },
      { title: "土木用資材", imageUrl: "/images/products/civil-engineering.avif" },
      { title: "パレット・梱包資材", imageUrl: "/images/products/pallets-and-packaging.avif" },
      { title: "丁張板（12×75）", imageUrl: "/images/products/丁張板(12×75).jpg" },
      { title: "垂木（45角）", imageUrl: "/images/products/垂木(45角).jpg" },
      { title: "杭（長さ1,000〜）", imageUrl: "/images/products/杭(長さ1,000〜).jpg" },
      { title: "柱（90角・105角・120角）", imageUrl: "/images/products/柱(90角,105角,120角).jpg" },
      { title: "根太（45×60）", imageUrl: "/images/products/根太(45×60).jpg" },
      { title: "間柱（45×105）", imageUrl: "/images/products/間柱(45×105).jpg" },
    ],
  },
  {
    id: "housing-materials",
    title: "住宅用資材",
    products: [],
  },
];

export default function ProductIntroduction() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndexes, setActiveIndexes] = useState(
    Object.fromEntries(categorizedProducts.map((category) => [category.id, 0]))
  );
  const scrollRefs = useRef({});

  const updateActiveIndex = (categoryId) => {
    const container = scrollRefs.current[categoryId];
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

    setActiveIndexes((prev) => {
      if (prev[categoryId] === closestIndex) {
        return prev;
      }
      return {
        ...prev,
        [categoryId]: closestIndex,
      };
    });
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

        <div className="space-y-10">
          {categorizedProducts.map((category) => (
            <div key={category.id}>
              <h3 className="mb-4 text-center text-2xl font-bold text-gray-800">{category.title}</h3>

              {category.products.length === 0 ? (
                <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow">
                  現在、掲載準備中です。
                </div>
              ) : (
                <>
                  <div
                    ref={(node) => {
                      scrollRefs.current[category.id] = node;
                    }}
                    onScroll={() => updateActiveIndex(category.id)}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
                  >
                    {category.products.map((card, index) => (
                      <button
                        key={`${category.id}-${card.title}-${index}`}
                        type="button"
                        onClick={() => setSelectedImage({ imageUrl: card.imageUrl, title: card.title })}
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
                          <h4 className="text-lg font-semibold text-gray-800">{card.title}</h4>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center justify-center gap-2">
                    {category.products.map((_, index) => (
                      <span
                        key={`${category.id}-dot-${index}`}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          index === (activeIndexes[category.id] ?? 0) ? "bg-blue-700" : "bg-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
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
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
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
            aria-label="拡大画像を閉じる"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>
      ) : null}
    </section>
  );
}