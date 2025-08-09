'use client';

import Image from "next/image";
import { useState } from "react";

const images = [
  "19", "10", "12", "6", "1", "4", "6b", "13", "51", "Hab9", "21", "53",
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-28 bg-[#757165]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Galería</h3>
          <p className="text-xl text-white">
            Descubre cada rincón de nuestras habitaciones, diseñadas para brindarte comodidad, descanso y momentos inolvidables. Cada espacio refleja la esencia de nuestro pueblo mágico y la hospitalidad que nos distingue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(`/images/${img}.webp`)}
            >
              <Image
                src={`/images/${img}.webp`}
                alt={`Imagen ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-[90vw] h-[80vh] max-w-4xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded z-50"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Vista previa"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
