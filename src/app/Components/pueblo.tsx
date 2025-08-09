import { Church, Palette, TreePine, Camera, Binoculars,Map } from "lucide-react";

export default function Pueblo() {
  return (
    <div>
      <section
        id="pueblo"
        className="py-28   bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Descubre Nuestro Salvatierra
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Salvatierra, el primer Pueblo Mágico de Guanajuato, es un lugar
                donde el tiempo se detiene para que puedas disfrutar de su
                historia, su arquitectura colonial y su espíritu tradicional.
                Rodeada de paisajes naturales, callejones empedrados y templos
                centenarios, esta joya del Bajío te invita a explorar su alma
                viva en cada rincón. Déjate envolver por sus leyendas, su
                gastronomía tradicional y su hospitalidad única. Aquí, cada
                amanecer es un viaje al pasado y cada calle guarda la esencia de
                un pueblo orgulloso de sus raíces.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Church className="h-6 w-6 text-black" />
                  <span className="text-gray-700">
                    Iglesia colonial del siglo XVI
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="h-6 w-6 text-black" />
                  <span className="text-gray-700">
                    Talleres de artesanías locales
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <TreePine className="h-6 w-6 text-black" />
                  <span className="text-gray-700">
                    Senderos naturales y miradores
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Camera className="h-6 w-6 text-black" />
                  <span className="text-gray-700">
                    Tours fotográficos guiados
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Binoculars className="h-6 w-6 text-black" />
                  <span className="text-gray-700">
                  Festividades tradicionales como la Semana Santa, la Romería y el Día de Muertos
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Map className="h-6 w-6 text-black" />
                  <span className="text-gray-700">
                  Puentes históricos, haciendas y jardines virreinales
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div>
                <video
                  src="/videos/Salvatierra.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster="/images/Salvatierra.webp"
                  className="w-full h-auto object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
