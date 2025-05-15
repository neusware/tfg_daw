import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const sideBarLinks = [
    { id: 1, name: 'Productos', link: '/admin-panel/productos' },
    { id: 2, name: 'Contenedores', link: '/admin-panel/contenedores' },
    { id: 3, name: 'Recompensas', link: '/admin-panel/recompensas' },
    { id: 4, name: 'Suscripciones', link: '/admin-panel/suscripciones' },
    { id: 5, name: 'Categorías', link: '/admin-panel/categorias' },
    { id: 6, name: 'Empresas', link: '/admin-panel/empresas' },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 flex flex-col shadow-xl z-50">
      {/* Título */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700 tracking-wide uppercase text-center">
        Dashboard
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-2">
        {sideBarLinks.map((data) => {
          const isActive = location.pathname === data.link;
          return (
            <Link
              key={data.id}
              to={data.link}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 
                ${
                  isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
            >
              {data.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer opcional */}
      <div className="p-4 border-t border-gray-700 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Ecoscan
      </div>
    </aside>
  );
};

export default Sidebar;
