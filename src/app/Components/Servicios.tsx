"use client";
import { Wifi, Car, AirVent, BrushCleaning, Shield, Bed, MapPin, Leaf } from "lucide-react";
import { useT } from "@/lib/i18n";

const svcMeta = [
  { icon: Wifi,          tagCount: 3 },
  { icon: AirVent,       tagCount: 2 },
  { icon: Car,           tagCount: 3 },
  { icon: Bed,           tagCount: 1 },
  { icon: BrushCleaning, tagCount: 2 },
  { icon: MapPin,        tagCount: 2 },
];

export default function Servicios() {
  const { t } = useT();

  const services = svcMeta.map((m, i) => ({
    icon: m.icon,
    num: String(i + 1).padStart(2, "0"),
    title: t(`svc.${i}.title`),
    description: t(`svc.${i}.desc`),
    tags: Array.from({ length: m.tagCount }, (_, j) => t(`svc.${i}.tag${j}`)),
  }));

  return (
    <section id="servicios" className="bg-[#1a1208] overflow-hidden">

      {/* Header band */}
      <div className="container mx-auto px-6 lg:px-12 pt-20 md:pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div data-reveal="left">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
              {t("services.h2a")} <br />
              <span className="italic text-[#c1a362]">{t("services.h2b")}</span>
            </h2>
          </div>
          <div data-reveal="right" data-reveal-delay="1">
            <p className="text-white/55 text-base font-light leading-relaxed mb-6">{t("services.intro")}</p>
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-white/10 text-white/40 text-[10px] tracking-[0.25em] uppercase">
                <Shield className="h-3 w-3 text-[#c1a362]/70" /> {t("services.security")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-white/10 text-white/40 text-[10px] tracking-[0.25em] uppercase">
                <Leaf className="h-3 w-3 text-[#c1a362]/70" /> {t("services.eco")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service cards grid */}
      <div className="container mx-auto px-6 lg:px-12 pb-20 md:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ icon: Icon, num, title, description, tags }, i) => (
            <div
              key={title}
              data-reveal
              data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
              className="group relative bg-white/[0.03] border border-white/[0.07] hover:border-[#c1a362]/40 hover:bg-white/[0.06] transition-all duration-500 ease-ui hover:-translate-y-1 p-7 md:p-8 flex flex-col overflow-hidden cursor-default"
            >
              {/* Faint background number */}
              <span className="absolute -bottom-3 -right-1 font-display text-[7rem] font-normal leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-[#c1a362]/[0.05] transition-colors duration-500">
                {num}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 border border-[#c1a362]/25 group-hover:border-[#c1a362]/60 group-hover:bg-[#c1a362]/[0.07] flex items-center justify-center mb-6 transition-all duration-400 ease-ui flex-shrink-0">
                <Icon className="h-5 w-5 text-[#c1a362] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Number chip */}
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#c1a362]/50 group-hover:text-[#c1a362]/80 font-light mb-3 transition-colors duration-300">
                {num}
              </span>

              {/* Title */}
              <h3 className="font-display text-white font-normal text-xl md:text-2xl leading-tight mb-3 group-hover:text-[#c1a362] transition-colors duration-400">
                {title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm font-light leading-relaxed mb-6 flex-1 group-hover:text-white/65 transition-colors duration-300">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map((tag, j) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 border border-white/[0.08] group-hover:border-[#c1a362]/30 text-white/30 group-hover:text-white/55 tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300"
                    style={{ transitionDelay: `${j * 50}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c1a362] group-hover:w-full transition-all duration-600 ease-ui" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
