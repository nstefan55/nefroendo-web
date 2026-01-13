import { MapPin, User, Mail, Send } from "lucide-react";

const InfoSection = () => {
  const infoCards = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      title: "ADRESA",
      content: ["Šubićeva 9", "10 000 Zagreb", "OIB: 60192951611"],
    },
    {
      id: 2,
      icon: <User className="w-8 h-8" />,
      iconBg: "bg-green-100",
      title: "PREDSJEDNICA",
      content: ["Prof.dr.sc.", "Nikolina Bašić Jukić", "nbasicjukic@nefro.hr"],
    },
    {
      id: 3,
      icon: <Mail className="w-8 h-8" />,
      iconBg: "bg-orange-100",
      title: "KONTAKT",
      content: ["info@nefro.hr", "01/ 2367-139"],
    },
    {
      id: 4,
      icon: <Send className="w-8 h-8" />,
      iconBg: "bg-purple-100",
      title: "TAJNIK",
      content: ["dr.sc. Vesna Furić Čunko", "dr.med.", "tajnik@nefro.hr"],
    },
  ];

  return (
    <section id="info" className="section bg-neutral-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Informacije</h2>
        <div className="accent-line" />

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {infoCards.map((card) => (
            <div key={card.id} className="card p-8 text-center">
              <div
                className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <div className="text-gray-700">{card.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-neutral-text mb-4">
                {card.title}
              </h3>

              <div className="space-y-2 text-neutral-secondary">
                {card.content.map((line, index) => (
                  <p key={index} className="text-base">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Partners Card */}
          <div className="card p-8 text-center md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-neutral-text mb-6">
              PARTNERI
            </h3>

            <div className="flex justify-center items-center gap-4">
              <div className="w-28 h-28 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                <span className="text-xs text-neutral-secondary">HLZ Logo</span>
              </div>
              <div className="w-28 h-28 bg-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                <span className="text-xs text-neutral-secondary">Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
