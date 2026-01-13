import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-accent-blue to-primary overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Registrirajte se danas
        </h2>

        <p className="text-lg md:text-xl text-white/90 font-light mb-8 max-w-2xl mx-auto">
          Pridružite se vodećim stručnjacima na NefroEndo 2026
        </p>

        <Link
          href="/registracija"
          className="inline-block bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Registriraj se sada
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
