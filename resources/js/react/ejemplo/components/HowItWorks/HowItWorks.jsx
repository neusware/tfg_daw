import React from 'react'
import Button from '../Shared/Button'

function HowItWorks() {
  return (
    <div className="px-4 py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          ¿Cómo funciona <span className="text-primary">EcoScan</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Paso 1 */}
          <div className="h-[240px] bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl p-6 flex flex-col justify-end shadow-md transition hover:scale-[1.01]">
            <div>
              <p className="text-sm text-gray-400 mb-1">Paso 1</p>
              <h3 className="text-2xl font-semibold mb-1">Busca un producto</h3>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Buscar</p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="h-[240px] bg-gradient-to-br from-redDark to-red text-white rounded-3xl p-6 flex flex-col justify-end shadow-md transition hover:scale-[1.01]">
            <div>
              <p className="text-sm text-white mb-1">Paso 2</p>
              <h3 className="text-2xl font-semibold mb-1">Explora su información</h3>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Detalles</p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="h-[240px] bg-gradient-to-br from-primary to-second text-white rounded-3xl p-6 flex flex-col justify-end shadow-md transition hover:scale-[1.01]">
            <div>
              <p className="text-sm">Paso 3</p>
              <h3 className="text-2xl font-semibold">Toma decisiones conscientes</h3>
              <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">Elige</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks




