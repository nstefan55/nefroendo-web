"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Naslovnica", href: "/" },
    { name: "Info", href: "#info" },
    { name: "Program", href: "/program" },
    { name: "Sponzori", href: "/sponzori" },
    { name: "Partneri", href: "/partneri" },
  ];

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-white px-6 py-2 rounded-lg shadow-md">
              <span className="text-primary font-bold text-lg">
                NefroEndo 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/registracija" className="btn btn-cta">
              Registracija
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/registracija"
                className="btn btn-cta w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Registracija
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
