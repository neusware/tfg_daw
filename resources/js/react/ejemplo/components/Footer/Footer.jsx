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
    
    <div className={`bg-second text-white dark:bg-gray-950`}>
        <div className={`${isAdmin ? 'hidden' : ''} container px-48`}>
            <div className="grid justify-center md:grid-cols-3 gap-10 py-12 border-b border-white/10">
                {/* Información principal */}
                <div>
                    <a href="#" className="text-3xl font-bold text-red">EcoScan</a>
                    <p className="mt-4 text-sm leading-relaxed text-white/80">
                        EcoScan es una plataforma que conecta a los consumidores con la información real de los
                        productos mediante el escaneo de códigos QR. Promovemos la transparencia y la sostenibilidad, 
                        facilitando decisiones de compra más responsables y conscientes.
                    </p>
                    <p className="mt-4 text-sm text-white/60">Hecho con cariño.</p>
                </div>

                {/*menu*/}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center">Enlaces útiles</h2>
                    <ul className="space-y-3 text-sm text-center">
                    {FooterLinks.map((data, index) => (
                        <li key={index}>
                        <a href={data.link} className="hover:text-red dark:text-gray-400 hover:dark:text-white transition ">
                            {data.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>

                {/*textos legales */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-center">Más información</h2>
                    <ul className="space-y-3 text-sm text-center">
                    {LegalDoc.map((data, index) => (
                        <li key={index}>
                        <a href={data.link} className="hover:text-red dark:text-gray-400 hover:dark:text-white transition">
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