import React from "react";
import "./Contact.css";
import Email from "./Email";
import Container from 'react-bootstrap/Container';


const Contact = (props) => {



    return (
        <Container id="Contact" className="portfolio-contact d-flex flex-column min-vw-100 min-vh-100">
            <Container className="portfolio-contact-container d-flex flex-column flex-lg-row">

                <div className="p-1 p-lg-5 text-center">
                <h2 className="display-1 name-header mb-3">Contact</h2>
                </div>

                <div className="p-1 p-lg-5">
                    <Email />
                </div>

            </Container>
            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                <a href="#Resume" className="down-arrow" aria-label="Move to the About section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
            </Container>
        </Container>
    )
}

export default Contact;
