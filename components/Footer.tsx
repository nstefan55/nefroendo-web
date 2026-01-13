import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: "Naslovnica", href: "/" },
      { name: "Program", href: "/program" },
      { name: "Sponzorski kutak", href: "/sponzori" },
      { name: "Partneri", href: "/partneri" },
      { name: "Registracija", href: "/registracija" },
    ],
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Kolačići", href: "/kolacici" },
      { name: "GDPR", href: "/gdpr" },
    ],
  };

  return (
    <footer className="bg-neutral-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Address */}
          <div>
            <h3 className="text-2xl font-bold mb-4">NefroEndo 2026</h3>
            <div className="text-white/80 space-y-2 text-sm">
              <p>Hrvatsko društvo za bubreg</p>
              <p>Hrvatskog liječničkog zbora</p>
              <p className="mt-4">Šubićeva 9, 10 000 Zagreb</p>
              <p>OIB: 60192951611</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigacija</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="mailto:info@nefro.hr"
                  className="hover:text-white transition-colors"
                >
                  info@nefro.hr
                </a>
              </li>
              <li>
                <a
                  href="mailto:tajnik@nefro.hr"
                  className="hover:text-white transition-colors"
                >
                  tajnik@nefro.hr
                </a>
              </li>
              <li>
                <a
                  href="tel:0123671391"
                  className="hover:text-white transition-colors"
                >
                  Tel: 01/ 2367-139
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Event Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Datum i lokacija</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>11. - 13. rujan 2026.</li>
              <li>Hotel Internacional</li>
              <li>Zagreb, Hrvatska</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© 2026 NefroEndo. Sva prava pridržana.</p>

            <div className="flex gap-4">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
