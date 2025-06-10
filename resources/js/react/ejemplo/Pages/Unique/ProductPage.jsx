import React, { useEffect, useState } from "react";
import {  useNavigate,Navigate, useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";
import Swal from "sweetalert2";
import { useUser } from "../../components/Context/UserContext";

function ProductPage() {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [puntosProducto, setPuntosProducto] = useState(0);
    const [searchParams] = useSearchParams();
    const [userPoints, setUserPoints] = useState(0)
    const showRewardModal = searchParams.get("from") === "scan";


    // actualizar los puntos del usuario
    const {setPoints} = useUser();

    // navigate para las rutas
    const navigate = useNavigate();

    // obtener el token del usuario
    const token = sessionStorage.getItem('token');

    // funcion para detectar el tipo de dispositivo desde el cual se está ejecutan la app
    const esDispositivoMovil = () => {
        return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
            navigator.userAgent
        );
    };

    const producto = productos.find((p) => p.id === parseInt(id));



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

    // useEffect para, en caso de escanear el producto, mostrar el mensaje popUp
    useEffect(() => {
    if (!showRewardModal || !esDispositivoMovil()) return;

    const token = sessionStorage.getItem("token");
    const puntos = producto?.puntos || 0;
    setPuntosProducto(puntos);

    if (!producto) return;

    if (token) {
        const sumarPuntos = async () => {
            try {
                const res = await fetch("/api/usuario/saldo", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        "saldo":  (userPoints +  puntos),
                    }),
                });

                if (!res.ok)
                    throw new Error("Error al sumar los puntos");

                const data = await res.json();

                Swal.fire({
                    icon: "success",
                    title: "¡Puntos Sumados!",
                    text: `Has acumulado ${puntos} puntos por escanear este producto.`,
                    confirmButtonText: "Aceptar",
                });
                setPoints(userPoints+puntos);

            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hubo un problema al sumar los puntos. Intenta de nuevo.",
                });
            }
        };

        sumarPuntos();
    } else {
        Swal.fire({
            icon: "info",
            title: "¡Inicia sesión para ganar puntos!",
            text: "Debes iniciar sesión o crear una cuenta para acumular puntos.",
            showCancelButton: true,
            confirmButtonText: "Iniciar sesión",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.setItem("pendingProductPoints", id);
                navigate("/login");
            }
        });
    }
    }, [producto, showRewardModal]);

    // obtener los puntos del Usuario
    useEffect(()=> {
                if (token) {
            fetch("/api/usuario/saldo", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("🔍 Saldo del usuario:", data);
                    setUserPoints(data.saldo);
                })
                .catch((err) => {
                    console.error("❌ Error al obtener saldo:", err);
                    setUserPoints(0);
                });
        }
    },[])


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

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        shadowUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    });

    const CATEGORIA_MAP = {
        1: "INERTE",
        2: "ORGANICA",
        3: "PAPEL/CARTON",
        4: "VIDRIO",
    };

    const residuoNombre = CATEGORIA_MAP[producto.id_categoria];
    return (
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Imagen y ingredientes en la misma fila */}
            <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Imagen del producto */}
                <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Ingredientes */}
                <div className="flex-1 w-full space-y-4">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        {producto.nombre}
                    </h1>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {producto.descripcion ||
                            "Este producto destaca por su excelente calidad y composición equilibrada. Ideal para consumidores conscientes que buscan una opción confiable y transparente."}
                    </p>

                    {(() => {
                        let ingredientes = producto.ingredientes;
                        if (typeof ingredientes === "string") {
                            try {
                                ingredientes = JSON.parse(ingredientes);
                            } catch (e) {
                                ingredientes = null;
                            }
                        }
                        if (
                            ingredientes &&
                            Array.isArray(ingredientes) &&
                            ingredientes.length > 0
                        ) {
                            return (
                                <div>
                                    <span className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                                        Ingredientes
                                    </span>
                                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                        {ingredientes.map(
                                            (ingrediente, index) => (
                                                <div
                                                    key={index}
                                                    className="w-[80vh] p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 space-y-2"
                                                >
                                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                        {ingrediente.nombre}
                                                    </h4>
                                                    <ul className="text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Cantidad:
                                                            </strong>{" "}
                                                            {
                                                                ingrediente.cantidad
                                                            }{" "}
                                                            {ingrediente.unidad}
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Calorías:
                                                            </strong>{" "}
                                                            {
                                                                ingrediente.calorias
                                                            }{" "}
                                                            kcal
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Porcentaje:
                                                            </strong>{" "}
                                                            {
                                                                ingrediente.porcentaje
                                                            }
                                                            %
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Proteínas:
                                                            </strong>{" "}
                                                            {ingrediente.proteinas ||
                                                                0}{" "}
                                                            g
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Grasas:
                                                            </strong>{" "}
                                                            {ingrediente.grasas ||
                                                                0}{" "}
                                                            g
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Carbohidratos:
                                                            </strong>{" "}
                                                            {ingrediente.carbohidratos ||
                                                                0}{" "}
                                                            g
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Tipo:
                                                            </strong>{" "}
                                                            {ingrediente.tipo}
                                                        </li>
                                                        <li>
                                                            <strong className="text-gray-900 dark:text-white">
                                                                Origen:
                                                            </strong>{" "}
                                                            {ingrediente.origen}
                                                        </li>
                                                        {ingrediente.notas && (
                                                            <li className="italic text-gray-600 dark:text-gray-400">
                                                                Notas:{" "}
                                                                {
                                                                    ingrediente.notas
                                                                }
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <p>
                                <span className="font-semibold text-primary">
                                    🧪 Ingredientes:
                                </span>{" "}
                                {typeof producto.ingredientes === "string" &&
                                producto.ingredientes
                                    ? producto.ingredientes
                                    : "No disponibles"}
                            </p>
                        );
                    })()}
                </div>
            </div>

            {/* Resto de información del producto */}
            <div className="space-y-8 text-center md:text-left">
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm space-y-4 text-gray-800 dark:text-gray-300 text-left">
                    {producto.composicion && (
                        <p>
                            <span className="font-semibold text-primary">
                                Composición:
                            </span>{" "}
                            {producto.composicion}
                        </p>
                    )}
                    {producto.fabricante && (
                        <p>
                            <span className="font-semibold text-primary">
                                Fabricante:
                            </span>{" "}
                            {producto.fabricante}
                        </p>
                    )}
                    {producto.puntos !== undefined && (
                        <p>
                            <span className="font-semibold text-primary">
                                Recompensa:
                            </span>{" "}
                            {producto.puntos} puntos
                        </p>
                    )}
                    {producto.id_categoria && (
                        <p>
                            <span className="font-semibold text-primary">
                                Categoría:
                            </span>{" "}
                            {getNombreCategoria(producto.id_categoria)}
                        </p>
                    )}
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
