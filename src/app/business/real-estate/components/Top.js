import Image from 'next/image';

const realEstateData = {
  title: "不動産事業",
  description: [
    "土地活用で新たな需要を創造する。",
  ],
};

export default function Top() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/products/residential-building.avif"
          alt="不動産イメージ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[50vh] md:min-h-[60vh] items-center">
          <div className="max-w-xl py-16 md:py-20">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {realEstateData.title}
            </h2>

            <div className="space-y-2">
              {realEstateData.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-white/95 sm:text-lg md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}