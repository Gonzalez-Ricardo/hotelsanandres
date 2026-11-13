"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Users, Bed, Bath, Wifi, AirVent, Droplets, Sparkles, Layers, Sofa } from "lucide-react";
import { useT } from "@/lib/i18n";

const amenityMeta = [
  { icon: Droplets,  key: "rooms.amenity0" },
  { icon: AirVent,   key: "rooms.amenity1" },
  { icon: Wifi,      key: "rooms.amenity2" },
  { icon: Sparkles,  key: "rooms.amenity3" },
  { icon: Layers,    key: "rooms.amenity4" },
  { icon: Sofa,      key: "rooms.amenity5" },
];

const roomMeta = [
  { image: "/images/1.webp",    rating: "4.8", badge: false, guests: 2, beds: 1, baths: 1, amenityIdx: [0,1,2,3] },
  { image: "/images/Hab9.webp", rating: "4.9", badge: true,  guests: 4, beds: 2, baths: 1, amenityIdx: [0,1,2,3] },
  { image: "/images/2.webp",    rating: "5.0", badge: false, guests: 6, beds: 3, baths: 1, amenityIdx: [0,1,2,3,4] },
  { image: "/images/3B.webp",   rating: "5.0", badge: false, guests: 7, beds: 4, baths: 2, amenityIdx: [0,1,2,3,4,5] },
];

export default function Habitaciones() {
  const { t } = useT();

  const rooms = roomMeta.map((m, i) => ({
    ...m,
    title: t(`room.${i}.title`),
    description: t(`room.${i}.desc`),
    badgeLabel: m.badge ? t("rooms.popular") : null,
    amenities: m.amenityIdx.map((ai) => amenityMeta[ai]),
  }));

  return (
    <section id="habitaciones" className="overflow-hidden">

      {/* Section header */}
      <div className="bg-[#f5f0e8] py-16 md:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8" data-reveal>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-[#1a1208] leading-[0.95]">
              {t("rooms.h2a")} <span className="italic text-[#c1a362]">{t("rooms.h2b")}</span>
            </h2>
            <p className="text-[#4a4035] text-sm font-light leading-relaxed md:max-w-xs md:pb-2 opacity-80">
              {t("rooms.intro")}
            </p>
          </div>
        </div>
      </div>

      {/* Room rows */}
      {rooms.map((room, i) => {
        const dark = i % 2 === 1;
        const imgRight = i % 2 === 1;
        const num = String(i + 1).padStart(2, "0");
        const textColor = dark ? "text-white" : "text-[#1a1208]";
        const subColor = dark ? "text-white/55" : "text-[#4a4035]";
        const borderColor = dark ? "border-white/10" : "border-[#c1a362]/15";
        const amenityColor = dark ? "text-white/70" : "text-[#4a4035]";

        return (
          <div
            key={room.title}
            className={`grid md:grid-cols-[58%_42%] min-h-[580px] group/row ${dark ? "bg-[#1a1208]" : "bg-[#f5f0e8]"}`}
          >
            {/* Image panel */}
            <div
              className={`relative overflow-hidden min-h-[340px] md:min-h-0 ${imgRight ? "md:order-last" : ""}`}
              data-reveal={imgRight ? "right" : "left"}
            >
              <Image
                src={room.image}
                alt={room.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1200ms] ease-motion group-hover/row:scale-[1.04]"
              />
              {/* Overlay gradient */}
              <div className={`absolute inset-0 ${dark ? "bg-gradient-to-r from-[#1a1208]/40 to-transparent" : "bg-gradient-to-r from-black/20 to-transparent"} ${imgRight ? "rotate-180" : ""}`} />

              {/* Rating */}
              <div className="absolute top-5 right-5 bg-[#1a1208]/75 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5">
                <Star className="h-3 w-3 fill-[#c1a362] text-[#c1a362]" />
                <span className="text-white text-xs font-light tracking-wide">{room.rating}</span>
              </div>

              {/* Popular badge */}
              {room.badgeLabel && (
                <div className="absolute top-5 left-5 bg-[#c1a362] px-4 py-1.5">
                  <span className="text-white text-[10px] tracking-[0.3em] uppercase font-light">{room.badgeLabel}</span>
                </div>
              )}

              {/* Number label */}
              <div className={`absolute bottom-5 ${imgRight ? "right-5" : "left-5"} font-display text-[80px] font-normal leading-none text-white/[0.08] select-none pointer-events-none`}>
                {num}
              </div>
            </div>

            {/* Content panel */}
            <div
              className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 relative overflow-hidden"
              data-reveal={imgRight ? "left" : "right"}
              data-reveal-delay="1"
            >
              {/* Faint decorative number */}
              <span
                className={`absolute -top-4 ${imgRight ? "-left-4" : "-right-4"} font-display text-[160px] font-normal leading-none select-none pointer-events-none ${dark ? "text-white/[0.03]" : "text-[#1a1208]/[0.04]"}`}
              >
                {num}
              </span>

              {/* Room number chip */}
              <div
                className="mb-5"
                data-reveal
                data-reveal-delay="2"
              >
                <span className={`text-[10px] tracking-[0.4em] uppercase font-light ${dark ? "text-[#c1a362]/70" : "text-[#c1a362]"}`}>
                  {t("rooms.room")} {num}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-display text-3xl md:text-4xl font-normal leading-tight mb-5 ${textColor}`}
                data-reveal
                data-reveal-delay="2"
              >
                {room.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm md:text-base font-light leading-relaxed mb-8 ${subColor}`}
                data-reveal
                data-reveal-delay="3"
              >
                {room.description}
              </p>

              {/* Amenities */}
              <div className={`grid grid-cols-2 gap-x-4 gap-y-3 mb-8 pb-8 border-b ${borderColor}`}>
                {room.amenities.map(({ icon: Icon, key }, j) => (
                  <div
                    key={key}
                    className="flex items-center gap-2.5"
                    data-reveal
                    data-reveal-delay={String(Math.min(j + 3, 6)) as "3"|"4"|"5"|"6"}
                  >
                    <Icon className="h-3.5 w-3.5 text-[#c1a362] flex-shrink-0" />
                    <span className={`text-xs font-light ${amenityColor}`}>{t(key)}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div
                className={`flex flex-wrap items-center gap-5 mb-8 text-sm font-light ${subColor}`}
                data-reveal
                data-reveal-delay="5"
              >
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-[#c1a362]" />
                  {room.guests} {t("rooms.guests")}
                </span>
                <span className={`w-px h-3 ${dark ? "bg-white/15" : "bg-[#c1a362]/25"}`} />
                <span className="flex items-center gap-1.5">
                  <Bed className="h-3.5 w-3.5 text-[#c1a362]" />
                  {room.beds} {room.beds === 1 ? t("rooms.bed") : t("rooms.beds")}
                </span>
                <span className={`w-px h-3 ${dark ? "bg-white/15" : "bg-[#c1a362]/25"}`} />
                <span className="flex items-center gap-1.5">
                  <Bath className="h-3.5 w-3.5 text-[#c1a362]" />
                  {room.baths} {room.baths === 1 ? t("rooms.bath") : t("rooms.baths")}
                </span>
              </div>

              {/* CTA */}
              <div data-reveal data-reveal-delay="6">
                <Link href="#contacto">
                  <button className="bg-[#c1a362] hover:bg-[#a98a47] text-[#1a1208] text-[11px] tracking-[0.3em] uppercase font-medium px-8 py-3.5 transition-all duration-300 ease-ui active:scale-[0.97]">
                    {t("rooms.cta")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
