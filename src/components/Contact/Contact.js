import React from "react";
import { useState } from 'react';
import "./Contact.css";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Contact = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Container id="Contact" className="portfolio-contact d-flex flex-column min-vw-100 min-vh-100">
            <Container className="portfolio-contact-container d-flex flex-column flex-lg-row">

                <div className="p-1 p-lg-5 text-center">
                    <h2 className="display-1 name-header mb-3">Contact</h2>
                </div>

                <Container fluid className="p-1 p-lg-5">
                    <Form
                        name="contactForm"
                        method="POST"
                        data-netlify="true"
                        action={handleShow}
                    >
                        <input type="hidden" name="contactForm" value="contactForm"></input>
                        <Form.Group className="mb-3" controlId="contactForm.Name" data-bs-theme="dark">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" className="portfolio-input" />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="contactForm.Email" data-bs-theme="dark">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" className="portfolio-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contactForm.Subject" data-bs-theme="dark">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="" className="portfolio-input" />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="contactForm.Message" data-bs-theme="dark">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} className="portfolio-input mb-3" />
                            <div className="g-recaptcha" data-sitekey="6LeGLOEdAAAAACIfTEFMm4j_jMg3IVmdd-KLzLQ0"></div>
                            <Button className="portfolio-button mt-5" type="submit" onClick={handleShow}><i className="bi bi-send-fill"></i> Send</Button>
                        </Form.Group>
                    </Form>
                </Container>

            </Container>
            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                <a href="#Resume" className="down-arrow" aria-label="Move to the About section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
            </Container>

            <Modal 
                show={show} 
                onHide={handleClose} 
                className="portfolio-contact-modal" 
                aria-labelledby="contained-modal-title-vcenter"
                data-bs-theme="dark"
                centered>
                <Modal.Header className="border-0 mb- pb-0" closeButton></Modal.Header>
                <Modal.Body className="text-center">
                    <h4 className="mx-auto mt-0 my-1 mb-md-3 pt-0">Thanks for the message!</h4>
                </Modal.Body>
            </Modal>

        </Container>


    )
}

export default Contact;
