import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#a9a392] text-white py-12">
        <div className="container mx-auto px-4">
          <div className=" text-center text-white">
            <p>&copy; 2025 Hotel San Andres. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
