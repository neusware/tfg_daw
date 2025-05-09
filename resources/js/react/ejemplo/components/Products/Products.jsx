import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import productos from '../../productos'


function Products() {
  return (
    <div>
        <div className="container">
            {/* header */}
            <Heading title="Nuestros Productos" subtitle="Explora nuestros productos"/>
            {/* body */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center'>
                {
                    productos.map((producto)=>(
                        <ProductCard key={producto.id} data={producto}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products
