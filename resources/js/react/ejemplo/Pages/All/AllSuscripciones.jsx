import React, { useEffect, useState } from "react";
import SuscripcionCard from "../../components/Suscripciones/SuscripcionCard";

function AllSuscripciones() {
  const [suscripciones, setSuscripciones] = useState([]);

  useEffect(() => {
    fetch("/api/suscripciones")
      .then((res) => res.json())
      .then((data) => setSuscripciones(data))
      .catch((error) =>
        console.error("Error al obtener las suscripciones:", error)
      );
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 font-sans">
      <section className="text-center mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold dark:text-white capitalize">
          Nuestras Suscripciones
        </h1>
        <p className="mt-4 text-sm sm:text-base text-pretty dark:text-gray-200">
          Elige una suscripción que se adapte a tus necesidades para disfrutar de beneficios exclusivos.
          ¡Recicla más, gana más!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-start">
        {suscripciones.map((item, index) => (
          <div className="max-w-xs mx-auto">
            <SuscripcionCard key={item.id || index} data={item} />
          </div>
        ))}
      </section>
    </div>

  );
}

export default AllSuscripciones;
