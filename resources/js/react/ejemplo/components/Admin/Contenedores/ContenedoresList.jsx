import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

const ContenedoresList = () => {
  const [contenedores, setContenedores] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes] = await Promise.all([
          fetch('/api/contenedores'),
        ]);

        const contenedoresData = await prodRes.json();
        setContenedores(contenedoresData);

      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando contenedores...</p>;


//   funcion para eliminar un producto
  const handleDeleteContenedor = async (idContenedor) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el contenedor permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/contenedores/${idContenedor}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar el producto');

        setContenedores(contenedores.filter(c => c.id !== idContenedor));
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar el contenedor.', 'error');
      }
    }
  };

//   funcion para editar un producto
  const handleEditarContenedor = (contenedor) => {

    MySwal.fire({
      title: 'Editar Contenedor',
      html: `
        <label for="tipo">Tipo</label>
        <input id="tipo" class="swal2-input" placeholder="Tipo" value="${contenedor.tipo || ''}">
        <label for="color">Color</label>
        <input id="color" class="swal2-input" placeholder="Color" value="${contenedor.color || ''}">
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: async () => {
        const data = {
          tipo: document.getElementById('tipo').value,
          color: document.getElementById('color').value
        };

        try {
          const res = await fetch(`/api/contenedores/${contenedor.id}`, {
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
        Swal.fire('Producto actualizado', '', 'success');

      }
    });
  };

//   funcion para crear un nuevo producto
const handleCrearContenedor = () => {
    MySwal.fire({
      title: 'Añadir nuevo contenedor',
      html: `
        <label for="tipo">Tipo</label>
        <input id="tipo" class="swal2-input" placeholder="Tipo">
        <label for="color">Tipo</label>
        <input id="color" class="swal2-input" placeholder="Color">
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      preConfirm: async () => {
        const token = localStorage.getItem('token');
        const nuevoContendor = {
          tipo: document.getElementById('tipo').value,
          color: document.getElementById('color').value
        };

        try {
          const res = await fetch('/api/productos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(nuevoContendor)
          });

          if (!res.ok) throw new Error('Error al crear producto');
          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Producto creado', '', 'success');
      }
    });
  };


  return (
  <div className="p-2">      

    <div className="flex space-x-8 mb-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">Lista de Contenedores</h2>
      <button
        onClick={() => handleCrearContenedor()}
        className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition text-sm font-medium"
      >
        + Crear Contenedor
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full table-auto text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded">
        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
          <tr>
            <th className="px-3 py-2">Tipo</th>
            <th className="px-3 py-2">Color</th>
            <th className="px-3 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contenedores.map((contenedor) => (
            <tr key={contenedor.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-3 py-2">{contenedor.tipo}</td>
              <td className="px-3 py-2">{contenedor.color}</td>
              <td className="px-3 py-2 text-center">
                <div className="flex justify-center gap-1">
                  <button
                    onClick={() => handleDeleteContenedor(contenedor.id)}
                    className="bg-rose-900 hover:bg-rose-700 text-white p-1.5 rounded"
                    title="Eliminar"
                  >
                    <MdDelete size={20} />
                  </button>
                  <button
                    onClick={() => handleEditarContenedor(contenedor)}
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

export default ContenedoresList;
