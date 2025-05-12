import React, { useEffect, useState } from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'


function Products() {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{

        // llamada a la API para obtener todos los productos de la BBDD
        fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
            setProductos(data.productos)
        })
        .catch(error => console.error("Error al obtener los productos en el fetch.", error))

    })

  return (
    <div>
        <div className="container">
            {/* header */}
            <Heading title="Nuestros Productos" subtitle="Explora nuestros productos"/>
            {/* body */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center'>
                {
                    // mostrar solo los 4 primeros productos de la lista
                    productos.slice(0, 4).map((producto, index) => (
                        <ProductCard key={index} data={producto} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products
