"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t } = useT();

  const links = [
    { href: "#inicio",       key: "nav.home" },
    { href: "#nosotros",     key: "nav.about" },
    { href: "#habitaciones", key: "nav.rooms" },
    { href: "#servicios",    key: "nav.services" },
    { href: "#eventos",      key: "nav.events" },
    { href: "#galeria",      key: "footer.gallery" },
    { href: "#ubicacion",    key: "nav.location" },
    { href: "#contacto",     key: "nav.contact" },
  ];

  return (
    <footer className="bg-[#0e0b04] text-white">

      {/* CTA band */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-white leading-[1] mb-3">
                {t("footer.ctaLine1")} <span className="italic text-[#c1a362]">{t("footer.ctaLine2")}</span>
              </h2>
              <p className="text-white/40 text-sm font-light">{t("footer.ctaDesc")}</p>
            </div>
            <div className="flex-shrink-0">
              <Link href="#contacto">
                <button className="bg-[#c1a362] hover:bg-[#a98a47] text-[#1a1208] text-[11px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all duration-300 ease-ui active:scale-[0.98] whitespace-nowrap">
                  {t("header.bookNow")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="py-16 grid md:grid-cols-3 gap-12 border-b border-white/5">

          {/* Brand */}
          <div>
            <Image src="/images/Logo2.png" alt="Hotel San Andrés" width={100} height={100} className="mb-6 opacity-85 h-auto" />
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs mb-6">{t("footer.desc")}</p>
            <div className="space-y-2.5">
              <a href="tel:+524661051614" className="flex items-center gap-2.5 text-white/40 hover:text-[#c1a362] text-sm font-light transition-colors duration-200 group">
                <Phone className="h-3.5 w-3.5 text-[#c1a362]/50 group-hover:text-[#c1a362]" />
                +52 (466) 105-1614
              </a>
              <a href="mailto:hotel.sanandres@yahoo.com.mx" className="flex items-center gap-2.5 text-white/40 hover:text-[#c1a362] text-sm font-light transition-colors duration-200 group">
                <Mail className="h-3.5 w-3.5 text-[#c1a362]/50 group-hover:text-[#c1a362]" />
                hotel.sanandres@yahoo.com.mx
              </a>
              <div className="flex items-start gap-2.5 text-white/40 text-sm font-light">
                <MapPin className="h-3.5 w-3.5 text-[#c1a362]/50 flex-shrink-0 mt-0.5" />
                <span>Pasaje San Andrés int.11,<br />Salvatierra, Guanajuato</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/30 mb-6 font-light">{t("footer.nav")}</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-[#c1a362] text-sm font-light transition-colors duration-200">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/30 mb-6 font-light">{t("contact.hours")}</h4>
            <div className="space-y-3 text-sm font-light">
              <div className="flex justify-between">
                <span className="text-white/50">{t("contact.monSun")}</span>
                <span className="text-[#c1a362]">8:00 — 22:00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/5">
                <span className="text-white/50">{t("contact.checkin")}</span>
                <span className="text-white/35">12:30 hrs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">{t("contact.checkout")}</span>
                <span className="text-white/35">12:00 hrs</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <a href="https://wa.link/mucy5k" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/40 hover:text-[#c1a362] transition-colors duration-200 font-light">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between text-white/20 text-[11px] font-light gap-2">
          <p>{t("footer.copyright")}</p>
          <p className="tracking-widest">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
