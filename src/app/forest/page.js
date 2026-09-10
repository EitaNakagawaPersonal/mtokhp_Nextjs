import Header from '@/components/Header';

export const metadata = {
  title: "Forest オンライン店舗",
  description: "株式会社マツオカが運営するForestオンライン店舗のご案内。",
  alternates: { canonical: "/forest" },
};

export default function Forest() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center text-3xl font-bold pt-32 pb-16 text-gray-800">
            Forest オンライン店舗
        </h1>
      </main>
    </>
  );
}