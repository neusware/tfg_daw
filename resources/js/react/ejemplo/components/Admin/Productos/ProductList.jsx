import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';

const MySwal = withReactContent(Swal);

const ProductosList = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

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
      <div className='p-4'>
        <QRCode value={`https://ecoscan.com/productos/${idProducto}`} />
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
                  body { display: flex; justify-content: center; align-items: center; height: 100vh; }
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
        <input id="nombre" class="swal2-input" placeholder="Nombre" value="${producto.nombre || ''}">
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción">${producto.descripcion || ''}</textarea>
        <textarea id="ingredientes" class="swal2-textarea" placeholder="Ingredientes">${producto.ingredientes || ''}</textarea>
        <input id="fabricante" class="swal2-input" placeholder="Fabricante" value="${producto.fabricante || ''}">
        <input id="composicion" class="swal2-input" placeholder="Composición" value="${producto.composicion || ''}">
        <input id="puntos" type="number" class="swal2-input" placeholder="Puntos" value="${producto.puntos || 0}">
        <input id="imagen" class="swal2-input" placeholder="URL Imagen" value="${producto.imagen || ''}">
        <label for="id_categoria">Categoría</label>
        <select id="id_categoria" class="swal2-select">${categoriaOptions}</select>
        <label for="id_empresa">Empresa</label>
        <select id="id_empresa" class="swal2-select">${empresaOptions}</select>
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
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
        <input id="nombre" class="swal2-input" placeholder="Nombre">
        <textarea id="descripcion" class="swal2-textarea" placeholder="Descripción"></textarea>
        <textarea id="ingredientes" class="swal2-textarea" placeholder="Ingredientes"></textarea>
        <input id="fabricante" class="swal2-input" placeholder="Fabricante">
        <input id="composicion" class="swal2-input" placeholder="Composición">
        <input id="puntos" type="number" class="swal2-input" placeholder="Puntos">
        <input id="imagen" class="swal2-input" placeholder="URL de imagen">
        <select id="id_categoria" class="swal2-select">
          ${categorias.map(cat => `<option value="${cat.id}">${cat.nombre}</option>`).join('')}
        </select>
        <select id="id_empresa" class="swal2-select">
          ${empresas.map(emp => `<option value="${emp.id}">${emp.nombre}</option>`).join('')}
        </select>
      `,
      showCancelButton: true,
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
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <div className="overflow-x-auto">

        {/* boton para crear nuevo producto */}
        <button onClick={()=>handleCrearProducto()} className='mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Crear Producto</button>

        {/* tabla para mostrar los resultados */}
        <table className="min-w-full border text-sm text-left bg-white dark:bg-gray-800 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Descripción</th>
              <th className="px-4 py-2 border">Puntos</th>
              <th className="px-4 py-2 border">Categoría</th>
              <th className="px-4 py-2 border">Empresa</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border">{producto.nombre}</td>
                <td className="px-4 py-2 border">{producto.descripcion}</td>
                <td className="px-4 py-2 border">{producto.puntos}</td>
                <td className="px-4 py-2 border">{getNombreCategoria(producto.id_categoria)}</td>
                <td className="px-4 py-2 border">{getNombreEmpresa(producto.id_empresa)}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => handleDeleteProduct(producto.id)} className="bg-rose-800 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                  <button onClick={() => handleMostrarQr(producto.id)} className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700">QR</button>
                  <button onClick={() => handleEditarProducto(producto)} className="bg-indigo-800 text-white px-4 py-1 rounded hover:bg-indigo-900">Editar</button>
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
