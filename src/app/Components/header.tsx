import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div>
     <header className="bg-[#a9a392] backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50 w-full">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <Image
                src="/Images/LogoH.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-30 h-auto md:w-40"
              />
              
            </div>

            {/* Desktop Navigation */}
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
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#c1a362]"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 pt-4">
                <Link
                  href="#inicio"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="#nosotros"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="#servicios"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="#habitaciones"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Habitaciones
                </Link>
                <Link
                  href="#pueblo"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nuestro Salvatierra
                </Link>
                <Link
                  href="#eventos"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nuestros Eventos
                </Link>
                <Link
                  href="#ubicacion"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ubicación
                </Link>
                <Link
                  href="#contacto"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
                <Link
                  href="#reservar"
                  className="text-white hover:text-black transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                <Button className="bg-[#c1a362] hover:bg-[#e7c47a] mt-4" onClick={() => setMobileMenuOpen(false)}>
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
