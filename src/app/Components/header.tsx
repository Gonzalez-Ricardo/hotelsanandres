"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggle } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#nosotros", label: t("nav.about") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#habitaciones", label: t("nav.rooms") },
    { href: "#pueblo", label: t("nav.town") },
    { href: "#eventos", label: t("nav.events") },
    { href: "#ubicacion", label: t("nav.location") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-ui ${
        scrolled
          ? "bg-[#1a1208]/98 backdrop-blur-md shadow-2xl shadow-black/30 py-3"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="#inicio" className="flex-shrink-0">
            <Image
              src="/images/Logo2.png"
              alt="Hotel San Andrés"
              width={130}
              height={130}
              className="w-28 h-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center" aria-label="Navegación principal">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-[11px] font-light tracking-[0.18em] uppercase text-white nav-shadow hover:text-[#c1a362] transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-[#c1a362] group-hover:w-3/4 transition-all duration-400 ease-ui" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="hidden md:flex items-center text-[10px] font-light tracking-[0.3em] uppercase bg-black/35 backdrop-blur-sm border border-white/20 hover:border-[#c1a362] text-white hover:text-[#c1a362] px-2.5 py-1 transition-all duration-300"
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            {/* Book CTA */}
            <Link href="#contacto" className="hidden md:block">
              <button className="text-[11px] font-medium tracking-[0.25em] uppercase bg-[#c1a362] hover:bg-[#a98a47] text-[#1a1208] px-6 py-2.5 transition-all duration-300 ease-ui active:scale-[0.97]">
                {t("header.book")}
              </button>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-white nav-shadow"
              aria-label={mobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              <span className="relative flex items-center justify-center w-5 h-5">
                <X className={`absolute h-5 w-5 transition-all duration-300 ease-ui ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`} />
                <Menu className={`absolute h-5 w-5 transition-all duration-300 ease-ui ${mobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className="xl:hidden grid transition-[grid-template-rows] duration-500 ease-ui"
          style={{ gridTemplateRows: mobileMenuOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="mt-4 pb-6 border-t border-white/10">
              <nav className="flex flex-col pt-2" aria-label="Navegación móvil">
                {navLinks.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-1 py-3.5 text-sm uppercase tracking-widest text-white/80 hover:text-[#c1a362] border-b border-white/5 last:border-0 transition-colors duration-200"
                    style={{
                      transitionDelay: mobileMenuOpen ? `${i * 30}ms` : "0ms",
                      transform: mobileMenuOpen ? "translateX(0)" : "translateX(-10px)",
                      opacity: mobileMenuOpen ? 1 : 0,
                      transition: `color 200ms, transform 400ms cubic-bezier(0.23, 1, 0.32, 1) ${i * 30}ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) ${i * 30}ms`,
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-3 pt-5">
                  <button
                    onClick={toggle}
                    className="text-[10px] tracking-[0.3em] uppercase border border-white/25 hover:border-[#c1a362]/60 text-white/50 hover:text-[#c1a362] px-2.5 py-1.5 transition-all duration-200"
                  >
                    {lang === "es" ? "EN" : "ES"}
                  </button>
                  <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                    <button className="w-full border border-[#c1a362] text-[#c1a362] hover:bg-[#c1a362] hover:text-[#1a1208] text-xs uppercase tracking-[0.25em] py-3 transition-all duration-300">
                      {t("header.bookNow")}
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
