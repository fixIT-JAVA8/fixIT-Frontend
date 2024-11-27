import React from 'react'
import Hero from '../components/landingPage/Hero';
import Services from '../components/landingPage/Services';
import AboutUs from '../components/landingPage/AboutUs';
import ContactUs from '../components/landingPage/ContactUs';

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}

export default LandingPage