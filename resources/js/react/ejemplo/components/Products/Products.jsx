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
    <section className="bg-white dark:bg-gray-900 py-2">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Heading
            title="Nuestros Productos"
            subtitle="Explora algunos de los productos disponibles en EcoScan"
          />
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productos.slice(0, 4).map((producto, index) => (
            <ProductCard key={index} data={producto} />
          ))}
        </div>

        {/* Botón para ver más */}
        <div className="mt-12 text-center">
          <Link
            to="/productos"
            className="inline-block px-6 py-3 text-white font-medium bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition-colors"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
