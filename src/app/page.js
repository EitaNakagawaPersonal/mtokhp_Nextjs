import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardSection from '@/components/CardSection';
import Greeting from '@/components/greeting';
import Resin from '@/components/resin';
import Contact from '@/components/Contact';
import InstagramFeed from '@/components/InstagramFeed';
import News from '@/components/News';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <News />
        <CardSection />
        <Resin />
        <InstagramFeed />
        <Contact />
      </main>
    </>
  );
}