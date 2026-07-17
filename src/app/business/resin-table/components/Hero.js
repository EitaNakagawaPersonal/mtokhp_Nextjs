import Image from "next/image";
import { getSiteContent } from "@/lib/adminContent";

export default async function Hero() {
  const content = await getSiteContent();
  const heroImage = content?.resinTable?.heroImage || "/images/resin-table/resin1.jpg";

  return (
    <section className="relative w-full font-serif-jp">
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt="レジンテーブル" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex min-h-[75vh] flex-col justify-center text-white md:min-h-[60vh]">
          <div className="max-w-2xl">
            <h2 className="mb-8 text-4xl font-bold sm:text-5xl">レジンテーブル事業</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed opacity-95">製材所として培った経験で、銘木の美しさを提案。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}