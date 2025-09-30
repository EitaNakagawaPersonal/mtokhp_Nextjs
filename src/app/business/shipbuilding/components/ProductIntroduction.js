"use client";
import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

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

    return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
          <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Products</h2>
          <p className="mt-2 text-3xl font-extrabold pb-10 text-gray-900 tracking-tight sm:text-4xl">
              製品紹介
          </p>
      </div>
      
      {/* カードグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productData.map((card, index) => (
          // <a>や<Link>ではなく、クリックイベントを持つ<button>に変更
          <button 
            key={index} 
            onClick={() => setSelectedImage(card.imageUrl)} // クリックされた画像のURLをstateに保存
            className="group block text-center transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* ホバー時に表示される「詳しく見る」のオーバーレイを追加 */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold">画像を拡大</p>
              </div>
            </div>
            
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {card.title}
            </h3>
          </button>
        ))}
      </div>

      {/* --- ライトボックス（画像拡大表示） --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)} // 背景をクリックしても閉じる
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
            onClick={() => setSelectedImage(null)} // 右上の閉じるボタン
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
    );
}