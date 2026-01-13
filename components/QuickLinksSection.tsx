import Link from "next/link";
import { Calendar, Handshake, Users, PenSquare } from "lucide-react";

const QuickLinksSection = () => {
  const quickLinks = [
    {
      id: 1,
      icon: <Calendar className="w-8 h-8" />,
      iconBg: "bg-blue-100",
      title: "Program",
      description: "Raspored i teme",
      href: "/program",
    },
    {
      id: 2,
      icon: <Handshake className="w-8 h-8" />,
      iconBg: "bg-orange-100",
      title: "Sponzori",
      description: "Sponzorski kutak",
      href: "/sponzori",
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      iconBg: "bg-green-100",
      title: "Partneri",
      description: "Naši partneri",
      href: "/partneri",
    },
    {
      id: 4,
      icon: <PenSquare className="w-8 h-8" />,
      iconBg: "bg-red-100",
      title: "Registracija",
      description: "Prijavite se",
      href: "/registracija",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Brzi pristup</h2>
        <div className="accent-line" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="card p-6 text-center group"
            >
              <div
                className={`${link.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <div className="text-gray-700">{link.icon}</div>
              </div>

              <h3 className="text-xl font-semibold text-neutral-text mb-2">
                {link.title}
              </h3>

              <p className="text-sm text-neutral-secondary">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
