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
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 max-w-md w-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src={
                            recompensa.foto ||
                            "https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/15/5fa43d71a111f.jpeg"
                        }
                        alt={recompensa.nombre}
                        className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="flex-1 space-y-8 text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        {recompensa.nombre}
                    </h1>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {recompensa.descripcion ||
                            "Este producto destaca por su excelente calidad."}
                    </p>

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

            <div className="text-center">
                <button
                    onClick={handleCanjear}
                    className={`${
                        userPoints < recompensa.precio_pts
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    } text-white py-2 px-6 rounded-xl mt-6`}
                    disabled={buttonDisabled || userPoints < recompensa.precio_pts}
                >
                    Canjear recompensa
                </button>
            </div>

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
