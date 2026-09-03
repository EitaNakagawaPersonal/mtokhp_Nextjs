import Image from "next/image";
import { getSiteContent } from "@/lib/adminContent";

export default async function Hero() {
  const content = await getSiteContent();
  const heroImage = content?.resinTable?.heroImage || "/images/resin-table/resin1.jpg";

  return (
    <section className="relative w-full overflow-hidden font-serif-jp">
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt="レジンテーブル" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[50vh] items-center md:min-h-[60vh]">
          <div className="max-w-xl py-16 md:py-20">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              レジンテーブル事業
            </h2>
            <div className="space-y-2">
              <p className="text-base leading-relaxed text-white/95 sm:text-lg md:text-xl">
                製材所として培った経験で、銘木の美しさを提案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}