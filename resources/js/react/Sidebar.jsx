import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiUser3Line, RiTestTubeLine } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaImages, FaSignOutAlt } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";


function Sidebar({ isSidebarVisible }) {
  const location = useLocation();

  const getLinkClass = (path) =>
    `flex items-center gap-4 rounded-xl font-bold py-1 px-4 transition-all duration-300 transform hover:translate-x-2
    ${location.pathname === path ? 'bg-[#6892D5] text-white' : 'text-gray-600 hover:bg-[#6892D5] hover:text-white'}`;

  return (
    <div className={`bg-white h-full border-gray-200 border-r-2 p-2 relative ${isSidebarVisible ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center justify-center h-[20vh]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Wc6N5dXOZhJQfgBLYCDT-hBDfaBZr-2yTZiQCKOhhNOw3NYZirgMtZbVhS6YbYUZlQI&usqp=CAU"
          alt="Perfil"
          className="w-28 h-28 object-cover rounded-full"
        />
        <h1 className="text-lg text-gray-600 font-bold">Bienvenido</h1>
      </div>
      <hr className="mt-8" />

      <div className="p-4 h-full flex flex-col justify-between">
        <nav className="flex flex-col gap-5">
          {/* Menú de "Inicio" */}
          <Link to="/inicio" className={getLinkClass('/inicio')}>
            <IoHomeOutline size={20}/>
          Inicio
          </Link>

          {/* Menú de "Usuarios"*/}
          <div className="relative">
            <Link to="/usuarios" className={getLinkClass('/usuarios')}>
              <RiUser3Line size={20} />
              Usuarios
            </Link>
          </div>

          {/* Menú de "Muestras"*/}
          <div className="relative">
            <Link to="/muestras" className={getLinkClass('/muestras')}>
              <RiTestTubeLine size={20} />
              Muestras
            </Link>
          </div>

          {/* Menú de "Interpretaciones"*/}
          <div className="relative">
            <Link to="/interpretaciones" className={getLinkClass('/interpretaciones')}>
              <IoDocumentTextOutline size={20} />
              Interpretaciones
            </Link>
          </div>

          {/* Menú de "Imágenes"*/}
          <div className="relative">
            <Link to="/imagenes" className={getLinkClass('/imagenes')}>
              <FaImages size={20} />
              Imágenes
            </Link>
          </div>
          <hr className="mt-2" />

          {/* Enlace de Cerrar sesión */}
          <Link to="/" className="flex items-center gap-4 text-red-900 rounded-xl font-bold py-1 px-4 hover:bg-red-900 hover:text-white transition-all duration-300 transform hover:translate-x-2">
            <FaSignOutAlt size={20} />
            Cerrar sesión
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;