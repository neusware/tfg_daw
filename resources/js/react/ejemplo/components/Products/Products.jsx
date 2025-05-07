import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

const ProductsData = [
    {
      id: 1,
      img: "https://www.dia.es/product_images/272542/272542_ISO_0_ES.jpg?imwidth=392",
      title: "Boat Headphone",
      price: "120"
    },
    {
      id: 2,
      img: "https://www.dia.es/product_images/30319/30319_ISO_0_ES.jpg?imwidth=392",
      title: "Rocky Mountain",
      price: "120"
    },
    {
      id: 3,
      img: "https://www.dia.es/product_images/161808/161808_ISO_0_ES.jpg?imwidth=392",
      title: "Boat Headphone",
      price: "320"
    },
    {
      id: 4,
      img: "https://www.dia.es/product_images/44073/44073_ISO_0_ES.jpg?imwidth=392",
      title: "Goggles",
      price: "320"
    },
    {
      id: 5,
      img: "https://www.dia.es/product_images/203728/203728_ISO_0_ES.jpg",
      title: "Aperitivo de maíz horneado gustosines Cheetos bolsa 75 g",
      price: "1.59"
    },
    {
      id: 6,
      img: "https://www.dia.es/product_images/189142/189142_ISO_0_ES.jpg",
      title: "Conchitas con sabor a ketchup Jumpers bolsa 95 g",
      price: "1.4"
    },
    {
      id: 7,
      img: "https://www.dia.es/product_images/188945/188945_ISO_0_ES.jpg",
      title: "Nachos sabor a queso Doritos bolsa 225 g",
      price: "2.99"
    },
    {
      id: 8,
      img: "https://www.dia.es/product_images/184167/184167_ISO_0_ES.jpg",
      title: "Patatas fritas onduladas sabor a jamón Ruffles bolsa 243 g",
      price: "2.99"
    },
    {
      id: 9,
      img: "https://www.dia.es/product_images/18357/18357_ISO_0_ES.jpg",
      title: "Patatas fritas original Pringles bote 165 g",
      price: "2.6"
    },
    {
      id: 10,
      img: "https://www.dia.es/product_images/18356/18356_ISO_0_ES.jpg",
      title: "Patatas fritas sabor crema y cebolla Pringles bote 165 g",
      price: "2.6"
    },
    {
      id: 11,
      img: "https://www.dia.es/product_images/183387/183387_ISO_0_ES.jpg",
      title: "Patatas fritas sabor campesina Lay's bolsa 242 g",
      price: "2.99"
    },
    {
      id: 12,
      img: "https://www.dia.es/product_images/17313/17313_ISO_0_ES.jpg",
      title: "Rizos Cheetos bolsa 100 g",
      price: "1.89"
    },
    {
      id: 13,
      img: "https://www.dia.es/product_images/17312/17312_ISO_0_ES.jpg",
      title: "Patatas fritas sabor campesina Lay's bolsa 150 g",
      price: "1.99"
    },
    {
      id: 14,
      img: "https://www.dia.es/product_images/17311/17311_ISO_0_ES.jpg",
      title: "Patatas fritas sabor vinagreta Lay's bolsa 150 g",
      price: "1.99"
    },
    {
      id: 15,
      img: "https://www.dia.es/product_images/166224/166224_ISO_0_ES.jpg",
      title: "Patatas fritas sabor jamón Pringles bote 165 g",
      price: "2.69"
    },
    {
      id: 16,
      img: "https://www.dia.es/product_images/150876/150876_ISO_0_ES.jpg",
      title: "Aperitivo de maíz horneado Cheetos bolsa 30 g",
      price: "0.5"
    },
    {
      id: 17,
      img: "https://www.dia.es/product_images/141495/141495_ISO_0_ES.jpg",
      title: "Pelotazos Cheetos bolsa 39 g",
      price: "0.5"
    },
    {
      id: 18,
      img: "https://www.dia.es/product_images/141494/141494_ISO_0_ES.jpg",
      title: "Aperitivo frito sabor barbacoa Fritos bolsa 49 g",
      price: "0.5"
    },
    {
      id: 19,
      img: "https://www.dia.es/product_images/141493/141493_ISO_0_ES.jpg",
      title: "Nachos sabor a queso Doritos bolsa 40 g",
      price: "0.8"
    },
    {
      id: 20,
      img: "https://www.dia.es/product_images/141492/141492_ISO_0_ES.jpg",
      title: "Conos de maíz con sabor a queso y bacon Lay's 3D's bolsa 28 g",
      price: "0.5"
    },
    {
      id: 21,
      img: "https://www.dia.es/product_images/141016/141016_ISO_0_ES.jpg",
      title: "Torreznos naturales Tendilla bote 140 g",
      price: "2.69"
    },
    {
      id: 22,
      img: "https://www.dia.es/product_images/131253/131253_ISO_0_ES.jpg",
      title: "Patatas fritas paprika Pringles bote 165 g",
      price: "2.6"
    },
    {
      id: 23,
      img: "https://www.dia.es/product_images/11641/11641_ISO_0_ES.jpg",
      title: "Patatas fritas al punto de sal Lay's bolsa 150 g",
      price: "1.75"
    }
  ];
  

function Products() {
  return (
    <div>
        <div className="container">
            {/* header */}
            <Heading title="Nuestros Productos" subtitle="Explora nuestros productos"/>
            {/* body */}
            <ProductCard data={ProductsData}/>
        </div>
    </div>
  )
}

export default Products