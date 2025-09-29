import RealEstateStrengths from "./components/RealEstateStrengths";

export default function RealEstate() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                    <main className="relative">
                        {/* <Top /> */}
                        <RealEstateStrengths />
                        {/* <ProductIntroduction /> */}
                    </main>
                </div>
    );
}