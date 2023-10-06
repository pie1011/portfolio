import React from "react";
import "./About.css";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <Container id="About" className="portfolio-about d-flex flex-row min-vw-100 min-vh-100">
            <Container className="portfolio-about-container d-flex flex-row" style={{ border: "1px solid red" }}>
                <h1 className="display-1 name-header">About Me</h1>
                <p className="lead">
                    Test
                </p>
                <p className="lead">
                    <Button className="btn portfolio-button" size="lg">
                        Learn more
                    </Button>
                </p>
            </Container>
        </Container>
    )
}

export default About;
