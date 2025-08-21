import Link from 'next/link';

const cardData = [
  {
    title: "木材事業部\n造船資材課",
    imageUrl: "/images/card-ship.jpg",
    link: "/business/shipbuilding",
  },
  {
    title: "木材事業部\n建築資材課",
    imageUrl: "/images/card-construction.jpg",
    link: "/business/construction",
  },
  {
    title: "建材事業部",
    imageUrl: "/images/card-materials.jpg",
    link: "/business/materials",
  },
];

export default function CardSection() {
  return (
    // gridを使ってカードを並べる。スマホでは1列(grid-cols-1)、mdサイズ以上では3列(md:grid-cols-3)
    <section className="w-full grid grid-cols-1 md:grid-cols-3">
      {cardData.map((card, index) => (
        // 各カードのコンテナ
        <div key={index} className="relative h-96 group overflow-hidden">
          {/* 背景画像 */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          ></div>
          {/* 半透明な黒いフィルター */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          {/* テキストとボタン */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-4">
            <h2 className="text-3xl font-bold whitespace-pre-wrap">{card.title}</h2>
            <Link
              href={card.link}
              className="mt-6 px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors"
            >
              詳しく見る
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}