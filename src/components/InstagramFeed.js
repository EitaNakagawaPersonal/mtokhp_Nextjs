import Script from 'next/script';

export default function InstagramFeed() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12 font-serif-jp">
          Instagram
        </h2>
        
        <div 
          className="elfsight-app-YOUR_APP_ID" 
          data-elfsight-app-lazy 
        />
        
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="lazyOnload" 
        />
      </div>
    </section>
  );
}