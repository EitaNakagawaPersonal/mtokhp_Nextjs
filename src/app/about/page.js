import CompanyOverview from './components/CompanyOverview';
import Concept from './components/Concept';
import Features from './components/Features';
import History from './components/History';
import OfficerIntroduction from './components/OfficerIntroduction';

export const metadata = {
  title: "企業情報",
  description: "株式会社マツオカの企業情報・沿革・役員紹介ページです。",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
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