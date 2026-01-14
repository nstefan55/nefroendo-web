import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[40svh] md:h-screen overflow-hidden bg-primary-dark">
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
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full px-4 mx-auto">
        <div className="flex h-full items-start pt-4 md:items-center md:pt-0">
          <div className="max-w-3xl">
            {/* Semi-transparent background */}
            <div className="p-5 bg-black/15 sm:p-6 md:p-12 rounded-xl backdrop-blur-sm transition duration-300 ease-in-out hover:scale-110">
              <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl text-shadow">
                NefroEndo 2026
              </h1>

              {/* Accent Line */}
              <div className="w-40 h-1 mb-4 bg-accent-blue sm:w-48 md:mb-8" />

              <p className="mb-3 text-xl font-light text-white sm:text-2xl md:text-3xl text-shadow-sm">
                11. - 13. 9. 2026.
              </p>

              <p className="mb-5 text-lg font-light text-white sm:text-xl md:text-2xl text-shadow-sm">
                Zagreb, Hotel Internacional
              </p>

              <div className="space-y-1 text-white/95 text-shadow-sm sm:space-y-2">
                <p className="text-base sm:text-lg">
                  Hrvatsko društvo za bubreg
                </p>
                <p className="text-base sm:text-lg">
                  Hrvatskog liječničkog zbora
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
