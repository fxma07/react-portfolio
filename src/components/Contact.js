import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import '../App.css'


function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_0oyk4ov', 'template_eq2udyt', e.target, 'user_VzHSIOdvdmyOfCsEJGv6q')
        .then(res=>{
            console.log(res);
            Swal.fire({
                icon: "success",
                title: "Email sent!"
            })
        }).catch(err=> console.log(err));
    }
    return (
      
        <Container className="text-center justify-content-center container-contact" id="contact" >
            <div className="contact-form-container mt-5">
                <Form className="mt-3 form" onSubmit={sendEmail}>
                    <h2 className="contact-heading mb-4">Contact Me</h2>
                    <Form.Group>
                        <Form.Control name="firstName" type="text" placeholder="First Name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="lastName" type="text" placeholder="Last Name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="user_email" type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="message" as="textarea"type="text" placeholder="Message" style={{height: '150px'}}/>
                    </Form.Group>
                    <Button type="submit" className="btn-contacts">Submit</Button>
                </Form>
           </div>
        </Container>    

    )
}

export default Contact
