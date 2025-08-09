import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#a9a392] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/Images/LogoH.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-14 h-auto md:w-50"
                />
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="#inicio" className="hover:text-amber-400">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="hover:text-amber-400">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-amber-400">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#habitaciones" className="hover:text-amber-400">
                    Habitaciones
                  </Link>
                </li>
                <li>
                  <Link href="#pueblo" className="hover:text-amber-400">
                    Nuestro Salvatierra
                  </Link>
                </li>
                <li>
                  <Link href="#eventos" className="hover:text-amber-400">
                    Nuestros Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#ubicacion" className="hover:text-amber-400">
                    Ubicación
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-amber-400">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-white">
                <li>WiFi Gratuito</li>
                <li>Estacionamiento</li>
                <li>Aire Acondicionado </li>
                <li>Limpieza</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-2 text-white">
                <p>Pasaje San Andres int.11</p>
                <p>Salvatierra Centro,Salvatierra Guanajuato, C.P. 38900</p>
                <p>+52 (466) 105-1614</p>
                <p>hotel.sanandres@yahoo.com.mx</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 Hotel San Andres. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
