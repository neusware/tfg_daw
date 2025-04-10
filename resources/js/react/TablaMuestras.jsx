import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import SweetEliminarMuestra from "./pages/SweetMuestra/SweetEliminarMuestra";
import SweetUpdateMuestra from "./pages/SweetMuestra/SweetUpdateMuestra";
import { MdOutlineLocalPrintshop } from "react-icons/md";


function TablaMuestras({ isSidebarVisible }) {
  const [muestras, setMuestras] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [naturalezas, setNaturalezas] = useState([]);
  const [formatos, setFormatos] = useState([]);
  const [sedes, setSedes] = useState([]);
  const [calidades, setCalidades] = useState([]);


  const actualizarDatos = ()=>{

      const token = sessionStorage.getItem('token')
      fetch('/api/muestra',{
          method:'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
          }
      })
      .then(response => response.json())
      .then(data => {
      if (data.status) {


          setMuestras(data.muestras)
      }
    })
    .catch(error => console.error("Error al obtener muestras:", error));


    fetch('/api/select_formatos',{
      method:'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
      if (data.status) {
        setFormatos(data.formatos);
      }
    })
    .catch(error => console.error("Error al obtener formatos:", error));

    fetch('/api/select_sedes',{
      method:'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
      if (data.status) {
        setSedes(data.sedes);
      }
    })
    .catch(error => console.error("Error al obtener sedes:", error));

    fetch('/api/select_calidades',{
      method:'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
      if (data.status) {
        setCalidades(data.calidades);
      }
    })
    .catch(error => console.error("Error al obtener calidades:", error));

    // Obtener los usuarios al cargar el componente
    fetch('/api/usuario',{
      method:'GET',
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

    fetch('/api/select_naturalezas',{
      method:'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
      if (data.status) {
        setNaturalezas(data.naturalezas);
      }
    })
    .catch(error => console.error('Error al obtener naturalezas:', error));
  }



  const consultarUsuario = (id) => {
    const usuario = usuarios.find((usuario) => usuario.id === id);
    return usuario ? usuario.email : 'Email no disponible';
  };

  const consultarNaturalezas = (idNaturaleza) => {
    const naturaleza = naturalezas.find((naturaleza) => naturaleza.id === idNaturaleza);
    return naturaleza ? naturaleza.nombre : 'Naturaleza no disponible';
  };

  const consultarFormatos = (idFormato) => {
    const formato = formatos.find((formato) => formato.id === idFormato);
    return formato ? formato.nombre : 'Formato no disponible';
  };

  const consultarSedes = (idSede) => {
    const sede = sedes.find((sede) => sede.id === idSede);
    return sede ? sede.nombre : 'Sede no disponible';
  };

  const consultarCalidades = (idCalidad) => {
    const calidad = calidades.find((calidad) => calidad.id === idCalidad);
    return calidad ? calidad.nombre : 'Calidad no disponible';
  };



  //cargar los datos de la tabla
  useEffect(()=>{
    actualizarDatos();
  },[])

  return (
    <>

    <div className={`w-[70vw]`}>
      <table className="w-full border-gray-200 rounded-xl border ">
        <thead className="bg-white">
          <tr>
            <th class="p-6 text-center text-gray-600 font-bold text-base">Id</th>
            <th class="p-6 text-center text-gray-600 font-bold text-base">Código</th>
            <th class="p-6 text-center text-gray-600 font-bold text-base">Fecha</th>
            <th class="p-6 text-center text-gray-600 font-bold text-base">Usuario</th>
            <th class="p-6 text-center text-gray-600 font-bold text-base">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {muestras.map((muestra, index) => (
            <tr class={index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"}>
              <td class="text-center text-gray-600">{muestra.id}</td>
              <td class="text-center text-gray-600">{muestra.codigo}</td>
              <td class="text-center text-gray-600">{muestra.fecha}</td>
              <td class="text-center text-gray-600">{consultarUsuario(muestra.idUsuario)}</td>
              <td className="p-4 text-center text-gray-600 flex justify-center gap-4">
                <SweetEliminarMuestra
                codigoMuestra={muestra.codigo}
                actualizarDatos = {actualizarDatos}
                />
                <SweetUpdateMuestra
                codigoMuestra={muestra.codigo}
                actualizarDatos={actualizarDatos}
                />
                <a className="p-2 w-8 flex items-center justify-center bg-green-500 hover:bg-red-800 text-white font-semibold text-sx rounded-xl
          shadow-md transition duration-300 ease-in-out transform hover:scale-105" href={`/descargar/${muestra.id}`} target="_blank"><MdOutlineLocalPrintshop />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </>


)};


export default TablaMuestras;
