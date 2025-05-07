import React from 'react'
import Button from '../Shared/Button'

function ProductCard({ data }) {
  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center'>
        {data.map((item) => (
          <div key={item.id} className='group relative w-full max-w-xs bg-white border rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-400'>
            <div className='relative'>
              <img
                src={item.img}
                alt={item.title}
                className='h-48 w-full object-cover'
              />
              {/* Botón en hover */}
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center'>
                <Button text="Ver más" bgColor="bg-primary" textColor="text-white"/>
              </div>
            </div>
            <div className='p-4 text-center'>
              <h2 className='text-lg font-semibold text-gray-800 mb-1'>{item.title}</h2>
              <p className='text-primary text-xl font-bold'>{item.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
