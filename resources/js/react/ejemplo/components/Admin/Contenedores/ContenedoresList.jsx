import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';

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
          tipo: document.getElementById('color').value
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Contenedores</h2>
      <div className="overflow-x-auto">

        {/* boton para crear nuevo producto */}
        <button onClick={()=>handleCrearContenedor()} className='mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Crear Producto</button>

        {/* tabla para mostrar los resultados */}
        <table className="min-w-full border text-sm text-left bg-white dark:bg-gray-800 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">Tipo</th>
              <th className="px-4 py-2 border">Color</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contenedores.map((contenedor) => (
              <tr key={contenedor.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border">{contenedor.tipo}</td>
                <td className="px-4 py-2 border">{contenedor.color}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => handleDeleteContenedor(contenedor.id)} className="bg-rose-800 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                  <button onClick={() => handleEditarContenedor(contenedor)} className="bg-indigo-800 text-white px-4 py-1 rounded hover:bg-indigo-900">Editar</button>
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
