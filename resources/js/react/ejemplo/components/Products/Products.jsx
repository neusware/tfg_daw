import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

const ProductsData = [

    {
        id: 1,
        img: "https://www.dia.es/product_images/272542/272542_ISO_0_ES.jpg?imwidth=392",
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: "https://www.dia.es/product_images/30319/30319_ISO_0_ES.jpg?imwidth=392",
        title: "Rocky Mountain",
        price: "120",
        aosDelay: "200"
    },
    {
        id: 3,
        img: "https://www.dia.es/product_images/161808/161808_ISO_0_ES.jpg?imwidth=392",
        title: "Boat Headphone",
        price: "320",
        aosDelay: "400"
    },
    {
        id: 4,
        img: "https://www.dia.es/product_images/44073/44073_ISO_0_ES.jpg?imwidth=392",
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