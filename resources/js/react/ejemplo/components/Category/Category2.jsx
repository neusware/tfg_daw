import React from 'react'
import Button from '../Shared/Button'

function Category2() {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* primera columna */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
              <div className='space-y-3 mb-4'>
                <p className='text-white-400'>El</p>
                <p className='text-2xl font-semibold mb-[2px]'>reciclaje</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>divertido</p>
                <Button text="Buscar" bgColor="bg-primary" textColor="text-white" />
              </div>
            </div>
            {/* <img src="" alt="" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' /> */}
          </div>
          {/* segunda columna */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>Disfruta</p>
                <p className='text-2xl font-semibold mb-[2px]'>con</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Escáner</p>
                <Button text="Buscar" bgColor="bg-white" textColor="text-brandGreen" />
              </div>
            </div>
            {/* <img src="" alt="" className='w-[320px] absolute bottom-0' /> */}
          </div>
          {/* primera columna */}
          <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white-400'>Disfruta</p>
                <p className='text-2xl font-semibold mb-[2px]'>con</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Escáner</p>
                <Button text="Buscar" bgColor="bg-white" textColor="text-brandBlue" />
              </div>
            </div>
            {/* <img src="#" alt="" className='w-[320px] absolute bottom-0' /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category2
