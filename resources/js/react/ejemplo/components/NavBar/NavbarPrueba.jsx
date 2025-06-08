import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const MenuLinks = [
  { id: 1, name: "Inicio", link: "/" },
  { id: 2, name: "Productos", link: "/productos" },
  { id: 3, name: "Contenedores", link: "/contenedores" },
  { id: 4, name: "Recompensas", link: "/recompensas" },
  { id: 5, name: "Suscripciones", link: "/suscripciones" },
];

const DropdownLinks = [
  { id: 1, name: "Administrar Productos", link: "/admin-panel/productos" },
  { id: 2, name: "Registrar", link: "/register" },
  { id: 3, name: "login", link: "/login" },
  { id: 4, name: "Mi perfil", link: "/perfil" },
];

function NavbarPrueba() {
  const location = useLocation();
  const isAdmin = location.pathname.includes("admin-panel");
  const { points } = useUser();
  const isLoggedIn = sessionStorage.getItem("token");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${isAdmin ? "ml-60" : ""} h-[15vh] dark:bg-gray-900 dark:text-white py-8 relative z-50`}>
      <div className="flex items-center justify-between mx-6 md:mx-14">
        {/* Logo */}
        <Link to={"/"} className="tracking-widest text-xl sm:text-3xl">
          <img src="./img/letras.png" alt="logo" className="w-40" />
        </Link>

        {/* Menú Hamburguesa */}
        <div className="lg:hidden">
          <HiMenu className="text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        {/* Menú principal */}
        <div className="hidden lg:flex items-center space-x-12">
          {MenuLinks.map((data) => (
            <Link
              key={data.id}
              to={data.link}
              className="font-sans font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
            >
              {data.name}
            </Link>
          ))}
        </div>

        {/* Parte derecha (escritorio) */}
        <div className="hidden lg:flex items-center">
          {isLoggedIn ? (
            <div className="relative cursor-pointer group mr-4">
              <div className="flex items-center gap-2 font-sans font-semibold text-gray-500 dark:hover:text-white py-2">
                <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full">
                  ⭐ {points} pts
                </span>
                <FaUserCircle className="text-4xl" />
                <FaCaretDown className="group-hover:rotate-180 duration-300" />
              </div>
              <div className="font-sans absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
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
                      window.location.reload();
                    }}
                  >
                    Cerrar sesión
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/register">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                  Registro
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 bg-green text-white rounded-lg hover:bg-greenDark transition">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Menú lateral móvil */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-6 z-50 transition-all duration-300 lg:hidden">
          <ul className="flex flex-col gap-4">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block text-gray-700 dark:text-white hover:text-black dark:hover:text-yellow-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>

          {!isLoggedIn && (
            <div className="flex flex-col gap-4 mt-6">
              <Link
                to="/register"
                className="w-1/4 px-4 py-2 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Registro
              </Link>
              <Link
                to="/login"
                className="w-1/4 px-4 py-2 bg-green text-white text-center rounded-lg hover:bg-greenDark"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavbarPrueba;
