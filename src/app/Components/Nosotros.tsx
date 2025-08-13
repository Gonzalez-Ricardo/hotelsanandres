import Image from "next/image";
import { Heart, Leaf, Sparkles, Shield, Hotel } from "lucide-react";
export default function Nosotros() {
  return (
    <div>
      <section
        id="nosotros"
        className="py-30 bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative">
              <div className="col-span-2 relative h-56 md:h-165 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/29.webp"
                  alt="Entrada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/23.webp"
                  alt="Pasaje"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 md:h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/52.webp"
                  alt="recepcion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Nosotros
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                <b>
                  El Hotel San Andrés ofrece un servicio de hospedaje de calidad
                  en el corazón de Salvatierra, Guanajuato.
                </b>{" "}
                Nuestra excelencia nace del compromiso y dedicación que hemos
                mantenido durante más de 25 años, brindando una atención
                cercana, cálida y respetuosa a cada huésped que nos honra con su
                visita.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Nos sentimos orgullosos de ser parte activa de la comunidad
                salvaterrense, y nos entusiasma recibir a visitantes que desean
                descubrir la historia, cultura y hospitalidad de este hermoso
                municipio.
                <b>
                  En Hotel San Andrés, cada estancia se convierte en una
                  experiencia única que refleja el alma de nuestra tierra.
                </b>
              </p>
              <p className="text-lg text-gray-700 mb-6">
                ¡Será un honor darte la bienvenida muy pronto!
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-[#757165]">
                  <Heart className="h-5 w-5 text-[#c1a362]" />
                  <div className="text-sm md:text-base font-medium text-white">
                    Ambiente acogedor
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-[#757165]">
                  <Hotel className="h-5 w-5 text-[#c1a362]" />
                  <div className="text-sm md:text-base font-medium text-white">
                    Excelente Servicio
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-[#757165]">
                  <Shield className="h-5 w-5 text-[#c1a362]" />
                  <div className="text-sm md:text-base font-medium text-white">
                    Seguridad y confianza
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-[#757165]">
                  <Sparkles className="h-5 w-5 text-[#c1a362]" />
                  <div className="text-sm md:text-base font-medium text-white">
                    Hospitalidad auténtica
                  </div>
                </div>
              </div>

              {/* Cifras */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                <div className="text-center p-4 bg-gradient-to-br bg-[#757165] rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-[#c1a362]">
                    500+
                  </div>
                  <div className="text-xs md:text-sm text-white">
                    Familias hospedadas
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br bg-[#757165] rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-[#c1a362]">
                    98%
                  </div>
                  <div className="text-xs md:text-sm text-white">
                    Satisfacción
                  </div>
                </div>
              </div>

              <div className="bg-[#757165] p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Nuestra Misión
                </h4>
                <p className="text-white">
                  Ofrecer a cada huésped un servicio excepcional, garantizando
                  comodidad, atención personalizada y una limpieza impecable en
                  cada espacio, para que su estancia en el Hotel San Andrés sea
                  sinónimo de descanso, confianza y bienestar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
