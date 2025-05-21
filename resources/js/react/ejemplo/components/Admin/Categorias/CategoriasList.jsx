import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

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

  //funcion para obtener el nombre de una categoria a partir de un id
  const getNombreContenedor = (id) => {
    const contenedor = contenedores.find((cont) => cont.id === id);
    return contenedor ? contenedor.tipo : 'Sin categoría';
  };


  //funcion para eliminar un producto
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


  //funcion para editar un producto
  const handleEditarCategoria = (categoria) => {
    const contenedorOptions = contenedores.map(cont => `<option value="${cont.id}" ${cont.id === categoria.id_contenedor ? 'selected' : ''}>${cont.tipo}</option>`).join('');

    MySwal.fire({
      title: 'Editar categoría',
      html: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div style="display: flex; flex-direction: column;">
            <label for="nombre" style="font-weight: 700; margin-bottom: 0.25rem;">Nombre</label>
            <input id="nombre" class="swal2-input" placeholder="Nombre" value="${categoria.nombre || ''}">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="id_contenedor" style="font-weight: 700; margin-bottom: 0.25rem;">Contenedor</label>
            <select id="id_contenedor" class="swal2-select" style="border: 1px solid #ccc; border-radius: 4px;">
              ${contenedorOptions}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; grid-column: span 2;">
            <label for="descripcion" style="font-weight: 700; margin-bottom: 0.25rem;">Descripción</label>
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${categoria.descripcion || ''}</textarea>
          </div>
        </div>
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      customClass: {
        popup: 'w-[900px]'
      },
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

  //funcion para crear un nuevo producto
  const handleCrearCategoria = () => {
    MySwal.fire({
      title: 'Añadir nueva categoria',
      html: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div style="display: flex; flex-direction: column;">
            <label for="nombre" style="font-weight: 700; margin-bottom: 0.25rem;">Nombre</label>
            <input id="nombre" class="swal2-input" placeholder="Nombre">
          </div>
          <div style="display: flex; flex-direction: column;">
            <label for="contenedor" style="font-weight: 700; margin-bottom: 0.25rem;">Contenedor</label>
            <select id="contenedor" class="swal2-select" style="border: 1px solid #ccc; border-radius: 4px;">
              ${contenedores.map(cont => `<option value="${cont.id}">${cont.tipo}</option>`).join('')}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; grid-column: span 2;">
            <label for="descripcion" style="font-weight: 700; margin-bottom: 0.25rem;">Descripción</label>
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      customClass: {
        popup: 'w-[900px]'
      },
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
    <div className="p-4">

      <div className="flex space-x-8 mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Lista de Categorías</h2>
        <button
          onClick={() => handleCrearCategoria()}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          + Crear Categoría
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
            <tr>
              <th className="px-3 py-2">Nombre</th>
              <th className="px-3 py-2">Descripción</th>
              <th className="px-3 py-2">Contenedor</th>
              <th className="px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-3 py-2">{categoria.nombre}</td>
                <td className="px-3 py-2">{categoria.descripcion}</td>
                <td className="px-3 py-2">{getNombreContenedor(categoria.id_contenedor)}</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex justify-center gap-1">
                    <button
                      onClick={() => handleDeleteCategoria(categoria.id)}
                      className="bg-rose-900 hover:bg-rose-700 text-white p-1.5 rounded"
                      title="Eliminar"
                    >
                      <MdDelete size={20} />
                    </button>
                    <button
                      onClick={() => handleEditarCategoria(categoria)}
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

export default CategoriasList;
