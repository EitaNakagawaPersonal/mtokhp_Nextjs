import Image from 'next/image';

const officers = [
  {
    role: '会長',
    name: '松岡 巌',
    imageSrc: '/images/1-kaicho.jpg',
  },
  {
    role: '社長',
    name: '廣瀬 岳',
    imageSrc: '/images/2-syacho.jpg',
  },
  {
    role: '専務',
    name: '神志名 亮',
    imageSrc: '/images/3-senmu.jpg',
  },
];

export default function OfficerIntroduction() {
  return (
    <section className="w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">役員紹介</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {officers.map((officer) => (
          <div key={officer.role} className="text-center">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={officer.imageSrc}
                alt={`${officer.role} ${officer.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority={officer.role === '会長'}
              />
            </div>

            <p className="mt-4 text-lg text-gray-800 leading-snug">
              {officer.role}
              <br />
              {officer.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}