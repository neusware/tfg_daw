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
      <section className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold sm:text-5xl dark:text-white capitalize">
          Nuestras Suscripciones
        </h1>
        <p className="mt-4 text-base text-pretty sm:text-lg/relaxed dark:text-gray-200">
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
