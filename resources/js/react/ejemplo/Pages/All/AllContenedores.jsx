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
    <div className='container mt-10'>
        {/* bucle que recorre todos los contenedores y los convierte a una tarjeta a cada uno de ellos utilizando el respectivo componente
        y se muestran en una lista todos juntos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
            {
                contenedores.map((contenedor,index)=>(
                    <ContenedorCard key={index} data={contenedor}/>
                ))
            }
        </div>
    </div>
  )
}

export default AllContenedores
