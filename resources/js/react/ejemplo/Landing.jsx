import React from 'react'
import NavbarPrueba from './components/NavBar/NavbarPrueba'
import Hero from './components/Hero/Hero'
import Buscador from './components/Hero/Buscador'

function Landing() {
  return (
    <div>
        <NavbarPrueba/>
        <Buscador/>
        <Hero/>
    </div>
  )
}

export default Landing