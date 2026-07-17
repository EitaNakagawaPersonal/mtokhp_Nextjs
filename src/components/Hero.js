'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[82vh] lg:h-[78vh] bg-black overflow-hidden">

      {/* 背景動画（16:9 アスペクト比を維持） */}
      <video
        src="/images/top/matsuoka_hp_top.mov"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 文字 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <h1
          className="text-white text-3xl md:text-4xl font-normal whitespace-nowrap font-serif-jp soft-reveal soft-reveal--d200"
          style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          人と木の良い関係を目指して
        </h1>
      </div>

    </section>
  );
}