"use client";
import Image from "next/image";
import { Heart, Sparkles, Shield, Hotel } from "lucide-react";
import { useT } from "@/lib/i18n";

export default function Nosotros() {
  const { t } = useT();

  const feats = [
    { icon: Heart,    key: "about.feat0" },
    { icon: Hotel,    key: "about.feat1" },
    { icon: Shield,   key: "about.feat2" },
    { icon: Sparkles, key: "about.feat3" },
  ];

  return (
    <section id="nosotros" className="overflow-hidden bg-[#f5f0e8]">

      {/* Top band — full bleed dark with large heading */}
      <div className="bg-[#1a1208] py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div data-reveal="left">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
                {t("about.h2a")} <br />
                <span className="italic text-[#c1a362]">{t("about.h2b")}</span>
              </h2>
            </div>
            <div data-reveal="right" data-reveal-delay="1">
              <p className="text-white/55 text-base font-light leading-relaxed mb-5">{t("about.p1")}</p>
              <p className="text-white/55 text-base font-light leading-relaxed">{t("about.p2")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content — cream background */}
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Images column */}
          <div className="relative group/images">
            <div className="grid grid-cols-2 gap-3">
              {/* Large top image */}
              <div
                className="col-span-2 relative h-72 overflow-hidden"
                data-reveal="left"
              >
                <Image
                  src="/images/29.webp"
                  alt="Entrada del hotel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-motion hover:scale-[1.04]"
                />
              </div>

              {/* Bottom left */}
              <div
                className="relative h-48 overflow-hidden"
                data-reveal="left"
                data-reveal-delay="1"
              >
                <Image
                  src="/images/23.webp"
                  alt="Pasaje colonial"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-motion hover:scale-[1.06]"
                />
              </div>

              {/* Bottom right */}
              <div
                className="relative h-48 overflow-hidden"
                data-reveal="left"
                data-reveal-delay="2"
              >
                <Image
                  src="/images/52.webp"
                  alt="Recepción"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-motion hover:scale-[1.06]"
                />
              </div>
            </div>

            {/* 25+ floating badge */}
            <div
              className="absolute -bottom-5 -right-5 bg-[#1a1208] text-white p-7 shadow-2xl hidden md:flex flex-col items-center gap-1"
              data-reveal
              data-reveal-delay="3"
            >
              <span className="font-display text-5xl font-normal text-[#c1a362] leading-none">25+</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 mt-1 font-light">{t("about.yearsService")}</span>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:pl-6 pt-6 md:pt-0 md:mt-0">

            {/* Mobile 25+ */}
            <div className="flex md:hidden items-center gap-4 mb-8 pb-6 border-b border-[#c1a362]/20">
              <span className="font-display text-4xl font-normal text-[#c1a362]">25+</span>
              <span className="text-xs tracking-widest uppercase text-[#4a4035] font-light">{t("about.yearsService")}</span>
            </div>

            {/* Feature items — staggered */}
            <div className="grid grid-cols-2 gap-2.5 mb-10">
              {feats.map(({ icon: Icon, key }, i) => (
                <div
                  key={key}
                  className="flex items-center gap-3 p-4 border border-[#c1a362]/15 hover:border-[#c1a362]/50 hover:bg-[#c1a362]/[0.03] transition-all duration-300 group"
                  data-reveal="right"
                  data-reveal-delay={String(Math.min(i + 1, 4)) as "1"|"2"|"3"|"4"}
                >
                  <Icon className="h-4 w-4 text-[#c1a362] flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm text-[#1a1208] font-light tracking-wide">{t(key)}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 gap-px bg-[#c1a362]/15 mb-10"
              data-reveal="right"
              data-reveal-delay="5"
            >
              <div className="bg-[#f5f0e8] text-center py-8 px-4 group hover:bg-white transition-colors duration-300">
                <div className="font-display text-4xl font-normal text-[#c1a362] mb-1 group-hover:scale-105 transition-transform duration-300">80,000+</div>
                <div className="text-[11px] text-[#4a4035] tracking-[0.25em] uppercase font-light">{t("about.families")}</div>
              </div>
              <div className="bg-[#f5f0e8] text-center py-8 px-4 group hover:bg-white transition-colors duration-300">
                <div className="font-display text-4xl font-normal text-[#c1a362] mb-1 group-hover:scale-105 transition-transform duration-300">98%</div>
                <div className="text-[11px] text-[#4a4035] tracking-[0.25em] uppercase font-light">{t("about.satisfaction")}</div>
              </div>
            </div>

            {/* Quote */}
            <div
              className="border-l border-[#c1a362]/40 pl-6"
              data-reveal="right"
              data-reveal-delay="6"
            >
              <p className="font-display text-[#4a4035] italic font-normal leading-relaxed text-base">
                &ldquo;{t("about.quote")}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
