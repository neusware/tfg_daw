import React from 'react'
import Button from '../Shared/Button'

function Info() {
  return (
    <div className="container">
      <div className="my-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-black font-sans text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">¿Qué es EcoScan?</h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              EcoScan es una aplicación que te permite consultar información detallada sobre productos del supermercado, incluyendo ingredientes, valores nutricionales, sostenibilidad y mucho más. Simplifica tus decisiones de compra y cuida del planeta al mismo tiempo.
            </p>
            <div className="mt-6">
              <Button text="Descubrir más" />
            </div>
          </div>

          {/* Imagen */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/img/istockphoto-1414252495-2048x2048.jpg"
              alt="Producto EcoScan"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center text-sm md:text-base">
              Imagen temporal de ejemplo
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
