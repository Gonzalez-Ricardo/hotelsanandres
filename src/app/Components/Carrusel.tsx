"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/52.webp",
      alt: "Vista panorámica del pueblo mágico",
    },
    {
      image: "/images/1.webp",
      alt: "Fachada colonial del hotel",
    },
    {
      image: "/images/2.webp",
      alt: "Plaza principal con iglesia colonial",
    },
    {
      image: "/images/24.webp",
      alt: "Jardines del hotel al atardecer",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Imágenes del carrusel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt || "Imagen del carrusel"}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Controles de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Imagen anterior"
      >
        <span className="sr-only">Anterior</span>
        <FaChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Siguiente imagen"
      >
        <span className="sr-only">Siguiente</span>
        <FaChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-[#c1a362] scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-[#a98a47] transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default function Carrusel() {
  return (
    <div>
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <HeroCarousel />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Bienvenidos al
            <span className="block text-[#c1a362]">Hotel San Andrés</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Tu refugio en el corazón de Salvatierra, Guanajuato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#habitaciones" passHref>
            <Button
              size="lg"
              className="bg-[#c1a362] hover:bg-[#a98a47] text-lg px-8 py-3"
            >
              Explorar Habitaciones
            </Button>
            </Link>
            <Link href="#galeria" passHref>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              >
                Ver Galería
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
