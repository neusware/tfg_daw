import React from 'react'
import { useLocation } from 'react-router-dom'


const FooterLinks = [
  { id: 1, name: "Inicio", link: "/" },
  { id: 2, name: "Productos", link: "/productos" },
  { id: 3, name: "Contenedores", link: "/contenedores" },
  { id: 4, name: "Recompensas", link: "/recompensas" },
  { id: 5, name: "Suscripciones", link: "/suscripciones" }
];


const LegalDoc = [
  { id: 1, name: "Aviso Legal", link: "/" },
  { id: 2, name: "Política de Privacidad", link: "/"},
  { id: 3, name: "Política de Cookies", link: "/" },
  { id: 4, name: "Términos y Condiciones", link: "/" }
];

function Footer() {
    const location = useLocation()
    const isAdmin = location.pathname.includes("admin-panel")

  return (    
    <div className="bg-second text-white dark:bg-gray-950">
        <div className={`${isAdmin ? 'hidden' : ''} container mx-auto px-6 md:px-12`}>       
            {/* Grid principal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-b border-white/10">
                {/* Información de marca */}
                <div>
                    <a href="#" className="text-3xl font-bold text-red transition hover:opacity-90">EcoScan</a>
                        <p className="mt-4 text-sm leading-relaxed text-white/80">
                        Escanea. Descubre. Decide. EcoScan te conecta con la verdad de los productos que consumes, 
                        promoviendo elecciones más sostenibles y conscientes mediante tecnología QR.
                        </p>
                    <p className="mt-4 text-xs text-white/50 italic">Hecho con cariño y propósito.</p>
                </div>
            {/* Enlaces útiles */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-white text-center md:text-left">Enlaces útiles</h2>
                <ul className="space-y-3 text-sm text-center md:text-left">
                {FooterLinks.map((data, index) => (
                    <li key={index}>
                    <a
                        href={data.link}
                        className="hover:text-red dark:text-gray-400 hover:dark:text-white transition-colors duration-200"
                    >
                        {data.name}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

                {/* Textos legales */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-white text-center md:text-left">Legal</h2>
                    <ul className="space-y-3 text-sm text-center md:text-left">
                    {LegalDoc.map((data, index) => (
                        <li key={index}>
                        <a
                            href={data.link}
                            className="hover:text-red dark:text-gray-400 hover:dark:text-white transition-colors duration-200"
                        >
                            {data.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

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