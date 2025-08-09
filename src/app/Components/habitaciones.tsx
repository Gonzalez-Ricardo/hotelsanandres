import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Users, Bed, Bath } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function Habitaciones() {
  return (
    <div>
      <section
        id="habitaciones"
        className="py-28 bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestras Habitaciones
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada habitación está diseñada para ofrecerte comodidad y
              autenticidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
            <Card className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                <Image
                  src="/images/1.webp"
                  alt="Habitación Tradicional"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Habitación Individual
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm">4.8</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Nuestra Habitación Individual está diseñada para ofrecer una
                  estancia tranquila y cómoda. Cuenta con una cama queen vestida
                  con sábanas suaves, baño privado totalmente equipado, aire
                  acondicionado, Wi-Fi gratuito y detalles artesanales en la
                  decoración. Ideal para viajeros que buscan descanso,
                  privacidad y un ambiente acogedor en el corazón de
                  Salvatierra.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />2 huéspedes
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />1 cama
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />1 baño
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                <Image
                  src="/images/Hab9.webp"
                  alt="Suite Premium"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#c1a362]">
                  <b>Más Popular</b>
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Habitación Doble
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Nuestra Habitación Doble está diseñada para brindar amplitud,
                  confort y funcionalidad. Cuenta con dos camas matrimoniales
                  vestidas con sábanas suaves, baño privado totalmente equipado,
                  incluye Wi-Fi gratuito, aire acondicionado y detalles
                  artesanales en la decoración. Ideal para familias o grupos de
                  hasta 4 personas que buscan comodidad, privacidad y una
                  experiencia relajante en el corazón de Salvatierra.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />4 huéspedes
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />2 camas
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />1 baños
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                <Image
                  src="/images/2.webp"
                  alt="Habitación Triple"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Habitación Triple
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm">5.0</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Nuestra Habitación Triple es perfecta para familias o grupos
                  grandes. Dispone de dos recámaras: una con cama queen y otra
                  con dos camas matrimoniales, todas con sábanas suaves y
                  confortables. Incluye baño privado totalmente equipado, aire
                  acondicionado, Wi-Fi gratuito y una decoración con detalles
                  artesanales. Ideal para compartir momentos especiales con
                  comodidad y privacidad en el corazón de Salvatierra.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />6 huéspedes
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />3 camas
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />1 baños
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
                <Image
                  src="/images/3B.webp"
                  alt="Mini Depa"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Mini Depa
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm">5.0</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Nuestro Mini Depa ofrece mayor independencia y confort para
                  familias o grupos. Tiene dos recámaras: en planta baja, una
                  cama matrimonial, una individual y baño privado; en planta
                  alta, dos camas matrimoniales y otro baño completo. Espacios
                  amplios, área de descanso y detalles acogedores para una
                  estancia cómoda y privada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />7 huéspedes
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />4 camas
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />2 baños
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
