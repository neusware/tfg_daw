import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function RecompensaPage() {
    const { id } = useParams();
    const [recompensas, setRecompensas] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch("/api/recompensas")
            .then((res) => {
                if (!res.ok) throw new Error("Error al cargar las recompensas");
                return res.json();
            })
            .then((data) => {
                setRecompensas(data.recompensas || data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("No se pudo cargar las recompensas");
                setLoading(false);
            });
    }, []);

    //buscar la recompensa seleccionada
    const recompensa = recompensas.find((r) => r.id === parseInt(id));

    if (loading)
        return <div className="text-center mt-10">Cargando recompensa...</div>;
    if (!recompensa)
        return (
            <div className="text-center mt-10 text-red-600">
                Recompensa no encontrado
            </div>
        );

    return (
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Fila principal */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
                {/* Imagen de la recompensa */}
                <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={
                            "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/15/5fa43d71a111f.jpeg"
                        }
                        alt={recompensa.nombre}
                        className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Información del producto */}
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {recompensa.nombre}
                    </h1>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {recompensa.descripcion ||
                            "Este producto destaca por su excelente calidad y composición equilibrada. Ideal para consumidores conscientes que buscan una opción confiable y transparente."}
                    </p>

                    {/* Ficha técnica */}
                    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm space-y-4 text-gray-800 dark:text-gray-300 text-left">
                        <p>
                            <span className="font-semibold text-primary">
                                🧪 Puntos:
                            </span>{" "}
                            {recompensa.precio_pts}
                        </p>
                    </div>
                </div>
            </div>

            {/* Llamado a la acción */}
            <div className="bg-primary text-white rounded-2xl shadow-xl px-8 py-10 text-center space-y-4">
                <h2 className="text-2xl font-bold">
                    ¡Sigue explorando los productos responsables!
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

export default RecompensaPage;
