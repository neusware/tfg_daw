import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

const RecompensasList = () => {
  const [recompensas, setRecompensas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes, empRes] = await Promise.all([
          fetch('/api/recompensas'),
        ]);

        const recompensasData = await prodRes.json();

        setRecompensas(recompensasData);
        console.log(recompensasData)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando recompensas...</p>;


//   funcion para eliminar una recompensa
  const handleDeleteRecompensa = async (idRecompensa) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la recompensa permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/recompensas/${idRecompensa}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar la recompensa');

        setRecompensas(recompensas.filter(r => r.id !== idRecompensa));
        Swal.fire('¡Eliminado!', 'La recompensa ha sido eliminado.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la recompensa.', 'error');
      }
    }
  };



//   funcion para editar una recompensa
  const handleEditarRecompensa = (recompensa) => {

    MySwal.fire({
      title: 'Editar recompensa',
      html: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div style="display: flex; flex-direction: column;">
            <label for="nombre" style="font-weight: 700; margin-bottom: 0.25rem;">Nombre</label>
            <input id="nombre" class="swal2-input" placeholder="Nombre" value="${recompensa.nombre || ''}">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="descripcion" style="font-weight: 700; margin-bottom: 0.25rem;">Descripción</label>
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${recompensa.descripcion || ''}</textarea>
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="imagen" style="font-weight: 700; margin-bottom: 0.25rem;">Imagen</label>
            <input id="imagen" class="swal2-input" placeholder="Imagen" value="${recompensa.foto || ''}">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="cantidad" style="font-weight: 700; margin-bottom: 0.25rem;">Cantidad</label>
            <input id="cantidad" type="number" class="swal2-input" placeholder="Cantidad" value="${recompensa.cantidad || 0}">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="precio" style="font-weight: 700; margin-bottom: 0.25rem;">Precio de Puntos</label>
            <input id="precio" type="number" class="swal2-input" placeholder="Precio en Puntos" value="${recompensa.precio_pts || 0}">
          </div>
        </div>
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      customClass: {
        popup: 'w-[1100px]'
      },
      preConfirm: async () => {
        const data = {
          nombre: document.getElementById('nombre').value,
          descripcion: document.getElementById('descripcion').value,
          foto: document.getElementById('imagen').value,
          cantidad: document.getElementById('cantidad').value,
          precio_pts: document.getElementById('precio').value,
        };

        try {
          const res = await fetch(`/api/recompensas/${recompensa.id}`, {
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
        Swal.fire('Recompesa actualizada', '', 'success');

      }
    });
  };

//   funcion para crear una nueva recompensa
  const handleCrearRecompensa = () => {
    MySwal.fire({
      title: 'Añadir nueva recompensa',
      html: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div style="display: flex; flex-direction: column;">
            <label for="nombre" style="font-weight: 700; margin-bottom: 0.25rem;">Nombre</label>
            <input id="nombre" class="swal2-input" placeholder="Nombre">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="descripcion" style="font-weight: 700; margin-bottom: 0.25rem;">Descripción</label>
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="imagen" style="font-weight: 700; margin-bottom: 0.25rem;">Imagen</label>
            <input id="imagen" class="swal2-input" placeholder="Imagen">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="cantidad" style="font-weight: 700; margin-bottom: 0.25rem;">Cantidad</label>
            <input id="cantidad" type="number" class="swal2-input" placeholder="Cantidad">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="precio" style="font-weight: 700; margin-bottom: 0.25rem;">Precio de Puntos</label>
            <input id="precio" type="number" class="swal2-input" placeholder="Precio en Puntos">
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      customClass: {
        popup: 'w-[1100px]'
      },
      preConfirm: async () => {
        const token = localStorage.getItem('token');
        const nuevaRecompensa = {
            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            foto: document.getElementById('imagen').value,
            cantidad: document.getElementById('cantidad').value,
            precio_pts: document.getElementById('precio').value,
        };

        try {
          const res = await fetch('/api/recompensas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(nuevaRecompensa)
          });

          if (!res.ok) throw new Error('Error al crear la recompensa');
          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Recompensa creada', '', 'success');
      }
    });
  };


  return (
    <div className="p-4">      

      <div className="flex space-x-8 mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Lista de Recompensas</h2>
        <button
          onClick={() => handleCrearRecompensa()}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          + Crear Recompensa
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
            <tr>
              <th className="px-3 py-2">Nombre</th>
              <th className="px-3 py-2">Descripción</th>
              <th className="px-3 py-2">Cantidad</th>
              <th className="px-3 py-2">Precio en Puntos</th>
              <th className="px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {recompensas.map((recompensa) => (
              <tr key={recompensa.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-3 py-2">{recompensa.nombre}</td>
                <td className="px-3 py-2">{recompensa.descripcion}</td>
                <td className="px-3 py-2">{recompensa.cantidad}</td>
                <td className="px-3 py-2">{recompensa.precio_pts}</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex justify-center gap-1">
                    <button
                      onClick={() => handleDeleteRecompensa(recompensa.id)}
                      className="bg-rose-900 hover:bg-rose-700 text-white p-1.5 rounded"
                      title="Eliminar"
                    >
                      <MdDelete size={20} />
                    </button>
                    <button
                      onClick={() => handleEditarRecompensa(recompensa)}
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

export default RecompensasList;
