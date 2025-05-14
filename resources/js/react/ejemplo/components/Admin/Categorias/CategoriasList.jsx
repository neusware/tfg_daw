import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';

const MySwal = withReactContent(Swal);

const CategoriasList = () => {
  const [categorias, setCategorias] = useState([]);
  const [contenedores, setContenedores] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch('/api/categorias'),
          fetch('/api/contenedores')
        ]);

        const categoriasData = await prodRes.json();
        const contenedoresData = await catRes.json();

        setCategorias(categoriasData);
        setContenedores(contenedoresData)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando categorias...</p>;

//   funcion para obtener el nombre de una categoria a partir de un id
  const getNombreContenedor = (id) => {
    const contenedor = contenedores.find((cont) => cont.id === id);
    return contenedor ? contenedor.tipo : 'Sin categoría';
  };


//   funcion para eliminar un producto
  const handleDeleteCategoria = async (idCategoria) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la categoría permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/categorias/${idCategoria}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar la categoria');

        setCategorias(categorias.filter(c => c.id !== idCategoria));
        Swal.fire('¡Eliminado!', 'La categoria ha sido eliminada.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la categoria.', 'error');
      }
    }
  };


//   funcion para editar un producto
  const handleEditarCategoria = (categoria) => {
    const contenedorOptions = contenedores.map(cont => `<option value="${cont.id}" ${cont.id === categoria.id_contenedor ? 'selected' : ''}>${cont.tipo}</option>`).join('');

    MySwal.fire({
      title: 'Editar categoría',
      html: `
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre" value="${categoria.nombre || ''}">
        <label for="descripcion">Descripcion</label>
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${categoria.descripcion || ''}</textarea>
        <label for="id_contenedor">Contenedor</label>
        <select id="id_contenedor" class="swal2-select">${contenedorOptions}</select>
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: async () => {
        const data = {
          nombre: document.getElementById('nombre').value,
          descripcion: document.getElementById('descripcion').value,
          contenedor: parseInt(document.getElementById('id_contenedor').value)
        };

        try {
          const res = await fetch(`/api/categorias/${categoria.id}`, {
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
        Swal.fire('Categoria actualizada', '', 'success');

      }
    });
  };

//   funcion para crear un nuevo producto
const handleCrearCategoria = () => {
    MySwal.fire({
      title: 'Añadir nueva categoria',
      html: `
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre">
        <label for="descripcion">Descripcion</label>
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
        <label for="id_contenedor">Contenedor</label>
        <select id="contenedor" class="swal2-select">
          ${contenedores.map(cont => `<option value="${cont.id}">${cont.tipo}</option>`).join('')}
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      preConfirm: async () => {
        const token = localStorage.getItem('token');
        const nuevaCategoria = {
            nombre: document.getElementById('nombre').value,
            descripcion: document.getElementById('descripcion').value,
            id_contenedor: parseInt(document.getElementById('id_contenedor'))
        };

        try {
          const res = await fetch('/api/categorias', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(nuevaCategoria)
          });

          if (!res.ok) throw new Error('Error al crear la categoria');
          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Categoría creada', '', 'success');
      }
    });
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Categorías</h2>
      <div className="overflow-x-auto">

        {/* boton para crear nuevo producto */}
        <button onClick={()=>handleCrearCategoria()} className='mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Crear Categoría</button>

        {/* tabla para mostrar los resultados */}
        <table className="min-w-full border text-sm text-left bg-white dark:bg-gray-800 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Descripción</th>
              <th className="px-4 py-2 border">Contenedor</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border">{categoria.nombre}</td>
                <td className="px-4 py-2 border">{categoria.descripcion}</td>
                <td className="px-4 py-2 border">{getNombreContenedor(categoria.id_contenedor)}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => handleDeleteCategoria(categoria.id)} className="bg-rose-800 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                  <button onClick={() => handleEditarCategoria(categoria)} className="bg-indigo-800 text-white px-4 py-1 rounded hover:bg-indigo-900">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriasList;
