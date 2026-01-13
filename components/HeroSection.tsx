import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] bg-primary-dark overflow-hidden">
      {/* Background Image - Replace with actual image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 to-primary/92">
          {/* Medical themed background pattern */}
          <div className="absolute top-20 right-32 w-60 h-60 rounded-full bg-white/5" />
          <div className="absolute top-72 right-48 w-40 h-40 rounded-full bg-white/8" />
          <div className="absolute top-96 right-16 w-52 h-52 rounded-full bg-white/6" />
        </div>

        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex items-center h-full">
          <div className="max-w-3xl">
            {/* Semi-transparent background */}
            <div className="bg-black/15 p-8 md:p-12 rounded-xl backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow">
                NefroEndo 2026
              </h1>

              {/* Accent Line */}
              <div className="w-48 h-1 bg-accent-blue mb-8" />

              <p className="text-2xl md:text-3xl text-white font-light mb-4 text-shadow-sm">
                11. - 13. 9. 2026.
              </p>

              <p className="text-xl md:text-2xl text-white font-light mb-8 text-shadow-sm">
                Zagreb, Hotel Internacional
              </p>

              <div className="text-white/95 space-y-2 mb-8 text-shadow-sm">
                <p className="text-lg">Hrvatsko društvo za bubreg</p>
                <p className="text-lg">Hrvatskog liječničkog zbora</p>
              </div>

              <Link href="#info" className="btn btn-primary shadow-lg">
                Saznaj više
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image indicator for development */}
      <div className="absolute bottom-4 right-4 text-white/40 text-xs">
        📷 Hero Image: 1440×600px
      </div>
    </section>
  );
};

export default HeroSection;
