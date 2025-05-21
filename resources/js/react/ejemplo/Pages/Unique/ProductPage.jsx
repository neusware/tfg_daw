import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";

function ProductPage() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        fetch("/api/productos")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data.productos || []); // aseguramos que sea array
                setLoading(false);
            })
            .catch((error) => {
                console.error(
                    "Error al obtener los productos en el fetch.",
                    error
                );
                setLoading(false);
            });
    }, []);

    //useEffect para los datos adicionales
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [prodRes, catRes] = await Promise.all([
                    fetch("/api/categorias"),
                    fetch("/api/empresas"),
                ]);

                const categoriasData = await prodRes.json();
                const empresasData = await catRes.json();

                setCategorias(categoriasData);
                setEmpresas(empresasData);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const producto = productos.find((p) => p.id === parseInt(id));

    if (loading)
        return <div className="text-center mt-10">Cargando producto...</div>;
    if (!producto)
        return (
            <div className="text-center mt-10 text-red-600">
                Producto no encontrado
            </div>
        );

    //funcion para encontrar el nombre de la categoria
    const getNombreCategoria = (idCategoria) => {
        const categoria = categorias.find((cat) => cat.id === idCategoria);
        return categoria ? categoria.nombre : "Sin categoria";
    };

    //funcion para encontrar el nombre de la empresa
    const getNombreEmpresa = (idEmpresa) => {
        const empresa = empresas.find((emp) => emp.id === idEmpresa);
        return empresa ? empresa.nombre : "Sin empresa";
    };

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        shadowUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    });

    const CATEGORIA_MAP = {
        1: "ORGANICA",
        2: "VIDRIO",
        3: "PAPEL/CARTON",
        4: "INERTE",
    };

    const residuoNombre = CATEGORIA_MAP[producto.id_categoria];
    return (
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Fila principal */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* Imagen del producto */}
                <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={
                            producto.imagen
                        }
                        alt={producto.nombre}
                        className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Información del producto */}
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {producto.nombre}
                    </h1>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {producto.descripcion ||
                            "Este producto destaca por su excelente calidad y composición equilibrada. Ideal para consumidores conscientes que buscan una opción confiable y transparente."}
                    </p>

                    {/* Ficha técnica */}
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm space-y-4 text-gray-800 dark:text-gray-300 text-left">
                        {producto.ingredientes && (
                            <p>
                                <span className="font-semibold text-primary">
                                    🧪 Ingredientes:
                                </span>{" "}
                                {producto.ingredientes}
                            </p>
                        )}
                        {producto.composicion && (
                            <p>
                                <span className="font-semibold text-primary">
                                    ⚗️ Composición:
                                </span>{" "}
                                {producto.composicion}
                            </p>
                        )}
                        {producto.fabricante && (
                            <p>
                                <span className="font-semibold text-primary">
                                    🏭 Fabricante:
                                </span>{" "}
                                {producto.fabricante}
                            </p>
                        )}
                        {producto.puntos !== undefined && (
                            <p>
                                <span className="font-semibold text-primary">
                                    🎁 Recompensa:
                                </span>{" "}
                                {producto.puntos} puntos{" "}
                            </p>
                        )}
                        {producto.id_categoria && (
                            <p>
                                <span className="font-semibold text-primary">
                                    📂 Categoría:
                                </span>{" "}
                                {getNombreCategoria(producto.id_categoria)}
                            </p>
                        )}
                        {producto.id_empresa && (
                            <p>
                                <span className="font-semibold text-primary">
                                    🏢 Empresa:
                                </span>{" "}
                                {getNombreEmpresa(producto.id_empresa)}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Mapa con los contenedores de la categoría */}
            {producto.id_categoria && (
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Map categoriaId={residuoNombre} />
                </div>
            )}
            {/* Llamado a la acción */}
            <div className="bg-primary text-white rounded-2xl shadow-xl px-8 py-10 text-center space-y-4">
                <h2 className="text-2xl font-bold">
                    ¡Sigue explorando productos responsables!
                </h2>
                <p className="text-md">
                    Busca otro producto para conocer su información y seguir
                    acumulando recompensas.
                </p>
                <Link
                    to="/productos"
                    className="mt-3 inline-block px-6 py-3 bg-white text-primary font-semibold rounded-xl shadow-md hover:bg-gray-100 transition duration-300"
                >
                    Buscar un nuevo producto
                </Link>
            </div>
        </div>
    );
}

export default ProductPage;
