"use client";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { useT } from "@/lib/i18n";

export default function Contacto() {
  const [state, handleSubmit] = useForm("xpzvpdgp");
  const [checkinDate, setCheckinDate] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const { t } = useT();

  if (state.succeeded) {
    return (
      <section id="contacto" className="py-32 bg-[#1a1208] text-center">
        <div className="container mx-auto px-6">
          <div className="w-16 h-16 border border-[#c1a362] flex items-center justify-center mx-auto mb-6">
            <Check className="h-6 w-6 text-[#c1a362]" />
          </div>
          <h2 className="font-display text-3xl font-normal text-white mb-3">{t("contact.successTitle")}</h2>
          <p className="text-white/60 font-light">{t("contact.successDesc")}</p>
        </div>
      </section>
    );
  }

  const contactItems = [
    { icon: MapPin, key: "contact.addr", info: "Pasaje San Andrés int.11, Salvatierra Centro, Salvatierra, Guanajuato", href: null },
    { icon: Phone,  key: "contact.phone", info: "+52 (466) 105-1614", href: "tel:+524661051614" },
    { icon: Mail,   key: "contact.email", info: "hotel.sanandres@yahoo.com.mx", href: "mailto:hotel.sanandres@yahoo.com.mx" },
  ];

  return (
    <section id="contacto" className="py-28 md:py-36 bg-[#1a1208]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-20" data-reveal>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-[0.95]">
            {t("contact.h2a")} <br />
            <span className="italic text-[#c1a362]">{t("contact.h2b")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Info column */}
          <div data-reveal="left">
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12">{t("contact.intro")}</p>

            <div className="space-y-8 mb-12">
              {contactItems.map(({ icon: Icon, key, info, href }) => (
                <div key={key} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#c1a362]/40 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-[#c1a362]" />
                  </div>
                  <div>
                    <h4 className="text-white/50 text-[11px] tracking-[0.25em] uppercase font-light mb-1">{t(key)}</h4>
                    {href ? (
                      <a href={href} className="text-white text-base font-light hover:text-[#c1a362] transition-colors duration-200">{info}</a>
                    ) : (
                      <p className="text-white text-base font-light leading-relaxed">{info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-white/10 p-6">
              <h4 className="text-white/50 text-[11px] tracking-[0.3em] uppercase font-light mb-5">{t("contact.hours")}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60 font-light">{t("contact.monSun")}</span>
                  <span className="text-[#c1a362] font-light">8:00 — 22:00</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-3">
                  <span className="text-white/60 font-light">{t("contact.checkin")}</span>
                  <span className="text-white/50 font-light">12:30 hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60 font-light">{t("contact.checkout")}</span>
                  <span className="text-white/50 font-light">12:00 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <form onSubmit={handleSubmit} className="space-y-5" id="reservar" noValidate data-reveal="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nombre" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("form.name")}</Label>
                <Input id="nombre" name="nombre" placeholder={t("form.namePh")} required autoComplete="given-name" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 transition-colors duration-200" />
              </div>
              <div>
                <Label htmlFor="apellido" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("form.lastname")}</Label>
                <Input id="apellido" name="apellido" placeholder={t("form.lastnamePh")} required autoComplete="family-name" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 transition-colors duration-200" />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("form.email")}</Label>
              <Input id="email" type="email" name="email" placeholder={t("form.emailPh")} required autoComplete="email" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 transition-colors duration-200" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <div>
              <Label htmlFor="telefono" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("form.phone")}</Label>
              <Input id="telefono" name="telefono" type="tel" placeholder={t("form.phonePh")} required autoComplete="tel" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 transition-colors duration-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkin" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("contact.checkin")}</Label>
                <Input id="checkin" type="date" name="checkin" required min={today} onChange={(e) => setCheckinDate(e.target.value)} suppressHydrationWarning className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 [color-scheme:dark] transition-colors duration-200" />
              </div>
              <div>
                <Label htmlFor="checkout" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("contact.checkout")}</Label>
                <Input id="checkout" type="date" name="checkout" required min={checkinDate || today} suppressHydrationWarning className="bg-white/5 border-white/10 text-white rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 [color-scheme:dark] transition-colors duration-200" />
              </div>
            </div>

            <div>
              <Label htmlFor="huespedes" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("form.guests")}</Label>
              <Input id="huespedes" name="huespedes" type="number" min="1" max="10" placeholder="1" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 transition-colors duration-200" />
            </div>

            <div>
              <Label htmlFor="mensaje" className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-light mb-2 block">{t("form.message")}</Label>
              <Textarea id="mensaje" name="mensaje" placeholder={t("form.messagePh")} rows={3} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus:border-[#c1a362] focus:ring-1 focus:ring-[#c1a362]/40 resize-none transition-colors duration-200" />
              <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} className="text-red-400 text-xs mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#c1a362] hover:bg-[#a98a47] disabled:opacity-50 disabled:cursor-not-allowed text-[#1a1208] text-[11px] tracking-[0.3em] uppercase font-medium py-4 transition-[background-color,transform] duration-200 ease-ui active:scale-[0.98] mt-2"
            >
              {state.submitting ? t("form.submitting") : t("form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
