import React, { useEffect, useState } from 'react'
import ContenedorCard from '../../components/Contenedores/ContenedorCard'
import Map from '../../components/Map/Map';

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
            return 'https://www.solocontenedores.com/wp-content/uploads/04014-amarillo.jpg' // Contenedor amarillo
            case 'vidrio':
            return 'https://www.solocontenedores.com/wp-content/uploads/04014-verde-600x600.jpg' // Contenedor verde
            case 'Cartón y Papel':
            return 'https://www.solocontenedores.com/wp-content/uploads/04014-azul-600x600.jpg' // Contenedor azul
            case 'organico':
            return 'https://www.solocontenedores.com/wp-content/uploads/04014-marron-768x768.jpg' // Contenedor marrón
            case 'residuos':
            case 'resto':
            return 'https://www.solocontenedores.com/wp-content/uploads/04014-gris-600x600.jpg' // Contenedor gris o negro
            case 'pilas':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Contenedor pilas/baterías
            default:
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s' // Imagen genérica de basura
        }
    }
   
  return (
    <div className="container mx-auto p-6 mt-10 pb-32 font-sans">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        Los Contenedores
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-12 px-4 sm:px-0 leading-relaxed">
        Descubre los diferentes tipos de contenedores que ofrecemos para facilitar el reciclaje y la gestión de residuos. Cada contenedor está diseñado para recibir ciertos tipos de materiales, ayudándonos a cuidar el medio ambiente y promover prácticas sostenibles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {contenedores.map((contenedor, index) => (
          <div key={contenedor.id || index} className="flex flex-col">
            <ContenedorCard
              data={contenedor}
              image={getImagenPorTipo(contenedor.tipo)}
            />
          </div>
        ))}
      </div>
      <div>
        <h1>Mapa de Contenedores</h1>
        <Map />
      </div>
    </div>

  )
}

export default AllContenedores
