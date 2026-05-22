"use client";
import { Church, Palette, TreePine, Camera, Binoculars, Map } from "lucide-react";

const attractions = [
  { icon: Church, label: "Iglesia colonial del siglo XVI" },
  { icon: Palette, label: "Talleres de artesanías locales" },
  { icon: TreePine, label: "Senderos naturales y miradores" },
  { icon: Camera, label: "Tours fotográficos guiados" },
  { icon: Binoculars, label: "Festividades: Semana Santa, Romería y Día de Muertos" },
  { icon: Map, label: "Puentes históricos, haciendas y jardines virreinales" },
];

export default function Pueblo() {
  return (
    <section id="pueblo" className="py-32 bg-[#f5f0e8]">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="text-center mb-20" data-reveal>
          <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Explora la región
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-normal text-[#1a1208] leading-tight">
            Descubre <span className="italic">Salvatierra</span>
          </h2>
          <div className="w-12 h-px bg-[#c1a362] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-reveal="left">
            <p className="text-[#4a4035] text-lg leading-relaxed mb-10 font-light">
              Salvatierra, la primera ciudad de Guanajuato, es un lugar donde el tiempo
              se detiene para que puedas disfrutar de su historia, arquitectura colonial
              y espíritu tradicional. Rodeada de paisajes naturales, callejones empedrados
              y templos centenarios, esta joya del Bajío te invita a explorar su alma
              viva en cada rincón.
            </p>

            <div className="space-y-5">
              {attractions.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  data-reveal
                  data-reveal-delay={String(Math.min(i + 1, 6)) as "1" | "2" | "3" | "4" | "5" | "6"}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#c1a362]/30 group-hover:border-[#c1a362] group-hover:bg-[#c1a362]/5 flex items-center justify-center flex-shrink-0 transition-[border-color,background-color] duration-300 mt-0.5">
                    <Icon className="h-5 w-5 text-[#c1a362]" />
                  </div>
                  <span className="text-[#4a4035] text-base font-light leading-relaxed pt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-reveal="right">
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
                Tu navegador no soporta el video.
              </video>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#c1a362]/20 -z-10 hidden md:block" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#c1a362]/20 -z-10 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
