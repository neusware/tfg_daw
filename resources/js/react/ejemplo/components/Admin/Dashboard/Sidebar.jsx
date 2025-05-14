import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const sideBarLinks = [
        {
            id:1,
            name:"Productos",
            link:"/admin-panel/productos"
        },
        {
            id:2,
            name:"Contenedores",
            link: '/admin-panel/contenedores'
        },
        {
            id:3,
            name:"Recompensas",
            link:"/admin-panel/recompensas"
        },
        {
            id:4,
            name:"Suscripciones",
            link:"/admin-panel/suscripciones"
        },
        {
            id:5,
            name:"Categorías",
            link:"/admin-panel/categorias"
        },
        {
            id:6,
            name:"Empresas",
            link:"/admin-panel/empresas"
        }
    ]
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0 flex flex-col">
      {/* Título */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-2">
        {
            sideBarLinks.map((data,index)=>(
                <Link className='block p-2 rounded hover:bg-gray-700 transition'  key={index} to={data.link}>{data.name}</Link>
            ))
        }
      </nav>
    </aside>
  );
};

export default Sidebar;
