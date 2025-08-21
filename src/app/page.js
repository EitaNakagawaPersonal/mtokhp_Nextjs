import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardSection from '@/components/CardSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardSection />
      </main>
    </>
  );
}