/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Hi, I'm John Doe
          </h1>
          <p className="text-xl mb-6">
            I'm a full-stack developer with experience in building web
            applications using Next.js, React, and Node.js.
          </p>
          <button className="bg-blue-500 text-white rounded-full py-3 px-6 shadow-lg">
            Contact Me
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
