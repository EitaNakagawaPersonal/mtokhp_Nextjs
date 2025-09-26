import Top from './components/Top';
import ProductIntroduction from './components/ProductIntroduction';

export default function Construction() {
    return (
        <div className="relative bg-[url('/images/sea.png')] bg-cover bg-center bg-fixed">
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                    <main className="relative">
                        <Top />
                        <ProductIntroduction />
                    </main>
                </div>
    );
}