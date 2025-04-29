import React from 'react'
import Heading from '../Shared/Heading'


const BlogData = [

    {
        title: "Como elegir el reloj perfecto",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque tempor enim rhoncus malesuada. Nulla feugiat leo nec massa posuere pharetra. Etiam luctus ac velit at dignissim. Pellentesque molestie enim lectus, eget pretium est sagittis a. Donec massa risus, consectetur dictum dignissim sit amet, fermentum vitae lectus.",
        published: "Marzo de 2025",
        image: "imagen"
    },
    {
        title: "Como elegir el cubo perfecto",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque tempor enim rhoncus malesuada. Nulla feugiat leo nec massa posuere pharetra. Etiam luctus ac velit at dignissim. Pellentesque molestie enim lectus, eget pretium est sagittis a. Donec massa risus, consectetur dictum dignissim sit amet, fermentum vitae lectus.",
        published: "Marzo de 2025",
        image: "imagen"
    },
    {
        title: "Como elegir el alimento perfecto",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt neque tempor enim rhoncus malesuada. Nulla feugiat leo nec massa posuere pharetra. Etiam luctus ac velit at dignissim. Pellentesque molestie enim lectus, eget pretium est sagittis a. Donec massa risus, consectetur dictum dignissim sit amet, fermentum vitae lectus.",
        published: "Marzo de 2025",
        image: "imagen"
    }
]

function Blog() {
  return (
    <div className='my-12'>
        <div className="container">
            {/* header */}
            <Heading title="Últimas Noticias" subtitle="Explora nuestro blog"/>

            {/* seccion blog */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {/* noticia blog */}
                {
                    BlogData.map((data)=>(
                            <div key={data.id} className='bg-white dark:bg-gray-900'>
                                {/* imagen */}
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src="" alt="" className='w-full h-[220px] object-cover rounded-3xl hover:scale-105 duration-500'/>
                                </div>
                                {/* contenido */}
                                <div className='space-y-2'>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='font-bold line-clamp-1'>{data.title}</p>
                                    <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray:400'>{data.subtitle}</p>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog