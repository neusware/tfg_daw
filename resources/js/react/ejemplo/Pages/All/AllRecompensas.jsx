import React, { useEffect, useState } from "react";
import RecompensaCard from "../../components/Recompensas/RecompensaCard";

function AllRecompensas() {
    const [recompensas, setRecompensas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading)
        return <div className="text-center mt-10">Cargando recompensas...</div>;
    if (error) return <div className="text-center text-red-600">{error}</div>;

    return (
        <div className="container mx-auto px-4 m-8 pb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Recompensas
            </h2>

            <div className="flex justify-center">
                <div className="grid w-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-8">
                    {recompensas.map((recompensa) => (
                        <RecompensaCard key={recompensa.id} data={recompensa} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllRecompensas;
