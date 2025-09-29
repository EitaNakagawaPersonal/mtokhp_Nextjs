import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/your-resin-table-image.jpg"
        alt="ヒーローイメージ"
        layout="fill"
        objectFit="cover"
        priority
      />
    </section>
  );
};

export default Hero;