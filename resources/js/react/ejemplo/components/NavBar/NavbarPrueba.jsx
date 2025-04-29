import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';



const MenuLinks = [
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Shop",
        link:"/#shop"
    },
    {
        id:3,
        name:"About",
        link:"/#about"
    },
    {
        id:4,
        name:"Blogs",
        link:"/#blogs"
    },
]
const DropdownLinks = [
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Shop",
        link:"/#shop"
    },
    {
        id:3,
        name:"About",
        link:"/#about"
    },
    {
        id:4,
        name:"Blogs",
        link:"/#blogs"
    },
]

function NavbarPrueba() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
        <div className='py-4'>

        </div>
        <div className='container flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <a href="#"
                className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl'
                >EcoScan</a>
                {/*items del menu */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                        {
                            MenuLinks.map((data, index)=>(
                                <li key={index}>
                                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover-text:white duration-200'>{data.name}</a>
                                </li>
                            ))
                        }
                        {/* Desplegable */}
                        <li className='relative cursor-pointer group'>
                            <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>Enlaces Rápidos
                            <span>
                            <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                            </span>
                            </a>
                            {/* enlaces dropdown */}
                            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                <ul>
                                    {
                                        DropdownLinks.map((data,index)=>(
                                            <li key={data.id}>
                                                <a href={data.link} className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semiboldl'>{data.name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/*seccion derecha de la navbar */}
                <div className='flex justify-between items-center gap-4'>
                    {/* Search Bar seccion */}
                    <div className='relative group hidden sm:block'>
                        <input type="text"
                        placeholder='buscar'
                        className='w-0 group-hover:w-[300px] transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none focus:border-1 dark:border-gray-800  group-hover:dark:dark:bg-gray-800'
                        />
                        <IoMdSearch
                        className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                        />
                    </div>

                    {/* seccion boton comprar */}
                    <button className='relative p-3'>
                    <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400'/>
                    <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                    </button>

                    {/* modo oscuro seccion */}
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarPrueba