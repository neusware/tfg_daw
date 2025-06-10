import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MiPerfil() {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recompensasUsuario, setRecompensasUsuario] = useState([])
    const [recompensasDisponibles,setRecompensasDisponibles] = useState([])

    const token = sessionStorage.getItem("token");

    //   obtener los datos del usuario
    useEffect(() => {
        setUsuario(JSON.parse(sessionStorage.getItem("usuario")));
        setLoading(false);
    },[]);


    // obtener todas las recompensas canjeadas
    useEffect(()=>{

            fetch(`/api/usuario-recompensas`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
            .then((res) => res.json())
                .then((data) => {
                    setRecompensasUsuario(data.recompensas || data);

                })
                .catch((err) => {
                    console.error("❌ Error al obtener recompensas:", err);
                });
    },[])

    // obtener los datos de las recompensas disponibles
    useEffect(() => {
        fetch("/api/recompensas")
            .then((res) => res.json())
            .then((data) => {
                setRecompensasDisponibles(data.recompensas || data);
            })
            .catch((err) => {
                console.error("❌ Error al obtener recompensas disponibles:", err);
            });
    }, []);

    // funcion para obtener el nombre de la recompensa en funcion de su id
    function obtenerNombreRecompensaPorId(id, recompensasDisponibles) {

        const recompensa = recompensasDisponibles.find((r) => r.id === id);
        return recompensa ? recompensa.nombre : "Recompensa desconocida";
    }


    //filtrar las recompensas canjeadas para que solo aparezcan las del usuario
    useEffect(()=>{
        const recompensasFiltradas = recompensasUsuario.filter((r)=> r.id_usuario == usuario.id)
        setRecompensasUsuario(recompensasFiltradas)
    },[])


    if (loading)
        return <div className="text-center mt-10">Cargando perfil...</div>;
    if (!usuario)
        return (
            <div className="text-center mt-10 text-red-600">
                Usuario no autenticado
            </div>
        );

    return (
        <div className="max-w-3xl mx-auto py-12 px-6 space-y-10">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                👤 Mi Perfil
            </h1>

            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 space-y-4 border border-gray-200 dark:border-gray-700">
                <p>
                    <span className="font-semibold text-primary">📛 Nombre:</span>{" "}
                    {usuario.nombre}
                </p>
                <p>
                    <span className="font-semibold text-primary">📛 Apellidos:</span>{" "}
                    {usuario.apellidos}
                </p>
                <p>
                    <span className="font-semibold text-primary">📧 Email:</span>{" "}
                    {usuario.email}
                </p>
                <p>
                    <span className="font-semibold text-primary">🪙 Puntos:</span>{" "}
                    {usuario.saldo}
                </p>
            </div>

            {/* MIS RECOMPENSAS */}
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Mis Recompensas
                </h2>
                {recompensasUsuario.length > 0 ? (
                    <ul className="space-y-2 list-disc list-inside">
                        {recompensasUsuario.map((recompensa) => (
                            <li key={recompensa.id}>
                                <span className="text-primary font-medium">{obtenerNombreRecompensaPorId(recompensa.id_recompensa, recompensasDisponibles)}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                        Aún no has canjeado ninguna recompensa.
                    </p>
                )}
            </div>
        </div>
    );
}

export default MiPerfil;
