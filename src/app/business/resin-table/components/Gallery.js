import Image from 'next/image';

const Gallery = () => {
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold mb-8 text-center">ギャラリー</h2> */}
        <div className="text-center">
            <h2 className="text-base font-semibold text-blue-800 tracking-wider uppercase">Gallery</h2>
            <p className="mt-2 text-3xl font-extrabold pb-10 text-gray-900 tracking-tight sm:text-4xl">
                ギャラリー
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-64">
              <Image
                src={src}
                alt={`ギャラリー画像 ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;