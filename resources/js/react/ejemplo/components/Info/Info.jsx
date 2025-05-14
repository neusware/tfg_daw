import React from 'react'
import Button from '../Shared/Button'

function Info() {
  return (
    <div className="container mx-auto px-16">
      <div className="my-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-black font-sans text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              ¿Qué es <span className="text-red">EcoScan</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong>EcoScan</strong> te ofrece acceso instantáneo a <strong>información clara y completa</strong> sobre los productos que compras. Solo escanea el código QR del envase y descubre <strong>ingredientes</strong>, <strong>valores nutricionales</strong>, <strong>impacto ambiental</strong>, <strong>alérgenos</strong> y más. <strong>Compra con conciencia, vive mejor.</strong>
            </p>
            <br />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Además, podrás <strong>comparar productos</strong>, <strong>identificar alternativas más sostenibles</strong> y <strong>adaptar tus elecciones</strong> a tus necesidades personales o restricciones alimentarias. <strong>EcoScan no solo informa: te empodera</strong> para cuidar de ti y del planeta cada vez que haces la compra.
            </p>
          </div>

          {/* Imagen */}
          <div className="mt-8 md:mt-0 flex justify-center">
            <img
              src="https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2025/02/27/persona-eligiendo-leche-en-el-supermercado.jpeg"
              alt="Persona usando EcoScan en el supermercado"
              className="w-full max-w-2xl h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
