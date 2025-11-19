import Script from 'next/script';

export default function InstagramFeed() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12 font-serif-jp">
          Instagram
        </h2>

        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-3049ca9e-a256-48fd-a7e7-c3e81a8a15d5" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}