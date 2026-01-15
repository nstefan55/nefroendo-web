"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMountedRef = useRef(false);

  // Close mobile menu on scroll and track scroll state
  useEffect(() => {
    isMountedRef.current = true;

    const handleScroll = () => {
      if (isMenuOpen && window.scrollY > 100) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Naslovnica", href: "/" },
    { name: "Info", href: "#info" },
    { name: "Program", href: "/program" },
    { name: "Sponzori", href: "/sponzori" },
    { name: "Partneri", href: "/partneri" },
  ];

  return (
    <header
      className="bg-primary fixed top-0 left-0 right-0 z-50 shadow-lg"
      style={{
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      suppressHydrationWarning
    >
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
            <Link href="/registracija">
              <button className="btn  relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded-full hover:bg-white group py-1.5 px-2.5">
                <span className="w-56 h-48 rounded bg-orange-400 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full p-2 text-left text-blue-800 transition-colors duration-300 ease-in-out group-hover:text-white">
                  Registracija
                </span>
              </button>
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
