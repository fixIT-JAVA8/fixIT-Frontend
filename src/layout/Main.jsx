import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/landingPage/NavbarHome'
import Footer from '../components/landingPage/Footer'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main