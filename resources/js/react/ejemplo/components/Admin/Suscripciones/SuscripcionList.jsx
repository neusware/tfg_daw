import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

const SuscripcionList = () => {
  const [suscripciones, setSuscripciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes, empRes] = await Promise.all([
          fetch('/api/suscripciones'),
        ]);

        const suscripcionesData = await prodRes.json();

        setSuscripciones(suscripcionesData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando suscripciones...</p>;


//   funcion para eliminar una recompensa
  const handleDeleteSuscripciones = async (idSuscripicion) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la suscripción permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/suscripciones/${idSuscripicion}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar la suscripcion');

        setSuscripciones(suscripciones.filter(s => s.id !== idSuscripicion));
        Swal.fire('¡Eliminado!', 'La suscripcion ha sido eliminado.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la suscripcion.', 'error');
      }
    }
  };

//   funcion para editar una recompensa
  const handleEditarSuscripcion = (suscripcion) => {

    MySwal.fire({
      title: 'Editar Suscripción',
      html: `
        <label for="tipo">Tipo</label>
        <input id="tipo" class="swal2-input" placeholder="tipo" value="${suscripcion.tipo || ''}">
        <label for="descripcion">Descripción</label>
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${suscripcion.descripcion || ''}</textarea>
        <label for="precio">Precio</label>
        <input id="precio" type="number" class="swal2-input" placeholder="Precio" value="${suscripcion.precio || 0}">
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: async () => {
        const data = {
          tipo: document.getElementById('tipo').value,
          descripcion: document.getElementById('descripcion').value,
          precio: document.getElementById('precio').value,
        };

        try {
          const res = await fetch(`/api/suscripciones/${suscripcion.id}`, {
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
        Swal.fire('Suscripcion actualizada', '', 'success');

      }
    });
  };

//   funcion para crear una nueva recompensa
const handleCrearSuscripcion = () => {
    MySwal.fire({
      title: 'Añadir nueva suscripcion',
      html: `
        <label for="tipo">Tipo</label>
        <input id="tipo" class="swal2-input" placeholder="tipo">
        <label for="descripcion">Descripción</label>
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
        <label for="precio">Precio</label>
        <input id="precio" type="number" class="swal2-input" placeholder="Precio">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      preConfirm: async () => {
        const token = localStorage.getItem('token');
        const nuevaSuscripcion = {
            tipo: document.getElementById('tipo').value,
            descripcion: document.getElementById('descripcion').value,
            precio: document.getElementById('precio').value,
        };

        try {
          const res = await fetch('/api/suscripciones', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(nuevaSuscripcion)
          });

          if (!res.ok) throw new Error('Error al crear la suscripcion');
          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Suscripcion creada', '', 'success');
      }
    });
  };


  return (
    <div className="p-4">      

      <div className="flex space-x-8 mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Lista de Suscripciones</h2>
        <button
          onClick={() => handleCrearSuscripcion()}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          + Crear Suscripción
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
            <tr>
              <th className="px-3 py-2">Tipo</th>
              <th className="px-3 py-2">Descripción</th>
              <th className="px-3 py-2">Precio</th>
              <th className="px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones.map((suscripcion) => (
              <tr key={suscripcion.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-3 py-2">{suscripcion.tipo}</td>
                <td className="px-3 py-2">{suscripcion.descripcion}</td>
                <td className="px-3 py-2">{suscripcion.precio} €</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex justify-center gap-1">
                    <button
                      onClick={() => handleDeleteSuscripciones(suscripcion.id)}
                      className="bg-rose-900 hover:bg-rose-700 text-white p-1.5 rounded"
                      title="Eliminar"
                    >
                      <MdDelete size={20} />
                    </button>
                    <button
                      onClick={() => handleEditarSuscripcion(suscripcion)}
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

export default SuscripcionList;
