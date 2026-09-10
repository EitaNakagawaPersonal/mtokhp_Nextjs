import RealEstateStrengths from "./components/RealEstateStrengths";
import Top from "./components/Top";

export const metadata = {
  title: "不動産事業",
  description: "株式会社マツオカの不動産事業のご紹介。",
  alternates: { canonical: "/business/real-estate" },
};

export default function RealEstate() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                    <main className="relative">
                        <Top /> 
                        <RealEstateStrengths />
                        {/* <ProductIntroduction /> */}
                    </main>
                </div>
    );
}