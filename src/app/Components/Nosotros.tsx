import Image from "next/image";
export default function Nosotros() {
  return (
    <div>
      <section id="nosotros" className="py-30 bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/29.webp"
                alt="Familia fundadora del hotel"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#757165] text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Años de tradición</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Nosotros
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                <b>
                  El Hotel San Andrés ofrece un servicio de hospedaje de calidad
                  en el corazón de Salvatierra, Guanajuato, Pueblo Mágico.
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

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-[#757165] rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">

                    500+
                  </div>
                  <div className="text-white">Familias hospedadas</div>
                </div>
                <div className="text-center p-4 bg-[#757165] rounded-lg">
                  <div className="text-2xl font-bold text-white mb-2">
                    98%
                  </div>
                  <div className="text-white">Satisfacción</div>
                </div>
              </div>

              <div className="bg-[#757165] p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Nuestra Misión
                </h4>
                <p className="text-white">

                  Preservar y compartir la riqueza cultural de nuestro pueblo
                  mágico, ofreciendo experiencias auténticas que conecten a
                  nuestros huéspedes con las tradiciones, la gastronomía y la
                  calidez humana que nos caracteriza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
