import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faGraduationCap, faFistRaised, faUsers } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div className="about-wrapper mt-5" id="about">
            
            <Container>
                
                <Row className="mb-4">
                    <Col xs={12} lg={12}>
                        <h2 className="about-heading text-center mb-3">About</h2>
                        <p className="about-description text-justify">I've worked in a virtual assistant tech start-up company as a team lead and account manager. Since then, I decided to leave and pursue my passion for web development and the IT industry. Through grit and the willingness to learn new things I hope to continue my FullStack web development journey.</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col className="mb-md-4 mb-sm-5" lg={3} md={6} xs={6}>
                    <FontAwesomeIcon className="mb-2" icon={faHourglassHalf} size="3x" color="crimson"/>
                    <p>Time Management and Efficiency</p>
                    </Col>
                    <Col className="mb-md-4 mb-sm-5" lg={3} md={6} xs={6}>
                    <FontAwesomeIcon className="mb-2" icon={faGraduationCap} size="3x" color="crimson"/>
                    <p>Quick Learner and Adaptability</p>
                        
                    </Col>
                    <Col className="mb-md-4 mb-sm-5" lg={3} md={6} xs={6}>
                    <FontAwesomeIcon className="mb-2" icon={faUsers} size="3x" color="crimson"/>
                    <p>Leadership Skills</p>
                    </Col>
                    <Col className="mb-md-4 mb-sm-5" lg={3} md={6} xs={6}>
                    <FontAwesomeIcon className="mb-2" icon={faFistRaised} size="3x" color="crimson"/>
                    <p>Grit and Perseverence</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
