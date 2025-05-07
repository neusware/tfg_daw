import React from 'react'
import Landing from './Pages/Landing'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Lan } from '@mui/icons-material'
import ProductPage from './Pages/ProductPage'
import NavbarPrueba from './components/NavBar/NavbarPrueba'



const producto = {
  id: 1,
  nombre: "EcoScan Cereal",
  descripcion: "Cereal orgánico con alto valor nutricional.",
  ingredientes: "Avena, miel, frutos secos",
  fabricante: "EcoAlimentos S.A.",
  composicion: "70% avena, 20% frutos secos, 10% miel",
  puntos: 85,
  imagen: "https://www.dia.es/product_images/66956/66956_ISO_0_ES.jpg?imwidth=392",
  enlace_qr: "/qr/ecoscan-cereal.png",
  id_categoria: 3,
  id_empresa: 7,
  guia_uso: "Agregar 2 cucharadas a tu yogur o batido favorito para un desayuno nutritivo.",
  stock: 120,
  reseñas: [
    { usuario: "Ana Pérez", comentario: "Excelente cereal, muy sabroso y saludable." },
    { usuario: "Carlos López", comentario: "Muy buen producto, pero preferiría más variedad de sabores." },
    { usuario: "María González", comentario: "Perfecto para un desayuno rápido y nutritivo." }
  ],
  imagenes: [
    "https://www.dia.es/product_images/66956/66956_ISO_1_ES.jpg?imwidth=392",
    "https://www.dia.es/product_images/66956/66956_ISO_2_ES.jpg?imwidth=392",
    "https://www.dia.es/product_images/66956/66956_ISO_3_ES.jpg?imwidth=392"
  ],
  relacionados: [
    {
      nombre: "EcoScan Muesli",
      precio: 4.99,
      imagen: "https://www.dia.es/product_images/12345/12345_ISO_0_ES.jpg?imwidth=392"
    },
    {
      nombre: "EcoScan Granola",
      precio: 5.99,
      imagen: "https://www.dia.es/product_images/54321/54321_ISO_0_ES.jpg?imwidth=392"
    }
  ]
};


function App2() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <NavbarPrueba/>
        <Landing/>
        {/*<ProductPage producto={producto}/> */}
        <Footer/>
    </div>
  )
}

export default App2
