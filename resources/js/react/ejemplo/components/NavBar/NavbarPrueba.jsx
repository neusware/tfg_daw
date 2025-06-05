import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// contexto para los puntos del usuario
import { useUser } from "../Context/UserContext";
import { point } from "leaflet";

const MenuLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/",
    },
    {
        id: 2,
        name: "Productos",
        link: "/productos",
    },
    {
        id: 3,
        name: "Contenedores",
        link: "/contenedores",
    },
    {
        id: 4,
        name: "Recompensas",
        link: "/recompensas",
    },
    {
        id: 5,
        name: "Suscripciones",
        link: "/suscripciones",
    },
];
const DropdownLinks = [
    {
        id: 1,
        name: "Administrar Productos",
        link: "/admin-panel/productos",
    },
    {
        id: 2,
        name: "Registrar",
        link: "/register",
    },
    {
        id: 3,
        name: "login",
        link: "/login",
    },
    {
        id: 4,
        name: "Mi perfil",
        link: "/perfil",
    },
];

function NavbarPrueba() {
    const location = useLocation();
    const isAdmin = location.pathname.includes("admin-panel");

    //puntos del usuario
    const {points} = useUser();



    return (
        <div
            className={`${
                isAdmin ? "ml-60" : ""
            } h-[15vh] dark:bg-gray-900 dark:text-white py-8`}
        >
            <div className="flex items-center gap-8 mx-14 justify-around">
                {/*Logo*/}
                <Link
                    to={"/"}
                    className=" tracking-widest text-xl sm:text-3xl "
                >
                    <img src="./img/letras.png" alt="logo" className="w-40" />
                </Link>
                {/*items del menu */}
                <div className="lg:block">
                    <ul className="flex items-center space-x-12">
                        {MenuLinks.map((data, index) => (
                            <li key={index}>
                                <Link
                                    className="font-sans inline-block px-6 font-semibold text-gray-500 hover:text-black dark:hover-text:white duration-200"
                                    to={data.link}
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/*seccion derecha de la navbar */}
                <div className="flex items-center">
                    {/* diferente menú en función si el usuario está autenticado o no */}
                    {sessionStorage.getItem("token") ? (
                        // Usuario autenticado: menú desplegable y cerrar sesión
                        <div className="relative cursor-pointer group mr-4">
                            <div className="flex items-center gap-2 font-sans font-semibold text-gray-500 dark:hover:text-white py-2">
                                    <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full">
                                        ⭐ {points} pts
                                    </span>
                                <FaUserCircle className="text-4xl" />
                                <span>
                                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                                </span>
                            </div>
                            <div className="font-sans absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                <ul>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <Link
                                                to={data.link}
                                                className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                                            >
                                                {data.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to={"/"}
                                    className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                                >
                                    <button
                                        onClick={() => {
                                            sessionStorage.removeItem("token");
                                            localStorage.removeItem("usuario");
                                            window.location.reload(); // fuerza actualización del navbar
                                        }}
                                    >
                                        Cerrar sesión
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        // Usuario NO autenticado: mostrar botones de registro y login
                        <div className="flex gap-4 mr-4">
                            <Link to="/register">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    Registro
                                </button>
                            </Link>
                            <Link to="/login">
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )}

                    {/* modo oscuro seccion */}
                    <div>{/* <DarkMode/> */}</div>
                </div>
            </div>
        </div>
    );
}

export default NavbarPrueba;
