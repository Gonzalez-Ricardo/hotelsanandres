import Image from "next/image";
import Link from "next/link";
import { Star, Users, Bed, Bath } from "lucide-react";

const rooms = [
  {
    image: "/images/1.webp",
    title: "Habitación Individual",
    rating: "4.8",
    description:
      "Diseñada para ofrecer una estancia tranquila y cómoda. Cuenta con cama queen, baño privado, aire acondicionado, Wi-Fi gratuito y detalles artesanales en la decoración.",
    guests: 2,
    beds: 1,
    baths: 1,
    badge: null,
  },
  {
    image: "/images/Hab9.webp",
    title: "Habitación Doble",
    rating: "4.9",
    description:
      "Amplitud, confort y funcionalidad. Dos camas matrimoniales, baño privado totalmente equipado, Wi-Fi gratuito y aire acondicionado. Ideal para familias o grupos.",
    guests: 4,
    beds: 2,
    baths: 1,
    badge: "Más Popular",
  },
  {
    image: "/images/2.webp",
    title: "Habitación Triple",
    rating: "5.0",
    description:
      "Perfecta para familias grandes. Dos recámaras: una con cama queen y otra con dos matrimoniales. Baño privado, aire acondicionado, Wi-Fi y decoración artesanal.",
    guests: 6,
    beds: 3,
    baths: 1,
    badge: null,
  },
  {
    image: "/images/3B.webp",
    title: "Mini Depa",
    rating: "5.0",
    description:
      "Mayor independencia para familias o grupos. Dos recámaras en dos plantas, dos baños completos, espacios amplios y detalles acogedores para una estancia privada.",
    guests: 7,
    beds: 4,
    baths: 2,
    badge: null,
  },
];

export default function Habitaciones() {
  return (
    <section id="habitaciones" className="py-32 bg-[#f5f0e8]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="text-center mb-20">
          <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">
            Espacios diseñados para ti
          </p>
          <h2 className="text-5xl md:text-6xl font-thin text-[#1a1208] mb-4 leading-tight">
            Nuestras <span className="italic font-light">Habitaciones</span>
          </h2>
          <div className="w-12 h-px bg-[#c1a362] mx-auto mt-6" />
        </div>

        {/* Grid de habitaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-[#1a1208]/80 backdrop-blur-sm px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-[#c1a362] text-[#c1a362]" />
                  <span className="text-white text-xs font-light">{room.rating}</span>
                </div>

                {/* Badge */}
                {room.badge && (
                  <div className="absolute top-4 left-4 bg-[#c1a362] px-3 py-1">
                    <span className="text-white text-xs tracking-widest uppercase font-light">{room.badge}</span>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-[#1a1208] font-light text-xl mb-3 tracking-wide">{room.title}</h3>
                <p className="text-[#4a4035] text-base font-light leading-relaxed mb-5">
                  {room.description}
                </p>

                {/* Iconos */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#c1a362]/15">
                  <div className="flex items-center gap-1.5 text-[#4a4035]">
                    <Users className="h-3.5 w-3.5 text-[#c1a362]" />
                    <span className="text-sm font-light">{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#4a4035]">
                    <Bed className="h-3.5 w-3.5 text-[#c1a362]" />
                    <span className="text-sm font-light">{room.beds} {room.beds === 1 ? "cama" : "camas"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#4a4035]">
                    <Bath className="h-3.5 w-3.5 text-[#c1a362]" />
                    <span className="text-sm font-light">{room.baths} {room.baths === 1 ? "baño" : "baños"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link href="#contacto">
            <button className="bg-[#1a1208] hover:bg-[#c1a362] text-white text-sm tracking-[0.2em] uppercase px-12 py-4 transition-all duration-300">
              Solicitar Reserva
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}