import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import TablaMuestras from '../../TablaMuestras';
import { FaEdit } from "react-icons/fa";

function SweetUpdateMuestra({ codigoMuestra, actualizarDatos }) {
  // Estados para almacenar los datos de la muestra y las listas de opciones
  const [muestras, setMuestras] = useState([]);
  const [fecha, setFecha] = useState('');
  const [idUsuario, setIdUsuario] = useState(null);
  const [idNaturaleza, setIdNaturaleza] = useState(null);
  const [idFormato, setIdFormato] = useState(null);
  const [idSede, setIdSede] = useState(null);
  const [idCalidad, setIdCalidad] = useState(null);
  const [organo, setOrgano] = useState('');

  // Listas de opciones de la API
  const [usuarios, setUsuarios] = useState([]);
  const [naturalezas, setNaturalezas] = useState([]);
  const [formatos, setFormatos] = useState([]);
  const [sedes, setSedes] = useState([]);
  const [calidades, setCalidades] = useState([]);

  // Obtener todas las muestras y filtrar la que corresponde al código
  useEffect(() => {

    const token = sessionStorage.getItem('token')
    // Obtener todas las muestras
    fetch('/api/muestra',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setMuestras(data.muestras); // Guardar todas las muestras

          // Buscar la muestra específica por código
          const muestraSeleccionada = data.muestras.find(muestra => muestra.codigo === codigoMuestra);
          if (muestraSeleccionada) {
            setFecha(muestraSeleccionada.fecha);
            setIdUsuario(muestraSeleccionada.idUsuario);
            setIdNaturaleza(muestraSeleccionada.idNaturaleza);
            setIdFormato(muestraSeleccionada.idFormato);
            setIdSede(muestraSeleccionada.idSede);
            setIdCalidad(muestraSeleccionada.idCalidad);
            if (muestraSeleccionada.organo) setOrgano(muestraSeleccionada.organo);
          }
        }
      })
      .catch(error => console.error('Error al obtener las muestras:', error));

    // Obtener opciones de la API
    fetch('/api/select_naturalezas',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setNaturalezas(data.naturalezas);
        }
      })
      .catch(error => console.error('Error al obtener naturalezas:', error));

    fetch('/api/select_formatos',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setFormatos(data.formatos);
        }
      })
      .catch(error => console.error('Error al obtener formatos:', error));

    fetch('/api/select_sedes',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setSedes(data.sedes);
        }
      })
      .catch(error => console.error('Error al obtener sedes:', error));

    fetch('/api/select_calidades',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setCalidades(data.calidades);
        }
      })
      .catch(error => console.error('Error al obtener calidades:', error));

    fetch('/api/usuario',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setUsuarios(data.usuarios);
        }
      })
      .catch(error => console.error('Error al obtener usuarios:', error));
  }, [codigoMuestra]);

  // Función para manejar la edición de la muestra dentro de un SweetAlert
  const editarMuestra = () => {
    Swal.fire({
      title: 'Editar Muestra',
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold mb-2">Fecha:</label>
            <input type="date" id="fecha" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="${fecha}" />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Usuario:</label>
            <select id="idUsuario" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              ${usuarios.map(usuario => `
                <option value="${usuario.id}" ${usuario.id === idUsuario ? 'selected' : ''}>${usuario.email}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Naturaleza:</label>
            <select id="idNaturaleza" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              ${naturalezas.map(naturaleza => `
                <option value="${naturaleza.id}" ${naturaleza.id === idNaturaleza ? 'selected' : ''}>${naturaleza.nombre}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Formato:</label>
            <select id="idFormato" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              ${formatos.map(formato => `
                <option value="${formato.id}" ${formato.id === idFormato ? 'selected' : ''}>${formato.nombre}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Sede:</label>
            <select id="idSede" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              ${sedes.map(sede => `
                <option value="${sede.id}" ${sede.id === idSede ? 'selected' : ''}>${sede.nombre}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Calidad:</label>
            <select id="idCalidad" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              ${calidades.map(calidad => `
                <option value="${calidad.id}" ${calidad.id === idCalidad ? 'selected' : ''}>${calidad.nombre}</option>
              `).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Órgano:</label>
            <input type="text" id="organo" class="w-full px-3 py-2 border border-gray-300 rounded-md" value="${organo}" />
          </div>
        </div>
      `,
      preConfirm: () => {
        // Recoger los valores de los inputs del SweetAlert
        const updatedFecha = document.getElementById('fecha').value;
        const updatedIdUsuario = document.getElementById('idUsuario').value;
        const updatedIdNaturaleza = document.getElementById('idNaturaleza').value;
        const updatedIdFormato = document.getElementById('idFormato').value;
        const updatedIdSede = document.getElementById('idSede').value;
        const updatedIdCalidad = document.getElementById('idCalidad').value;
        const updatedOrgano = document.getElementById('organo').value;


        const token = sessionStorage.getItem('token')
        fetch('/api/muestra', {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
          body: JSON.stringify({
            codigo: codigoMuestra, // Asegúrate de incluir el código de la muestra
            fecha: updatedFecha,
            idUsuario: updatedIdUsuario,
            idNaturaleza: updatedIdNaturaleza,
            idFormato: updatedIdFormato,
            idSede: updatedIdSede,
            idCalidad: updatedIdCalidad,
            organo: updatedOrgano
          }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.status) {
              Swal.fire("Actualizada", "La muestra ha sido actualizada con éxito", "success");
              actualizarDatos();
            } else {
              Swal.fire("Error", "No se pudo actualizar la muestra", "error");
            }
          })
          .catch(error => {
            Swal.fire("Error", "Hubo un error al intentar actualizar la muestra", "error");
            console.error(error);
          });
      }
    });

};



  return (

    <div>
      <button
        onClick={editarMuestra}
        className="p-2 w-8 flex items-center justify-center bg-[#6892D5] hover:bg-blue-600 text-white font-semibold text-sx rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <FaEdit />
      </button>
    </div>
  );
}

export default SweetUpdateMuestra;
