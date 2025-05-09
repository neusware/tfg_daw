import React from 'react'
import Landing from './Pages/Landing'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Lan } from '@mui/icons-material'
import ProductPage from './Pages/ProductPage'
import NavbarPrueba from './components/NavBar/NavbarPrueba'
import AllProducts from './Pages/AllProducts'
import EditarProductos from './components/Admin/EditarProductos'



function App2() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <NavbarPrueba/>
        <Routes>
            {/* Ruta de incio principal */}
            <Route path='/' element={<Landing/>}/>
            <Route path='/producto/:id' element={<ProductPage/>}/>
            <Route path='/productos' element={<AllProducts/>}/>
            <Route path='/editarProductos' element={<EditarProductos/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App2
