import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard";

function AllProducts() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const location = useLocation();

  useEffect(() => {
    // Leer categoría de query param y setear filtro inicial
    const params = new URLSearchParams(location.search);
    const categoriaQuery = params.get("categoria");
    if (categoriaQuery) {
      setCategoriaSeleccionada(categoriaQuery);
    }
  }, [location.search]);

  useEffect(() => {
    fetch("/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);
      })
      .catch((error) =>
        console.error("Error al obtener los productos", error)
      );

    fetch("/api/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      })
      .catch((error) =>
        console.error("Error al obtener las categorías", error)
      );
  }, []);

  const productosFiltrados = productos.filter((producto) => {
    const nombreCoincide = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const categoriaCoincide =
      categoriaSeleccionada === "" ||
      producto.id_categoria === parseInt(categoriaSeleccionada);
    return nombreCoincide && categoriaCoincide;
  });

  return (
    <div className="container mx-auto p-16 font-sans">
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold sm:text-5xl dark:text-white capitalize">
          Todos los productos
        </h1>
        <p className="mt-4 text-base text-pretty sm:text-lg/relaxed dark:text-gray-200">
          Explora todos nuestros productos
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-10 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, index) => (
            <ProductCard key={index} data={producto} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No se encontraron productos que coincidan con los filtros aplicados.
          </p>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
