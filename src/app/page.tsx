"use client";
import Header from ".././app/Components/header";
import Carrusel from ".././app/Components/Carrusel";
import Habitaciones from "./Components/habitaciones";
import Servicios from ".././app/Components/Servicios";
import Pueblo from ".././app/Components/pueblo";
import Nosotros from ".././app/Components/Nosotros";
import Eventos from ".././app/Components/Eventos";
import Galeria from ".././app/Components/Galeria";
import Ubicacion from ".././app/Components/Ubicación";
import Contacto from ".././app/Components/contacto";
import WhatsApp from ".././app/Components/WhatsApp";
import Footer from ".././app/Components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d6cdc8] to-[#a9a392]">
      <Header />
      <Carrusel />
      <Nosotros />
      <Servicios />
      <Habitaciones />
      <Galeria />
      <Pueblo />
      <Eventos />
      <Ubicacion />
      <Contacto />
      <WhatsApp />
      <Footer />
    </div>
  );
}
