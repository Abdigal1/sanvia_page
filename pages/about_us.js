import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/header'
import HeroSection2 from '../components/HeroSection2/HeroSection2'
import About__us__section from '../components/AboutUs/About__us__section'
import Cta2 from '../components/cta2/cta2'

function About_us() {
  return (
    <div>
      <Header />
      <HeroSection2 title="About Us"/>
      <About__us__section />
      <Cta2 />
      <Footer />
    </div>
  )
}

export default About_us