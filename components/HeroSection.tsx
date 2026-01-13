import Link from "next/link";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-primary-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="NefroEndo 2026 hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full px-4 mx-auto">
        <div className="flex items-center h-full">
          <div className="max-w-3xl">
            {/* Semi-transparent background */}
            <div className="p-8 bg-black/15 md:p-12 rounded-xl backdrop-blur-sm">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-shadow">
                NefroEndo 2026
              </h1>

              {/* Accent Line */}
              <div className="w-48 h-1 mb-8 bg-accent-blue" />

              <p className="mb-4 text-2xl font-light text-white md:text-3xl text-shadow-sm">
                11. - 13. 9. 2026.
              </p>

              <p className="mb-8 text-xl font-light text-white md:text-2xl text-shadow-sm">
                Zagreb, Hotel Internacional
              </p>

              <div className="mb-8 space-y-2 text-white/95 text-shadow-sm">
                <p className="text-lg">Hrvatsko društvo za bubreg</p>
                <p className="text-lg">Hrvatskog liječničkog zbora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
