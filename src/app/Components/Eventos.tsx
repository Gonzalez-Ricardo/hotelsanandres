"use client";
import Image from "next/image";
import { useT } from "@/lib/i18n";

const mainEventMeta = [
  { image: "/images/Virgen.webp" },
  { image: "/images/Marquezada.webp" },
  { image: "/images/Navidad.webp" },
];

export default function Eventos() {
  const { t } = useT();

  const mainEvents = mainEventMeta.map((m, i) => ({
    image: m.image,
    month: t(`event.${i}.month`),
    title: t(`event.${i}.title`),
    description: t(`event.${i}.desc`),
  }));

  const monthlyEvents = [0, 1, 2, 3].map((i) => ({
    month: t(`monthly.${i}.month`),
    title: t(`monthly.${i}.title`),
    desc: t(`monthly.${i}.desc`),
  }));

  return (
    <section id="eventos" className="overflow-hidden bg-[#1a1208]">

      {/* Header band */}
      <div className="container mx-auto px-6 lg:px-12 pt-20 md:pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div data-reveal="left">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
              {t("events.h2a")} <br />
              <span className="italic text-[#c1a362]">{t("events.h2b")}</span>
            </h2>
          </div>
          <div data-reveal="right" data-reveal-delay="1">
            <p className="text-white/55 text-base font-light leading-relaxed">{t("events.desc")}</p>
          </div>
        </div>
      </div>

      {/* Featured event cards — full-bleed with slide-up overlay */}
      <div className="container mx-auto px-6 lg:px-12 pb-20 md:pb-28">
        <div className="grid md:grid-cols-3 gap-4">
          {mainEvents.map((event, i) => (
            <div
              key={event.title}
              data-reveal
              data-reveal-delay={String(i + 1) as "1"|"2"|"3"}
              className="group/card relative overflow-hidden h-[420px] md:h-[500px] cursor-default"
            >
              {/* Background image */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-motion group-hover/card:scale-110"
              />

              {/* Base gradient — always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0704]/95 via-[#0a0704]/30 to-transparent" />

              {/* Month badge */}
              <div className="absolute top-5 left-5 border border-[#c1a362]/50 group-hover/card:border-[#c1a362] px-3 py-1.5 transition-colors duration-400">
                <span className="text-[#c1a362] text-[10px] tracking-[0.4em] uppercase font-light">{event.month}</span>
              </div>

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-white font-normal text-2xl md:text-3xl leading-tight mb-0 group-hover/card:mb-0">
                  {event.title}
                </h3>

                {/* Description slides up on hover */}
                <div className="overflow-hidden transition-all duration-500 ease-ui max-h-0 group-hover/card:max-h-40 opacity-0 group-hover/card:opacity-100">
                  <p className="text-white/70 text-sm font-light leading-relaxed mt-3">
                    {event.description}
                  </p>
                </div>

                {/* Gold expanding underline */}
                <div className="h-[1px] bg-[#c1a362] w-8 group-hover/card:w-full transition-all duration-600 ease-ui mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly calendar — stays dark, full-width rows */}
      <div className="border-t border-white/[0.06]">
        <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">

          <div className="flex items-baseline gap-5 mb-12" data-reveal>
            <h3 className="font-display text-white font-normal text-3xl md:text-4xl">
              {t("events.calTitle")} <span className="italic text-[#c1a362]">{t("events.calItalic")}</span>
            </h3>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          <div>
            {monthlyEvents.map((ev, i) => (
              <div
                key={ev.month}
                data-reveal
                data-reveal-delay={String(i + 1) as "1"|"2"|"3"|"4"}
                className="group grid md:grid-cols-[120px_1fr_auto] items-center gap-6 md:gap-10 py-7 border-b border-white/[0.06] first:border-t hover:bg-white/[0.025] transition-all duration-400 px-4 -mx-4 relative overflow-hidden"
              >
                {/* Month — large display */}
                <div className="flex-shrink-0">
                  <span className="font-display text-5xl md:text-6xl font-normal leading-none text-white/[0.08] group-hover:text-[#c1a362]/30 transition-colors duration-500 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div className="text-[#c1a362]/60 text-[10px] tracking-[0.4em] uppercase font-light mb-1.5 group-hover:text-[#c1a362] transition-colors duration-300">
                    {ev.month}
                  </div>
                  <h4 className="font-display text-white font-normal text-xl md:text-2xl leading-tight mb-1 group-hover:text-[#c1a362] transition-colors duration-400">
                    {ev.title}
                  </h4>
                  <p className="text-white/45 text-sm font-light leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                    {ev.desc}
                  </p>
                </div>

                {/* Right accent */}
                <div className="hidden md:block flex-shrink-0">
                  <div className="w-8 h-[1px] bg-[#c1a362]/20 group-hover:w-16 group-hover:bg-[#c1a362]/60 transition-all duration-500 ease-ui" />
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-4 w-0 h-[1px] bg-[#c1a362]/40 group-hover:w-[calc(100%-2rem)] transition-all duration-600 ease-ui" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
