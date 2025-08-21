import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardSection from '@/components/CardSection';
import Greeting from '@/components/greeting';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardSection />
        <Greeting />
      </main>
    </>
  );
}