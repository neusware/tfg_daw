import React from 'react'
import NavbarPrueba from '../components/NavBar/NavbarPrueba'
import Slider from '../components/Slider/Slider'
import Buscador from '../components/Buscador/Buscador'
import Info from '../components/Info/Info'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import Blog from '../components/Blog/Blog'
import Partners from '../components/Partners/Partners'

// datos de ejemplo

const BannerData = {
    discount:"30% OFF",
    title:"Fine Smile",
    date:"10 enero hasta 28 enero",
    image:"imagen",
    title2:"Air Solo Bass",
    title3:"Winter Sale",
    title4:"no lo dejes pasar",
    bgColor:"#f42c37"
}
const BannerData2 = {
    discount:"30% OFF",
    title:"Happy Hours",
    date:"10 enero hasta 28 enero",
    image:"imagen",
    title2:"Smart Solo",
    title3:"Winter Sale",
    title4:"no lo dejes pasar",
    bgColor:"#2dcc6f"
}

function Landing() {
  return (
    <div>
        <Buscador/>
        <Info/>
        {/*<Slider/>*/}
        {/*<Category2/>*/}
        <HowItWorks/>
        <Services/>
        <Products/>
        <Banner data={BannerData2}/>
        {/*<Blog/>*/}
        <Partners/>
    </div>
  )
}

export default Landing
