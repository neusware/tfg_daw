import React, { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";

function ContenedorPage() {
  const { id } = useParams();
  const [contenedor, setContenedor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/contenedores/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Contenedor no encontrado");
        return res.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setContenedor(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el contenedor:", error);
        setError(error.message || "Error al cargar el contenedor");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-16 text-gray-600 dark:text-gray-300">
        Cargando contenedor...
      </div>
    );
  }

  if (error || !contenedor) {
    return (
      <div className="text-center py-16 text-red-600 dark:text-red-400">
        {error || "Contenedor no encontrado"}
      </div>
    );
  }

  const residuosPorTipo = {
    Plástico: [
      "Botellas de plástico",
      "Envases y latas",
      "Tarrinas y bandejas",
      "Bolsas de plástico (no biodegradables)",
    ],
    Vidrio: [
      "Botellas de vidrio",
      "Frascos sin tapa",
      "Tarros",
      "Envases de vidrio (sin restos orgánicos)",
    ],
    Orgánica: [
      "Restos de comida",
      "Cáscaras de frutas y verduras",
      "Posos de café",
      "Servilletas usadas",
    ],
    "Papel/Cartón": [
      "Periódicos y revistas",
      "Cajas de cartón",
      "Papel de oficina",
      "Envases de cartón (limpios)",
    ],
    Inerte: [
      "Escombros pequeños",
      "Cerámica rota",
      "Materiales no reciclables",
      "Residuos de construcción menores",
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans dark:bg-gray-900 min-h-screen space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          Contenedor de {contenedor.tipo}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Aprende cómo usar el contenedor de {contenedor.tipo.toLowerCase()} para reciclar correctamente y contribuir a un planeta más sostenible.
        </p>
        <p className="mt-2 text-xl font-medium text-gray-700 dark:text-gray-200">
          Color: <span className="text-primary-600 dark:text-primary-400">{contenedor.color}</span>
        </p>
      </section>

      {/* Imagen del Contenedor */}
      <section className="flex justify-center">
        <img
          src={contenedor.imagen}
          alt={`Contenedor de ${contenedor.tipo}`}
          className="w-64 h-64 rounded-2xl shadow-2xl object-cover border-4 border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
          title={`Color: ${contenedor.color}`}
        />
      </section>

      {/* Información de Residuos */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          ¿Qué se deposita en este contenedor?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Asegúrate de depositar únicamente los materiales adecuados para maximizar el reciclaje y evitar la contaminación de los residuos.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
          {(residuosPorTipo[contenedor.tipo] || []).map((item, index) => (
            <li key={index} className="text-sm sm:text-base">{item}</li>
          ))}
          {(!residuosPorTipo[contenedor.tipo] || residuosPorTipo[contenedor.tipo].length === 0) && (
            <li className="text-sm sm:text-base italic">No hay ejemplos específicos disponibles.</li>
          )}
        </ul>
      </section>

      {/* Consejos de Reciclaje */}
      <section className="bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Consejos para Reciclar Correctamente
        </h2>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 text-xl">✔️</span>
            <span>Limpia los envases antes de depositarlos para evitar contaminación.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 text-xl">✔️</span>
            <span>Retira tapas, etiquetas o elementos no reciclables según el tipo de contenedor.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 dark:text-green-400 text-xl">✔️</span>
            <span>Consulta las normativas locales para conocer restricciones específicas.</span>
          </li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-12 bg-greenDark text-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          ¡Sigue Reciclando con Nosotros!
        </h2>
        <p className="max-w-md mx-auto mb-6">
          Explora más contenedores y participa en nuestro programa de recompensas por reciclar.
        </p>
        <a
          href="/contenedores"
          className="inline-block px-8 py-3 bg-white text-green font-semibold rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 transition duration-300"
        >
          Ver Todos los Contenedores
        </a>
      </section>
    </div>
  );
}

export default ContenedorPage;