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
    // section全体をコンテナとして中央に配置し、少し余白を追加
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* gridを使ってカードを並べる。gapでカード間の余白を指定 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          // Linkコンポーネントをカード全体を囲むように変更
          <Link 
            key={index} 
            href={card.link}
            // groupクラスでホバーの対象に。transitionでアニメーションを滑らかに
            className="group block text-center transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {/* 画像を表示。アスペクト比を1:1(正方形)に設定 */}
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill // 親要素いっぱいに広がる
                style={{ objectFit: 'cover' }} // アスペクト比を保ったままトリミング
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* 項目名。改行(\n)を反映させるためにwhitespace-pre-wrapを使用 */}
            <h2 className="mt-4 text-xl font-bold whitespace-pre-wrap">
              {card.title}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}