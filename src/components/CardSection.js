import Link from 'next/link';
import Image from 'next/image';

const cardData = [
  {
    title: "造船資材事業",
    imageUrl: "/images/card_ship.jpg",
    link: "/business/shipbuilding",
  },
  {
    title: "住宅建材事業(建築木材・新建材)",
    imageUrl: "/images/card_construction.jpg",
    link: "/business/construction",
  },
  {
    title: "素材倉庫“FOREST“",
    imageUrl: "/images/resin-table/resin2.jpg",
    link: "/business/resin-table",
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
    <section className="w-full pt-0 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* カードグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Link 
            key={index} 
            href={card.link}
            className="group block text-center transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {/* <div className="relative w-full aspect-square overflow-hidden rounded-lg"> */}
            <div className="relative w-full aspect-[4/2] sm:aspect-square overflow-hidden rounded-lg">
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