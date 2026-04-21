"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: "/images/52.webp", alt: "Vista panorámica del pueblo mágico" },
    { image: "/images/1.webp", alt: "Fachada colonial del hotel" },
    { image: "/images/2.webp", alt: "Plaza principal con iglesia colonial" },
    { image: "/images/24.webp", alt: "Jardines del hotel al atardecer" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Imágenes */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover scale-105"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Gradiente elegante doble */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Controles — centrado abajo en móvil, lateral en desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-6 z-20 w-10 h-10 md:w-12 md:h-12 border border-white/30 hover:border-[#c1a362] text-white hover:text-[#c1a362] flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        aria-label="Anterior"
      >
        <FaChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 border border-white/30 hover:border-[#c1a362] text-white hover:text-[#c1a362] flex items-center justify-center backdrop-blur-sm transition-all duration-300"
        aria-label="Siguiente"
      >
        <FaChevronRight className="h-3 w-3 md:h-4 md:w-4" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-0.5 bg-[#c1a362]"
                : "w-4 h-0.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-white/10">
        <div
          className="h-full bg-[#c1a362] transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </>
  );
}

export default function Carrusel() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-end justify-start overflow-hidden"
    >
      <HeroCarousel />

      {/* Contenido hero — alineado abajo izquierda, estilo editorial */}
      <div className="relative z-10 w-full pb-36 md:pb-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-5 font-normal">
            Salvatierra, Guanajuato · Pueblo Mágico
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white leading-none mb-6 tracking-tight">
            Hotel
            <span className="block font-light italic text-[#c1a362]">San Andrés</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-10 max-w-xl">
            Tu refugio en el corazón histórico de Salvatierra. Más de 25 años
            brindando hospitalidad auténtica y experiencias inolvidables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#habitaciones">
              <button className="bg-[#c1a362] hover:bg-[#a98a47] text-white text-sm tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300">
                Explorar Habitaciones
              </button>
            </Link>
            <Link href="#galeria">
              <button className="border border-white/40 hover:border-[#c1a362] text-white hover:text-[#c1a362] text-sm tracking-[0.2em] uppercase px-10 py-4 backdrop-blur-sm transition-all duration-300">
                Ver Galería
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-8 bottom-24 z-20 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#c1a362] animate-bounce" />
        </div>
      </div>
    </section>
  );
}