import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




function ProductPage() {

    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
      fetch('/api/productos')
        .then(response => response.json())
        .then(data => {
          setProductos(data.productos || []); // aseguramos que sea array
          setLoading(false);
        })
        .catch(error => {
          console.error("Error al obtener los productos en el fetch.", error);
          setLoading(false);
        });
    }, []);

    const producto = productos.find(p => p.id === parseInt(id));

    if (loading) return <div className="text-center mt-10">Cargando producto...</div>;
    if (!producto) return <div className="text-center mt-10 text-red-600">Producto no encontrado</div>;



  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Fila de imagen e información del producto */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Imagen */}
        <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-xl">
          {/* <img
            src={producto.imagen}
            alt={producto.nombre}
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          /> */}
        </div>

        {/* Detalles */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{producto.nombre}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">{producto.descripcion}</p>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-3 text-sm text-gray-800 dark:text-gray-300 text-left">
            <p><strong>Ingredientes:</strong> {producto.ingredientes}</p>
            <p><strong>Fabricante:</strong> {producto.fabricante}</p>
            <p><strong>Composición:</strong> {producto.composicion}</p>
            <p><strong>Puntos:</strong> {producto.puntos}</p>
            <p><strong>ID Categoría:</strong> {producto.id_categoria}</p>
            <p><strong>ID Empresa:</strong> {producto.id_empresa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
