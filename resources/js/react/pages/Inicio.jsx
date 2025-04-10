import React, { useState, useEffect } from 'react';
import GraficoMuestrasPorSede from "./Graficos/GraficoMuestrasPorSede";
import GraficoBarrasApiladas from "./Graficos/GraficoBarrasApiladas";
import GraficoMuestrasPorMes from './Graficos/GraficoMuestrasPorMes';
import GraficoMuestrasPorNaturaleza from './Graficos/GraficoMuestrasPorNaturaleza';
import GraficoMuestrasPorUsuario from './Graficos/GraficoMuestrasPorUsuario';

function Inicio() {
  const [muestras, setMuestras] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [interpretaciones, setInterpretaciones] = useState([]);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    // Realizar las peticiones a la API

    const token = sessionStorage.getItem('token')
    fetch('/api/muestra',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setMuestras(data.muestras);
        }
      })
      .catch(error => console.error("Error al obtener muestras:", error));

    fetch('/api/usuario',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setUsuarios(data.usuarios);
        }
      })
      .catch(error => console.error('Error al obtener usuarios:', error));

    fetch('/api/interpretacion_muestra',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setInterpretaciones(data.registro);
        }
      })
      .catch(error => console.error('Error al obtener interpretaciones:', error));

    fetch('/api/imagen',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setImagenes(data.imagenes);
        }
      })
      .catch(error => console.error('Error al obtener imágenes:', error));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl text-gray-600  font-bold text-left ml-[5%]">Inicio</h1>

      {/* Resumen de estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-xl">
          <h1 className="text-lg font-bold text-gray-700">Total Muestras</h1>
          <p className="text-2xl font-bold text-gray-500">{muestras.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-xl">
          <h1 className="text-lg font-bold text-gray-700">Total Usuarios</h1>
          <p className="text-2xl font-bold text-gray-500">{usuarios.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-xl">
          <h1 className="text-lg font-bold text-gray-700">Total Interpretaciones</h1>
          <p className="text-2xl font-bold text-gray-500">{interpretaciones.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-xl">
          <h1 className="text-lg font-bold text-gray-700">Total Imágenes</h1>
          <p className="text-2xl font-bold text-gray-500">{imagenes.length}</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl">
          <h1 className="text-xl font-bold text-gray-700">Muestras por Naturaleza</h1>
          <GraficoMuestrasPorNaturaleza />
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl">
          <h1 className="text-xl font-bold text-gray-700">Muestras por Usuario</h1>
          <GraficoMuestrasPorUsuario />
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl">
          <h1 className="text-xl font-bold text-gray-700">Formatos por Sedes</h1>
          <GraficoBarrasApiladas />
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl md:col-span-2">
          <h1 className="text-xl font-bold text-gray-700">Muestras por Mes</h1>
          <GraficoMuestrasPorMes />
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-xl">
          <h1 className="text-xl font-bold text-gray-700">Nº Muestra por Sede</h1>
          <GraficoMuestrasPorSede />
        </div>
      </div>
    </div>

  );
}

export default Inicio;
