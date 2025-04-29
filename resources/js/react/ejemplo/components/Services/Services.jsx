import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle
 } from "react-icons/fa";

 const serviceData = [
    {
        id:1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
        title: "Envio gratis",
        description: "envio gratis en todos los pedidos"
    },
    {
        id:2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
        title: "Dinero seguro",
        description: "30 días de garantia"
    },
    {
        id:3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title: "pago seguro",
        description: "todos los pagos seguros"
    },
    {
        id:4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary'/>,
        title: "envio gratis",
        description: "envio gratis en todos los pedidos"
    }
 ]

function Services() {
  return (
    <div>
        <div className="container mt-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    serviceData.map((data)=>(
                        <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'>
                            {data.icon}
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services