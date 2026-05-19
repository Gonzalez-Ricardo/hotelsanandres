"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, ZoomIn } from "lucide-react";

const images = ["19", "10", "12", "3a", "1", "4", "6b", "13", "51", "Hab9", "21", "53"];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openImage = useCallback((img: string, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedImage(`/images/${img}.webp`);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeImage]);

  return (
    <section id="galeria" className="py-32 bg-[#1a1208]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">
              Nuestros espacios
            </p>
            <h2 className="text-5xl md:text-6xl font-thin text-white leading-tight">
              Galería <span className="italic font-light text-[#c1a362]">fotográfica</span>
            </h2>
          </div>
          <p className="text-white/75 text-sm font-light mt-4 md:mt-0 md:max-w-xs leading-relaxed">
            Descubre cada rincón de nuestras habitaciones y espacios,
            diseñados para brindarte comodidad y momentos inolvidables.
          </p>
        </div>

        {/* Grid asimétrico */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              className={`relative overflow-hidden group text-left ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "unset" : "4/3", height: i === 0 ? "100%" : undefined }}
              onClick={(e) => openImage(img, e)}
              aria-label={`Ver imagen ${i + 1} en tamaño completo`}
            >
              <div className={i === 0 ? "relative h-full min-h-[300px]" : "relative w-full h-full"} style={{ aspectRatio: i !== 0 ? "4/3" : undefined }}>
                <Image
                  src={`/images/${img}.webp`}
                  alt={`Espacio del hotel, imagen ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Vista previa de imagen"
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <button
            ref={closeButtonRef}
            onClick={closeImage}
            className="absolute top-6 right-6 w-10 h-10 border border-white/20 hover:border-[#c1a362] text-white hover:text-[#c1a362] flex items-center justify-center transition-[border-color,color,transform] duration-200 ease-ui active:scale-[0.97] z-50"
            aria-label="Cerrar vista previa"
          >
            <X className="h-4 w-4" />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Espacio del hotel en tamaño completo"
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}