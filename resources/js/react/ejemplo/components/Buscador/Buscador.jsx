import React, { useState, useEffect } from 'react';
import Button from '../Shared/Button';

function Buscador() {
  const [query, setQuery] = useState('');
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    fetch("/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);
        setFilteredProductos(data.productos);
      })
      .catch((error) => console.error("Error al obtener los productos", error));

    fetch("/api/categorias")
      .then((response) => response.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.error("Error al obtener las categorías", error));
  }, []);

  const handleSearch = () => {
    if (query.trim() === '') {
      setFilteredProductos(productos);
      return;
    }
    const filtered = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProductos(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
  <section className="bg-gradient-to-br from-[#0F5E2B] via-[#18703A] to-[#A4D9A0] lg:grid lg:place-content-center dark:bg-gray-900 text-center pb-20">
    <div className="mx-auto w-full h-[85vh] max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 flex flex-col justify-center items-center md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-8 lg:py-32">

      <div className="max-w-prose text-center md:text-left">
        <h1 className="text-4xl font-bold text-white sm:text-5xl capitalize">
          Escanea, conoce y
          <strong className="text-acentoClaro uppercase"> decide mejor </strong>
          lo que consumes
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg text-pretty">
          Con EcoScan accedes a información detallada sobre productos alimenticios con solo escanear el QR del envase. Ingredientes, alérgenos, origen, sostenibilidad y mucho más, al instante.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            className="inline-block rounded-md border bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-acento"
            href="/productos"
          >
            Ver productos
          </a>
          {!token && (
            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="/login"
            >
              Iniciar sesión
            </a>
          )}
        </div>
      </div>

      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative mt-10 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">Buscar productos</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nombre del producto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greenDark dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button
            onClick={handleSearch}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-acento transition-colors"
          >
            Buscar
          </button>
        </div>

        {query && filteredProductos.length > 0 && (
          <div className="absolute left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md mt-2 max-h-64 overflow-y-auto z-10">
            {filteredProductos.map((producto) => (
              <a
                key={producto.id}
                href={`/producto/${producto.id}`}
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {producto.nombre}
              </a>
            ))}
          </div>
        )}
        {query && filteredProductos.length === 0 && (
          <div className="absolute left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md mt-2 p-2 text-gray-500 dark:text-gray-400 z-10">
            No se encontraron productos.
          </div>
        )}
      </div>

    </div>
  </section>



  );
}

export default Buscador;
