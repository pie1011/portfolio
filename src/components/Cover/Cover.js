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
        <Container id="Home" className="d-flex min-vh-100 w-100 p-3 mt-auto mx-auto flex-column" style={{ border: "1px solid red" }}>

            <Container className="cover-container align-self-center my-auto px-3 text-center">
                <h1 className="name-header">{ name }</h1>
                <hr className="my-4" />
                <p className="lead">
                    {description}
                </p>
                <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <Button className="btn portfolio-button m-3 px-3" size="lg" href={project}>
                        <i className="bi bi-journals"></i> Projects
                    </Button>
                    <Button className="btn portfolio-button secondary m-3 px-3" size="lg" href={github}>
                        <i className="bi bi-github"></i> GitHub
                    </Button>
                </div>

            </Container>

            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                    <a href="#About" className="down-arrow" aria-label="Move to the About section.">
                        <i className="bi bi-arrow-down-circle-fill"></i>
                    </a>
                </Container>

        </Container>
    )
}

export default Cover;