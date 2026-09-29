import RealEstateStrengths from "./components/RealEstateStrengths";
import Top from "./components/Top";
import JsonLd from '@/components/JsonLd';
import serviceJsonLd from '@/data/jsonld/service-real-estate.json';
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumb';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "不動産事業", path: "/business/real-estate" },
]);

export const metadata = {
  title: "不動産事業",
  description: "株式会社マツオカの不動産事業のご紹介。",
  alternates: { canonical: "/business/real-estate" },
};

export default function RealEstate() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
                    {/* ↓効果測定のため一時的にコメントアウト */}
                    {/* <JsonLd data={breadcrumbJsonLd} /> */}
                    {/* ↓効果測定のため一時的にコメントアウト */}
                    {/* <JsonLd data={serviceJsonLd} /> */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                    <main className="relative">
                        <Top /> 
                        <RealEstateStrengths />
                        {/* <ProductIntroduction /> */}
                    </main>
                </div>
    );
}