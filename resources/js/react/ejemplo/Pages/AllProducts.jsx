import React from 'react'
import ProductCard from '../components/Products/ProductCard';
import productos from '../productos'

function AllProducts() {

  return (
    <div className='container mt-10'>
        {/* bucle que recorre todos los productos y los convierte a una tarjeta a cada uno de ellos utilizando el respectivo componente
        y se muestran en una lista todos juntos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
            {
                productos.map((producto,index)=>(
                    <ProductCard key={index} data={producto}/>
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts
