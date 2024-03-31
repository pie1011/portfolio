import React from "react";
import "./Cover.css";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Cover = (props) => {

    if (!props.data) return null;

    const resume = props.data.resume;
    const github = props.data.github;
    const name = props.data.name;
    const description = props.data.description;

    return (
        <Container id="Home" className="portfolio-cover d-flex min-vh-100 min-vw-100 p-3 mt-auto mx-auto flex-column ">

            <Container className="cover-container align-self-center my-auto px-3 text-center">
                <h1 className="name-header">{name}</h1>
                <hr className="my-4" />
                <p className="lead">
                    {description}
                </p>
                <div className="d-flex flex-column flex-lg-row justify-content-center">
                    <Button className="btn portfolio-button m-3 px-3" size="lg" href={resume}>
                        <i class="bi bi-card-list"></i> Experience
                    </Button>
                    <Button className="btn portfolio-button secondary m-3 px-3" size="lg" href={github} target="_blank" >
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

//--- Portfolio button  ---//

    // const projects = props.data.projects;

    // <Button className="btn portfolio-button m-3 px-3" size="lg" href={projects}>
    // <i className="bi bi-journals"></i> Projects
    // </Button>