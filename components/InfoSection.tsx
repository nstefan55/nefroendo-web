import { MapPin, Mail, Send } from "lucide-react";

import Image from "next/image";

const InfoSection = () => {
  const infoCards = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      title: "ADRESA",
      content: ["Šubićeva 9", "10 000 Zagreb", "OIB: 60192951611"],
      locationLink: "https://maps.app.goo.gl/SDRVUYmn5Y8UX7LdA",
    },
    {
      id: 2,
      icon: (
        <Image
          src="/images/nikolina-basic-jukic-pfp.jpg"
          alt="Profile Picture"
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
      ),
      iconBg: "bg-blue-100",
      title: "PREDSJEDNICA",
      content: ["Prof.dr.sc.", "Nikolina Bašić Jukić", "nbasicjukic@nefro.hr"],
    },
    {
      id: 3,
      icon: <Mail className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      title: "KONTAKT",
      content: ["info@nefro.hr", "01/ 2367-139"],
    },
    {
      id: 4,
      icon: <Send className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      title: "TAJNIK",
      content: ["dr.sc. Vesna Furić Čunko", "dr.med.", "tajnik@nefro.hr"],
    },
  ];

  return (
    <section id="info" className="section bg-neutral-bg">
      <div className="container px-4 mx-auto">
        <h2 className="section-title">Informacije</h2>
        <div className="accent-line" />

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((card) => (
            <div key={card.id} className="p-8 text-center card">
              <div
                className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <div className="text-gray-700">{card.icon}</div>
              </div>

              <h3 className="mb-4 text-xl font-bold text-neutral-text">
                {card.title}
              </h3>

              <div className="space-y-2 text-neutral-secondary">
                {card.content.map((line, index) => {
                  const isEmail = line?.includes("@") && line?.includes(".");
                  return (
                    <p key={index} className="text-base">
                      {index === 0 && card.locationLink ? (
                        <a
                          href={card.locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-blue hover:underline"
                        >
                          {line}
                        </a>
                      ) : isEmail ? (
                        <a
                          href={`mailto:${line}`}
                          className="text-accent-blue hover:underline"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Partners Card */}
          <div className="p-8 text-center card md:col-span-2 lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-neutral-text">
              PARTNERI
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-full overflow-hidden rounded-lg h-28 lg:h-36">
                <Image
                  src="/images/logos/nefro-logo.png"
                  alt="Nefro logo"
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="relative w-full overflow-hidden rounded-lg h-28 lg:h-36">
                <Image
                  src="/images/logos/hlz.png"
                  alt="HLZ logo"
                  className="object-contain p-4"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
