"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useT } from "@/lib/i18n";

const images = ["19", "10", "12", "3a", "1", "4", "6b", "13", "51", "Hab9", "21", "53"];

/* Grid span assignments — col spans for 4-column grid */
const spans: { cols: number; rows: number }[] = [
  { cols: 2, rows: 2 }, // 0 — featured
  { cols: 1, rows: 1 }, // 1
  { cols: 1, rows: 1 }, // 2
  { cols: 1, rows: 1 }, // 3
  { cols: 1, rows: 1 }, // 4
  { cols: 1, rows: 1 }, // 5
  { cols: 2, rows: 1 }, // 6
  { cols: 1, rows: 1 }, // 7
  { cols: 1, rows: 1 }, // 8
  { cols: 1, rows: 1 }, // 9
  { cols: 1, rows: 1 }, // 10
  { cols: 1, rows: 1 }, // 11
];

/* Stagger delays based on approximate visual row */
const delays = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5];

export default function Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const { t } = useT();

  const open = useCallback((i: number, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setLightboxIndex(i);
  }, []);

  const close = useCallback(() => {
    setLightboxIndex(null);
    triggerRef.current?.focus();
  }, []);

  const prev = useCallback(() =>
    setLightboxIndex((p) => (p === null ? 0 : (p - 1 + images.length) % images.length)), []);

  const next = useCallback(() =>
    setLightboxIndex((p) => (p === null ? 0 : (p + 1) % images.length)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  return (
    <section id="galeria" className="bg-[#1a1208] overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 pt-20 md:pt-28 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div data-reveal="left">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
              {t("gallery.h2a")} <span className="italic text-[#c1a362]">{t("gallery.h2b")}</span>
            </h2>
          </div>
          <div data-reveal="right" data-reveal-delay="1" className="md:max-w-xs md:pb-2">
            <p className="text-white/55 text-sm font-light leading-relaxed">{t("gallery.desc")}</p>
            <p className="text-[#c1a362]/60 text-[11px] tracking-[0.3em] uppercase font-light mt-3">
              {images.length} {t("gallery.photoCount")}
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 lg:px-12 pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-2">
          {images.map((img, i) => {
            const { cols, rows } = spans[i];
            return (
              <button
                key={i}
                data-reveal
                data-reveal-delay={String(delays[i]) as "1"|"2"|"3"|"4"|"5"|"6"}
                onClick={(e) => open(i, e)}
                aria-label={`${t("gallery.imageAria")} ${i + 1} ${t("gallery.fullscreen")}`}
                className={`
                  relative overflow-hidden group text-left
                  ${cols === 2 ? "col-span-2" : "col-span-1"}
                  ${rows === 2 ? "row-span-2" : "row-span-1"}
                `}
              >
                <Image
                  src={`/images/${img}.webp`}
                  alt={`${t("gallery.spaceAlt")} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-motion group-hover:scale-[1.07]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0704]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Center zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border border-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400 ease-ui backdrop-blur-[2px]">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Bottom image counter */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: "80ms" }}>
                  <span className="text-white/70 text-[10px] tracking-[0.25em] font-light">
                    {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border border-[#c1a362]/0 group-hover:border-[#c1a362]/40 transition-all duration-400" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("gallery.dialogAria")}
          className="fixed inset-0 bg-black/97 flex items-center justify-center z-50"
          onClick={close}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10" onClick={(e) => e.stopPropagation()}>
            <span className="text-white/40 text-[11px] tracking-[0.35em] uppercase font-light">
              {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button
              ref={closeRef}
              onClick={close}
              className="w-9 h-9 border border-white/20 hover:border-[#c1a362] text-white/60 hover:text-[#c1a362] flex items-center justify-center transition-all duration-200 ease-ui active:scale-95"
              aria-label={t("gallery.closeAria")}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label={t("gallery.prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 border border-white/20 hover:border-[#c1a362] text-white/60 hover:text-[#c1a362] flex items-center justify-center transition-all duration-200 ease-ui active:scale-95 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label={t("gallery.next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 border border-white/20 hover:border-[#c1a362] text-white/60 hover:text-[#c1a362] flex items-center justify-center transition-all duration-200 ease-ui active:scale-95 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[80vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightboxIndex}
              src={`/images/${images[lightboxIndex]}.webp`}
              alt={t("gallery.fullsizeAlt")}
              width={1400}
              height={900}
              className="object-contain w-full h-full max-h-[80vh]"
            />
          </div>

          {/* Strip dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`transition-all duration-300 ease-ui ${i === lightboxIndex ? "w-6 h-[2px] bg-[#c1a362]" : "w-2 h-[2px] bg-white/25 hover:bg-white/50"}`}
                aria-label={`${t("gallery.imageAria")} ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
