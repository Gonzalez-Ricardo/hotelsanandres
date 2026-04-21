"use client";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from "@formspree/react";

export default function Contacto() {
  const [state, handleSubmit] = useForm("xpzvpdgp");

  if (state.succeeded) {
    return (
      <section id="contacto" className="py-32 bg-[#1a1208] text-center">
        <div className="container mx-auto px-6">
          <div className="w-16 h-16 border border-[#c1a362] flex items-center justify-center mx-auto mb-6">
            <span className="text-[#c1a362] text-2xl">✓</span>
          </div>
          <h2 className="text-3xl font-thin text-white mb-3">¡Gracias por tu solicitud!</h2>
          <p className="text-white/75 font-light">Nos pondremos en contacto contigo muy pronto.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-32 bg-[#1a1208]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <div className="text-center mb-20">
          <p className="text-[#c1a362] text-sm tracking-[0.3em] uppercase mb-4 font-normal">
            Estamos para servirte
          </p>
          <h2 className="text-5xl md:text-6xl font-thin text-white leading-tight">
            Contáctanos y <span className="italic font-light text-[#c1a362]">Reserva</span>
          </h2>
          <div className="w-12 h-px bg-[#c1a362] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Información */}
          <div>
            <p className="text-white/75 text-lg font-light leading-relaxed mb-12">
              Estamos aquí para hacer tu estancia inolvidable. Contáctanos para
              reservas o información y te responderemos a la brevedad.
            </p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Dirección", info: "Pasaje San Andrés int.11, Salvatierra Centro, Salvatierra, Guanajuato" },
                { icon: Phone, title: "Teléfono", info: "+52 (466) 105-1614" },
                { icon: Mail, title: "Email", info: "hotel.sanandres@yahoo.com.mx" },
              ].map(({ icon: Icon, title, info }) => (
                <div key={title} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#c1a362]/40 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-[#c1a362]" />
                  </div>
                  <div>
                    <h4 className="text-white font-light tracking-wide mb-1">{title}</h4>
                    <p className="text-white/75 text-base font-light">{info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Horarios */}
            <div className="mt-12 border border-white/10 p-6">
              <h4 className="text-white font-light tracking-wide mb-4 text-sm uppercase tracking-widest">Horarios de atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/75 font-light">Lunes — Domingo</span>
                  <span className="text-white/70 font-light">8:00 — 22:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/75 font-light">Check-in</span>
                  <span className="text-white/70 font-light">14:00 hrs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/75 font-light">Check-out</span>
                  <span className="text-white/70 font-light">12:00 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5" id="reservar">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Nombre</Label>
                <Input id="nombre" name="nombre" placeholder="Tu nombre" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-0" />
              </div>
              <div>
                <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Apellido</Label>
                <Input id="apellido" name="apellido" placeholder="Tu apellido" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-0" />
              </div>
            </div>

            <div>
              <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Email</Label>
              <Input id="email" type="email" name="email" placeholder="tu@email.com" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-0" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Teléfono</Label>
              <Input id="telefono" name="telefono" placeholder="+52 (555) 123-4567" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-0" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Check-in</Label>
                <Input id="checkin" type="date" name="checkin" required className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#c1a362] focus:ring-0" />
              </div>
              <div>
                <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Check-out</Label>
                <Input id="checkout" type="date" name="checkout" required className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#c1a362] focus:ring-0" />
              </div>
            </div>

            <div>
              <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Huéspedes</Label>
              <Input id="huespedes" name="huespedes" type="number" min="1" max="10" placeholder="1" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-0" />
            </div>

            <div>
              <Label className="text-white/60 text-xs uppercase tracking-widest font-light mb-2 block">Mensaje adicional</Label>
              <Textarea id="mensaje" name="mensaje" placeholder="¿En qué podemos ayudarte?" rows={3} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-0 resize-none" />
              <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#c1a362] hover:bg-[#a98a47] disabled:opacity-50 text-white text-sm tracking-[0.2em] uppercase py-4 transition-all duration-300 mt-2"
            >
              {state.submitting ? "Enviando..." : "Enviar Solicitud"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}