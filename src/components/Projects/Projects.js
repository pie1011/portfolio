import React from "react";
import "./Projects.css";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const images = require.context('../../images', true);
const imageList = images.keys().map((image, index) => images(image));
console.log(imageList)

const Projects = (props) => {

    if (!props.data) return null;

    const displayProjects = props.data.projects.map(function (projects) {
        return (
            <Container className="portfolio-projects-card-container rounded-2 m-1 m-lg-3 shadow-lg">
            <Card key={projects.title} className="portfolio-projects-card my-2 py-3 px-2" data-bs-theme="dark" >
                <Card.Title className="py-2 text-center">
                    <h4 className="portfolio-resume-site">{projects.title}</h4>
                </Card.Title>
                <Card.Img className="portfolio-projects-image img-thumbnail mx-auto ratio-1x1 object-fit-cover" src={imageList[projects.image]} alt={projects.title} />
                <Card.Body>

                    <Card.Text>
                        {projects.description}
                    </Card.Text>
                    <Card.Text  className="text-center">
                        <a className="portfolio-button-link mx-1" href={projects.url}><i className="bi bi-binoculars-fill"></i></a>
                        <a className="portfolio-button-link mx-1" href={projects.url}><i className="bi bi-github"></i></a>
                    </Card.Text>

                </Card.Body>
            </Card>
            </Container>
        );
    });

    return (
        <Container id="Projects" className="portfolio-about d-flex flex-column min-vw-100 min-vh-100">
            <Container className="portfolio-projects-container d-flex flex-row flex-wrap justify-content-around mb-3 p-3">

                {displayProjects}

            </Container>
            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                <a href="#Home" className="down-arrow" aria-label="Move to the Home section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
            </Container>
        </Container>
    )
}

export default Projects;
