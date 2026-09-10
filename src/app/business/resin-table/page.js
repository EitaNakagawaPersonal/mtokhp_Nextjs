import Hero from "./components/Hero";
import ResinTableStrengths from "./components/ResinTableStrengths";
import Gallery from "./components/Gallery";

export const metadata = {
  title: "レジンテーブル事業",
  description: "株式会社マツオカのレジンテーブル事業のご紹介。ギャラリーもご覧いただけます。",
  alternates: { canonical: "/business/resin-table" },
};

export default function ResinTable() {
    return (
        <main>
            <Hero />
            <ResinTableStrengths />
            <Gallery />
        </main>
    );
}