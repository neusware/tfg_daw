import React from 'react'


const FooterLinks = [
    {
        id:1,
        name:"Inicio",
        link:"/#"
    },
    {
        id:2,
        name:"Productos",
        link:"/#shop"
    },
    {
        id:3,
        name:"Contacto",
        link:"/#about"
    },
    {
        id:4,
        name:"Blogs",
        link:"/#blogs"
    },
]

function Footer() {
  return (
    <div className='bg-second text-white dark:bg-gray-950 '>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* detalles */}
                <div className='py-8 px-4'>
                    <a href="#" className='text-red font-semibold tracking-widest text-2xl sm:text-3xl '>EcoScan</a>
                    <p className='lg:pr-24 pt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, ex congue ultricies elementum, orci lectus iaculis ante, vel dignissim lorem sapien in nisi.
                    </p>
                    <p className=' mt-4 dark:text-white/70'>Hecho con cariño.</p>
                </div>
                {/* menus */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    {/* primera columna de enlaces */}
                    <div>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Enlaces de interés</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.link} className='dark:text-gray-400 hover:dark:text-white hover:text-red duration-300'>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* segunda columna de enlaces */}
                    <div>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Enlaces de interés</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.link} className='dark:text-gray-400 hover:dark:text-white hover:text-red duration-300'>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex bg-black w-full p-2 space-x-4 justify-center'>
            <h4>EcoScan</h4>
            <h4>2025 | Todos los derechos reservados</h4>
        </div>
    </div>
  )
}

export default Footer