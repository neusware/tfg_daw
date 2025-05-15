import React from 'react'
import Landing from './Pages/Landing'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Lan } from '@mui/icons-material'
import ProductPage from './Pages/Unique/ProductPage'
import NavbarPrueba from './components/NavBar/NavbarPrueba'
import AllProducts from './Pages/All/AllProducts'
import AllContenedores from './Pages/All/AllContenedores'
import ContenedorPage from './Pages/Unique/ContenedorPage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import AllSuscripciones from './Pages/All/AllSuscripciones'
import DashboardLayout from './Pages/Dashboard/DashboardLayout'
import AdminProductos from './components/Admin/Productos/AdminProductos'
import AdminContenedores from './components/Admin/Contenedores/AdminContenedores'
import AdminRecompensas from './components/Admin/Recompensas/AdminRecompensas'
import AdminSuscripciones from './components/Admin/Suscripciones/AdminSuscripciones'
import AdminCategorias from './components/Admin/Categorias/AdminCategorias'
import AdminEmpresas from './components/Admin/Empresas/AdminEmpresas'
import AllRecompensas from './Pages/All/AllRecompensas'
import RecompensaPage from './Pages/Unique/RecompensaPage'
import MiPerfil from './components/Admin/MiPerfil'



function App2() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>

        <NavbarPrueba/>
        <Routes>
            {/* rutas sin proteger login y register */}
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>

            {/* Ruta públicas */}
            <Route path='/' element={<Landing/>}/>
            <Route path='/producto/:id' element={<ProductPage/>}/>
            <Route path='/productos' element={<AllProducts/>}/>
            <Route path='/contenedores' element={<AllContenedores/>}/>
            <Route path='/contenedores/:id' element={<ContenedorPage/>}/>
            <Route path='/suscripciones' element={<AllSuscripciones/>}/>
            <Route path='/suscripcion/:id' element={<ProductPage/>}/>
            <Route path='/recompensas' element={<AllRecompensas/>}/>
            <Route path='/recompensas/:id' element={<RecompensaPage/>}/>

            {/* rutas para el panel de administrador */}
            <Route path='/admin-panel' element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
                <Route path='productos' element={<ProtectedRoute><AdminProductos/></ProtectedRoute>}/>
                <Route path='contenedores' element={<ProtectedRoute><AdminContenedores/></ProtectedRoute>}/>
                <Route path='recompensas' element={<ProtectedRoute><AdminRecompensas/></ProtectedRoute>}/>
                <Route path='suscripciones' element={<ProtectedRoute><AdminSuscripciones/></ProtectedRoute>}/>
                <Route path='categorias' element={<ProtectedRoute><AdminCategorias/></ProtectedRoute>}/>
                <Route path='empresas' element={<ProtectedRoute><AdminEmpresas/></ProtectedRoute>}/>
            </Route>

            {/* ruta para acceder a la info del perfil */}
            <Route path='/perfil' element={<ProtectedRoute><MiPerfil/></ProtectedRoute>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App2
