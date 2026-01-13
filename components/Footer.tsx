import Link from "next/link";

import Image from "next/image";

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
    <footer className="text-white bg-neutral-footer">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3 lg:grid-cols-5">
          {/* Column 1: Brand & Address */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">NefroEndo 2026</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Hrvatsko društvo za bubreg</p>
              <p>Hrvatskog liječničkog zbora</p>
              <p className="mt-4">Šubićeva 9, 10 000 Zagreb</p>
              <p>OIB: 60192951611</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Navigacija</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="mailto:info@nefro.hr"
                  className="transition-colors hover:text-white"
                >
                  info@nefro.hr
                </a>
              </li>
              <li>
                <a
                  href="mailto:tajnik@nefro.hr"
                  className="transition-colors hover:text-white"
                >
                  tajnik@nefro.hr
                </a>
              </li>
              <li>
                <a
                  href="tel:0123671391"
                  className="transition-colors hover:text-white"
                >
                  Tel: 01/ 2367-139
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Event Details */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Datum i lokacija</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>11. - 13. rujan 2026.</li>
              <li>Hotel Internacional</li>
              <li>Zagreb, Hrvatska</li>
            </ul>
          </div>

          {/* Column 5: Partners */}
          <div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Naši partneri</h4>
              <div className="flex flex-row items-center gap-4">
                <div className="relative flex-shrink-0 w-28 h-28 sm:w-46 sm:h-46">
                  <Image
                    src="/images/logos/nefro-logo.png"
                    alt="Nefro Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src="/images/logos/hlz.png"
                    alt="HLZ Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-white/20">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row text-white/70">
            <p>© 2026 NefroEndo. Sva prava pridržana.</p>

            <div className="flex gap-4">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
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
