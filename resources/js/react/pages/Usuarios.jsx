import React from 'react'
import TablaUsuarios from '../TablaUsuarios'
import CrearUsuario from './SweetCrearUsusario'
import { Link } from 'react-router-dom';



function Usuarios({ isSidebarVisible }) {
  return (
      
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-3xl text-gray-600 m-4 font-bold text-left ml-[5%]`}>Usuarios</h1>
        <div className={`flex space-x-4 mr-[5%]`}>
          <Link to="/inicio" className="text-gray-600 font-bold hover:text-blue-700 cursor-pointer">
            Inicio
          </Link>
          <span className="text-gray-600"> ➤ </span>
          <Link to="/usuarios" className="text-gray-600 font-bold hover:text-blue-700 cursor-pointer">
            Usuarios
          </Link>
        </div>
      </div>
      
      <div className={`flex-col justify-center bg-white rounded-xl border-gray-200 border-2 ${isSidebarVisible ? 'w-[75vw]' : 'w-[75vw]'}`}>
        <div className="flex flex-row">
          <h3 className="w-1/2 text-base text-left text-gray-600 m-8 ml-[6%] font-bold">Todos los usuarios</h3>
          <div className="w-1/2 text-center p-6">
            <CrearUsuario />
          </div>
        </div>
        <div className="flex justify-center mb-7">
          <div>
            <TablaUsuarios isSidebarVisible={isSidebarVisible} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Usuarios

/*


*/