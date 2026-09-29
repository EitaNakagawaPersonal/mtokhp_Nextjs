import CompanyOverview from './components/CompanyOverview';
import Concept from './components/Concept';
import Features from './components/Features';
import History from './components/History';
import OfficerIntroduction from './components/OfficerIntroduction';
import JsonLd from '@/components/JsonLd';
import localBusinessJsonLd from '@/data/jsonld/local-business.json';

export const metadata = {
  title: "企業情報",
  description: "株式会社マツオカの企業情報・沿革・役員紹介ページです。",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <main>
        {/* <Concept /> */}
        {/* <Features /> */}
        <CompanyOverview />
        <History /> 
        <OfficerIntroduction />
      </main>
    </>
  );
}