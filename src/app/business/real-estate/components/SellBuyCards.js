import Link from 'next/link';
import Image from 'next/image';

const cards = [
  { href: '/business/real-estate/sell', label: '売りたい', sub: '不動産の売却・査定のご相談', image: '/images/products/residential-building.avif' },
  { href: '/business/real-estate/buy', label: '買いたい', sub: '土地・中古住宅の購入のご相談', image: '/images/products/civil-engineering.avif' },
];

export default function SellBuyCards() {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Consultation</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">土地・建物の売買から、住まいづくりまで。</p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            土地・中古住宅・空き家など、地域の不動産に関するご相談を承ります。
            <br />
            ご希望に合わせて、下記からお進みください。
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="group relative block aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image src={c.image} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover blur-[3px] scale-110 transition-transform duration-500 group-hover:scale-125" />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <span className="text-4xl sm:text-5xl font-bold tracking-widest drop-shadow">{c.label}</span>
                <span className="mt-3 text-sm sm:text-base">{c.sub}</span>
                <span className="mt-5 rounded-full border border-white px-6 py-2 text-sm group-hover:bg-white group-hover:text-black transition-colors">詳しく見る →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
