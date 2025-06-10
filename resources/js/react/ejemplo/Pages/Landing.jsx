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
import Transicion from '../components/Transicion'

function Landing() {

    
  return (
    <div>


        <Transicion>
            <Buscador/>
        </Transicion>

        <Transicion>
            <Info/>
        </Transicion>
        {/*<Slider/>*/}
        {/*<Category2/>*/}

        <Transicion>
            <HowItWorks/>
        </Transicion>

        <Transicion>
            <Products/>
        </Transicion>

        <Transicion>
            <Banner/>
        </Transicion>
        {/* <Services/>*/}
        {/*<Blog/>*/}
        {/*<Partners/> */}
    </div>
  )
}

export default Landing
