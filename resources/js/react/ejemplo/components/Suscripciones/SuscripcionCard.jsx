import React from 'react'
import Button from '../Shared/Button'
import { Link } from 'react-router-dom'

function SuscripcionCard({ data }) {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center">
        <Link to={`/suscripcion/${data.id}`} key={data.id}>
          <div className="group">
            <div className="relative">
              <img src={data.imagen} alt={data.tipo} className="h-[180px] w-[180px] object-cover rounded-md"/>
              {/* Botón en hover */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop:blur-sm justify-center items-center duration-200">
                <Button text={"Ver más"} bgColor={"bg-primary"} textColor={"text-white"} />
              </div>
            </div>
            <div className="leading-7 text-center mt-2">
              <h2 className="font-semibold">{data.tipo}</h2>
              <h2 className="font-bold text-primary">{data.precio} €</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SuscripcionCard;
