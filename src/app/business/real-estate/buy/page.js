import { PageHero, Worries, Features, Steps, Faq, BackLink, Wrap, SectionTitle } from '../components/shared/Sections';
import InquiryForm from '../components/shared/InquiryForm';
import { properties } from '@/data/properties';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "不動産を買いたい方へ",
  description: "土地・中古住宅の購入に関するご相談を承ります。購入後の建築・リフォームもご相談いただけます。株式会社マツオカ不動産事業。",
  alternates: { canonical: "/business/real-estate/buy" },
};

const fields = [
  { name: 'name', label: '氏名', required: true },
  { name: 'tel', label: '電話番号', type: 'tel', required: true },
  { name: 'email', label: 'メールアドレス', type: 'email', required: true },
  { name: 'area', label: '希望地域' },
  { name: 'property_type', label: '希望物件種別', options: ['土地', '中古住宅', 'その他'] },
  { name: 'budget', label: '希望予算' },
  { name: 'conditions', label: '希望条件', textarea: true },
  { name: 'message', label: '相談内容', textarea: true },
];

function Properties() {
  return (
    <Wrap>
      <SectionTitle en="Properties" title="物件情報" />
      {properties.length === 0 ? (
        <div className="mt-10 rounded-lg bg-white/80 p-8 text-center shadow">
          <p className="text-gray-700">現在、掲載中の物件情報はありません。</p>
          <p className="mt-2 text-gray-600">ご希望の条件に合う物件をお探ししますので、お気軽にご相談ください。</p>
          <a href="#inquiry" className="mt-6 inline-block rounded-full bg-blue-700 px-8 py-3 font-bold text-white hover:bg-blue-600">物件探しを相談する</a>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-lg bg-white shadow">
              {p.image && <div className="relative aspect-[4/3]"><Image src={p.image} alt={p.name} fill className="object-cover" sizes="(min-width:1024px) 33vw, 100vw" /></div>}
              <div className="p-5 space-y-1 text-sm text-gray-700">
                <span className="inline-block rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800">{p.type}</span>
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <p>所在地：{p.address}</p>
                <p>販売価格：{p.price}</p>
                <p>土地面積：{p.landArea}</p>
                {p.buildingArea && <p>建物面積：{p.buildingArea}</p>}
                {p.layout && <p>間取り：{p.layout}</p>}
                {p.href && <Link href={p.href} className="mt-3 inline-block text-blue-800 underline">詳細を見る →</Link>}
              </div>
            </div>
          ))}
        </div>
      )}
    </Wrap>
  );
}

export default function BuyPage() {
  return (
    <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      <main className="relative">
        <PageHero
          title="不動産を買いたい方へ"
          lines={["土地や中古住宅をお探しの方は、お気軽にご相談ください。", "住まい探しから土地選びまで、ご希望に合わせた不動産探しをサポートします。"]}
          ctaLabel="物件探し・購入相談はこちら"
          ctaHref="#inquiry"
          image="/images/products/civil-engineering.avif"
        />
        <Worries items={[
          "家を建てるための土地を探している",
          "中古住宅を購入したい",
          "空き家を購入してリフォームしたい",
          "希望の地域で物件を探したい",
          "不動産購入にかかる費用を知りたい",
        ]} />
        <Properties />
        <Features
          en="Our Strengths"
          title="建材事業との連携"
          lead="土地や中古住宅の購入は、物件そのものだけでなく、その後の住まいづくりも大切です。建材を取り扱う当社では、不動産のご相談に加え、建築やリフォームに関するご相談にも対応しています。"
          items={[
            { title: "土地購入後の建築相談" },
            { title: "中古住宅購入後のリフォーム相談" },
            { title: "住宅資材に関する相談" },
            { title: "住まいづくりを見据えた不動産選び" },
          ]}
        />
        <Steps items={["お問い合わせ・ご希望の確認", "物件のご紹介", "現地見学・条件確認", "購入申し込み・売買契約", "決済・引き渡し"]} />
        <Faq items={[
          { q: "希望条件に合う物件を探してもらえますか？", a: "ご希望の地域・種別・予算などをお伺いし、条件に合う物件をお探しします。" },
          { q: "土地を購入して家を建てることはできますか？", a: "はい。土地購入後の建築についてもご相談いただけます。" },
          { q: "中古住宅のリフォームについても相談できますか？", a: "はい。購入後のリフォームについてもあわせてご相談いただけます。" },
          { q: "不動産購入にはどのような費用がかかりますか？", a: "物件価格のほか、仲介手数料・登記費用・各種税金などがかかる場合があります。詳しくはご相談時にご説明いたします。" },
          { q: "住宅ローンについて相談できますか？", a: "ご相談内容に応じて対応いたします。まずはお問い合わせください。" },
        ]} />
        <InquiryForm type="不動産購入" fields={fields} submitLabel="物件探しについて相談する" />
        <BackLink />
      </main>
    </div>
  );
}
