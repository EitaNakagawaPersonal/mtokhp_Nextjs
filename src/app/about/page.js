import CompanyOverview from './components/CompanyOverview';
import Concept from './components/Concept';
import Features from './components/Features';
import History from './components/History';
import OfficerIntroduction from './components/OfficerIntroduction';

export const metadata = {
  title: "会社概要",
  description: "株式会社マツオカの会社概要・沿革・役員紹介ページです。",
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