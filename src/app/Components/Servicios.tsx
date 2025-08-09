import {
  Wifi,
  Car,
  AirVent,
  BrushCleaning,
  Shield,
  Leaf,
  Star,
  Utensils,
  Sparkles,
  Bed,
  Camera,
  MapPin,
} from "lucide-react";

const ServiceCard = ({
  title = "Servicio",
  description = "Descripción breve del servicio.",
  icon = null,
  tags = [],
}: {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  tags?: string[];
}) => {
  return (
    <div className="group rounded-2xl p-[1px] bg-white via-amber-300/60 to-orange-300/80 transition-transform duration-200 hover:-translate-y-1">

      <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-5 h-full shadow-sm">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#c1a362] flex items-center justify-center shadow-inner">
                {icon}
              </div>
              <div className="absolute -inset-1 -z-10 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl bg-amber-300/30 transition-opacity" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-lg md:text-xl font-semibold text-gray-800">
              {title}
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {description}
            </p>
            {tags?.length ? (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((t, i) => (
                  <span
                    key={`${t}-${i}`}
                    className="text-xs md:text-[13px] px-2.5 py-1 rounded-full bg-[#c1a362] text-white border border-[#a98a47]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Servicios() {
  return (
    <div>
      <section
        id="servicios"
        className="relative overflow-hidden py-12 md:py-20 bg-[#757165] scroll-mt-24 md:scroll-mt-28"
      >
        {/* Decorativos de fondo */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full  blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full  blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10 md:mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Nuestros Servicios
            </h3>
            <p className="text-base md:text-xl text-white max-w-1xl mx-auto mt-3">
              En Hotel San Andrés te ofrecemos más que una estancia: brindamos
              comodidad, hospitalidad y experiencias únicas. Disfruta de
              habitaciones impecables, atención personalizada, aire
              acondicionado, Wi-Fi gratuito, estacionamiento seguro, y limpieza
              diaria. Todo pensado para que tu visita a Salvatierra sea tan
              cómoda como inolvidable.
            </p>

            {/* Destacados */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-200 text-[#a98a47] text-xs md:text-sm">
                <Shield className="h-4 w-4" />
                <b>Seguridad 24/7</b>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-200 text-[#a98a47] text-xs md:text-sm">
                <Leaf className="h-4 w-4" />
                <b>Eco-amigable</b>
              </span>
            </div>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ServiceCard
              title="WiFi de Alta Velocidad"
              description="Conéctate sin límites en todas las áreas del hotel."
              icon={<Wifi className="h-6 w-6 md:h-7 md:w-7 text-white" />}

              tags={["Gratis", "300 Mbps", "Cobertura total"]}
            />
            <ServiceCard
              title="Aire Acondicionado"
              description="Climatización ideal para tu confort durante toda tu estancia"
              icon={
                <AirVent className="h-6 w-6 md:h-7 md:w-7 text-white" />
              }
              tags={["Incluido", "Confort"]}
            />

            <ServiceCard
              title="Estacionamiento Seguro"
              description="Espacio privado, supervisado y con fácil acceso."
              icon={<Car className="h-6 w-6 md:h-7 md:w-7 text-white" />}
              tags={["Privado", "CCTV", "Nocturno"]}
            />
            <ServiceCard
              title="Camas Premium"
              description="Ropa de cama hipoalergénica y colchones de alta comodidad."
              icon={<Bed className="h-6 w-6 md:h-7 md:w-7 text-white" />}
              tags={["Hipoalergénicas"]}
            />

            <ServiceCard
              title="Limpieza"
              description="Servicio diario para mantener tu habitación implecable y acogedora."
              icon={
                <BrushCleaning className="h-6 w-6 md:h-7 md:w-7 text-white" />
              }
              tags={["Diario", "Desinfección", "Profundo "]}
            />
            <ServiceCard
              title="Ubicación Céntrica"
              description="A pasos de la plaza principal y los mejores restaurantes."
              icon={<MapPin className="h-6 w-6 md:h-7 md:w-7 text-white" />}
              tags={["Frente a la plaza", "Todo cerca"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
