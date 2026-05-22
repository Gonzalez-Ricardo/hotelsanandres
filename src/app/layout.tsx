import type { Metadata } from "next";
import { Geist, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { ScrollRevealInit } from "@/components/scroll-reveal";

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

export const metadata: Metadata = {
  title: "Hotel San Andrés | Salvatierra, Pueblo Mágico",
  description:
    "Tu refugio en el corazón histórico de Salvatierra, Guanajuato. Más de 25 años de hospitalidad auténtica, habitaciones confortables y atención cálida frente a la plaza principal.",
  keywords: ["hotel salvatierra", "pueblo magico guanajuato", "hotel san andres", "hospedaje salvatierra"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${bodoniModa.variable} antialiased`}>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
