import Top from './components/Top';
import Strengths from './components/Strengths';
import ProductIntroduction from './components/ProductIntroduction';
import Achievements from './components/Achievements';

export default function ShipBuilding() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
            <main className="relative">
                <Top />
                <Strengths />
                <ProductIntroduction />
                <Achievements />
            </main>
        </div>
    );
}