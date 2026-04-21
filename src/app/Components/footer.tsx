import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#habitaciones", label: "Habitaciones" },
    { href: "#servicios", label: "Servicios" },
    { href: "#eventos", label: "Eventos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <footer className="bg-[#0e0b04] text-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12 border-b border-white/5">

          {/* Logo + descripción */}
          <div>
            <Image src="/images/Logo1.png" alt="Hotel San Andrés" width={80} height={80} className="mb-5 opacity-90" />
            <p className="text-white/75 text-base font-light leading-relaxed max-w-xs">
              Tu refugio en el corazón de Salvatierra, Guanajuato.
              Más de 25 años de hospitalidad auténtica.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm tracking-[0.3em] uppercase text-[#c1a362] mb-6 font-normal">Navegación</h4>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 hover:text-[#c1a362] text-base font-light transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm tracking-[0.3em] uppercase text-[#c1a362] mb-6 font-normal">Contacto</h4>
            <ul className="space-y-3 text-white/75 text-sm font-light">
              <li>Pasaje San Andrés int.11</li>
              <li>Salvatierra, Guanajuato</li>
              <li className="pt-2">+52 (466) 105-1614</li>
              <li>hotel.sanandres@yahoo.com.mx</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-white/20 text-xs font-light">
          <p>© 2026 Hotel San Andrés. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Salvatierra, Pueblo Mágico · Guanajuato, México</p>
        </div>
      </div>
    </footer>
  );
}