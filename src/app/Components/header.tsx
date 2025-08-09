import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
     <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#a9a392] backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <Image
                src="/Images/Logo1.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-30 h-auto md:w-30"
              />
            </div>

            {/* Navegación desktop */}
            <nav className="hidden lg:flex space-x-6">
            <Link href="#inicio" className="text-white hover:text-black transition-colors">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-white hover:text-black transition-colors">
              Nosotros
              </Link>
              <Link href="#servicios" className="text-white hover:text-black transition-colors">
                Servicios
              </Link>
              <Link href="#habitaciones" className="text-white hover:text-black transition-colors">
                 Habitaciones
              </Link>
              <Link href="#pueblo" className="text-white hover:text-black transition-colors">

                Nuestro Salvatierra
              </Link>
              <Link href="#eventos" className="text-white hover:text-black transition-colors">
                Nuestros Eventos
              </Link>
              <Link href="#ubicacion" className="text-white hover:text-black transition-colors">
                Ubicación
              </Link>
              <Link href="#contacto" className="text-white hover:text-black transition-colors">
                Contacto
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
            <Link
                  href="#contacto"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
              <Button className="hidden md:block bg-[#c1a362] hover:bg-[#a98a47]">Reservar Ahora</Button>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-amber-600"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Navegación móvil */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 pt-3">
                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#nosotros", label: "Nosotros" },
                  { href: "#servicios", label: "Servicios" },
                  { href: "#habitaciones", label: "Habitaciones" },
                  { href: "#pueblo", label: "Nuestro Salvatierra" },
                  { href: "#eventos", label: "Nuestros Eventos" },
                  { href: "#ubicacion", label: "Ubicación" },
                  { href: "#contacto", label: "Contacto" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-black transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#reservar"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                <Button className="bg-[#c1a362] hover:bg-[#e7c47a]" onClick={() => setMobileMenuOpen(false)}>
                  Reservar Ahora
                </Button>
                </Link>

              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
