import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardSection from '@/components/CardSection';
import Greeting from '@/components/greeting';
import Contact from '@/components/Contact';
import InstagramButton from '@/components/InstagramButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardSection />
        <Greeting />
        <Contact />
      </main>
    </>
  );
}