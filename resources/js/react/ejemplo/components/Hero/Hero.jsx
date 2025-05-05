import React from 'react'
import Slider from "react-slick";
import Button from '../Shared/Button';

const img= "https://png.pngtree.com/png-clipart/20231116/original/pngtree-cocacola-can-resting-on-a-blank-photo-png-image_13582802.png"
const heroData=[
    {
        id:1,
        img: img,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone"
    },
    {
        id:2,
        img: img,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual"
    },
    {
        id:3,
        img: img,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptops"
    }
]
function Hero() {

    // configuracion slider
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {
                        heroData.map((data)=>(
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                        {/* seccion de imagen */}
                                        <div>
                                            <Button text="Comprar ahora" bgColor="bg-primary" textColor="text-white"/>
                                        </div>
                                        <div className='order-1 sm:order-2'>
                                            <div>
                                                <img src={data.img} alt="" className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110- object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0.4)] relative z-40'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero