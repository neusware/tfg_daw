import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';

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
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre" value="${recompensa.nombre || ''}">
        <label for="descripcion">Descripción</label>
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${recompensa.descripcion || ''}</textarea>
        <label for="imagen">Imagen</label>
        <input id="imagen" class="swal2-input" placeholder="Imagen" value="${recompensa.foto || 0}">
        <label for="cantidad">Cantidad</label>
        <input id="cantidad" type="number" class="swal2-input" placeholder="Cantidad" value="${recompensa.cantidad || 0}">
        <label for="precio">Precio de Puntos</label>
        <input id="precio" type="number" class="swal2-input" placeholder="Precio en Puntos" value="${recompensa.precio_pts || 0}">
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
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
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre"">
        <label for="descripcion">Descripción</label>
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
        <label for="imagen">Imagen</label>
        <input id="imagen" class="swal2-input" placeholder="Imagen">
        <label for="cantidad">Cantidad</label>
        <input id="cantidad" type="number" class="swal2-input" placeholder="Cantidad"">
        <label for="precio">Precio de Puntos</label>
        <input id="precio" type="number" class="swal2-input" placeholder="Precio en Puntos"">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Recompensas</h2>
      <div className="overflow-x-auto">

        {/* boton para crear nuevo producto */}
        <button onClick={()=>handleCrearRecompensa()} className='mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Crear Recompensa</button>

        {/* tabla para mostrar los resultados */}
        <table className="min-w-full border text-sm text-left bg-white dark:bg-gray-800 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Descripción</th>
              <th className="px-4 py-2 border">Cantidad</th>
              <th className="px-4 py-2 border">Precio en Puntos</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {recompensas.map((recompensa) => (
              <tr key={recompensa.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border">{recompensa.nombre}</td>
                <td className="px-4 py-2 border">{recompensa.descripcion}</td>
                <td className="px-4 py-2 border">{recompensa.cantidad}</td>
                <td className="px-4 py-2 border">{recompensa.precio_pts}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => handleDeleteRecompensa(recompensa.id)} className="bg-rose-800 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                  <button onClick={() => handleEditarRecompensa(recompensa)} className="bg-indigo-800 text-white px-4 py-1 rounded hover:bg-indigo-900">Editar</button>
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
