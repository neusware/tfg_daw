import React from 'react'
import NavbarPrueba from './components/NavBar/NavbarPrueba'
import Hero from './components/Hero/Hero'
import Buscador from './components/Hero/Buscador'
import Map from './components/Map/Map';

function Landing() {
  return (
    <div>
        <NavbarPrueba/>
        <Buscador/>
        <Hero/>
        <Map/>
    </div>
  )
}

export default Landing