import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

const EmpresasList = () => {
  const [empresas, setEmpresas] = useState([]);
  const [suscripciones, setSuscripciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch('/api/empresas'),
          fetch('/api/suscripciones')
        ]);

        const empresasData = await prodRes.json();
        const suscripcionesData = await catRes.json();

        setEmpresas(empresasData);
        setSuscripciones(suscripcionesData)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando suscripciones...</p>;

//   funcion para obtener el nombre de una categoria a partir de un id
  const getNombreSuscripcion = (idSuscripcion) => {
    const suscripcion = suscripciones.find((sus) => sus.id === idSuscripcion);
    return suscripcion ? suscripcion.tipo : 'Sin suscripcion';
  };


//   funcion para eliminar un producto
  const handleDeleteEmpresa = async (idEmpresa) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la empresa permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/empresas/${idEmpresa}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar la empresa');

        setEmpresas(empresas.filter(e => e.id !== idEmpresa));
        Swal.fire('¡Eliminada!', 'La empresa ha sido eliminada.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la empresa.', 'error');
      }
    }
  };


//   funcion para editar un producto
  const handleEditarEmpresa = (empresa) => {
    const suscripcionOptions = suscripciones.map(sus => `<option value="${sus.id}" ${sus.id === empresa.id_suscripcion ? 'selected' : ''}>${sus.tipo}</option>`).join('');

    MySwal.fire({
      title: 'Editar Empresa',
      html: `
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre" value="${empresa.nombre || ''}">
        <label for="cif">CIF</label>
        <input id="cif" class="swal2-input" placeholder="CIF" value="${empresa.CIF || ''}">
        <label for="direccion">Direccion</label>
        <input id="direccion" class="swal2-input" placeholder="Dirección" value="${empresa.direccion || ''}">
        <label for="id_suscripcion">Tipo de Suscripcion</label>
        <select id="id_suscripcion" class="swal2-select">${suscripcionOptions}</select>
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: async () => {
        const data = {
          nombre: document.getElementById('nombre').value,
          CIF: document.getElementById('cif').value,
          direccion: document.getElementById('direccion').value,
          id_suscripcion: parseInt(document.getElementById('id_suscripcion').value)
        };

        try {
          const res = await fetch(`/api/empresas/${empresa.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (!res.ok) throw new Error('Error al actualizar');

          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Empresa actualizada', '', 'success');

      }
    });
  };

//   funcion para crear un nuevo producto
  const handleCrearEmpresa = () => {
      MySwal.fire({
        title: 'Añadir nueva empreas',
        html: `
          <label for="nombre">Nombre</label>
          <input id="nombre" class="swal2-input" placeholder="Nombre">
          <label for="cif">CIF</label>
          <input id="cif" class="swal2-input" placeholder="CIF">
          <label for="direccion">Direccion</label>
          <input id="direccion" class="swal2-input" placeholder="Dirección">
          <label for="id_suscripcion">Tipo de Suscripcion</label>
          <select id="id_suscripcion" class="swal2-select">
          ${suscripciones.map(sus => `<option value="${sus.id}">${sus.tipo}</option>`).join('')}
          </select>
        `,
        showCancelButton: true,
        confirmButtonText: 'Crear',
        preConfirm: async () => {
          const token = localStorage.getItem('token');
          const nuevaEmpresa = {
              nombre: document.getElementById('nombre').value,
              CIF: document.getElementById('cif').value,
              direccion: document.getElementById('direccion').value,
              id_suscripcion: parseInt(document.getElementById('id_suscripcion').value)
          };

          try {
            const res = await fetch('/api/empresas', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(nuevaEmpresa)
            });

            if (!res.ok) throw new Error('Error al crear la empresa');
            return true;
          } catch (error) {
            Swal.showValidationMessage(`Error: ${error.message}`);
            return false;
          }
        }
      }).then(result => {
        if (result.isConfirmed) {
          Swal.fire('Empresa creada', '', 'success');
        }
      });
    };


  return (
    <div className="p-4">
      
      <div className="flex space-x-8 mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Lista de Empresas</h2>
        <button
          onClick={() => handleCrearEmpresa()}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          + Crear Empresa
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
            <tr>
              <th className="px-3 py-2">Nombre</th>
              <th className="px-3 py-2">CIF</th>
              <th className="px-3 py-2">Suscripción</th>
              <th className="px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => (
              <tr key={empresa.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-3 py-2">{empresa.nombre}</td>
                <td className="px-3 py-2">{empresa.CIF}</td>
                <td className="px-3 py-2">{getNombreSuscripcion(empresa.id_suscripcion)}</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex justify-center gap-1">
                    <button
                      onClick={() => handleDeleteEmpresa(empresa.id)}
                      className="bg-rose-900 hover:bg-rose-700 text-white p-1.5 rounded"
                      title="Eliminar"
                    >
                      <MdDelete size={20} />
                    </button>
                    <button
                      onClick={() => handleEditarEmpresa(empresa)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-1.5 rounded"
                      title="Editar"
                    >
                      <FaEdit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default EmpresasList;
