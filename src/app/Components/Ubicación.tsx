import {
  MapPin,
  Palette,
  Car,
  Navigation,
  Church,
  Mountain,
  Utensils,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Ubicacion() {
  return (
    <div>
      <section
        id="ubicacion"
        className="py-28 bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestra Ubicación
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encontramos en el corazón del pueblo mágico, a pasos de los
              principales atractivos turísticos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Información de ubicación */}
            <div>
              <div className="bg-[#757165] p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Cómo llegar
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#c1a362] p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Dirección Completa
                      </h3>
                      <p className="text-white">
                        Pasaje San Andres int.11
                        <br />
                        Salvatierra Centro
                        <br />
                        Salvatierra, Guanajuato
                        <br />
                        C.P. 38900
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#c1a362] p-3 rounded-full flex-shrink-0">
                      <Car className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        En Automóvil
                      </h3>
                      <p className="text-white">
                        Aproximadamente a 1 hora de Celaya y 2.5 horas de León o
                        Querétaro. Fácil acceso desde la carretera federal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#c1a362] p-3 rounded-full flex-shrink-0">
                      <Navigation className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Puntos de Referencia
                      </h3>
                      <ul className="text-white space-y-1">
                        <li>• Frente a la Plaza Principal</li>
                        <li>• A solo 50 m de la Iglesia de San Francisco</li>
                        <li>• Junto al Mercado de Artesanías</li>
                        <li>• A 2 cuadras del Mirador del Puente de Batanes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-amber-200">
                  <Button
                    className="w-full bg-[#c1a362] hover:bg-[#a98a47] text-lg py-3"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/kpxxMGwAjmTtzQNk8",
                        "_blank"
                      )
                    }
                  >
                    <Map className="h-5 w-5 mr-2" />
                    Abrir en Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Mapa de Google */}
            <div className="relative">
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.081394129!2d-100.88578198929025!3d20.21393848116107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc49bbb92f457%3A0xd7ad939c63a76a0e!2sHotel%20San%20Andres!5e0!3m2!1ses!2smx!4v1754663695769!5m2!1ses!2smx"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  title="Ubicación Hotel Pueblo Mágico"
                ></iframe>

                {/* Overlay clickeable para abrir en la app */}
                <div
                  className="absolute inset-0 bg-transparent cursor-pointer group"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/kpxxMGwAjmTtzQNk8",
                      "_blank"
                    )
                  }
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-gray-800 font-medium flex items-center">
                        <Map className="h-4 w-4 mr-2" />
                        Abrir en Maps
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-[#757165] p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    2 hrs
                  </div>
                  <div className="text-sm text-white">Desde CDMX</div>
                </div>
                <div className="bg-[#757165] p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    5 min
                  </div>
                  <div className="text-sm text-white">Caminando al centro</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lugares cercanos */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Lugares de Interés Cercanos
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Church className="h-8 w-8 text-[#c1a362] mx-auto mb-3" />
                <h5 className="font-semibold mb-1">Patrimonio histórico</h5>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Palette className="h-8 w-8 text-[#c1a362] mx-auto mb-3" />
                <h5 className="font-semibold mb-1">Compras artesanales</h5>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Mountain className="h-8 w-8 text-[#c1a362] mx-auto mb-3" />
                <h5 className="font-semibold mb-1">Mirador</h5>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Utensils className="h-8 w-8 text-[#c1a362] mx-auto mb-3" />
                <h5 className="font-semibold mb-1">Gastronomía</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
