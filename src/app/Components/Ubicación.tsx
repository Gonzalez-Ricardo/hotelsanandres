import { MapPin, Car, Navigation, Church, Palette, Mountain, Utensils, Map } from "lucide-react";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-32 bg-[#f5f0e8]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="text-center mb-20">
          <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">
            Cómo llegar
          </p>
          <h2 className="text-5xl md:text-6xl font-thin text-[#1a1208] leading-tight">
            Nuestra <span className="italic font-light">Ubicación</span>
          </h2>
          <div className="w-12 h-px bg-[#c1a362] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div className="space-y-8">
            {/* Datos de acceso */}
            <div className="bg-[#1a1208] p-8 space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#c1a362]/40 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[#c1a362]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold tracking-wide mb-2">Dirección</h4>
                  <p className="text-white/75 text-base font-light leading-relaxed">
                    Pasaje San Andrés int.11<br />
                    Salvatierra Centro<br />
                    Salvatierra, Guanajuato, C.P. 38900
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#c1a362]/40 flex items-center justify-center flex-shrink-0">
                  <Car className="h-4 w-4 text-[#c1a362]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold tracking-wide mb-2">En Automóvil</h4>
                  <p className="text-white/75 text-base font-light leading-relaxed">
                    30 minutos de Celaya · 2 horas de León.<br />
                    Fácil acceso desde la carretera federal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[#c1a362]/40 flex items-center justify-center flex-shrink-0">
                  <Navigation className="h-4 w-4 text-[#c1a362]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold tracking-wide mb-2">Puntos de Referencia</h4>
                  <ul className="text-white/75 text-sm font-light space-y-1">
                    <li>· Frente a la Plaza Principal</li>
                    <li>· 50 metros de la Iglesia de San Francisco</li>
                    <li>· Junto al Mercado de Artesanías</li>
                    <li>· 2 cuadras del Mirador Puente de Batanes</li>
                  </ul>
                </div>
              </div>

              <button
                className="w-full bg-[#c1a362] hover:bg-[#a98a47] text-white text-sm tracking-[0.2em] uppercase py-4 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => window.open("https://maps.app.goo.gl/kpxxMGwAjmTtzQNk8", "_blank")}
              >
                <Map className="h-4 w-4" />
                Abrir en Google Maps
              </button>
            </div>

            {/* Distancias */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-[#c1a362]/15 p-6 text-center">
                <div className="text-3xl font-thin text-[#c1a362] mb-1">2 hrs</div>
                <div className="text-sm text-[#4a4035] tracking-widest uppercase font-light">Desde Querétaro o León</div>
              </div>
              <div className="bg-white border border-[#c1a362]/15 p-6 text-center">
                <div className="text-3xl font-thin text-[#c1a362] mb-1">5 min</div>
                <div className="text-sm text-[#4a4035] tracking-widest uppercase font-light">A la Plaza Principal</div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div>
            <div className="overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.081394129!2d-100.88578198929025!3d20.21393848116107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc49bbb92f457%3A0xd7ad939c63a76a0e!2sHotel%20San%20Andres!5e0!3m2!1ses!2smx!4v1754663695769!5m2!1ses!2smx"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Hotel San Andrés"
              />
            </div>

            {/* Lugares cercanos */}
            <div className="grid grid-cols-4 gap-px mt-3 bg-[#c1a362]/10">
              {[
                { icon: Church, label: "Patrimonio histórico" },
                { icon: Palette, label: "Artesanías" },
                { icon: Mountain, label: "Mirador" },
                { icon: Utensils, label: "Gastronomía" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-white p-5 text-center">
                  <Icon className="h-5 w-5 text-[#c1a362] mx-auto mb-2" />
                  <p className="text-xs text-[#4a4035] font-light">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}