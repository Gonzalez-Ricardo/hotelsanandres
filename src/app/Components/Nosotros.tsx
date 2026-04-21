import Image from "next/image";
import { Heart, Sparkles, Shield, Hotel } from "lucide-react";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="py-32 bg-[#f5f0e8]"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Galería de imágenes */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative h-72 overflow-hidden">
                <Image src="/images/29.webp" alt="Entrada del hotel" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image src="/images/23.webp" alt="Pasaje colonial" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image src="/images/52.webp" alt="Recepción" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a1208] text-white p-6 shadow-xl hidden md:flex flex-col items-center">
              <span className="text-4xl font-thin text-[#c1a362]">25+</span>
              <span className="text-xs tracking-widest uppercase text-white/90 mt-1">Años de servicio</span>
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:pl-8">
            {/* Eyebrow */}
            <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">Nuestra historia</p>

            <h2 className="text-5xl md:text-6xl font-thin text-[#1a1208] mb-8 leading-tight">
              Hospitalidad <br />
              <span className="italic font-light">desde el corazón</span>
            </h2>

            <p className="text-[#4a4035] text-lg leading-relaxed mb-5 font-light">
              El Hotel San Andrés ofrece un servicio de hospedaje de calidad en el corazón
              de Salvatierra, Guanajuato. Nuestra excelencia nace del compromiso y dedicación
              que hemos mantenido durante más de 25 años, brindando una atención cercana,
              cálida y respetuosa a cada huésped.
            </p>

            <p className="text-[#4a4035] text-lg leading-relaxed mb-10 font-light">
              Nos sentimos orgullosos de ser parte activa de la comunidad salvaterrense,
              y nos entusiasma recibir a visitantes que desean descubrir la historia,
              cultura y hospitalidad de este hermoso municipio.
            </p>

            {/* Valores */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { icon: Heart, label: "Ambiente acogedor" },
                { icon: Hotel, label: "Excelente servicio" },
                { icon: Shield, label: "Seguridad y confianza" },
                { icon: Sparkles, label: "Hospitalidad auténtica" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 border border-[#c1a362]/20 hover:border-[#c1a362]/60 transition-colors duration-300">
                  <Icon className="h-4 w-4 text-[#c1a362] flex-shrink-0" />
                  <span className="text-base text-[#1a1208] font-light tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            {/* Cifras */}
            <div className="grid grid-cols-2 gap-px bg-[#c1a362]/20">
              <div className="bg-[#f5f0e8] text-center p-6">
                <div className="text-3xl font-thin text-[#c1a362] mb-1">1,000+</div>
                <div className="text-sm text-[#4a4035] tracking-widest uppercase font-light">Familias hospedadas</div>
              </div>
              <div className="bg-[#f5f0e8] text-center p-6">
                <div className="text-3xl font-thin text-[#c1a362] mb-1">98%</div>
                <div className="text-sm text-[#4a4035] tracking-widest uppercase font-light">Satisfacción</div>
              </div>
            </div>

            {/* Misión */}
            <div className="mt-6 border-l-2 border-[#c1a362] pl-6">
              <p className="text-base text-[#4a4035] italic font-light leading-relaxed">
                "Ofrecer a cada huésped un servicio excepcional, garantizando comodidad,
                atención personalizada y una limpieza impecable, para que su estancia
                sea sinónimo de descanso, confianza y bienestar."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}