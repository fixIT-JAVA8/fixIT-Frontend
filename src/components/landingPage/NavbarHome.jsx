import React, { useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import logo from "../../assets/logo.png"

const NavbarHome = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };


  return (
    <Navbar className='flex justify-center items-center'>
      <NavbarBrand>
        <img src={logo} alt="fixIT Logo" style={{ height: '50px' }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem isActive={activeLink === "Home"}>
          <Link
            href="#"
            onClick={() => handleActiveLink("Home")}
            style={{ color: activeLink === "Home" ? "#85c9c5" : "inherit" }}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === "Services"}>
          <Link
            href="#"
            onClick={() => handleActiveLink("Services")}
            style={{ color: activeLink === "Services" ? "#85c9c5" : "inherit" }}
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === "About Us"}>
          <Link
            href="#"
            onClick={() => handleActiveLink("About Us")}
            style={{ color: activeLink === "About Us" ? "#85c9c5" : "inherit" }}
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeLink === "Contact Us"}>
          <Link
            href="#"
            onClick={() => handleActiveLink("Contact Us")}
            style={{ color: activeLink === "Contact Us" ? "#85c9c5" : "inherit" }}
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color='blue2' className='bg-blue2 text-white font-bold' href="#">
            Log in
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarHome