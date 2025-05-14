import React, { useEffect, useState } from 'react'
import ContenedorCard from '../../components/Contenedores/ContenedorCard'

function AllContenedores() {


    const [contenedores, setContenedores] = useState([])

    useEffect(()=>{

        // llamada a la API para obtener todos los productos de la BBDD
        fetch('/api/contenedores')
        .then(response => response.json())
        .then(data => {
            setContenedores(data)
        })
        .catch(error => console.error("Error al obtener los contenedores en el fetch.", error))

    })
  return (
    <div className="container mx-auto px-4 mt-10 pb-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Nuestros Contenedores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {contenedores.map((contenedor, index) => (
          <div
            key={index}
            className="transform transition duration-300 hover:scale-[1.03]"
          >
            <ContenedorCard data={contenedor} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllContenedores
