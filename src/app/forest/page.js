import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumb';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "Forest オンライン店舗", path: "/forest" },
]);

export const metadata = {
  title: "Forest オンライン店舗",
  description: "株式会社マツオカが運営するForestオンライン店舗のご案内。",
  alternates: { canonical: "/forest" },
};

export default function Forest() {
  return (
    <>
      {/* ↓効果測定のため一時的にコメントアウト */}
      {/* <JsonLd data={breadcrumbJsonLd} /> */}
      <Header />
      <main>
        <h1 className="text-center text-3xl font-bold pt-32 pb-16 text-gray-800">
            Forest オンライン店舗
        </h1>
      </main>
    </>
  );
}