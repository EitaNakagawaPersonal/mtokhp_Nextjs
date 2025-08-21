// 私が想定していた page.js の中身
import Header from '@/components/Header'; // 👈 正しくインポートしていて
import Hero from '@/components/Hero';
// import CardSection from '@/components/CardSection';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <CardSection /> */}
      </main>
    </>
  );
}