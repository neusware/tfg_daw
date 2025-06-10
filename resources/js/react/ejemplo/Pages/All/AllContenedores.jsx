import React, { useEffect, useState } from "react";
import ContenedorCard from "../../components/Contenedores/ContenedorCard";
import Map from "../../components/Map/Map";

function AllContenedores() {
  const [contenedores, setContenedores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/contenedores")
      .then((response) => response.json())
      .then((data) => {
        setContenedores(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los contenedores en el fetch.", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 ">
          Explora Nuestros Contenedores de Reciclaje
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
          Conoce los contenedores diseñados para una gestión eficiente de residuos, promoviendo un futuro más sostenible. Cada contenedor está pensado para facilitar el reciclaje y cuidar nuestro planeta.
        </p>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-700 dark:text-gray-300">Cargando contenedores...</p>
        </div>
      )}

      {/* Contenedores Grid */}
      {!loading && contenedores.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Tipos de Contenedores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {contenedores.map((contenedor, index) => (
              <div key={contenedor.id || index} className="flex flex-col">
                <ContenedorCard
                  data={contenedor}
                  image={contenedor.imagen}
                  className="hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* No Contenedores Message */}
      {!loading && contenedores.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            No se encontraron contenedores. Intenta de nuevo más tarde.
          </p>
        </div>
      )}

      {/* Recycling Benefits Section */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-12 mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          ¿Por Qué Reciclar?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base mb-8 text-center">
          El reciclaje reduce la cantidad de residuos en vertederos, conserva recursos naturales y disminuye la contaminación. Al usar nuestros contenedores, contribuyes a un ciclo sostenible que beneficia al medio ambiente y a las generaciones futuras.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl text-green-600 dark:text-green-400 mb-4">🌍</div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Protege el Planeta
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Minimiza el impacto ambiental al separar correctamente los residuos.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-600 dark:text-green-400 mb-4">♻️</div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Reutiliza Recursos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Transforma materiales usados en nuevos productos, ahorrando energía.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-600 dark:text-green-400 mb-4">🌱</div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              Futuro Sostenible
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Fomenta prácticas responsables para las próximas generaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Mapa de Contenedores
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-6">
          Encuentra los contenedores más cercanos para reciclar tus residuos de manera eficiente.
        </p>
        <div className="rounded-3xl overflow-hidden shadow-lg h-[500px]">
          <Map />
        </div>
      </section>
    </div>
  );
}

export default AllContenedores;