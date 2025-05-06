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
    imagen: "/images/cereal.jpg",
    enlace_qr: "/qr/ecoscan-cereal.png",
    id_categoria: 3,
    id_empresa: 7
  };


function App2() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Landing/>
        <Category/>
        <Category2/>
        <Services/>
        <Banner data={BannerData}/>
        <Products/>
        <Banner data={BannerData2}/>
        <Blog/>
        <Partners/>
    </div>
  )
}

export default App2
