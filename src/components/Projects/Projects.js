import React from "react";
import "./Projects.css";

import Container from 'react-bootstrap/Container';

const Projects = (props) => {

    return (
        <Container id="Projects" className="portfolio-projects d-flex flex-column min-vw-100 min-vh-100">
            <Container className="fluid my-auto">
                <h2 className="display-1 name-header text-center">Projects</h2>
                <h3 className="text-center">Coming soon!</h3>
                <p className="text-center">In the meantime, check out this <a href="https://github.com/pie1011/salon" target="blank">mock salon</a> I made, or my <a href="https://github.com/pie1011" target="blank">github</a>!</p>
            </Container>
            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                <a href="#Contact" className="down-arrow" aria-label="Move to the Contact section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
            </Container>
        </Container>
    )
}

export default Projects;
