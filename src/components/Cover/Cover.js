import React from "react";
import "./Cover.css";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Cover = (props) => {

    if (!props.data) return null;

    const project = props.data.project;
    const github = props.data.github;
    const name = props.data.name;
    const description = props.data.description;
    console.log("Description: " + description);

    return (
        <Container className="d-flex min-vh-100 w-100 p-3 mt-auto mx-auto flex-column" style={{ border: "1px solid red" }}>

            <Container className="cover-container align-self-center my-auto px-3 text-center">
                <h1 className="name-header">Katie Harshman</h1>
                <p className="lead">
                    {description}
                </p>
                <p className="lead">
                    <Button className="btn portfolio-button" size="lg">
                        Learn more
                    </Button>
                </p>

            </Container>

            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                    <a href="#About" className="down-arrow">
                        <i className="bi bi-arrow-down-circle-fill"></i>
                    </a>
                </Container>

        </Container>
    )
}

export default Cover;