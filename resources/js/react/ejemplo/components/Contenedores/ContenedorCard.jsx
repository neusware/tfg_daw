import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';

const tipoContenido = {
  "Organico": "Residuos biodegradables como restos de comida, cáscaras, servilletas usadas y residuos vegetales.",
  "Plástico": "Botellas, envases, bolsas y otros productos plásticos que se pueden reciclar.",
  "Papel y cartón": "Cajas, folletos, periódicos y papeles limpios y secos.",
  "Vidrio": "Botellas, frascos y tarros de vidrio. Sin tapas ni residuos.",
  "General": "Residuos no reciclables como pañales, colillas o cerámica rota.",
  "Metal": "Latas, aerosoles vacíos y envases metálicos.",
  "Electrónicos": "Dispositivos electrónicos, cables, baterías y pequeños electrodomésticos."
};

function ContenedorCard({ data, image }) {
  const descripcion = tipoContenido[data.tipo] || "Este contenedor está destinado a un tipo específico de residuos. Asegúrate de depositar correctamente para facilitar el reciclaje.";

  return (
    <div className="mb-10">
      <Link to={`/contenedores/${data.id}`} key={data.id}>
        <div className="group w-full max-w-xs mx-auto rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800 min-h-[500px]">
          
          {/* Imagen con botón en hover */}
          <div className="relative">
            <img
              src={image}
              alt={`Contenedor ${data.tipo}`}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="hidden group-hover:flex absolute inset-0 justify-center items-center backdrop-blur-sm bg-black/50 rounded-t-lg">
              <Button text={"Ver más"} bgColor={"bg-primary"} textColor={"text-white"} />
            </div>
          </div>

          {/* Contenido */}
          <div className="p-5 text-center">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-white">{data.tipo}</h2>

            {data.color && data.color !== "null" && data.color !== "undefined" && (
              <p className="font-medium text-sm mt-1 text-primary">Color: {data.color}</p>
            )}

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {descripcion}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ContenedorCard;
