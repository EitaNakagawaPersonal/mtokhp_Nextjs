import Top from './components/Top';
import ConstructionStrengths from './components/ConstructionStrengths';
import ProductIntroduction from './components/ProductIntroduction';
// import JsonLd from '@/components/JsonLd';
// import serviceJsonLd from '@/data/jsonld/service-construction.json';

export const metadata = {
  title: "建築資材事業",
  description: "株式会社マツオカの建築資材事業のご紹介。強みと取り扱い製品を掲載しています。",
  alternates: { canonical: "/business/construction" },
};

export default function Construction() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
                    {/* <JsonLd data={serviceJsonLd} /> */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                    <main className="relative">
                        <Top />
                        <ConstructionStrengths />
                        <ProductIntroduction />
                    </main>
                </div>
    );
}