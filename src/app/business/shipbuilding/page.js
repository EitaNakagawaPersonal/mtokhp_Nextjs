import Top from './components/Top';
import Strengths from './components/Strengths';
import ProductIntroduction from './components/ProductIntroduction';
import Achievements from './components/Achievements';

export const metadata = {
  title: "造船資材事業",
  description: "株式会社マツオカの造船資材事業のご紹介。強み・製品・実績を掲載しています。",
  alternates: { canonical: "/business/shipbuilding" },
};

export default function ShipBuilding() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            <main className="relative">
                <Top />
                <Strengths />
                <ProductIntroduction />
                <Achievements />
            </main>
        </div>
    );
}