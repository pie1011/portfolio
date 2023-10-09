import React from "react";
import "./Contact.css";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => this.setState({ name: "", email: "", subject: "", message: "" }))
            .then(() => alert("Thank you for your message!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {

        const { name, email, subject, message } = this.state;

        return (
            <Container id="Contact" className="portfolio-contact d-flex flex-column min-vw-100 min-vh-100">
                <Container className="portfolio-contact-container d-flex flex-column flex-lg-row">

                    <div className="w-100 w-lg-25 p-1 p-lg-5 text-center">
                        <h2 className="display-1 name-header mb-3">Contact</h2>
                        <p className="lead text-center text-lg-end">I am currently looking for new opportunities. If you have any questions or would like to get in touch, please fill out this form.</p>
                    </div>

                    <Container fluid className="p-1 p-lg-5">
                        <Form onSubmit={this.handleSubmit}>
                            <input type="hidden" name="contactForm" value="contactForm"></input>
                            <Form.Group className="mb-3" controlId="contactForm.Name" data-bs-theme="dark">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={this.handleChange} className="portfolio-input" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="contactForm.Email" data-bs-theme="dark">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={email} onChange={this.handleChange} placeholder="name@example.com" className="portfolio-input" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactForm.Subject" data-bs-theme="dark">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" name="subject" value={subject} onChange={this.handleChange} className="portfolio-input" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="contactForm.Message" data-bs-theme="dark">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name="message" value={message} onChange={this.handleChange} rows={3} className="portfolio-input mb-3" />
                                <div className="g-recaptcha" data-sitekey="6LeGLOEdAAAAACIfTEFMm4j_jMg3IVmdd-KLzLQ0"></div>
                                <Button className="portfolio-button mt-5" type="submit"><i className="bi bi-send-fill"></i> Send</Button>
                            </Form.Group>
                        </Form>
                    </Container>

                </Container>
            </Container>


        )
    }

}

export default Contact;
