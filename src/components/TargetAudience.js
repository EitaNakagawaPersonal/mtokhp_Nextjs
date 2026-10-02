'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TargetAudience() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* ターゲット別バナー */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          
          {/* 業者様・プロ向け */}
          <Link 
            href="/business/shipbuilding"
            className="group relative overflow-hidden rounded-lg aspect-video shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* 背景画像 */}
            <Image
              src="/images/sagyochu.jpg"
              alt="業者様・プロ向け"
              fill
              className="object-cover blur-sm group-hover:blur-[5px] transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* 背景グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
            
            {/* テキスト */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                業者様・プロ向け
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                造船資材・建築建材
              </p>
            </div>
          </Link>

          {/* DIY愛好者向け */}
          <Link 
            href="/business/resin-table"
            className="group relative overflow-hidden rounded-lg aspect-video shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* 背景画像 */}
            <Image
              src="/images/diy_image.jpg"
              alt="DIY愛好者向け"
              fill
              className="object-cover blur-sm group-hover:blur-[5px] transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* 背景グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
            
            {/* テキスト */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                DIY愛好者向け
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                オーダーメイド・カット加工
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
