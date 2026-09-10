import Top from './components/Top';
import ConstructionStrengths from './components/ConstructionStrengths';
import ProductIntroduction from './components/ProductIntroduction';

export const metadata = {
  title: "建築資材事業",
  description: "株式会社マツオカの建築資材事業のご紹介。強みと取り扱い製品を掲載しています。",
  alternates: { canonical: "/business/construction" },
};

export default function Construction() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                    <main className="relative">
                        <Top />
                        <ConstructionStrengths />
                        <ProductIntroduction />
                    </main>
                </div>
    );
}