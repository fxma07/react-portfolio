import React from 'react'

import {Container} from 'react-bootstrap'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-scroll'
import logo from "./logo.png"

import '../App.css'

const NavBar = () => {
    return (
       <Navbar bg="dark" expand="lg" variant="dark">
           <Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo"/></Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto navlink-container">
               <Link className="nav-link active" href="#home">Home</Link>
               <Link className="nav-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="about">About</Link>
               <Link className="nav-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="projects">Projects</Link>
               <Link className="nav-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="contact">Contact</Link>
             </Nav>
           </Navbar.Collapse>
       </Navbar>
    )
}

export default NavBar
