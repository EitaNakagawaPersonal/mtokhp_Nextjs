import CompanyOverview from './components/CompanyOverview';
import Concept from './components/Concept';
import Features from './components/Features';
import History from './components/History';
import OfficerIntroduction from './components/OfficerIntroduction';

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