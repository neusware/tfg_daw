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

    const getImagenPorTipo = (tipo) => {
        switch (tipo.toLowerCase()) {
            case 'plástico':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor amarillo
            case 'vidrio':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor verde
            case 'Cartón y Papel':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor azul
            case 'organico':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor marrón
            case 'residuos':
            case 'resto':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor gris o negro
            case 'pilas':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor pilas/baterías
            default:
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Imagen genérica de basura
        }
    }



    
  return (
    <div className="container mx-auto p-4 mt-10 pb-32 font-sans">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Los Contenedores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
        {contenedores.map((contenedor, index) => (
          <div key={index}>
            <ContenedorCard data={contenedor} image={getImagenPorTipo(contenedor.tipo)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllContenedores
