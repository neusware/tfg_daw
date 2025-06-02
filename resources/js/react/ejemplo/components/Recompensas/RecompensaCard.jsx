import React from 'react'
import Button from '../Shared/Button'
import { Link } from 'react-router-dom'

function RecompensaCard({ data }) {
  return (
    <div className="mb-8">
      <Link to={`/recompensas/${data.id}`} key={data.id}>
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden m-3">
          <div className="relative">
            <img
              src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/15/5fa43d71a111f.jpeg"
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
              {data.precio_pts} puntos
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecompensaCard;
