import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import { MdDelete } from 'react-icons/md';
import { FaQrcode } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const MySwal = withReactContent(Swal);

const ProductosList = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = sessionStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes, empRes] = await Promise.all([
          fetch('/api/productos'),
          fetch('/api/categorias', { headers: { Authorization: `Bearer ${token}` } }),
          fetch('/api/empresas', { headers: { Authorization: `Bearer ${token}` } }),
        ]);

        const productosData = await prodRes.json();
        const categoriasData = await catRes.json();
        const empresasData = await empRes.json();

        setProductos(productosData.productos);
        setCategorias(categoriasData.categorias || categoriasData); // según respuesta
        setEmpresas(empresasData.empresas || empresasData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando productos...</p>;

//   funcion para obtener el nombre de una categoria a partir de un id
  const getNombreCategoria = (id) => {
    const categoria = categorias.find((cat) => cat.id === id);
    return categoria ? categoria.nombre : 'Sin categoría';
  };

//   funcion para obtener el nombre de la empresa mediante un id
  const getNombreEmpresa = (id) => {
    const empresa = empresas.find((emp) => emp.id === id);
    return empresa ? empresa.nombre : 'Sin empresa';
  };

//   funcion para eliminar un producto
  const handleDeleteProduct = async (idProducto) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/productos/${idProducto}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar el producto');

        setProductos(productos.filter(p => p.id !== idProducto));
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
      }
    }
  };

//   funcion para mostrar el codigo QR de un producto
  const handleMostrarQr = (idProducto) => {
    const qrElemento = (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem'}}>
        <QRCode value={`https://tfgdaw-production.up.railway.app/producto/${idProducto}`} />
      </div>
    );

    MySwal.fire({
      title: `Código QR`,
      html: ReactDOMServer.renderToString(qrElemento),
      showCancelButton: true,
      confirmButtonText: 'Imprimir',
      cancelButtonText: 'Cerrar',
      didOpen: () => {
        const printBtn = document.querySelector('.swal2-confirm');
        printBtn.addEventListener('click', () => {
          const printWindow = window.open('', '_blank');
          printWindow.document.write(`
            <html>
              <head>
                <style>
                  body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                </style>
              </head>
              <body>
                ${ReactDOMServer.renderToString(qrElemento)}
                <script>
                  setTimeout(() => { window.print(); window.close(); }, 100);
                </script>
              </body>
            </html>
          `);
          printWindow.document.close();
        });
      }
    });
  };


//   funcion para editar un producto
  const handleEditarProducto = (producto) => {
    const categoriaOptions = categorias.map(cat => `<option value="${cat.id}" ${cat.id === producto.id_categoria ? 'selected' : ''}>${cat.nombre}</option>`).join('');
    const empresaOptions = empresas.map(emp => `<option value="${emp.id}" ${emp.id === producto.id_empresa ? 'selected' : ''}>${emp.nombre}</option>`).join('');

    MySwal.fire({
      title: 'Editar producto',
      html: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div style="display: flex; flex-direction: column;">
            <label for="nombre" style="font-weight: 700; margin-bottom: 0.25rem;">Nombre</label>
            <input id="nombre" class="swal2-input" placeholder="Nombre" value="${producto.nombre || ''}">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="fabricante" style="font-weight: 700; margin-bottom: 0.25rem;">Fabricante</label>
            <input id="fabricante" class="swal2-input" placeholder="Fabricante" value="${producto.fabricante || ''}">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="descripcion" style="font-weight: 700; margin-bottom: 0.25rem;">Descripción</label>
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${producto.descripcion || ''}</textarea>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="ingredientes" style="font-weight: 700; margin-bottom: 0.25rem;">Ingredientes</label>
            <textarea id="ingredientes" class="swal2-textarea" placeholder="Ingredientes">${producto.ingredientes || ''}</textarea>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="composicion" style="font-weight: 700; margin-bottom: 0.25rem;">Composición</label>
            <input id="composicion" class="swal2-input" placeholder="Composición" value="${producto.composicion || ''}">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="puntos" style="font-weight: 700; margin-bottom: 0.25rem;">Puntos</label>
            <input id="puntos" type="number" class="swal2-input" placeholder="Puntos" value="${producto.puntos || 0}">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="id_categoria" style="font-weight: 700; margin-bottom: 0.25rem;">Categoría</label>
            <select id="id_categoria" class="swal2-select" style="border: 1px solid #ccc; border-radius: 4px;">${categoriaOptions}</select>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="id_empresa" style="font-weight: 700; margin-bottom: 0.25rem;">Empresa</label>
            <select id="id_empresa" class="swal2-select" style="border: 1px solid #ccc; border-radius: 4px;">${empresaOptions}</select>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="imagen" style="font-weight: 700; margin-bottom: 0.25rem;">URL Imagen</label>
            <input id="imagen" class="swal2-input" placeholder="URL Imagen" value="${producto.imagen || ''}">
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
          ingredientes: document.getElementById('ingredientes').value,
          fabricante: document.getElementById('fabricante').value,
          composicion: document.getElementById('composicion').value,
          puntos: parseInt(document.getElementById('puntos').value),
          imagen: document.getElementById('imagen').value,
          id_categoria: parseInt(document.getElementById('id_categoria').value),
          id_empresa: parseInt(document.getElementById('id_empresa').value)
        };

        try {
          const res = await fetch(`/api/productos/${producto.id}`, {
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
  const handleCrearProducto = () => {
    MySwal.fire({
      title: 'Añadir nuevo producto',
      html: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem;">
          <div style="display: flex; flex-direction: column;">
            <label for="nombre" style="font-weight: 700; margin-bottom: 0.25rem;">Nombre</label>
            <input id="nombre" class="swal2-input" placeholder="Nombre">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="fabricante" style="font-weight: 700; margin-bottom: 0.25rem;">Fabricante</label>
            <input id="fabricante" class="swal2-input" placeholder="Fabricante">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="descripcion" style="font-weight: 700; margin-bottom: 0.25rem;">Descripción</label>
            <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="ingredientes" style="font-weight: 700; margin-bottom: 0.25rem;">Ingredientes</label>
            <textarea id="ingredientes" class="swal2-textarea" placeholder="Ingredientes"></textarea>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="composicion" style="font-weight: 700; margin-bottom: 0.25rem;">Composición</label>
            <input id="composicion" class="swal2-input" placeholder="Composición">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="puntos" style="font-weight: 700; margin-bottom: 0.25rem;">Puntos</label>
            <input id="puntos" type="number" class="swal2-input" placeholder="Puntos">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="imagen" style="font-weight: 700; margin-bottom: 0.25rem;">URL de imagen</label>
            <input id="imagen" class="swal2-input" placeholder="URL de imagen">
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="id_categoria" style="font-weight: 700; margin-bottom: 0.25rem;">Categoría</label>
            <select id="id_categoria" class="swal2-select" style="border: 1px solid #ccc; border-radius: 4px;">
              ${categorias.map(cat => `<option value="${cat.id}">${cat.nombre}</option>`).join('')}
            </select>
          </div>

          <div style="display: flex; flex-direction: column;">
            <label for="id_empresa" style="font-weight: 700; margin-bottom: 0.25rem;">Empresa</label>
            <select id="id_empresa" class="swal2-select" style="border: 1px solid #ccc; border-radius: 4px;">
              ${empresas.map(emp => `<option value="${emp.id}">${emp.nombre}</option>`).join('')}
            </select>
          </div>
        </div>
      `,

      showCancelButton: true,
      customClass: {
        popup: 'w-[1100px]'
      },
      confirmButtonText: 'Crear',
      preConfirm: async () => {
        const token = localStorage.getItem('token');
        const nuevoProducto = {
          nombre: document.getElementById('nombre').value,
          descripcion: document.getElementById('descripcion').value,
          ingredientes: document.getElementById('ingredientes').value,
          fabricante: document.getElementById('fabricante').value,
          composicion: document.getElementById('composicion').value,
          puntos: parseInt(document.getElementById('puntos').value),
          imagen: document.getElementById('imagen').value,
          id_categoria: parseInt(document.getElementById('id_categoria').value),
          id_empresa: parseInt(document.getElementById('id_empresa').value),
        };

        try {
          const res = await fetch('/api/productos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(nuevoProducto)
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
    <div className="p-4">

      <div className=" flex space-x-8 mb-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Lista de Productos</h2>
        <button
          onClick={() => handleCrearProducto()}
          className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition text-sm font-medium"
        >
          + Crear Producto
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-left">
            <tr>
              <th className="px-3 py-2">Nombre</th>
              <th className="px-3 py-2">Puntos</th>
              <th className="px-3 py-2">Categoría</th>
              <th className="px-3 py-2">Empresa</th>
              <th className="px-3 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-3 py-2">{producto.nombre}</td>
                <td className="px-3 py-2">{producto.puntos}</td>
                <td className="px-3 py-2">{getNombreCategoria(producto.id_categoria)}</td>
                <td className="px-3 py-2">{getNombreEmpresa(producto.id_empresa)}</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex justify-center gap-1">
                    <button
                      onClick={() => handleDeleteProduct(producto.id)}
                      className="bg-rose-900 hover:bg-rose-700 text-white p-1.5 rounded"
                      title="Eliminar"
                    >
                      <MdDelete size={20}/>
                    </button>
                    <button
                      onClick={() => handleMostrarQr(producto.id)}
                      className="bg-green-600 hover:bg-green-700 text-white p-1.5 rounded"
                      title="QR"
                    >
                      <FaQrcode size={16} />
                    </button>
                    <button
                      onClick={() => handleEditarProducto(producto)}
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

export default ProductosList;
