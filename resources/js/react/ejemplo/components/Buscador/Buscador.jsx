import React from 'react';
import Button from '../Shared/Button';

function Buscador() {
  return (
    <div className='container'>
      <div className='bg-second mb-12 overflow-hidden rounded-3xl justify-center items-center '>
        <div className='container p-24'>
            <div className='flex flex-col'> {/* justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 */}
            <h1 className='font-sans text-center uppercase text-white dark:text-white/5 text-[50px] font-light tracking-widest'>
              Busca tu {' '}
              <span className="relative inline-block text-red font-medium after:absolute after:left-0 after:bottom-0 after:h-[4px] after:bg-red after:w-0 after:transition-all after:duration-300 hover:after:w-full">
                producto
              </span>
            </h1>
              {/* Formulario */}
              <div>
                <form className="flex items-center mt-8 ">
                  <label className='text-white font-sans text-left p-4'>Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Nombre del Producto" 
                    className="w-1/3 p-3 rounded-lg bg-gray-200 dark:bg-gray-800 focus:outline-none"
                  />
                  <label className='text-white font-sans text-left p-4'>Identificación</label>
                  <input 
                    type="text" 
                    placeholder="Id de identificación" 
                    className="w-1/3 p-3 rounded-lg bg-gray-200 dark:bg-gray-800 focus:outline-none"
                  />
                  <label className='text-white font-sans text-left p-4'>Marca</label>
                  <input 
                    type="text" 
                    placeholder="Marca" 
                    className="w-1/3 p-3 rounded-lg bg-gray-200 dark:bg-gray-800 focus:outline-none"
                  ></input>
                  <Button text="Buscar" bgColor="bg-primary" textColor="text-white"/>
                </form>
              </div>

            </div>
            {/* Sección de imagen (puedes agregar una imagen si lo deseas) *
            <div className='order-1 sm:order-2'>
              <div className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0.4)] relative z-40'>
                <img src={data.img} alt={data.title} className="w-full h-full object-cover"/> 
              </div>
            </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Buscador;
