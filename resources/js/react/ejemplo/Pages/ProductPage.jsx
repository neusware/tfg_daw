import React from 'react'

function ProductPage({ producto }) {
  return (
    <div className="container py-12 grid md:grid-cols-2 gap-8">
      {/* Imagen del producto */}
      <div className="space-y-4">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full rounded-xl shadow-lg"
        />
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Escanea el QR:</p>
          <img
            src={producto.enlace_qr}
            alt="QR del producto"
            className="w-24 mx-auto mt-2"
          />
        </div>
      </div>

      {/* Información del producto */}
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold">{producto.nombre}</h1>
        <p className="text-gray-600 dark:text-gray-300">{producto.descripcion}</p>

        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Ingredientes:</strong> {producto.ingredientes}</p>
          <p><strong>Fabricante:</strong> {producto.fabricante}</p>
          <p><strong>Composición:</strong> {producto.composicion}</p>
          <p><strong>Puntos:</strong> {producto.puntos}</p>
          <p><strong>ID Categoría:</strong> {producto.id_categoria}</p>
          <p><strong>ID Empresa:</strong> {producto.id_empresa}</p>
        </div>

        <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition">
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductPage
