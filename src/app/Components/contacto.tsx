import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react";

export default function Contacto() {
  const [state, handleSubmit] = useForm("xpzvpdgp");

  if (state.succeeded) {
    return (
      <div className="py-28 text-center bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Gracias por tu solicitud!</h2>
        <p className="text-lg text-gray-700">Nos pondremos en contacto contigo muy pronto.</p>
      </div>
    );
  }

  return (
    <div>
      <section id="contacto" className="py-28 bg-gradient-to-r from-[#d6cdc8] to-[#a9a392]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Contáctanos</h3>
              <p className="text-lg text-gray-600 mb-8">
                Estamos aquí para hacer tu estancia inolvidable. Contáctanos para reservas o información.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#c1a362] p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dirección</h4>
                    <p className="text-gray-600">Pasaje San Andres int.11, Salvatierra Centro, Salvatierra Guanajuato</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#c1a362] p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-gray-600">+52 (466) 105-1614</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#c1a362] p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div id="reservar">
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">hotel.sanandres@yahoo.com.mx</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <Card>
                <CardHeader className="py-6">
                  <CardTitle>Solicitar Reserva</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos pronto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="py-2" htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <Label className="py-2" htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" name="apellido" placeholder="Tu apellido" required />
                    </div>
                  </div>

                  <div>
                    <Label className="py-2" htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="tu@email.com" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <Label className="py-2" htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" name="telefono" placeholder="+52 (555) 123-4567" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="py-2" htmlFor="checkin">Check-in</Label>
                      <Input id="checkin" type="date" name="checkin" required />
                    </div>
                    <div>
                      <Label className="py-2" htmlFor="checkout">Check-out</Label>
                      <Input id="checkout" type="date" name="checkout" required />
                    </div>
                  </div>

                  <div>
                    <Label className="py-2" htmlFor="huespedes">Número de huéspedes</Label>
                    <Input id="huespedes" name="huespedes" type="number" min="1" max="10" placeholder="1" required />
                  </div>

                  <div>
                    <Label className="py-2" htmlFor="mensaje">Mensaje adicional</Label>
                    <Textarea id="mensaje" name="mensaje" placeholder="Cuéntanos sobre tus necesidades especiales..." />
                    <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
                  </div>

                  <div className="py-6">
                    <Button type="submit" disabled={state.submitting} className="w-full bg-[#c1a362] hover:bg-[#a98a47]">
                      Enviar Solicitud
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}
