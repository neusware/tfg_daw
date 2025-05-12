import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ContenedorPage({data}) {

    const { id } = useParams();
    const [contenedores, setContenedores] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [contenedor, setContenedor] = useState([])



    useEffect(() => {
      fetch(`/api/contenedores/${id}`)
        .then(response => response.json())
        .then(data => {

            console.log("datos recibidos", data)
          setContenedor(data || []); // aseguramos que sea array
          setLoading(false);
        })
        .catch(error => {
          console.error("Error al obtener los contenedores en el fetch.", error);
          setLoading(false);
        });
    }, []);


    if (loading) return <div className="text-center mt-10">Cargando contendor...</div>;
    if (!contenedor) return <div className="text-center mt-10 text-red-600">Contenedor no encontrado</div>;
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contenedor de {contenedor.tipo}
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Color: <span className="font-semibold">{contenedor.color}</span>
        </p>
      </div>

      {/* Imagen representativa opcional */}
      <div className="flex justify-center">
        <div
          className={`w-40 h-40 rounded-full shadow-xl border-4`}
        //   style={{ backgroundColor: contenedor[id].color.toLowerCase() }}
          title={`Color: ${contenedor.color}`}
        ></div>
      </div>

      {/* Información adicional o recomendaciones */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-gray-700 dark:text-gray-300">
        <h2 className="text-xl font-semibold mb-4">¿Qué se deposita aquí?</h2>
        <ul className="list-disc pl-5 space-y-2">
          {/* Aquí puedes mostrar ejemplos según tipo */}
          {contenedor.tipo === "Plástico" && (
            <>
              <li>Botellas de plástico</li>
              <li>Envases y latas</li>
              <li>Tarrinas y bandejas</li>
            </>
          )}
          {contenedor.tipo === "Vidrio" && (
            <>
              <li>Botellas de vidrio</li>
              <li>Frascos sin tapa</li>
              <li>Tarros</li>
            </>
          )}
          {/* Agrega más tipos si los tienes */}
        </ul>
      </div>
    </div>
  );
}

export default ContenedorPage;
