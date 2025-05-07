import React from 'react';

function ProductPage({ producto }) {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Fila de imagen e información del producto */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Imagen */}
        <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          />
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-primary text-white font-medium py-3 px-6 rounded-xl shadow hover:bg-opacity-90 transition">
              Añadir al carrito
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-6 rounded-xl shadow hover:bg-opacity-80 transition">
              Añadir a favoritos
            </button>
          </div>
        </div>
      </div>

      {/* Valoraciones */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Reseñas de los clientes</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {producto.reseñas.map((res, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full sm:w-64 shadow-md">
              <p className="font-semibold text-gray-900 dark:text-white">{res.usuario}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{res.comentario}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disponibilidad 
      <section className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Disponibilidad</h2>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {producto.stock > 0 ? `Quedan ${producto.stock} unidades disponibles` : 'Agotado'}
        </p>
      </section>
      */}
      
      {/* Galería */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Galería de imágenes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {producto.imagenes.map((img, index) => (
            <img key={index} src={img} alt={`Imagen ${index + 1}`} className="rounded-lg shadow-lg object-cover h-48 w-full transition-transform duration-300 hover:scale-105" />
          ))}
        </div>
      </section>

      {/* Productos Relacionados */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Productos Relacionados</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {producto.relacionados.map((item, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <img src={item.imagen} alt={item.nombre} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-4 space-y-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.nombre}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{item.precio} €</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
