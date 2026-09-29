import CompanyOverview from './components/CompanyOverview';
import Concept from './components/Concept';
import Features from './components/Features';
import History from './components/History';
import OfficerIntroduction from './components/OfficerIntroduction';
import JsonLd from '@/components/JsonLd';
import localBusinessJsonLd from '@/data/jsonld/local-business.json';
import { buildBreadcrumbJsonLd } from '@/lib/breadcrumb';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "企業情報", path: "/about" },
]);

export const metadata = {
  title: "企業情報",
  description: "株式会社マツオカの企業情報・沿革・役員紹介ページです。",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      {/* ↓効果測定のため一時的にコメントアウト */}
      {/* <JsonLd data={localBusinessJsonLd} /> */}
      <main>
        {/* <Concept /> */}
        {/* <Features /> */}
        {/* ↓効果測定のため一時的にコメントアウト */}
        {/* <JsonLd data={breadcrumbJsonLd} /> */}
        <CompanyOverview />
        <History /> 
        <OfficerIntroduction />
      </main>
    </>
  );
}