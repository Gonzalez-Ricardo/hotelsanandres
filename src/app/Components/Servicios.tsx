import React from "react";
import {
  Wifi,
  Car,
  AirVent,
  BrushCleaning,
  Shield,
  Leaf,
  Bed,
  MapPin,
} from "lucide-react";

type ServiceCardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  tags?: string[];
};

const ServiceCard = ({
  title = "Servicio",
  description = "Descripción breve del servicio.",
  icon = null,
  tags = [],
}: ServiceCardProps) => {
  return (
    <div className="group rounded-2xl border border-white/60 bg-white/80 backdrop-blur p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="relative">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#c1a362] flex items-center justify-center shadow-inner">
              {icon}
            </div>
            <div
              className="absolute -inset-1 -z-10 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl bg-amber-300/30 transition-opacity"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-semibold text-gray-800">
            {title}
          </h4>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            {description}
          </p>
          {!!tags.length && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative overflow-hidden py-12 md:py-20 bg-[#757165] scroll-mt-24 md:scroll-mt-28"
    >
      {/* Decorativos de fondo (desactivados para clics) */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10 md:mb-14">
          <h3
            id="servicios-title"
            className="text-3xl md:text-4xl font-bold text-white mt-4"
          >
            Nuestros Servicios
          </h3>
          <p className="text-base md:text-xl text-white/95 max-w-1xl mx-auto mt-3">
            En Hotel San Andrés te ofrecemos más que una estancia: brindamos
            comodidad, hospitalidad y experiencias únicas. Disfruta de
            habitaciones impecables, atención personalizada, aire acondicionado,
            Wi-Fi gratuito, estacionamiento seguro, y limpieza diaria. Todo
            pensado para que tu visita a Salvatierra sea tan cómoda como
            inolvidable.
          </p>

          {/* Destacados */}
          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#a98a47] border border-amber-200 text-xs md:text-sm">
              <Shield className="h-4 w-4" aria-hidden="true" />
              <b>Seguridad 24/7</b>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#a98a47] border border-amber-200 text-xs md:text-sm">
              <Leaf className="h-4 w-4" aria-hidden="true" />
              <b>Eco-amigable</b>
            </span>
          </div>
        </div>

        {/* Grid de servicios (misma info que tu imagen) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ServiceCard
            title="WiFi de Alta Velocidad"
            description="Conéctate sin límites en todas las áreas del hotel."
            icon={
              <Wifi
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                aria-hidden="true"
              />
            }
            tags={["Gratis", "300 Mbps", "Cobertura total"]}
          />

          <ServiceCard
            title="Aire Acondicionado"
            description="Climatización ideal para tu confort durante toda tu estancia"
            icon={
              <AirVent
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                aria-hidden="true"
              />
            }
            tags={["Incluido", "Confort"]}
          />

          <ServiceCard
            title="Estacionamiento Seguro"
            description="Espacio privado, supervisado y con fácil acceso."
            icon={
              <Car
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                aria-hidden="true"
              />
            }
            tags={["Privado", "CCTV", "Nocturno"]}
          />

          <ServiceCard
            title="Camas Premium"
            description="Ropa de cama hipoalergénica y colchones de alta comodidad."
            icon={
              <Bed
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                aria-hidden="true"
              />
            }
            tags={["Hipoalergénicas"]}
          />

          <ServiceCard
            title="Limpieza"
            description="Servicio diario para mantener tu habitación impecable y acogedora."
            icon={
              <BrushCleaning
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                aria-hidden="true"
              />
            }
            tags={["Diario", "Desinfección", "Profundo"]}
          />

          <ServiceCard
            title="Ubicación Céntrica"
            description="A pasos de la plaza principal y los mejores restaurantes."
            icon={
              <MapPin
                className="h-6 w-6 md:h-7 md:w-7 text-white"
                aria-hidden="true"
              />
            }
            tags={["Frente a la plaza", "Todo cerca"]}
          />
        </div>
      </div>
    </section>
  );
}
