import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/landingPage/NavbarHome'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <h1>footer</h1>
    </div>
  )
}

export default Main