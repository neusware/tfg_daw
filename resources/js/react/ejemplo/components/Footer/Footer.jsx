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
    <footer className={`bg-greenDark text-white ${isAdmin ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pt-6 text-center">
                {/* Brand Section */}
                <div className="space-y-4">
                <a href="/" className="text-3xl font-bold text-white tracking-tight">
                    EcoScan
                </a>
                <p className="text-sm leading-relaxed text-gray-300">
                    EcoScan conecta a consumidores con información transparente de productos mediante códigos QR, promoviendo decisiones de compra sostenibles y responsables.
                </p>
                </div>

                {/* Navigation Links */}
                <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Útiles</h3>
                <ul className="space-y-2 text-sm">
                    {FooterLinks.map((link) => (
                    <li key={link.id}>
                        <a
                        href={link.link}
                        className="text-gray-300 hover:text-acento transition-colors duration-300"
                        >
                        {link.name}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Legal Links */}
                <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-2 text-sm">
                    {LegalDoc.map((doc) => (
                    <li key={doc.id}>
                        <a
                        href={doc.link}
                        className="text-gray-300 hover:text-acento transition-colors duration-300"
                        >
                        {doc.name}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                <h3 className="text-lg font-semibold mb-4 text-white ">Suscríbete</h3>
                <p className="text-sm text-gray-300 mb-4">
                    Recibe noticias y actualizaciones sobre sostenibilidad y EcoScan.
                </p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col sm:flex-row gap-2 justify-center"
                >
                    <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="px-4 py-2 rounded-md bg-white text-gray-700 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-acento"
                    />
                    <button
                    type="submit"
                    className="px-4 py-2 bg-green text-white rounded-md hover:bg-acento transition-colors duration-300"
                    >
                    Suscribir
                    </button>
                </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-2 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-white">
                <p>© 2025 EcoScan. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer