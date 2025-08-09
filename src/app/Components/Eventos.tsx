import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Eventos() {
  return (
    <div>
      <section id="eventos" className="py-28 bg-gradient-to-br bg-[#757165]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Eventos y Festivales
            </h3>
            <p className="text-xl text-white max-w-1xl mx-auto">
              Salvatierra celebra con el corazón sus tradiciones, historia y
              cultura. Durante todo el año, nuestro pueblo mágico se llena de
              vida con festivales, ferias, procesiones y espectáculos que
              reflejan la esencia de nuestra gente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-100">
                <Image
                  src="/images/Virgen.webp"
                  alt="Festival Día de Muertos"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-600">
                  Marzo
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Semana Santa</CardTitle>
                <CardDescription>Abril</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Vive una de las celebraciones religiosas más profundas y
                  conmovedoras de Salvatierra. Durante la Semana Santa, el
                  pueblo se transforma en un escenario espiritual lleno de
                  tradición, devoción y cultura.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-100">
                <Image
                  src="/images/Marquezada.webp"
                  alt="Feria de Artesanías"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Septiembre
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Marquezada</CardTitle>
                <CardDescription>Septiembre</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 pb-5">
                  Una fiesta única que une la tradición española con el corazón
                  mexicano. Cada septiembre, las calles de Salvatierra se llenan
                  de color, arte y emoción con la tradicional Marquezada, una
                  celebración que incluye encierros de toros, espectáculos
                  ecuestres, música en vivo y una gran muestra de talento
                  artesanal.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-100">
                <Image
                  src="/images/Navidad.webp"
                  alt="Festival Gastronómico"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">
                  Diciembre
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Salvatierra de Luces en Navidad
                </CardTitle>
                <CardDescription>Diciembre</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Durante diciembre, Salvatierra se llena de magia y encanto con
                  su tradicional festival de luces navideñas. El centro
                  histórico se ilumina con figuras monumentales, túneles
                  brillantes y escenarios perfectos para vivir momentos
                  inolvidables en familia.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Calendario de eventos mensuales */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Eventos Mensuales
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border-l-4 border-[#c1a362]">
                <h5 className="font-semibold text-gray-800 mb-2">Febrero</h5>
                <p className="text-sm text-gray-600">Feria de la Candelaria</p>
                <p className="text-sm text-gray-600">
                  La Feria de la Candelaria reúne danzas, gastronomía y
                  artesanías en honor a la Virgen.
                </p>
              </div>

              <div className="text-center p-4 border-l-4 border-[#c1a362]">
                <h5 className="font-semibold text-gray-800 mb-2">Marzo</h5>
                <p className="text-sm text-gray-600">Semana Santa</p>
                <p className="text-sm text-gray-600">
                  Disfruta de la espiritualidad de la Semana Santa y la belleza
                  del Festival de Flores
                </p>
              </div>

              <div className="text-center p-4 border-l-4 border-[#c1a362]">
                <h5 className="font-semibold text-gray-800 mb-2">Abril</h5>
                <p className="text-sm text-gray-600">
                  Festividad de Nuestra Señora de la Luz
                </p>
                <p className="text-sm text-gray-600">
                  Conmemora la Festividad de Nuestra Señora de la Luz, patrona
                  del pueblo
                </p>
              </div>

              <div className="text-center p-4 border-l-4 border-[#c1a362]">
                <h5 className="font-semibold text-gray-800 mb-2">Septiembre</h5>
                <p className="text-sm text-gray-600">Marquezada</p>
                <p className="text-sm text-gray-600">
                  Disfruta de la adrenalina de la Marquezada, una celebración
                  única con encierros taurinos y cultura local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
