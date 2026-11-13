import type { Metadata } from "next";
import { Geist, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { ScrollRevealInit } from "@/components/scroll-reveal";
import { LangProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://www.hotel-san-andres.com";

export const metadata: Metadata = {
  title: "Hotel San Andrés | Salvatierra, Pueblo Mágico",
  description:
    "Refugio en Salvatierra, Guanajuato — Pueblo Mágico. Más de 25 años de hospitalidad auténtica, habitaciones confortables y atención cálida en el centro.",
  keywords: ["hotel salvatierra", "pueblo magico guanajuato", "hotel san andres", "hospedaje salvatierra"],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      es: `${SITE_URL}/`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: "Hotel San Andrés | Salvatierra, Pueblo Mágico",
    description:
      "Refugio en Salvatierra, Guanajuato — Pueblo Mágico. Más de 25 años de hospitalidad auténtica, habitaciones confortables y atención cálida en el centro.",
    url: `${SITE_URL}/`,
    siteName: "Hotel San Andrés",
    images: [{ url: `${SITE_URL}/images/1.webp`, width: 3648, height: 2736, alt: "Hotel San Andrés — Salvatierra, Pueblo Mágico" }],
    locale: "es_MX",
    type: "website",
  },
};

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Hotel San Andrés",
  url: `${SITE_URL}/`,
  telephone: "+524661051614",
  email: "hotel.sanandres@yahoo.com.mx",
  image: `${SITE_URL}/images/1.webp`,
  description:
    "Refugio en Salvatierra, Guanajuato — Pueblo Mágico. Más de 25 años de hospitalidad auténtica, habitaciones confortables y atención cálida en el centro.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pasaje San Andrés int.11, Salvatierra Centro",
    addressLocality: "Salvatierra",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/#contacto`,
      inLanguage: "es",
      actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
    },
    result: { "@type": "LodgingReservation", name: "Reserva en Hotel San Andrés" },
  },
  containsPlace: [
    {
      "@type": "HotelRoom",
      name: "Habitación Individual",
      description: "Cama queen, baño privado, aire acondicionado y Wi-Fi gratuito. Ideal para hasta 2 huéspedes.",
      occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Baño privado", value: true },
      ],
    },
    {
      "@type": "HotelRoom",
      name: "Habitación Doble",
      description: "Dos camas matrimoniales, baño privado, aire acondicionado y Wi-Fi gratuito. Ideal para hasta 4 huéspedes.",
      occupancy: { "@type": "QuantitativeValue", maxValue: 4 },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Baño privado", value: true },
      ],
    },
    {
      "@type": "HotelRoom",
      name: "Habitación Triple",
      description: "Dos recámaras con cama queen y dos matrimoniales, baño privado, aire acondicionado y Wi-Fi. Hasta 6 huéspedes.",
      occupancy: { "@type": "QuantitativeValue", maxValue: 6 },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Baño privado", value: true },
      ],
    },
    {
      "@type": "HotelRoom",
      name: "Mini Depa",
      description: "Dos plantas con 4 camas y 2 baños completos. Espacio independiente para familias o grupos de hasta 7 personas.",
      occupancy: { "@type": "QuantitativeValue", maxValue: 7 },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Dos baños", value: true },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde está ubicado el Hotel San Andrés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos en Pasaje San Andrés int.11, Salvatierra Centro, Salvatierra, Guanajuato — frente a la plaza principal del Pueblo Mágico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo hacer una reserva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes reservar por teléfono al +52 (466) 105-1614, por correo a hotel.sanandres@yahoo.com.mx o mediante el formulario de contacto en nuestro sitio web.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipos de habitaciones tienen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contamos con 4 tipos: Habitación Individual (hasta 2 personas), Habitación Doble (hasta 4 personas), Habitación Triple (hasta 6 personas) y Mini Depa (hasta 7 personas).",
      },
    },
    {
      "@type": "Question",
      name: "¿Las habitaciones incluyen Wi-Fi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, todas las habitaciones incluyen Wi-Fi gratuito, aire acondicionado y baño privado equipado.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={`${geistSans.variable} ${bodoniModa.variable} antialiased`}>
        <LangProvider>
          <ScrollRevealInit />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
