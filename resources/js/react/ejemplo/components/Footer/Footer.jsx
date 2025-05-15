import React from 'react'
import { Link } from 'react-router-dom'


const FooterLinks = [
    {
        id:1,
        name:"Inicio",
        link:"/#"
    },
    {
        id:2,
        name:"Productos",
        link:"/productos"
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
]

function Footer() {
  return (
    <div className="bg-second text-white dark:bg-gray-950">
        <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-10 py-12 border-b border-white/10">
            {/* Información principal */}
            <div>
                <Link to={"/"} className="text-3xl font-bold text-red">EcoScan</Link>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra, ex congue ultricies elementum, orci lectus iaculis ante, vel dignissim lorem sapien in nisi.
                </p>
                <p className="mt-4 text-sm text-white/60">Hecho con cariño.</p>
            </div>

            {/* Enlaces de interés 1 */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Enlaces útiles</h2>
                <ul className="space-y-3 text-sm">
                {FooterLinks.map((data, index) => (
                    <li key={index}>
                        <Link to={data.link} className='hover:text-red dark:text-gray-400 hover:dark:text-white transition'>{data.name}</Link>

                    </li>
                ))}
                </ul>
            </div>

            {/* Enlaces de interés 2 */}
            {/* <div>
                <h2 className="text-xl font-semibold mb-4">Más información</h2>
                <ul className="space-y-3 text-sm">
                {FooterLinks.map((data, index) => (
                    <li key={index}>
                    <a href={data.link} className="hover:text-red dark:text-gray-400 hover:dark:text-white transition">
                        {data.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div> */}
            </div>

            {/* Pie final */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-sm text-white/70">
            <p>© 2025 EcoScan. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Footer