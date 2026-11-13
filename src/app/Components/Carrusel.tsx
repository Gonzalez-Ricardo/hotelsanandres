"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useT } from "@/lib/i18n";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useT();

  const slides = [
    { image: "/images/52.webp", alt: t("hero.slide.0.alt") },
    { image: "/images/1.webp",  alt: t("hero.slide.1.alt") },
    { image: "/images/2.webp",  alt: t("hero.slide.2.alt") },
    { image: "/images/24.webp", alt: t("hero.slide.3.alt") },
  ];

  const next = useCallback(() => setCurrentSlide((p) => (p + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <>
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1500 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <Image src={slide.image} alt={slide.alt} fill sizes="100vw" className="object-cover scale-[1.03]" priority={i === 0} />
          </div>
        ))}
        {/* Rich overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0704]/90 via-[#0a0704]/30 to-[#0a0704]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0704]/60 via-transparent to-transparent" />
      </div>

      {/* Prev/Next */}
      <button
        onClick={prev}
        aria-label={t("hero.prev")}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 border border-white/20 hover:border-[#c1a362] text-white/60 hover:text-[#c1a362] flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-ui active:scale-95"
      >
        <FaChevronLeft className="h-3 w-3" />
      </button>
      <button
        onClick={next}
        aria-label={t("hero.next")}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 border border-white/20 hover:border-[#c1a362] text-white/60 hover:text-[#c1a362] flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-ui active:scale-95"
      >
        <FaChevronRight className="h-3 w-3" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/10">
        <div className="h-full bg-[#c1a362] transition-all duration-300 ease-linear" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 right-8 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`${t("hero.image")} ${i + 1}`}
            aria-current={i === currentSlide ? "true" : undefined}
            className={`transition-all duration-400 ease-ui ${i === currentSlide ? "w-6 h-[2px] bg-[#c1a362]" : "w-2 h-[2px] bg-white/30 hover:bg-white/60"}`}
          />
        ))}
      </div>
    </>
  );
}

export default function Carrusel() {
  const { t } = useT();

  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <HeroCarousel />

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-14 lg:px-20 pb-28 md:pb-20">
        <div className="max-w-5xl">

          <p className="text-white/40 text-[10px] tracking-[0.45em] uppercase mb-7 font-light hero-shadow">
            Salvatierra, Guanajuato &nbsp;·&nbsp; Pueblo Mágico
          </p>

          <h1 className="font-display font-normal leading-[0.88] tracking-tight mb-8 hero-shadow">
            <span className="block text-white/55 text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] uppercase font-light">
              Hotel
            </span>
            <span className="block italic text-[#c1a362] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              San Andrés
            </span>
          </h1>

          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-10 max-w-lg hero-shadow">
            {t("hero.desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#habitaciones">
              <button className="bg-[#c1a362] hover:bg-[#a98a47] text-[#1a1208] text-[11px] tracking-[0.3em] uppercase font-medium px-10 py-4 transition-all duration-300 ease-ui active:scale-[0.98]">
                {t("hero.exploreRooms")}
              </button>
            </Link>
            <Link href="#galeria">
              <button className="border border-white/30 hover:border-[#c1a362] text-white hover:text-[#c1a362] text-[11px] tracking-[0.3em] uppercase px-10 py-4 backdrop-blur-sm transition-all duration-300 ease-ui active:scale-[0.98] font-light">
                {t("hero.viewGallery")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
