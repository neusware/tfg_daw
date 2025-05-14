import React from 'react'
import Button from '../Shared/Button'
import { Link } from 'react-router-dom'

function ProductCard({ data }) {
  return (
    <div className="mb-8">
      <Link to={`/producto/${data.id}`} key={data.id}>
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden m-3">
          <div className="relative">
            <img
              src="https://www.dia.es/product_images/150102/150102_ISO_0_ES.jpg?imwidth=392"
              alt={data.nombre}
              className="h-[220px] w-full object-cover"
            />
            {/* Botón en hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300">
              <Button text="Ver más" bgColor="bg-primary" textColor="text-white" />
            </div>
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {data.nombre}
            </h2>
            <p className="text-primary font-bold text-base">
              {data.puntos} puntos
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
