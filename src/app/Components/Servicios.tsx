import { Wifi, Car, AirVent, BrushCleaning, Shield, Bed, MapPin, Leaf } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "WiFi de Alta Velocidad",
    description: "Conéctate sin límites en todas las áreas del hotel.",
    tags: ["Gratis", "300 Mbps", "Cobertura total"],
  },
  {
    icon: AirVent,
    title: "Aire Acondicionado",
    description: "Climatización ideal para tu confort durante toda tu estancia.",
    tags: ["Incluido", "Confort"],
  },
  {
    icon: Car,
    title: "Estacionamiento Seguro",
    description: "Espacio privado, supervisado y con fácil acceso.",
    tags: ["Privado", "CCTV", "Nocturno"],
  },
  {
    icon: Bed,
    title: "Camas Premium",
    description: "Ropa de cama hipoalergénica y colchones de alta comodidad.",
    tags: ["Hipoalergénicas"],
  },
  {
    icon: BrushCleaning,
    title: "Limpieza Diaria",
    description: "Servicio diario para mantener tu habitación impecable y acogedora.",
    tags: ["Diario", "Desinfección"],
  },
  {
    icon: MapPin,
    title: "Ubicación Céntrica",
    description: "A pasos de la plaza principal y los mejores restaurantes.",
    tags: ["Frente a la plaza", "Todo cerca"],
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-32 bg-[#1a1208]"
    >
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">
              Lo que ofrecemos
            </p>
            <h2 className="text-5xl md:text-6xl font-thin text-white leading-tight">
              Nuestros <br />
              <span className="italic font-light text-[#c1a362]">Servicios</span>
            </h2>
          </div>
          <div>
            <p className="text-white/75 text-lg font-light leading-relaxed">
              En Hotel San Andrés te ofrecemos más que una estancia: brindamos comodidad,
              hospitalidad y experiencias únicas. Todo pensado para que tu visita a
              Salvatierra sea tan cómoda como inolvidable.
            </p>
            <div className="flex gap-4 mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#c1a362]/30 text-[#c1a362] text-xs tracking-widest uppercase">
                <Shield className="h-3 w-3" /> Seguridad 24/7
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-[#c1a362]/30 text-[#c1a362] text-xs tracking-widest uppercase">
                <Leaf className="h-3 w-3" /> Eco-amigable
              </span>
            </div>
          </div>
        </div>

        {/* Lista editorial de servicios */}
        <div>
          {services.map(({ icon: Icon, title, description, tags }, i) => (
            <div
              key={title}
              className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr_auto] items-start gap-x-6 gap-y-3 py-10 border-b border-white/10 first:border-t hover:bg-white/[0.025] transition-colors duration-300 px-2 -mx-2"
            >
              {/* Index number */}
              <span className="text-5xl font-thin text-[#c1a362]/20 leading-none select-none tabular-nums transition-colors duration-500 group-hover:text-[#c1a362]/50 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2.5">
                  <Icon className="h-4 w-4 text-[#c1a362] flex-shrink-0" />
                  <h3 className="text-white font-light text-xl tracking-wide">{title}</h3>
                </div>
                <p className="text-white/60 text-base font-light leading-relaxed max-w-prose">{description}</p>
                {/* Tags on mobile */}
                <div className="flex flex-wrap gap-2 mt-4 md:hidden">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 border border-[#c1a362]/20 text-[#c1a362]/70 tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags on desktop */}
              <div className="hidden md:flex flex-wrap gap-2 items-start justify-end pt-1">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 border border-[#c1a362]/20 text-[#c1a362]/70 tracking-wider uppercase whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}