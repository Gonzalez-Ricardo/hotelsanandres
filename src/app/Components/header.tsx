"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#habitaciones", label: "Habitaciones" },
    { href: "#pueblo", label: "Salvatierra" },
    { href: "#eventos", label: "Eventos" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1208]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center space-x-3 group">
            <Image
              src="/images/Logo1.png"
              alt="Hotel San Andrés"
              width={140}
              height={140}
              className="w-32 h-auto"
              style={{ height: "auto" }}
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-light tracking-widest uppercase text-white/80 hover:text-[#c1a362] transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#c1a362] group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link href="#contacto" className="hidden md:block">
              <Button className="bg-[#c1a362] hover:bg-[#a98a47] text-white text-sm tracking-widest uppercase px-6 py-2 rounded-none border border-[#c1a362] hover:border-[#a98a47] transition-all duration-300">
                Reservar
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-1 pt-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-3 text-sm uppercase tracking-widest text-white/80 hover:text-[#c1a362] border-b border-white/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} className="pt-4">
                <Button className="w-full bg-[#c1a362] hover:bg-[#a98a47] text-white uppercase tracking-widest rounded-none">
                  Reservar Ahora
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}