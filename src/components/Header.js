import React from 'react'
import Typed from "react-typed"
import {Button} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade'
const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
               <Fade top>  
                <h1 className="name">Mike Atilano</h1>
               </Fade> 
                <Typed className="typed-text" 
                strings={["Fullstack Web Developer", "HTML", "CSS", "JavaScript", "React.JS", "Express.JS", "Node.JS", "MongoDB", "Bootstrap"]} 
                typeSpeed={40} 
                backSpeed={60}
                loop
                />
                <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500} to="contact"><Button className="btn-contact" variant="priamry">Contact Me</Button></Link>
            </div>      
        </div>
    )
}

export default Header
