import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Shared/Button'

function ContenedorCard({ data, image }) {
  return (
    <div className="mb-10">
        <Link to={`/contenedores/${data.id}`} key={data.id}>
          <div className="group w-full max-w-xs mx-auto rounded-lg border shadow-lg hover:shadow-2xl transition duration-300">
            <div className="relative">
              <img 
                src={image} 
                alt={data.tipo} 
                className="w-full h-48 object-cover rounded-t-lg "
              />
              {/* Botón en hover */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center justify-center items-center backdrop-blur-sm bg-black/50 rounded-lg">
                <Button text={"Ver más"} bgColor={"bg-primary"} textColor={"text-white"} />
              </div>
            </div>
            <div className="p-4 text-center">
              <h2 className="font-semibold text-xl text-gray-800">{data.tipo}</h2>
              <h2 className="font-bold text-lg text-primary mt-2">Color: {data.color}</h2>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default ContenedorCard
