"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "es" | "en";

const es: Record<string, string> = {
  // Header
  "nav.home": "Inicio", "nav.about": "Nosotros", "nav.services": "Servicios",
  "nav.rooms": "Habitaciones", "nav.town": "Salvatierra", "nav.events": "Eventos",
  "nav.location": "Ubicación", "nav.contact": "Contacto",
  "header.book": "Reservar", "header.bookNow": "Reservar Ahora",
  "header.openMenu": "Abrir menú", "header.closeMenu": "Cerrar menú",

  // Carrusel
  "hero.desc": "Tu refugio en el corazón histórico de Salvatierra. Más de 25 años brindando hospitalidad auténtica y experiencias inolvidables.",
  "hero.exploreRooms": "Explorar Habitaciones", "hero.viewGallery": "Ver Galería",
  "hero.prev": "Anterior", "hero.next": "Siguiente", "hero.image": "Imagen",
  "hero.slide.0.alt": "Vista panorámica del pueblo mágico",
  "hero.slide.1.alt": "Fachada colonial del hotel",
  "hero.slide.2.alt": "Plaza principal con iglesia colonial",
  "hero.slide.3.alt": "Jardines del hotel al atardecer",

  // Nosotros
  "about.eyebrow": "Nuestra historia",
  "about.h2a": "Hospitalidad", "about.h2b": "desde el corazón",
  "about.yearsService": "Años de servicio",
  "about.p1": "El Hotel San Andrés ofrece un servicio de hospedaje de calidad en el corazón de Salvatierra, Guanajuato. Nuestra excelencia nace del compromiso y dedicación que hemos mantenido durante más de 25 años, brindando una atención cercana, cálida y respetuosa a cada huésped.",
  "about.p2": "Nos sentimos orgullosos de ser parte activa de la comunidad salvaterrense, y nos entusiasma recibir a visitantes que desean descubrir la historia, cultura y hospitalidad de este hermoso municipio.",
  "about.feat0": "Ambiente acogedor", "about.feat1": "Excelente servicio",
  "about.feat2": "Seguridad y confianza", "about.feat3": "Hospitalidad auténtica",
  "about.families": "Familias hospedadas", "about.satisfaction": "Satisfacción",
  "about.quote": "Ofrecer a cada huésped un servicio excepcional, garantizando comodidad, atención personalizada y una limpieza impecable, para que su estancia sea sinónimo de descanso, confianza y bienestar.",

  // Servicios
  "services.h2a": "Nuestros", "services.h2b": "Servicios",
  "services.intro": "En Hotel San Andrés te ofrecemos más que una estancia: brindamos comodidad, hospitalidad y experiencias únicas. Todo pensado para que tu visita a Salvatierra sea tan cómoda como inolvidable.",
  "services.security": "Seguridad 24/7", "services.eco": "Eco-amigable",
  "svc.0.title": "WiFi de Alta Velocidad", "svc.0.desc": "Conéctate sin límites en todas las áreas del hotel.",
  "svc.0.tag0": "Gratis", "svc.0.tag1": "300 Mbps", "svc.0.tag2": "Cobertura total",
  "svc.1.title": "Aire Acondicionado", "svc.1.desc": "Climatización ideal para tu confort durante toda tu estancia.",
  "svc.1.tag0": "Incluido", "svc.1.tag1": "Confort",
  "svc.2.title": "Estacionamiento Seguro", "svc.2.desc": "Espacio privado, supervisado y con fácil acceso.",
  "svc.2.tag0": "Privado", "svc.2.tag1": "CCTV", "svc.2.tag2": "Nocturno",
  "svc.3.title": "Camas Premium", "svc.3.desc": "Ropa de cama hipoalergénica y colchones de alta comodidad.",
  "svc.3.tag0": "Hipoalergénicas",
  "svc.4.title": "Limpieza Diaria", "svc.4.desc": "Servicio diario para mantener tu habitación impecable y acogedora.",
  "svc.4.tag0": "Diario", "svc.4.tag1": "Desinfección",
  "svc.5.title": "Ubicación Céntrica", "svc.5.desc": "A pasos de la plaza principal y los mejores restaurantes.",
  "svc.5.tag0": "Frente a la plaza", "svc.5.tag1": "Todo cerca",

  // Habitaciones
  "rooms.eyebrow": "Espacios diseñados para ti",
  "rooms.h2a": "Nuestras", "rooms.h2b": "Habitaciones",
  "rooms.intro": "Cada espacio pensado para tu descanso y confort en el corazón de Salvatierra.",
  "rooms.amenity0": "Baño privado equipado", "rooms.amenity1": "Aire acondicionado",
  "rooms.amenity2": "Wi-Fi gratuito", "rooms.amenity3": "Decoración artesanal",
  "rooms.amenity4": "Dos plantas independientes", "rooms.amenity5": "Área de descanso",
  "rooms.guests": "huéspedes", "rooms.bed": "cama", "rooms.beds": "camas",
  "rooms.bath": "baño", "rooms.baths": "baños",
  "rooms.cta": "Solicitar Reserva", "rooms.popular": "Más Popular", "rooms.room": "Habitación",
  "room.0.title": "Habitación Individual",
  "room.0.desc": "Nuestra Habitación Individual está diseñada para ofrecer una estancia tranquila y cómoda. Cuenta con una cama queen vestida con sábanas suaves, baño privado totalmente equipado, aire acondicionado, Wi-Fi gratuito y detalles artesanales en la decoración. Ideal para viajeros que buscan descanso, privacidad y un ambiente acogedor en el corazón de Salvatierra.",
  "room.1.title": "Habitación Doble",
  "room.1.desc": "Nuestra Habitación Doble está diseñada para brindar amplitud, confort y funcionalidad. Cuenta con dos camas matrimoniales vestidas con sábanas suaves, baño privado totalmente equipado, incluye Wi-Fi gratuito, aire acondicionado y detalles artesanales en la decoración. Ideal para familias o grupos de hasta 4 personas que buscan comodidad, privacidad y una experiencia relajante en el corazón de Salvatierra.",
  "room.2.title": "Habitación Triple",
  "room.2.desc": "Nuestra Habitación Triple es perfecta para familias o grupos grandes. Dispone de dos recámaras: una con cama queen y otra con dos camas matrimoniales, todas con sábanas suaves y confortables. Incluye baño privado totalmente equipado, aire acondicionado, Wi-Fi gratuito y una decoración con detalles artesanales. Ideal para compartir momentos especiales con comodidad y privacidad en el corazón de Salvatierra.",
  "room.3.title": "Mini Depa",
  "room.3.desc": "Nuestro Mini Depa ofrece mayor independencia y confort para familias o grupos. Tiene dos recámaras: en planta baja, dos camas matrimoniales, y un baño privado; en planta alta, dos camas matrimoniales y otro baño completo. Espacios amplios, área de descanso y detalles acogedores para una estancia cómoda y privada.",

  // Eventos
  "events.eyebrow": "Cultura y tradición",
  "events.h2a": "Eventos y", "events.h2b": "Festivales",
  "events.desc": "Salvatierra celebra con el corazón sus tradiciones, historia y cultura. Durante todo el año, nuestra ciudad se llena de vida con festivales que reflejan la esencia de nuestra gente.",
  "events.calTitle": "Calendario", "events.calItalic": "mensual",
  "event.0.month": "Abril", "event.0.title": "Semana Santa",
  "event.0.desc": "Vive una de las celebraciones religiosas más profundas de Salvatierra. El pueblo se transforma en un escenario espiritual lleno de tradición, devoción y cultura.",
  "event.1.month": "Septiembre", "event.1.title": "Marquezada",
  "event.1.desc": "Una fiesta única que une la tradición española con el corazón mexicano. Encierros de toros, espectáculos ecuestres, música en vivo y artesanías en las calles de Salvatierra.",
  "event.2.month": "Diciembre", "event.2.title": "Salvatierra de Luces",
  "event.2.desc": "Durante diciembre, el centro histórico se ilumina con figuras monumentales y túneles brillantes. Magia navideña para vivir momentos inolvidables en familia.",
  "monthly.0.month": "Febrero", "monthly.0.title": "Feria de la Candelaria",
  "monthly.0.desc": "Danzas, gastronomía y artesanías en honor a la Virgen.",
  "monthly.1.month": "Marzo", "monthly.1.title": "Semana Santa",
  "monthly.1.desc": "Espiritualidad y el Festival de Flores llenan la ciudad.",
  "monthly.2.month": "Abril", "monthly.2.title": "Señora de la Luz",
  "monthly.2.desc": "Festividad de la patrona del pueblo.",
  "monthly.3.month": "Septiembre", "monthly.3.title": "Marquezada",
  "monthly.3.desc": "Encierros taurinos y celebración de cultura local.",

  // Pueblo
  "pueblo.eyebrow": "Explora la región",
  "pueblo.h2a": "Descubre", "pueblo.h2b": "Salvatierra",
  "pueblo.desc": "Salvatierra, la primera ciudad de Guanajuato, es un lugar donde el tiempo se detiene para que puedas disfrutar de su historia, arquitectura colonial y espíritu tradicional. Rodeada de paisajes naturales, callejones empedrados y templos centenarios, esta joya del Bajío te invita a explorar su alma viva en cada rincón.",
  "pueblo.videoFallback": "Tu navegador no soporta el video.",
  "pueblo.attractTitle": "Qué explorar",
  "pueblo.founded": "Fundada", "pueblo.firstCity": "Ciudad de Gto.", "pueblo.magicTown": "Pueblo Mágico",
  "pueblo.quote": "Un lugar donde la historia colonial y la calidez de su gente se viven en cada calle.",
  "attract.0": "Iglesia colonial del siglo XVI",
  "attract.1": "Talleres de artesanías locales",
  "attract.2": "Senderos naturales y miradores",
  "attract.3": "Tours fotográficos guiados",
  "attract.4": "Festividades: Semana Santa, Romería y Día de Muertos",
  "attract.5": "Puentes históricos, haciendas y jardines virreinales",

  // Galería
  "gallery.h2a": "Galería", "gallery.h2b": "fotográfica",
  "gallery.desc": "Descubre cada rincón de nuestras habitaciones y espacios, diseñados para brindarte comodidad y momentos inolvidables.",
  "gallery.imageAria": "Ver imagen", "gallery.fullscreen": "en tamaño completo",
  "gallery.dialogAria": "Vista previa de imagen", "gallery.closeAria": "Cerrar vista previa",
  "gallery.spaceAlt": "Espacio del hotel, imagen", "gallery.fullsizeAlt": "Espacio del hotel en tamaño completo",
  "gallery.photoCount": "fotos", "gallery.prev": "Anterior", "gallery.next": "Siguiente",

  // Contacto
  "contact.eyebrow": "Estamos para servirte",
  "contact.h2a": "Contáctanos y", "contact.h2b": "Reserva",
  "contact.intro": "Estamos aquí para hacer tu estancia inolvidable. Contáctanos para reservas o información y te responderemos a la brevedad.",
  "contact.addr": "Dirección", "contact.phone": "Teléfono", "contact.email": "Email",
  "contact.hours": "Horarios de atención", "contact.monSun": "Lunes a Domingo",
  "contact.checkin": "Check-in", "contact.checkout": "Check-out",
  "form.name": "Nombre", "form.lastname": "Apellido", "form.email": "Email",
  "form.phone": "Teléfono", "form.guests": "Huéspedes", "form.message": "Mensaje adicional",
  "form.namePh": "Tu nombre", "form.lastnamePh": "Tu apellido",
  "form.emailPh": "tu@email.com", "form.phonePh": "+52 (555) 123-4567",
  "form.messagePh": "¿En qué podemos ayudarte?",
  "form.submit": "Enviar Solicitud", "form.submitting": "Enviando...",
  "contact.successTitle": "¡Gracias por tu solicitud!",
  "contact.successDesc": "Nos pondremos en contacto contigo muy pronto.",

  // Ubicación
  "location.eyebrow": "Cómo llegar",
  "location.h2a": "Nuestra", "location.h2b": "Ubicación",
  "location.addr": "Dirección", "location.bycar": "En Automóvil",
  "location.landmarks": "Puntos de Referencia",
  "location.ref0": "· Frente a la Plaza Principal",
  "location.ref1": "· 50 metros de la Iglesia de San Francisco",
  "location.ref2": "· Junto al Mercado de Artesanías",
  "location.ref3": "· 2 cuadras del Mirador Puente de Batanes",
  "location.bycar.line1": "30 minutos de Celaya · 2 horas de León.",
  "location.bycar.line2": "Fácil acceso desde la carretera federal.",
  "location.openMaps": "Abrir en Google Maps",
  "location.fromQro": "Desde Querétaro o León", "location.toPlaza": "A la Plaza Principal",
  "location.heritage": "Patrimonio histórico", "location.crafts": "Artesanías",
  "location.mirador": "Mirador", "location.gastronomy": "Gastronomía",
  "location.mapTitle": "Ubicación Hotel San Andrés",

  // Footer
  "footer.nav": "Navegación", "footer.contact": "Contacto", "footer.gallery": "Galería",
  "footer.desc": "Tu refugio en el corazón de Salvatierra, Guanajuato. Más de 25 años de hospitalidad auténtica.",
  "footer.copyright": "© 2026 Hotel San Andrés. Todos los derechos reservados.",
  "footer.tagline": "Salvatierra, Pueblo Mágico · Guanajuato, México",
  "footer.ctaLine1": "¿Listo para tu", "footer.ctaLine2": "próxima estancia?",
  "footer.ctaDesc": "Reserva directamente y obtén la mejor atención personalizada.",

  // WhatsApp
  "wa.tooltip": "Contáctanos por WhatsApp",
};

const en: Record<string, string> = {
  // Header
  "nav.home": "Home", "nav.about": "About", "nav.services": "Services",
  "nav.rooms": "Rooms", "nav.town": "Salvatierra", "nav.events": "Events",
  "nav.location": "Location", "nav.contact": "Contact",
  "header.book": "Book Now", "header.bookNow": "Book Now",
  "header.openMenu": "Open menu", "header.closeMenu": "Close menu",

  // Carrusel
  "hero.desc": "Your retreat in the heart of historic Salvatierra. Over 25 years of authentic hospitality and unforgettable experiences.",
  "hero.exploreRooms": "Explore Rooms", "hero.viewGallery": "View Gallery",
  "hero.prev": "Previous", "hero.next": "Next", "hero.image": "Image",
  "hero.slide.0.alt": "Panoramic view of the magical town",
  "hero.slide.1.alt": "Colonial hotel facade",
  "hero.slide.2.alt": "Main square with colonial church",
  "hero.slide.3.alt": "Hotel gardens at sunset",

  // Nosotros
  "about.eyebrow": "Our Story",
  "about.h2a": "Hospitality", "about.h2b": "from the Heart",
  "about.yearsService": "Years of Service",
  "about.p1": "Hotel San Andrés offers quality lodging in the heart of Salvatierra, Guanajuato. Our excellence stems from the commitment and dedication we have maintained for over 25 years, providing close, warm and respectful attention to every guest.",
  "about.p2": "We are proud to be an active part of the Salvatierra community, and we are delighted to welcome visitors who wish to discover the history, culture and hospitality of this beautiful municipality.",
  "about.feat0": "Welcoming atmosphere", "about.feat1": "Excellent service",
  "about.feat2": "Safety & Trust", "about.feat3": "Authentic hospitality",
  "about.families": "Families hosted", "about.satisfaction": "Satisfaction",
  "about.quote": "To offer every guest an exceptional service, ensuring comfort, personalized attention and impeccable cleanliness, so that their stay is synonymous with rest, trust and well-being.",

  // Servicios
  "services.h2a": "Our", "services.h2b": "Services",
  "services.intro": "At Hotel San Andrés we offer more than a stay: we provide comfort, hospitality and unique experiences. Everything designed so your visit to Salvatierra is as comfortable as it is unforgettable.",
  "services.security": "24/7 Security", "services.eco": "Eco-friendly",
  "svc.0.title": "High-Speed WiFi", "svc.0.desc": "Stay connected throughout all hotel areas.",
  "svc.0.tag0": "Free", "svc.0.tag1": "300 Mbps", "svc.0.tag2": "Full coverage",
  "svc.1.title": "Air Conditioning", "svc.1.desc": "Ideal climate control for your comfort throughout your stay.",
  "svc.1.tag0": "Included", "svc.1.tag1": "Comfort",
  "svc.2.title": "Secure Parking", "svc.2.desc": "Private, supervised space with easy access.",
  "svc.2.tag0": "Private", "svc.2.tag1": "CCTV", "svc.2.tag2": "Overnight",
  "svc.3.title": "Premium Beds", "svc.3.desc": "Hypoallergenic bedding and high-comfort mattresses.",
  "svc.3.tag0": "Hypoallergenic",
  "svc.4.title": "Daily Cleaning", "svc.4.desc": "Daily service to keep your room spotless and welcoming.",
  "svc.4.tag0": "Daily", "svc.4.tag1": "Disinfection",
  "svc.5.title": "Central Location", "svc.5.desc": "Steps from the main square and the best restaurants.",
  "svc.5.tag0": "Facing the square", "svc.5.tag1": "Everything nearby",

  // Habitaciones
  "rooms.eyebrow": "Spaces designed for you",
  "rooms.h2a": "Our", "rooms.h2b": "Rooms",
  "rooms.intro": "Every space designed for your rest and comfort in the heart of Salvatierra.",
  "rooms.amenity0": "Fully equipped private bathroom", "rooms.amenity1": "Air conditioning",
  "rooms.amenity2": "Free Wi-Fi", "rooms.amenity3": "Artisan decor",
  "rooms.amenity4": "Two independent floors", "rooms.amenity5": "Lounge area",
  "rooms.guests": "guests", "rooms.bed": "bed", "rooms.beds": "beds",
  "rooms.bath": "bathroom", "rooms.baths": "bathrooms",
  "rooms.cta": "Request Reservation", "rooms.popular": "Most Popular", "rooms.room": "Room",
  "room.0.title": "Single Room",
  "room.0.desc": "Our Single Room is designed to offer a quiet and comfortable stay. It features a queen bed with soft sheets, a fully equipped private bathroom, air conditioning, free Wi-Fi, and artisan decorative details. Ideal for travelers seeking rest, privacy and a cozy atmosphere in the heart of Salvatierra.",
  "room.1.title": "Double Room",
  "room.1.desc": "Our Double Room is designed for spaciousness, comfort and functionality. It features two full beds with soft sheets, a fully equipped private bathroom, free Wi-Fi, air conditioning and artisan decorative details. Ideal for families or groups of up to 4 people seeking comfort, privacy and a relaxing experience in the heart of Salvatierra.",
  "room.2.title": "Triple Room",
  "room.2.desc": "Our Triple Room is perfect for families or large groups. It has two bedrooms: one with a queen bed and another with two full beds, all with soft and comfortable sheets. It includes a fully equipped private bathroom, air conditioning, free Wi-Fi and artisan decorative details. Ideal for sharing special moments in comfort and privacy in the heart of Salvatierra.",
  "room.3.title": "Mini Apartment",
  "room.3.desc": "Our Mini Apartment offers greater independence and comfort for families or groups. It has two bedrooms: on the ground floor, a full bed, a single bed and private bathroom; on the upper floor, two full beds and another complete bathroom. Spacious areas, a lounge and cozy details for a comfortable and private stay.",

  // Eventos
  "events.eyebrow": "Culture & Tradition",
  "events.h2a": "Events &", "events.h2b": "Festivals",
  "events.desc": "Salvatierra celebrates its traditions, history and culture with heart. Throughout the year, our city comes alive with festivals that reflect the essence of our people.",
  "events.calTitle": "Monthly", "events.calItalic": "Calendar",
  "event.0.month": "April", "event.0.title": "Holy Week",
  "event.0.desc": "Experience one of Salvatierra's most profound religious celebrations. The town transforms into a spiritual setting filled with tradition, devotion and culture.",
  "event.1.month": "September", "event.1.title": "Marquezada",
  "event.1.desc": "A unique festival uniting Spanish tradition with the Mexican heart. Bull runs, equestrian shows, live music and crafts in Salvatierra's streets.",
  "event.2.month": "December", "event.2.title": "Salvatierra de Luces",
  "event.2.desc": "During December, the historic center lights up with monumental figures and brilliant tunnels. Christmas magic for unforgettable family moments.",
  "monthly.0.month": "February", "monthly.0.title": "Candlemas Fair",
  "monthly.0.desc": "Dances, gastronomy and crafts honoring the Virgin.",
  "monthly.1.month": "March", "monthly.1.title": "Holy Week",
  "monthly.1.desc": "Spirituality and the Flower Festival fill the city.",
  "monthly.2.month": "April", "monthly.2.title": "Señora de la Luz",
  "monthly.2.desc": "Feast of the town's patron saint.",
  "monthly.3.month": "September", "monthly.3.title": "Marquezada",
  "monthly.3.desc": "Bull runs and local culture celebration.",

  // Pueblo
  "pueblo.eyebrow": "Explore the Region",
  "pueblo.h2a": "Discover", "pueblo.h2b": "Salvatierra",
  "pueblo.desc": "Salvatierra, Guanajuato's first city, is a place where time stands still so you can enjoy its history, colonial architecture and traditional spirit. Surrounded by natural landscapes, cobblestone alleys and centuries-old temples, this gem of the Bajío invites you to explore its living soul at every turn.",
  "pueblo.videoFallback": "Your browser does not support video.",
  "pueblo.attractTitle": "What to Explore",
  "pueblo.founded": "Founded", "pueblo.firstCity": "City in Gto.", "pueblo.magicTown": "Magic Town",
  "pueblo.quote": "A place where colonial history and the warmth of its people come alive on every street.",
  "attract.0": "16th-century colonial church",
  "attract.1": "Local artisan workshops",
  "attract.2": "Nature trails and viewpoints",
  "attract.3": "Guided photography tours",
  "attract.4": "Festivals: Holy Week, Romería & Day of the Dead",
  "attract.5": "Historic bridges, haciendas and viceregal gardens",

  // Galería
  "gallery.h2a": "Photo", "gallery.h2b": "Gallery",
  "gallery.desc": "Discover every corner of our rooms and spaces, designed to provide you with comfort and unforgettable moments.",
  "gallery.imageAria": "View image", "gallery.fullscreen": "full size",
  "gallery.dialogAria": "Image preview", "gallery.closeAria": "Close preview",
  "gallery.spaceAlt": "Hotel space, image", "gallery.fullsizeAlt": "Hotel space, full size",
  "gallery.photoCount": "photos", "gallery.prev": "Previous", "gallery.next": "Next",

  // Contacto
  "contact.eyebrow": "We're here to serve you",
  "contact.h2a": "Contact Us &", "contact.h2b": "Book",
  "contact.intro": "We are here to make your stay unforgettable. Contact us for reservations or information and we will respond promptly.",
  "contact.addr": "Address", "contact.phone": "Phone", "contact.email": "Email",
  "contact.hours": "Business Hours", "contact.monSun": "Monday to Sunday",
  "contact.checkin": "Check-in", "contact.checkout": "Check-out",
  "form.name": "Name", "form.lastname": "Last Name", "form.email": "Email",
  "form.phone": "Phone", "form.guests": "Guests", "form.message": "Additional Message",
  "form.namePh": "Your name", "form.lastnamePh": "Your last name",
  "form.emailPh": "your@email.com", "form.phonePh": "+52 (555) 123-4567",
  "form.messagePh": "How can we help you?",
  "form.submit": "Send Request", "form.submitting": "Sending...",
  "contact.successTitle": "Thank you for your request!",
  "contact.successDesc": "We will get in touch with you very soon.",

  // Ubicación
  "location.eyebrow": "How to Get Here",
  "location.h2a": "Our", "location.h2b": "Location",
  "location.addr": "Address", "location.bycar": "By Car",
  "location.landmarks": "Landmarks",
  "location.ref0": "· Facing the Main Square",
  "location.ref1": "· 50 meters from San Francisco Church",
  "location.ref2": "· Next to the Artisan Market",
  "location.ref3": "· 2 blocks from Puente de Batanes Viewpoint",
  "location.bycar.line1": "30 min from Celaya · 2 hours from León.",
  "location.bycar.line2": "Easy access from the federal highway.",
  "location.openMaps": "Open in Google Maps",
  "location.fromQro": "From Querétaro or León", "location.toPlaza": "To the Main Square",
  "location.heritage": "Historic heritage", "location.crafts": "Crafts",
  "location.mirador": "Viewpoint", "location.gastronomy": "Gastronomy",
  "location.mapTitle": "Hotel San Andrés Location",

  // Footer
  "footer.nav": "Navigation", "footer.contact": "Contact", "footer.gallery": "Gallery",
  "footer.desc": "Your retreat in the heart of Salvatierra, Guanajuato. Over 25 years of authentic hospitality.",
  "footer.copyright": "© 2026 Hotel San Andrés. All rights reserved.",
  "footer.tagline": "Salvatierra, Pueblo Mágico · Guanajuato, México",
  "footer.ctaLine1": "Ready for your", "footer.ctaLine2": "next stay?",
  "footer.ctaDesc": "Book directly and get the best personalized attention.",

  // WhatsApp
  "wa.tooltip": "Contact us on WhatsApp",
};

const LangCtx = createContext<{
  lang: Lang;
  t: (k: string) => string;
  toggle: () => void;
}>({ lang: "es", t: (k) => es[k] ?? k, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () =>
    setLang((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("lang", next);
      return next;
    });

  const t = (k: string) => (lang === "es" ? es[k] : en[k]) ?? k;

  return <LangCtx.Provider value={{ lang, t, toggle }}>{children}</LangCtx.Provider>;
}

export const useT = () => useContext(LangCtx);
