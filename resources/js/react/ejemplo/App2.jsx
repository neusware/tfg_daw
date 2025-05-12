import React from 'react'
import Landing from './Pages/Landing'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Lan } from '@mui/icons-material'
import ProductPage from './Pages/Unique/ProductPage'
import NavbarPrueba from './components/NavBar/NavbarPrueba'
import AllProducts from './Pages/All/AllProducts'
import EditarProductos from './components/Admin/EditarProductos'
import AllContenedores from './Pages/All/AllContenedores'
import ContenedorPage from './Pages/Unique/ContenedorPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import AllSuscripciones from './Pages/All/AllSuscripciones'



function App2() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>

        <Routes>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        <NavbarPrueba/>
        <Routes>
            {/* Ruta de incio principal */}
            <Route path='/' element={<Landing/>}/>
            <Route path='/producto/:id' element={<ProductPage/>}/>
            <Route path='/productos' element={<AllProducts/>}/>
            <Route path='/editarProductos' element={
                <ProtectedRoute>
                    <EditarProductos/>
                </ProtectedRoute>
                }/>
            <Route path='/contenedores' element={<AllContenedores/>}/>
            <Route path='/contenedores/:id' element={<ContenedorPage/>}/>
            <Route path='/suscripciones' element={<AllSuscripciones/>}/>
            <Route path='/suscripcion/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App2
