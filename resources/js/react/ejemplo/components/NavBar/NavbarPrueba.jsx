import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';




const MenuLinks = [
    {
        id:1,
        name:"Inicio",
        link:"/"
    },
    {
        id:2,
        name:"Productos",
        link: '/productos'
    },
    {
        id:3,
        name:"Contenedores",
        link:"/contenedores"
    },
    {
        id:4,
        name:"Recompensas",
        link:"/recompensas"
    },
    {
        id:5,
        name:"Suscripciones",
        link:"/suscripciones"
    },
]
const DropdownLinks = [
    {
        id:1,
        name:"Administrar Productos",
        link:"/admin-panel"
    },
    {
        id:2,
        name:"Registrar",
        link:"/register"
    },
    {
        id:3,
        name:"login",
        link:"/login"
    },
    {
        id:4,
        name:"Suscripciones",
        link:"/#blogs"
    },
]

function NavbarPrueba() {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-8'>
        <div className='flex items-center gap-8 mx-14 justify-around'>
            {/*Logo*/}
            <Link to={"/"} className='text-red font-semibold tracking-widest text-2xl sm:text-3xl '>EcoScan</Link>
            {/*items del menu */}
            <div className='lg:block'>
                <ul className='flex items-center space-x-12'>
                    {
                        MenuLinks.map((data, index)=>(
                            <li key={index}>
                               <Link className='font-sans inline-block px-6 font-semibold text-gray-500 hover:text-black dark:hover-text:white duration-200' to={data.link}>{data.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/*seccion derecha de la navbar */}
            <div className='flex items-center'>
                {/* Search Bar seccion */}
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Buscar...'
                    className='w-[120px] transition-all duration-300 rounded-full group-hover:border
                    group-hover:border-gray-500 px-3 py-1 focus:outline-none focus:border-1 dark:border-gray-800  group-hover:dark:dark:bg-gray-800'
                    />
                    <IoMdSearch
                    className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                    />
                </div>

                {/* seccion boton comprar */}

                {/* <button className='relative p-3'>
                <FaUserCircle className='text-xl text-gray-600 dark:text-gray-400'/>
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                </button> */}

                    <div className='relative cursor-pointer group mr-4'>
                    <a href="#" className='flex items-center gap-[2px] font-sans font-semibold text-gray-500 dark:hover:text-white py-2'> <FaUserCircle className='text-4xl '/>
                        <span>
                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                        </span>
                        </a>
                        {/* enlaces dropdown */}
                        <div className='font-sans absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                            <ul>
                                {
                                    DropdownLinks.map((data,index)=>(
                                        <li key={data.id}>
                                            <Link to={data.link} className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'>{data.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                {/* modo oscuro seccion */}
                <div>
                    {/* <DarkMode/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarPrueba