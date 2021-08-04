import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col, Container, Card, Button} from 'react-bootstrap'
import img1 from './assets/email-template.png'
import img2 from './assets/budget-tracker.png'
import img3 from './assets/ecommerce.png'

function Projects() {
    return (
<div className="project-wrapper justify-content-center text-center pb-4" id="projects">
<Container>
<h2 className="project-heading">Projects</h2>
    <Row>
      <Col sm={12} md={4}>
        <Card className="card">
        <img src={img1} className="card-img-top"/>
          <Card.Body className="pb-0 pr-0 pl-0">
            <Card.Title className="pl-3 pr-3">
              <h2>Email Template</h2>
            </Card.Title>
            <Card.Text className="pl-3 pr-3">
              Responsive HTML/CSS Email template used in email marketing platforms like Mailchimp.
            </Card.Text>
            <Button href="https://fxma07.github.io/email-template-shibui/" target="/" className="btn-project mb-3">View</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card className="card">
        <img src={img2} className="card-img-top"/>
          <Card.Body className="pb-0 pr-0 pl-0">
            <Card.Title className="pl-3 pr-3">
              <h2>Budget Tracker</h2>
            </Card.Title>
            <Card.Text className="pl-3 pr-3">
              It can track the user's income and expenses. Made with React.JS and Node.JS.
            </Card.Text>
            
            <Button href="https://angry-nobel-517ce1.netlify.app/" target="/" className="btn-project mb-3">View</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} >
        <Card className="card">
        <img src={img3} className="card-img-top"/>
          <Card.Body className="pb-0 pr-0 pl-0">
            <Card.Title className="pl-3 pr-3">
              <h2>Ecommerce API</h2>
            </Card.Title>
            <Card.Text className="pl-3 pr-3">
              Ecommerce shopping cart for a local bakery. Made with React and Node (WIP)
            </Card.Text>
            
            <Button href="https://github.com/fxma07/react-vika-and-yana" target="/" className="btn-project mb-3">View</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
</div>    
       
    )
}

export default Projects
