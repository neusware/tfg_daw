import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='min-h-[500px] flex justify-center items-center'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl  bg-gradient-to-br from-redDark to-red shadow-xl overflow-hidden'>
          {/* primera columna */}
          <div className='p-6 sm:p-8'>
            <p className='text-sm'>¡Promoción exclusiva!</p>
            <h1 className='uppercase text-4xl lg:text-6xl font-bold'>Ecoscan</h1>
            <p className='text-sm'>Haz mejores elecciones hoy</p>
          </div>

          {/* segunda columna */}
          <div className='h-full flex items-center justify-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048941.png"
              alt="EcoScan ilustración"
              className='w-[200px] md:w-[280px] drop-shadow-xl object-contain'
            />
          </div>

          {/* tercera columna */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>Explora nuestros productos</p>
            <p className='text-3xl sm:text-5xl font-bold'>Escanea, conoce y decide mejor</p>
            <p className='text-sm tracking-wide leading-5'>
              Consulta toda la información sobre lo que consumes. Productos escaneables, puntuación EcoScan y más.
            </p>
            <div>
              <Link
                to="/productos"
                className='bg-white text-primary font-semibold py-2 px-6 rounded-full transition duration-300 hover:bg-primary hover:text-white'
              >
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
