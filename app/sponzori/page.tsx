export const metadata = {
  title: "Sponzori | NefroEndo 2026",
  description: "Sponzori konferencije NefroEndo 2026",
};

const SponzoriPage = () => {
  const sponsorTiers = [
    {
      tier: "Glavni sponzori",
      sponsors: [
        { name: "Sponzor 1", logo: "/logos/sponsor1.png" },
        { name: "Sponzor 2", logo: "/logos/sponsor2.png" },
      ],
    },
    {
      tier: "Zlatni sponzori",
      sponsors: [
        { name: "Sponzor 3", logo: "images/logos/sponsor3.png" },
        { name: "Sponzor 4", logo: "images/logos/sponsor4.png" },
        { name: "Sponzor 5", logo: "images/logos/sponsor5.png" },
      ],
    },
    {
      tier: "Srebrni sponzori",
      sponsors: [
        { name: "Sponzor 6", logo: "images/logos/sponsor6.png" },
        { name: "Sponzor 7", logo: "images/logos/sponsor7.png" },
        { name: "Sponzor 8", logo: "images/logos/sponsor8.png" },
        { name: "Sponzor 9", logo: "images/logos/sponsor9.png" },
      ],
    },
  ];

  const getGridClass = (count: number) => {
    switch (count) {
      case 4:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      case 3:
        return "grid-cols-1 md:grid-cols-3";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="min-h-screen py-12 bg-neutral-bg">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-center">Naši sponzori</h1>
          <div className="mb-8 accent-line" />

          <p className="max-w-2xl mx-auto mb-12 text-lg text-center text-neutral-secondary">
            Zahvaljujemo našim sponzorima na podršci i omogućavanju ove
            konferencije.
          </p>

          <div className="space-y-12">
            {sponsorTiers.map((tier, tierIndex) => (
              <div key={tierIndex}>
                <h2 className="mb-8 text-2xl font-bold text-center text-primary">
                  {tier.tier}
                </h2>

                <div
                  className={`grid gap-6 ${getGridClass(tier.sponsors.length)}`}
                >
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <div
                      key={sponsorIndex}
                      className="flex items-center justify-center p-8 bg-white card"
                    >
                      <div className="text-center">
                        <div
                          className={`${
                            tierIndex === 0 ? "w-48 h-48" : "w-32 h-32"
                          } bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center mx-auto mb-4`}
                        >
                          <span className="text-sm text-neutral-secondary">
                            {sponsor.logo}
                          </span>
                        </div>
                        <p className="font-semibold text-neutral-text">
                          {sponsor.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 mt-16 text-center bg-white rounded-xl shadow-card">
            <h3 className="mb-4 text-2xl font-bold text-neutral-text">
              Želite postati sponzor?
            </h3>
            <p className="mb-6 text-neutral-secondary">
              Kontaktirajte nas za više informacija o sponzorskim paketima.
            </p>
            <a href="mailto:info@nefro.hr" className="btn btn-primary">
              Kontaktirajte nas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponzoriPage;
