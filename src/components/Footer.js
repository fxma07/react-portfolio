import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faGitlab } from '@fortawesome/free-brands-svg-icons'

import {Button} from 'react-bootstrap'

function Footer() {
    return (
    <> 
      
        <div className="footer container-fluid">
            <a href="https://www.linkedin.com/in/jose-miguel-atilano-6b5459bb/" target="/"><FontAwesomeIcon className="footer-icons" icon={faLinkedinIn} size="2x" color="#fff"/></a>
            <a href="https://github.com/fxma07"><FontAwesomeIcon className="footer-icons" target="/" icon={faGithubAlt} size="2x" color="#fff"/></a>
            <a href="https://gitlab.com/fxma07" target="/"><FontAwesomeIcon className="footer-icons" icon={faGitlab} size="2x" color="#fff"/></a>
        </div>
     </>
    )  
}

export default Footer
