'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryClient({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleImages = images.filter(Boolean);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-800">Gallery</h2>
          <p className="mt-2 pb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ギャラリー
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {visibleImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`ギャラリー画像 ${index + 1}`}
                fill
                className="object-cover transition-transform duration-200 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-2 py-2 sm:px-4 sm:py-4">
          <button
            type="button"
            className="flex h-full w-full items-center justify-center"
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
          </button>
        </div>
      ) : null}
    </section>
  );
}
