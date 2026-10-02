import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import CardSection from '@/components/CardSection';
import Greeting from '@/components/greeting';
import Resin from '@/components/resin';
import Contact from '@/components/Contact';
import InstagramFeed from '@/components/InstagramFeed';
import News from '@/components/News';
import JsonLd from '@/components/JsonLd';
import organizationJsonLd from '@/data/jsonld/organization.json';
import localBusinessJsonLd from '@/data/jsonld/local-business.json';

export default function Home() {
  return (
    <>
      <main>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
        <Hero />
        <TargetAudience />
        <News />
        <CardSection />
        <InstagramFeed />
        <Contact />
      </main>
    </>
  );
}