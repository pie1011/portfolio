import React from "react";
import "./About.css";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <Container id="About" className="cover-container d-flex w-100 min-vh-100 h-100 p-3 mx-auto flex-column">
            <Container className="my-auto px-3 text-center">
                <h1 className="display-1 name-header">About Me</h1>
                <p className="lead">
                    Test
                </p>
                <p className="lead">
                    <Button className="btn btn-portfolio" size="lg">
                        Learn more
                    </Button>
                </p>
            </Container>
        </Container>
    )
}

export default About;
