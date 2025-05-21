import React, { useEffect, useState } from "react";
import ContenedorCard from "../../components/Contenedores/ContenedorCard";
import Map from "../../components/Map/Map";

function AllContenedores() {
    const [contenedores, setContenedores] = useState([]);

    useEffect(() => {
        fetch("/api/contenedores")
            .then((res) => res.json())
            .then((data) => setContenedores(data))
            .catch((error) =>
                console.error("Error al obtener los contenedores:", error)
            );
    }, []); // ✅ solo una vez al montar

    const getImagenPorTipo = (tipo = "") => {
        const tipoNormalizado = tipo.trim().toLowerCase();

        const imagenes = {
            plástico:
                "https://www.solocontenedores.com/wp-content/uploads/04014-amarillo.jpg",
            vidrio: "https://www.solocontenedores.com/wp-content/uploads/04014-verde-600x600.jpg",
            "cartón y papel":
                "https://www.solocontenedores.com/wp-content/uploads/04014-azul-600x600.jpg",
            organico:
                "https://www.solocontenedores.com/wp-content/uploads/04014-marron-768x768.jpg",
            residuos:
                "https://www.solocontenedores.com/wp-content/uploads/04014-gris-600x600.jpg",
            resto: "https://www.solocontenedores.com/wp-content/uploads/04014-gris-600x600.jpg",
            pilas: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBOb2FODbgfbsZlObJdTn1VltR9rroHtraLA&s",
        };

        return imagenes[tipoNormalizado] || imagenes["pilas"]; // por defecto
    };

    return (
        <div className="container mx-auto p-6 mt-10 pb-32 font-sans">
            <section className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
                    Los Contenedores
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                    Descubre los diferentes tipos de contenedores que ofrecemos
                    para facilitar el reciclaje y la gestión de residuos. Cada
                    contenedor está diseñado para recibir ciertos tipos de
                    materiales.
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {contenedores.map((contenedor, index) => (
                    <ContenedorCard
                        key={contenedor.id || index}
                        data={contenedor}
                        image={getImagenPorTipo(contenedor.tipo)}
                    />
                ))}
            </section>

            <section className="mt-20">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    Mapa de Contenedores
                </h2>
                <Map />
            </section>
        </div>
    );
}

export default AllContenedores;
