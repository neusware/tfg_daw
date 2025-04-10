import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import TablaMuestras from '../../TablaMuestras';

function CrearMuestra() {
  //states de los datos introducidos por el usuario
  const [naturalezas, setNaturalezas] = useState([]);
  const [formatos, setFormatos] = useState([]);
  const [sedes, setSedes] = useState([]);
  const [calidades, setCalidades] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  //states para almacenar la selección del usuario
  const [fecha, setFecha] = useState('');
  const [organo, setOrgano] = useState('');
  const [idNaturaleza, setIdNaturaleza] = useState(null);
  const [idFormato, setIdFormato] = useState(null);
  const [idSede, setIdSede] = useState(null);
  const [idCalidad, setIdCalidad] = useState(null);
  const [idUsuario, setIdUsuario] = useState(null);


  //obtener las naturalezas, formatos, sedes, calidades y usuarios al cargar el componente
  useEffect(() => {

    const token = sessionStorage.getItem('token')
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

            console.log(data.naturalezas)
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
  }, []);


  //funcion para mostrar el formulario de SweetAlert
  const mostrarFormulario = async()=>{


  }
  // Mostrar el SweetAlert para crear una nueva muestra
  const handleClick = async () => {
    const { value: formData } = await Swal.fire({
      title: 'Crea una nueva muestra',
      width: '60%',
      html: `
        <form class="space-y-4">

            <div class="flex flex-col">
            <label for="idNaturaleza" class="text-sm font-medium text-gray-700">Naturaleza:</label>
            <select id="idNaturaleza" class="swal2-select py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Selecciona una naturaleza</option>
              ${naturalezas.map(naturaleza => `<option value="${naturaleza.id}">${naturaleza.nombre}</option>`).join('')}
            </select>
          </div>

          <div class="flex flex-col">
            <label for="fecha" class="text-sm font-medium text-gray-700">Fecha:</label>
            <input id="fecha" type="date" class="swal2-input py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          </div>

          <div class="flex flex-col">
            <label for="idUsuario" class="text-sm font-medium text-gray-700">Usuario:</label>
            <select id="idUsuario" class="swal2-select py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Selecciona un usuario</option>
              ${usuarios.map(usuario => `<option value="${usuario.id}">${usuario.email}</option>`).join('')}
            </select>
          </div>

          <div class="flex flex-col">
            <label for="idFormato" class="text-sm font-medium text-gray-700">Formato:</label>
            <select id="idFormato" class="swal2-select py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Selecciona un formato</option>
              ${formatos.map(formato => `<option value="${formato.id}">${formato.nombre}</option>`).join('')}
            </select>
          </div>

          <div class="flex flex-col">
            <label for="idSede" class="text-sm font-medium text-gray-700">Sede:</label>
            <select id="idSede" class="swal2-select py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Selecciona una sede</option>
              ${sedes.map(sede => `<option value="${sede.id}">${sede.nombre}</option>`).join('')}
            </select>
          </div>

          <div class="flex flex-col">
            <label for="idCalidad" class="text-sm font-medium text-gray-700">Calidad:</label>
            <select id="idCalidad" class="swal2-select py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Selecciona una calidad</option>
              ${calidades.map(calidad => `<option value="${calidad.id}">${calidad.nombre}</option>`).join('')}
            </select>
          </div>
      </form>
      `,
      preConfirm: () => {
        const fecha = document.getElementById('fecha').value;
        const idUsuario = document.getElementById('idUsuario').value;
        const idNaturaleza = document.getElementById('idNaturaleza').value;
        const idFormato = document.getElementById('idFormato').value;
        const idSede = document.getElementById('idSede').value;
        const idCalidad = document.getElementById('idCalidad').value;

        // Validaciones
        if (!fecha || !idUsuario || !idNaturaleza || !idFormato || !idSede || !idCalidad) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return false;
        }

        return {
          fecha,
          idUsuario,
          idNaturaleza,
          idFormato,
          idSede,
          idCalidad,
          organo: idNaturaleza == 1 || idNaturaleza == 2 ? document.getElementById('organo').value : '',
        };
      },
      didOpen: () => {
        //si las naturalezas seleccionadas son 1 o 2, agregar el campo de órgano
        const idNaturalezaSelect = document.getElementById('idNaturaleza');
        idNaturalezaSelect.addEventListener('change', () => {
          if (idNaturalezaSelect.value == 1 || idNaturalezaSelect.value == 2) {
            Swal.getHtmlContainer().querySelector('form').innerHTML += `
              <div class="flex flex-col mt-4">
                <label for="organo" class="text-sm font-medium text-gray-700">Órgano:</label>
                <input id="organo" class="swal2-input py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nombre del órgano" required>
              </div>`;
          } else {
            //si no es 1 o 2, eliminar el campo de órgano
            const organoInput = document.getElementById('organo');
            if (organoInput) {
              organoInput.parentElement.remove();
            }
          }
        });
      }
    });

    if (formData) {
      await insertMuestra(formData);
    }
  };

  //función para insertar la muestra en la API
  const insertMuestra = async (data) => {
    try {

        const token = sessionStorage.getItem('token')
      const response = await fetch('/api/muestra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('Muestra insertada con éxito:', result);
      Swal.fire('Éxito', 'Muestra creada correctamente', 'success');
    } catch (error) {
      console.error('Error al insertar muestra:', error);
      Swal.fire('Error', 'No se pudo crear la muestra', 'error');
    }

    <TablaMuestras/>
  };

  return (
    <div className=" ">
      <button
        onClick={handleClick}
        className="px-6 py-2 w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl
      shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Crear Muestra
      </button>
    </div>
  );

}

export default CrearMuestra;
