import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';

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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Suscripciones</h2>
      <div className="overflow-x-auto">

        {/* boton para crear nuevo producto */}
        <button onClick={()=>handleCrearSuscripcion()} className='mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Crear Recompensa</button>

        {/* tabla para mostrar los resultados */}
        <table className="min-w-full border text-sm text-left bg-white dark:bg-gray-800 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">Tipo</th>
              <th className="px-4 py-2 border">Descripción</th>
              <th className="px-4 py-2 border">Precio</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones.map((suscripcion) => (
              <tr key={suscripcion.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border">{suscripcion.tipo}</td>
                <td className="px-4 py-2 border">{suscripcion.descripcion}</td>
                <td className="px-4 py-2 border">{suscripcion.precio} €</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => handleDeleteSuscripciones(suscripcion.id)} className="bg-rose-800 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                  <button onClick={() => handleEditarSuscripcion(suscripcion)} className="bg-indigo-800 text-white px-4 py-1 rounded hover:bg-indigo-900">Editar</button>
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
