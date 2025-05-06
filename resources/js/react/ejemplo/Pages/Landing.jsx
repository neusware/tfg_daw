import React from 'react'
import NavbarPrueba from '../components/NavBar/NavbarPrueba'
import Hero from '../components/Hero/Hero'
import Buscador from '../components/Buscador/Buscador'
import Category from '../components/Category/Category'
import Category2 from '../components/Category/Category2'
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
        <Hero/>
        <Category/>
        <Category2/>
        <Services/>
        <Banner data={BannerData}/>
        <Products/>
        <Banner data={BannerData2}/>
        <Blog/>
        <Partners/>
    </div>
  )
}

export default Landing
