import React from "react";
import "./Projects.css";

import Container from 'react-bootstrap/Container';

const Projects = (props) => {

    return (
        <Container id="Projects" className="portfolio-projects d-flex flex-column min-vw-100 min-vh-100">
            <Container className="fluid my-auto">
                <h2 className="display-1 name-header text-center">Projects</h2>
                <h3 className="text-center">Coming soon!</h3>
            </Container>
        </Container>
    )
}

export default Projects;
