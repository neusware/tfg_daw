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
    <div className="container mx-auto p-6 mt-10 pb-32 font-sans">
      <section className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
          Nuestras Suscripciones
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          Elige una suscripción que se adapte a tus necesidades para disfrutar de
          beneficios exclusivos. ¡Recicla más, gana más!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {suscripciones.map((item, index) => (
          <SuscripcionCard key={item.id || index} data={item} />
        ))}
      </section>
    </div>
  );
}

export default AllSuscripciones;
