import Image from "next/image";

const mainEvents = [
  {
    image: "/images/Virgen.webp",
    month: "Abril",
    title: "Semana Santa",
    description:
      "Vive una de las celebraciones religiosas más profundas de Salvatierra. El pueblo se transforma en un escenario espiritual lleno de tradición, devoción y cultura.",
  },
  {
    image: "/images/Marquezada.webp",
    month: "Septiembre",
    title: "Marquezada",
    description:
      "Una fiesta única que une la tradición española con el corazón mexicano. Encierros de toros, espectáculos ecuestres, música en vivo y artesanías en las calles de Salvatierra.",
  },
  {
    image: "/images/Navidad.webp",
    month: "Diciembre",
    title: "Salvatierra de Luces",
    description:
      "Durante diciembre, el centro histórico se ilumina con figuras monumentales y túneles brillantes. Magia navideña para vivir momentos inolvidables en familia.",
  },
];

const monthlyEvents = [
  { month: "Febrero", title: "Feria de la Candelaria", desc: "Danzas, gastronomía y artesanías en honor a la Virgen." },
  { month: "Marzo", title: "Semana Santa", desc: "Espiritualidad y el Festival de Flores llenan la ciudad." },
  { month: "Abril", title: "Señora de la Luz", desc: "Festividad de la patrona del pueblo." },
  { month: "Septiembre", title: "Marquezada", desc: "Encierros taurinos y celebración de cultura local." },
];

export default function Eventos() {
  return (
    <section id="eventos" className="py-32 bg-[#1a1208]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="text-center mb-20">
          <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">
            Cultura y tradición
          </p>
          <h2 className="text-5xl md:text-6xl font-thin text-white leading-tight">
            Eventos y <span className="italic font-light text-[#c1a362]">Festivales</span>
          </h2>
          <div className="w-12 h-px bg-[#c1a362] mx-auto mt-6" />
          <p className="text-white/75 text-sm font-light mt-8 max-w-2xl mx-auto leading-relaxed">
            Salvatierra celebra con el corazón sus tradiciones, historia y cultura.
            Durante todo el año, nuestra ciudad se llena de vida con festivales que
            reflejan la esencia de nuestra gente.
          </p>
        </div>

        {/* Eventos principales */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {mainEvents.map((event) => (
            <div key={event.title} className="group overflow-hidden">
              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 border border-[#c1a362]/50 px-3 py-1">
                  <span className="text-[#c1a362] text-xs tracking-widest uppercase font-light">{event.month}</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 border border-white/5 border-t-0">
                <h3 className="text-white font-light text-2xl mb-3 tracking-wide">{event.title}</h3>
                <p className="text-white/75 text-base font-light leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calendario mensual */}
        <div className="border border-white/10 p-10">
          <h3 className="text-white font-thin text-2xl mb-10 text-center">
            Calendario <span className="italic text-[#c1a362]">mensual</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {monthlyEvents.map((ev) => (
              <div key={ev.month} className="px-8 py-4 first:pl-0 last:pr-0">
                <div className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-3 font-normal">{ev.month}</div>
                <div className="text-white font-light text-lg mb-2">{ev.title}</div>
                <div className="text-white/75 text-sm font-light leading-relaxed">{ev.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}