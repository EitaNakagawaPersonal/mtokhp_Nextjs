export default function Hero() {
  return (
    // <section className="relative w-full h-screen bg-black overflow-hidden">
    <section className="relative w-full h-[75vh] md:h-screen bg-black overflow-hidden">
      
      {/* 背景動画 */}
      <video
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-0"
        src="/videos/main_visual.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* テキストオーバーレイ */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl font-normal whitespace-nowrap font-serif-jp" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          木と良い関係を目指して
        </h1>
      </div>

    </section>
  );
}