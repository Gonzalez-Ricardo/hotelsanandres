"use client";
import { Church, Palette, TreePine, Camera, Binoculars, Map } from "lucide-react";
import { useT } from "@/lib/i18n";

const attractionIcons = [Church, Palette, TreePine, Camera, Binoculars, Map];

export default function Pueblo() {
  const { t } = useT();

  const attractions = attractionIcons.map((icon, i) => ({ icon, label: t(`attract.${i}`) }));

  return (
    <section id="pueblo" className="overflow-hidden bg-[#f5f0e8]">

      {/* Dark header band */}
      <div className="bg-[#1a1208] py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div data-reveal="left">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
                {t("pueblo.h2a")} <br />
                <span className="italic text-[#c1a362]">{t("pueblo.h2b")}</span>
              </h2>
            </div>
            <div data-reveal="right" data-reveal-delay="1">
              <p className="text-white/55 text-base font-light leading-relaxed mb-6">{t("pueblo.desc")}</p>
              {/* Pueblo Mágico badge */}
              <div className="inline-flex items-center gap-2 border border-[#c1a362]/30 px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c1a362]" />
                <span className="text-[#c1a362]/80 text-[11px] tracking-[0.35em] uppercase font-light">Pueblo Mágico · Guanajuato</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Attractions grid */}
          <div>
            <p className="text-[#4a4035]/70 text-[11px] tracking-[0.35em] uppercase font-light mb-8" data-reveal>
              {t("pueblo.attractTitle")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {attractions.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  data-reveal
                  data-reveal-delay={String(Math.min(i + 1, 6)) as "1"|"2"|"3"|"4"|"5"|"6"}
                  className="group flex items-start gap-4 p-5 border border-[#c1a362]/12 hover:border-[#c1a362]/45 hover:bg-[#c1a362]/[0.03] transition-all duration-400 ease-ui hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 border border-[#c1a362]/25 group-hover:border-[#c1a362]/70 group-hover:bg-[#c1a362]/[0.07] flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Icon className="h-4 w-4 text-[#c1a362] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <span className="text-[#4a4035] text-sm font-light leading-relaxed pt-2 group-hover:text-[#1a1208] transition-colors duration-200">{label}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px bg-[#c1a362]/15 mt-10" data-reveal data-reveal-delay="6">
              <div className="bg-[#f5f0e8] text-center py-6 hover:bg-white transition-colors duration-300">
                <div className="font-display text-3xl font-normal text-[#c1a362] mb-1">1999</div>
                <div className="text-[10px] text-[#4a4035] tracking-[0.25em] uppercase font-light">{t("pueblo.founded")}</div>
              </div>
              <div className="bg-[#f5f0e8] text-center py-6 hover:bg-white transition-colors duration-300">
                <div className="font-display text-3xl font-normal text-[#c1a362] mb-1">1a</div>
                <div className="text-[10px] text-[#4a4035] tracking-[0.25em] uppercase font-light">{t("pueblo.firstCity")}</div>
              </div>
              <div className="bg-[#f5f0e8] text-center py-6 hover:bg-white transition-colors duration-300">
                <div className="font-display text-3xl font-normal text-[#c1a362] mb-1">PM</div>
                <div className="text-[10px] text-[#4a4035] tracking-[0.25em] uppercase font-light">{t("pueblo.magicTown")}</div>
              </div>
            </div>
          </div>

          {/* Video column */}
          <div className="relative" data-reveal="right" data-reveal-delay="2">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-[#c1a362]/20 hidden md:block" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#c1a362]/15 hidden md:block" />

            <div className="relative overflow-hidden shadow-2xl">
              <video
                src="/videos/Salvatierra.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                poster="/images/Salvatierra.webp"
                className="w-full h-auto object-cover"
                suppressHydrationWarning
                controls
                controlsList="nodownload"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
              >
                {t("pueblo.videoFallback")}
              </video>

              {/* Video label overlay */}
              <div className="absolute top-4 left-4 bg-[#1a1208]/75 backdrop-blur-sm px-3 py-1.5 pointer-events-none">
                <span className="text-[#c1a362] text-[10px] tracking-[0.3em] uppercase font-light">Salvatierra, Gto.</span>
              </div>
            </div>

            {/* Pull-quote below video */}
            <div className="mt-6 border-l border-[#c1a362]/40 pl-5" data-reveal data-reveal-delay="4">
              <p className="font-display text-[#4a4035] italic font-normal leading-relaxed text-sm">
                &ldquo;{t("pueblo.quote")}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
