import React from 'react'
import TablaMuestras from '../TablaMuestras'
import { useState } from 'react';
import CrearUsuario from './SweetCrearUsusario'
import EliminarUsuario from './SweetEliminarUsuario'
import EditarEmailUsuario from './SweetEditarMail'
import EditarContraseñaUsuario from './SweetEditarContraseña'
import Swal from 'sweetalert2';
import CrearMuestra from './SweetMuestra/SweetInsertarMuestra';
import { Link } from 'react-router-dom';



function Muestras({isSidebarVisible}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-3xl text-gray-600 m-4 font-bold text-left ml-[5%]`}>Muestras</h1>
        <div className={`flex space-x-4 mr-[5%]`}>
          <Link to="inicio" className="text-gray-600 font-bold hover:text-blue-700 cursor-pointer">
            Inicio
          </Link>
          <span className="text-gray-600"> ➤ </span>
          <Link to="muestras" className="text-gray-600 font-bold hover:text-blue-700 cursor-pointer">
            Muestras
          </Link>
        </div>
      </div>
      
      <div className={`flex-col justify-center bg-white rounded-xl border-gray-200 border-2 w-[75vw]`}>
        <div className="flex flex-row">
          <h3 className="w-1/2 text-base text-left text-gray-600 m-8 ml-[6%] font-bold">Todas las muestras</h3>
          <div className="w-1/2 text-center p-6">
            <CrearMuestra />
          </div>
        </div>
        <div className="flex justify-left sm:justify-center mb-7 overflow-auto">
          <div>
            <TablaMuestras isSidebarVisible={isSidebarVisible} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Muestras
