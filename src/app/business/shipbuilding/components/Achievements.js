"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const loadAchievements = async () => {
      const response = await fetch("/api/public/content");
      const content = await response.json();
      setAchievements(content?.shipbuilding?.achievements || []);
    };

    loadAchievements();
  }, []);

  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold uppercase tracking-wider text-blue-800">Delivery Record</h2>
        <p className="mt-2 pb-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          納入実績
        </p>
      </div>

      <div className="mx-auto mb-26 max-w-5xl">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={`${item.title}-${index}`}>
              <div
                className="group cursor-pointer text-center"
                onClick={() => setSelectedImage(item.imageUrl)}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg transition-shadow group-hover:shadow-xl">
                  <Image src={item.imageUrl} alt={item.title} fill style={{ objectFit: "cover" }} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="拡大画像"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: "90vh" }}
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 text-white hover:text-gray-300"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
      )}
      <h3 className="font-bold">主なお取引企業 (順不同)</h3>
      <p>三菱重工業㈱、今治造船㈱、㈱大島造船所、尾道造船㈱、佐世保重工業㈱、㈱三和ドック、常石造船㈱、函館どつく㈱、㈱三浦造船所、三井E&S造船㈱、アスク・サンシンエンジニアリング㈱、双日マリンアンドエンジニアリング㈱、長崎船舶装備㈱、平井海運㈱、㈱みうら、㈱ワイ・エフ・エフ　他</p>
    </section>
  );
}