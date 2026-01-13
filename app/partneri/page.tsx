import Image from "next/image";

export const metadata = {
  title: "Partneri | NefroEndo 2026",
  description: "Partneri konferencije NefroEndo 2026",
};

const PartneriPage = () => {
  const partners = [
    {
      name: "Hrvatsko liječničko društvo (HLZ)",
      description: "Stručno udruženje liječnika u Hrvatskoj",
      logo: "/images/logos/hlz.png",
      website: "https://www.hlz.hr",
    },
    {
      name: "Hrvatsko društvo za bubreg",
      description: "Specijalističko društvo za nefrologiju",
      logo: "/images/logos/nefro-logo.png",
      website: "https://nefro.healthmed.hr/",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-neutral-bg">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-4 text-4xl font-bold text-center">Naši partneri</h1>
          <div className="mb-8 accent-line" />

          <p className="max-w-2xl mx-auto mb-12 text-lg text-center text-neutral-secondary">
            U suradnji s vodećim institucijama i organizacijama organiziramo
            NefroEndo 2026.
          </p>

          <div className="space-y-6">
            {partners.map((partner, index) => (
              <div key={index} className="p-8 card">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                  <div className="relative flex-shrink-0 w-40 h-40 overflow-hidden bg-gray-100 border-2 border-gray-200 rounded-lg">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="text-center grow md:text-left">
                    <h3 className="mb-3 text-2xl font-bold text-neutral-text">
                      {partner.name}
                    </h3>
                    <p className="mb-4 text-neutral-secondary">
                      {partner.description}
                    </p>
                    {partner.website !== "#" && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue hover:underline"
                      >
                        Posjetite web stranicu →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 mt-16 text-center bg-white rounded-xl shadow-card">
            <h3 className="mb-4 text-2xl font-bold text-neutral-text">
              Želite postati partner?
            </h3>
            <p className="mb-6 text-neutral-secondary">
              Kontaktirajte nas za informacije o partnerstvu.
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

export default PartneriPage;
