"use client";
import { MapPin, Car, Navigation, Church, Palette, Mountain, Utensils, Map, Clock } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function Ubicacion() {
  const { t } = useT();

  const nearbyItems = [
    { icon: Church,   key: "location.heritage" },
    { icon: Palette,  key: "location.crafts" },
    { icon: Mountain, key: "location.mirador" },
    { icon: Utensils, key: "location.gastronomy" },
  ];

  return (
    <section id="ubicacion" className="overflow-hidden bg-[#f5f0e8]">

      {/* Dark header band */}
      <div className="bg-[#1a1208] py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-end">

            <div data-reveal="left">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
                {t("location.h2a")} <br />
                <span className="italic text-[#c1a362]">{t("location.h2b")}</span>
              </h2>
            </div>

            <div data-reveal="right" data-reveal-delay="1">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-px bg-white/[0.06] mb-6">
                <div className="bg-[#1a1208] text-center py-5 px-3">
                  <div className="font-display text-3xl font-normal text-[#c1a362] mb-1">30 min</div>
                  <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-light">Celaya</div>
                </div>
                <div className="bg-[#1a1208] text-center py-5 px-3">
                  <div className="font-display text-3xl font-normal text-[#c1a362] mb-1">2 hrs</div>
                  <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-light">León</div>
                </div>
                <div className="bg-[#1a1208] text-center py-5 px-3">
                  <div className="font-display text-3xl font-normal text-[#c1a362] mb-1">5 min</div>
                  <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-light">{t("location.toPlaza")}</div>
                </div>
              </div>
              {/* Address preview */}
              <div className="flex items-center gap-2.5 text-white/40 text-sm font-light">
                <MapPin className="h-3.5 w-3.5 text-[#c1a362]/60 flex-shrink-0" />
                Pasaje San Andrés int.11 · Salvatierra, Guanajuato
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — info items */}
          <div className="space-y-0">

            {/* Address */}
            <div
              className="group flex items-start gap-5 py-7 border-b border-[#c1a362]/12 hover:bg-[#c1a362]/[0.02] transition-colors duration-300 -mx-4 px-4"
              data-reveal="left"
            >
              <div className="w-10 h-10 border border-[#c1a362]/30 group-hover:border-[#c1a362]/60 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                <MapPin className="h-4 w-4 text-[#c1a362]" />
              </div>
              <div>
                <h4 className="text-[#4a4035]/60 text-[11px] tracking-[0.3em] uppercase font-light mb-2">{t("location.addr")}</h4>
                <p className="text-[#1a1208] text-base font-light leading-relaxed">
                  Pasaje San Andrés int.11<br />
                  Salvatierra Centro<br />
                  Salvatierra, Guanajuato, C.P. 38900
                </p>
              </div>
            </div>

            {/* By car */}
            <div
              className="group flex items-start gap-5 py-7 border-b border-[#c1a362]/12 hover:bg-[#c1a362]/[0.02] transition-colors duration-300 -mx-4 px-4"
              data-reveal="left"
              data-reveal-delay="1"
            >
              <div className="w-10 h-10 border border-[#c1a362]/30 group-hover:border-[#c1a362]/60 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                <Car className="h-4 w-4 text-[#c1a362]" />
              </div>
              <div>
                <h4 className="text-[#4a4035]/60 text-[11px] tracking-[0.3em] uppercase font-light mb-2">{t("location.bycar")}</h4>
                <p className="text-[#1a1208] text-base font-light leading-relaxed">
                  {t("location.bycar.line1")}<br />
                  {t("location.bycar.line2")}
                </p>
              </div>
            </div>

            {/* Landmarks */}
            <div
              className="group flex items-start gap-5 py-7 border-b border-[#c1a362]/12 hover:bg-[#c1a362]/[0.02] transition-colors duration-300 -mx-4 px-4"
              data-reveal="left"
              data-reveal-delay="2"
            >
              <div className="w-10 h-10 border border-[#c1a362]/30 group-hover:border-[#c1a362]/60 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                <Navigation className="h-4 w-4 text-[#c1a362]" />
              </div>
              <div>
                <h4 className="text-[#4a4035]/60 text-[11px] tracking-[0.3em] uppercase font-light mb-2">{t("location.landmarks")}</h4>
                <ul className="space-y-1.5">
                  {[0,1,2,3].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-[#1a1208] text-sm font-light">
                      <span className="w-1 h-1 rounded-full bg-[#c1a362] flex-shrink-0" />
                      {t(`location.ref${i}`).replace("·", "").trim()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hours */}
            <div
              className="group flex items-start gap-5 py-7 border-b border-[#c1a362]/12 hover:bg-[#c1a362]/[0.02] transition-colors duration-300 -mx-4 px-4"
              data-reveal="left"
              data-reveal-delay="3"
            >
              <div className="w-10 h-10 border border-[#c1a362]/30 group-hover:border-[#c1a362]/60 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                <Clock className="h-4 w-4 text-[#c1a362]" />
              </div>
              <div>
                <h4 className="text-[#4a4035]/60 text-[11px] tracking-[0.3em] uppercase font-light mb-2">{t("contact.hours")}</h4>
                <p className="text-[#1a1208] text-sm font-light">{t("contact.monSun")} · 8:00 — 22:00</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8" data-reveal="left" data-reveal-delay="4">
              <button
                className="w-full bg-[#1a1208] hover:bg-[#c1a362] text-white hover:text-[#1a1208] text-[11px] tracking-[0.3em] uppercase font-light py-4 transition-all duration-300 ease-ui active:scale-[0.98] flex items-center justify-center gap-3 group/btn"
                onClick={() => window.open("https://maps.app.goo.gl/kpxxMGwAjmTtzQNk8", "_blank")}
              >
                <Map className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                {t("location.openMaps")}
              </button>
            </div>
          </div>

          {/* Right — map + nearby */}
          <div data-reveal="right" data-reveal-delay="1">
            <div className="overflow-hidden shadow-2xl mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.081394129!2d-100.88578198929025!3d20.21393848116107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc49bbb92f457%3A0xd7ad939c63a76a0e!2sHotel%20San%20Andres!5e0!3m2!1ses!2smx!4v1754663695769!5m2!1ses!2smx"
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("location.mapTitle")}
              />
            </div>

            {/* Nearby attractions */}
            <div className="grid grid-cols-4 gap-2">
              {nearbyItems.map(({ icon: Icon, key }, i) => (
                <div
                  key={key}
                  data-reveal
                  data-reveal-delay={String(Math.min(i + 2, 6)) as "2"|"3"|"4"|"5"|"6"}
                  className="group bg-white border border-[#c1a362]/10 hover:border-[#c1a362]/45 p-4 text-center hover:bg-[#f5f0e8] transition-all duration-300 hover:-translate-y-0.5 ease-ui"
                >
                  <Icon className="h-5 w-5 text-[#c1a362] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xs text-[#4a4035] font-light leading-tight">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
