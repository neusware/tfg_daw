import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

const ProductsData = [

    {
        id: 1,
        img: "imagen",
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: "imagen",
        title: "Rocky Mountain",
        price: "120",
        aosDelay: "200"
    },
    {
        id: 3,
        img: "imagen",
        title: "Boat Headphone",
        price: "320",
        aosDelay: "400"
    },
    {
        id: 4,
        img: "imagen",
        title: "Goggles",
        price: "320",
        aosDelay: "600"
    },

]

function Products() {
  return (
    <div>
        <div className="container">
            {/* header */}
            <Heading title="Nuestros Productos" subtitle="Explora nuestros productos"/>
            {/* body */}
            <ProductCard data={ProductsData}/>
            <ProductCard data={ProductsData}/>
        </div>
    </div>
  )
}

export default Products