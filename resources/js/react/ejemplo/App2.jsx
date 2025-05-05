import React from 'react'
import Landing from './landing'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Products from './components/Products/Products'
import Blog from './components/Blog/Blog'
import Partners from './components/Partners/Partners'

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

function App2() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Landing/>
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

export default App2