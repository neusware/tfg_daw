import React, { useEffect, useState } from "react";
import ProductCard from "../../components/Products/ProductCard";

function AllProducts() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

    //   peticiones a la API
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

    // filtrar los productos segun el nombre utilizado y la categoria e independientemente si se escribe con mayúscula o minúscula
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
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    Todos los productos
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
                    Explora todos nuestros productos
                </p>
            </div>

            {/* Barra de búsqueda y filtro */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-10 max-w-4xl mx-auto">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                {/* select para aplicar el filtro para las categorias */}
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

            {/* mostrar el listado de productos */}
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto, index) => (
                        <ProductCard key={index} data={producto} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No se encontraron productos que coincidan con los
                        filtros aplicados.
                    </p>
                )}
            </div>
        </div>
    );
}

export default AllProducts;
