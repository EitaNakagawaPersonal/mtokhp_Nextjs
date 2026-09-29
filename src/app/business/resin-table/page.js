import Hero from "./components/Hero";
import ResinTableStrengths from "./components/ResinTableStrengths";
import Gallery from "./components/Gallery";
import JsonLd from '@/components/JsonLd';
import productJsonLd from '@/data/jsonld/product-resin-table.json';
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumb';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "レジンテーブル事業", path: "/business/resin-table" },
]);


export const metadata = {
  title: "レジンテーブル事業",
  description: "株式会社マツオカのレジンテーブル事業のご紹介。ギャラリーもご覧いただけます。",
  alternates: { canonical: "/business/resin-table" },
};

export default function ResinTable() {
    return (
        <main>
            {/* ↓効果測定のため一時的にコメントアウト */}
            {/* <JsonLd data={breadcrumbJsonLd} /> */}
            {/* ↓効果測定のため一時的にコメントアウト */}
            {/* <JsonLd data={productJsonLd} /> */}
            <Hero />
            <ResinTableStrengths />
            <Gallery />
        </main>
    );
}