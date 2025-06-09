import React from 'react';
import { Link } from 'react-router-dom';

function SuscripcionCard({ data }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 flex shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-[1.02]">
      <div className="p-5 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-2 font-sans">
          {data.tipo}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {data.descripcion}
        </p>
        <p className="text-2xl font-bold text-primary mb-6">
          {data.precio} €
        </p>

        <Link to={`/suscripcion/${data.id}`}>
          <button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-red transition">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuscripcionCard;
