// import React, { useState, useEffect } from 'react';
// import productos from '../../productos'; // Productos originales
// import QRCode from 'react-qr-code'; // Importar la librería react-qr-code

// function EditarProductos() {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {

//     const storedProducts = JSON.parse(localStorage.getItem('productos'));
//     if (storedProducts) {
//       setProducts(storedProducts);
//     } else {

//       setProducts(productos);
//       localStorage.setItem('productos', JSON.stringify(productos));
//     }
//   }, []);

//   const updateLocalStorage = (updatedProducts) => {
//     localStorage.setItem('productos', JSON.stringify(updatedProducts));
//   };

//   const addProduct = (newProduct) => {
//     const updatedProducts = [...products, newProduct];
//     setProducts(updatedProducts);
//     updateLocalStorage(updatedProducts);
//   };

//   const editProduct = (id, updatedProduct) => {
//     const updatedProducts = products.map((product) =>
//       product.id === id ? { ...product, ...updatedProduct } : product
//     );
//     setProducts(updatedProducts);
//     updateLocalStorage(updatedProducts);
//   };

//   const deleteProduct = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//     updateLocalStorage(updatedProducts);
//   };

//   // Función para manejar la selección del producto para generar el código QR
//   const handleGenerateQRCode = (producto) => {
//     setSelectedProduct(producto);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Gestionar Productos</h2>

//       {/* Tabla de productos */}
//       <table className="min-w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2">Nombre</th>
//             <th className="border px-4 py-2">Descripción</th>
//             <th className="border px-4 py-2">Puntos</th>
//             <th className="border px-4 py-2">Acciones</th>
//             <th className="border px-4 py-2">Generar QR</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((producto) => (
//             <tr key={producto.id}>
//               <td className="border px-4 py-2">{producto.nombre}</td>
//               <td className="border px-4 py-2">{producto.descripcion}</td>
//               <td className="border px-4 py-2">{producto.puntos}</td>
//               <td className="border px-4 py-2">
//                 {/* Botones para editar y eliminar */}
//                 <button
//                   className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
//                   onClick={() => editProduct(producto.id, { nombre: 'Nuevo Nombre', puntos: 100 })}
//                 >
//                   Editar
//                 </button>
//                 <button
//                   className="bg-red text-white px-4 py-1 rounded"
//                   onClick={() => deleteProduct(producto.id)}
//                 >
//                   Eliminar
//                 </button>
//               </td>
//               <td className="border px-4 py-2">
//                 {/* Botón para generar el código QR */}
//                 <button
//                   className="bg-blue-500 text-white px-4 py-1 rounded"
//                   onClick={() => handleGenerateQRCode(producto)}
//                 >
//                   Generar QR
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Formulario para agregar un nuevo producto */}
//       <div className="mt-6">
//         <h3 className="text-xl mb-4">Agregar Nuevo Producto</h3>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             const newProduct = {
//               id: products.length + 1,
//               nombre: e.target.nombre.value,
//               descripcion: e.target.descripcion.value,
//               puntos: parseInt(e.target.puntos.value),
//             };
//             addProduct(newProduct);
//           }}
//         >
//           <input
//             type="text"
//             name="nombre"
//             placeholder="Nombre del producto"
//             className="p-2 mb-2 border border-gray-300 w-full"
//           />
//           <input
//             type="text"
//             name="descripcion"
//             placeholder="Descripción"
//             className="p-2 mb-2 border border-gray-300 w-full"
//           />
//           <input
//             type="number"
//             name="puntos"
//             placeholder="Puntos"
//             className="p-2 mb-2 border border-gray-300 w-full"
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded mt-2"
//           >
//             Agregar Producto
//           </button>
//         </form>
//       </div>


//       {selectedProduct && (
//         <div className="mt-6">
//           <h3 className="text-xl mb-4">Código QR de {selectedProduct.nombre}</h3>
//           <QRCode value={`https://ecoscan.com/producto/${selectedProduct.id}`} size={256} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default EditarProductos;
