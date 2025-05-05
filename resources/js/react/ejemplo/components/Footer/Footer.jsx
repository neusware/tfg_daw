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
    <div className='dark:bg-gray-950 '>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* detalles */}
                <div className='py-8 px-4'>
                    <a href="#" className='text-red font-semibold tracking-widest text-2xl sm:text-3xl '>EcoScan</a>
                    <p className='text-gray-600 lg:pr-24 pt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, ex congue ultricies elementum, orci lectus iaculis ante, vel dignissim lorem sapien in nisi.
                    </p>
                    <p className='text-gray-500 mt-4 dark:text-white/70'>Hecho con cariño.</p>
                </div>
                 {/* primera columna de enlaces */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Enlaces de interés</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index)=>(
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* segunda columna de enlaces */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Enlaces de interés</h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map((data,index)=>(
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer