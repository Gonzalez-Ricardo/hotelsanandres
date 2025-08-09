import { Wifi, Car, AirVent, BrushCleaning} from "lucide-react";
export default function Servicios() {
  return (
    <div>
     <section id="servicios" className="py-28 bg-[#757165]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold text-white mb-4">Servicios del Hotel</h3>
            <p className="text-xl text-white">Todo lo que necesitas para una estancia perfecta</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg">
              <div className="bg-[#c1a362] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-amber-100" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">WiFi Gratuito</h4>
              <p className="text-white">Internet de alta velocidad en todas las áreas</p>
            </div>

            <div className="text-center p-6 rounded-lg ">
              <div className="bg-[#c1a362] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-amber-100" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Estacionamiento</h4>
              <p className="text-white">Estacionamiento privado y seguro</p>
            </div>

            <div className="text-center p-6 rounded-lg ">
              <div className="bg-[#c1a362] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AirVent  className="h-8 w-8 text-amber-100" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Aire Acondicionado</h4>
              <p className="text-white">Climatización ideal para tu confort durante toda tu estancia.</p>
            </div>

            <div className="text-center p-6 rounded-lg ">
              <div className="bg-[#c1a362] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">

                <BrushCleaning className="h-8 w-8 text-amber-100" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Limpieza</h4>
              <p className="text-white">Servicio diario para mantener tu habitación impecable y acogedora.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}