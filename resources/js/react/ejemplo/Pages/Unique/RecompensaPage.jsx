import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
// puntos del usuario
import { useUser } from "../../components/Context/UserContext";

function RecompensaPage() {
    const { id } = useParams();
    const [recompensas, setRecompensas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userPoints, setUserPoints] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // puntos del usuario
    const {setPoints} = useUser();

    //  obtener el token del usuario guardado en sessionStorage
    const token = sessionStorage.getItem("token");

    // obtener el usuario mediante sessionStorage
    const usuario =  JSON.parse(sessionStorage.getItem("usuario"));


    // llamadas a los endpoints
    useEffect(() => {

        fetch("/api/recompensas")
            .then((res) => res.json())
            .then((data) => {
                setRecompensas(data.recompensas || data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });

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
    }, []);

    // encontrar la recompensa seleccionada para mostrar su información
    const recompensa = recompensas.find((r) => r.id === parseInt(id));

    // función para canjear los puntos
   const handleCanjear = () => {
    if (!recompensa || userPoints === null) return;

    if (userPoints < recompensa.precio_pts) {
        Swal.fire({
            icon: "error",
            title: "Puntos insuficientes",
            text: "No tienes suficientes puntos para canjear esta recompensa.",
        });
        return;
    }

    setButtonDisabled(true);

    fetch("/api/usuario/saldo", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            saldo: userPoints - recompensa.precio_pts,
        }),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Error al actualizar saldo");
            return res.json();
        })
        .then(() => {

            return fetch("/api/usuario-recompensas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    id_usuario: usuario.id,
                    id_recompensa: recompensa.id,
                }),
            });
        })
        .then((res) => {
            if (!res.ok) throw new Error("Error al registrar la recompensa");
            return res.json();
        })
        .then(() => {
            const nuevoSaldo = userPoints - recompensa.precio_pts;
            setUserPoints(nuevoSaldo);
            setPoints(nuevoSaldo);
            Swal.fire({
                icon: "success",
                title: "¡Recompensa canjeada!",
                text: `Has canjeado ${recompensa.nombre} correctamente.`,
            });
        })
        .catch((err) => {
            console.error("❌ Error:", err);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al canjear o registrar la recompensa.",
            });
        })
        .finally(() => {
            setButtonDisabled(false);
        });
};


    if (loading)
        return <div className="text-center mt-10">Cargando recompensa...</div>;

    if (!recompensa)
        return (
            <div className="text-center mt-10 text-red-600">
                Recompensa no encontrada
            </div>
        );
    return (
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Imagen de la recompensa */}
                <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-1 aspect-h-1 w-full">
                    <img
                    src={
                        recompensa.imagen ||
                        "https://cdn-icons-png.flaticon.com/512/2666/2666513.png"
                    }
                    alt={recompensa.nombre}
                    className="object-cover w-full h-full rounded-2xl"
                    />
                </div>
                </div>

                {/* Detalles de la recompensa */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    {recompensa.nombre}
                </h1>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {recompensa.descripcion ||
                    "Obtén esta recompensa exclusiva por tu compromiso con el consumo responsable. Acumula puntos con cada acción sostenible y canjéalos por beneficios pensados para ti."}
                </p>

                <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 text-left">
                    <li>Reconocimiento a tus decisiones sostenibles</li>
                    <li>Edición limitada disponible por tiempo determinado</li>
                    <li>Solo disponible para miembros registrados</li>
                </ul>

                <div className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-6 rounded-2xl shadow-inner space-y-4 text-gray-800 dark:text-gray-300">
                    <p className="text-lg">
                    <span className="font-semibold text-primary">Puntos necesarios:</span>{" "}
                    <span className="text-xl font-bold">{recompensa.precio_pts}</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    Asegúrate de tener suficientes puntos disponibles antes de intentar el canjeo.
                    </p>
                </div>
            </div>
        </div>

        {/* Botón para canjear */}
        <div className="text-center">
            <button
            onClick={handleCanjear}
            className={`px-6 py-3 rounded-xl text-white font-semibold transition-colors duration-300 ${
                userPoints < recompensa.precio_pts
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-primary hover:bg-acento"
            }`}
            disabled={buttonDisabled || userPoints < recompensa.precio_pts}
            >
            Canjear recompensa
            </button>
            {userPoints < recompensa.precio_pts && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Te faltan puntos para esta recompensa. Sigue participando y escaneando productos para acumular más.
            </p>
            )}
        </div>

        {/* CTA de exploración */}
        <div className="bg-primary text-white rounded-2xl shadow-2xl px-8 py-10 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
            ¡Sigue explorando y sumando puntos!
            </h2>
            <p className="text-md sm:text-lg">
            Cada producto escaneado es un paso más hacia una recompensa. ¡Haz que tus elecciones cuenten!
            </p>
            <Link
            to="/productos"
            className="inline-block mt-3 px-6 py-3 bg-white text-primary font-semibold rounded-xl shadow hover:bg-gray-100 transition"
            >
            Buscar más productos
            </Link>
        </div>
        </div>

    );
}

export default RecompensaPage;
