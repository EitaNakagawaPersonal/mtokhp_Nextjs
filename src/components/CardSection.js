import Link from 'next/link';
import Image from 'next/image';

const cardData = [
  {
    title: "造船資材事業",
    imageUrl: "/images/card_ship.jpg",
    link: "/business/shipbuilding",
  },
  {
    title: "建築資材事業",
    imageUrl: "/images/card_construction.jpg",
    link: "/business/construction",
  },
  {
    title: "レジンテーブル事業",
    imageUrl: "/images/card_materials.jpg",
    link: "/business/materials",
  },
  {
    title: "不動産事業",
    imageUrl: "/images/card_materials.jpg",
    link: "/business/materials",
  }
];

export default function CardSection() {
  return (
    // 👇 クラスを修正: max-w-... と mx-auto を削除し、paddingを調整
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      
      {/* カードグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Link 
            key={index} 
            href={card.link}
            className="group block text-center transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}