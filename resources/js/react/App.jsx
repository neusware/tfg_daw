import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Inicio from './pages/Inicio';
import Muestras from './pages/Muestras';
import Interpretaciones from './pages/Interpretaciones';
import Usuarios from './pages/Usuarios';
import Imagenes from './pages/Imagenes';
import ProtectedRoute from './ProtectedRoute';
import './index.css';
import Registro from './pages/inciales/Registro';
import Login from './pages/inciales/Login';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <AppContent toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
    </Router>
  );
}

function AppContent({ toggleSidebar, isSidebarVisible }) {
  const location = useLocation();
  const isLoginOrRegisterPage = location.pathname === '/' || location.pathname === '/registro';

  return (
    <div className={`flex min-h-screen bg-gray-100 ${isLoginOrRegisterPage ? "justify-center items-center" : ""}`}>

      {/* Sidebar solo si no es Login o Registro */}
      {!isLoginOrRegisterPage && (
        <div
          className={`transition-all duration-300 fixed top-0 h-full bg-white shadow-md xl:w-64 z-50
          ${isSidebarVisible ? 'w-64' : 'w-0'}
          ${isSidebarVisible ? 'mt-14 xl:mt-0' : 'hidden xl:w-0'}`}>
          <Sidebar isSidebarVisible={isSidebarVisible} />
        </div>
      )}

      {/* Contenedor Principal */}
      <div className={`flex-1 flex-col ${isLoginOrRegisterPage ? "w-full h-screen flex justify-center items-center" : isSidebarVisible ? 'xl:ml-64' : ''}`}>

        {/* Navbar solo si no es Login o Registro */}
        {!isLoginOrRegisterPage && (
          <nav className="bg-white text-gray-600 p-4 flex items-center fixed w-full z-10 border-gray-200 border-b-2">
            <button onClick={toggleSidebar} className="text-2xl absolute top-4 left-4 z-20">
              ☰
            </button>
            <h1 className="text-xl font-semibold ml-10 w-full text-center xl:text-left">Fundación Medac</h1>
          </nav>
        )}

        {/* Contenido Principal */}
        <div className={`${isLoginOrRegisterPage ? "w-full flex justify-center items-center" : "p-4 mt-10"}`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Rutas protegidas */}
            <Route path="/inicio" element={<ProtectedRoute><Inicio /></ProtectedRoute>} />
            <Route path="/usuarios" element={<ProtectedRoute><Usuarios /></ProtectedRoute>} />
            <Route path="/muestras" element={<ProtectedRoute><Muestras /></ProtectedRoute>} />
            <Route path="/interpretaciones" element={<ProtectedRoute><Interpretaciones /></ProtectedRoute>} />
            <Route path="/imagenes" element={<ProtectedRoute><Imagenes /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
