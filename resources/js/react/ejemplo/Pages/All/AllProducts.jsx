import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Products/ProductCard';

function AllProducts() {

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
    <div className="container mx-auto p-16 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Todos los productos
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
          Explora todos nuestros productos
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((producto, index) => (
          <ProductCard key={index} data={producto} /> 
        ))}
      </div>
    </div>
  )
}

export default AllProducts
