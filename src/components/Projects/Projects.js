import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./Projects.css";

import SalonPreview from "./salon-preview.png";


const Projects = (props) => {

    return (
        <Container id="Projects" className="portfolio-projects d-flex flex-column min-vw-100 min-vh-100">
            <Container className="fluid my-auto mx-auto text-center">
                <h2 className="display-1 name-header text-center pt-5">Projects</h2>
                <p className="text-center pt-5">View business documentation projects from my project management coursework in my <a href="https://sites.google.com/view/project-management-portfolio/" target="blank">Project Management Portfolio</a>!</p>
                <p className="text-center">Software development project portfolio is under construction. In the meantime, view my <a href="https://github.com/pie1011" target="blank">github</a>, or check out this <a href="https://github.com/pie1011/salon" target="blank">mock salon</a> I made:</p>
                <Card style={{ width: '80vw' }}>
                    <a className="portfolio-button-link mx-1" href="https://salon-kh.vercel.app/" target="blank">
                    <Card.Img variant="top" src={SalonPreview} /></a>
                    <Card.Body>
                        <Card.Title>Mock Salon Website</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Next.js, Tailwind CSS, Vercel</Card.Subtitle>

                        <Card.Text>
                        This project is a modern, responsive salon website built with Next.js and Tailwind CSS, designed to provide a seamless user experience. The site features a clean, professional layout with intuitive navigation, showcasing salon services and branding. It also includes user authentication, allowing visitors to log in and out securely. Deployed on Vercel, the application demonstrates my ability to develop and host dynamic web applications using cutting-edge technologies.
                        </Card.Text>
                        <a className="portfolio-button-link mx-1" href="https://salon-kh.vercel.app/" target="blank"><i className="bi bi-binoculars-fill"></i></a>
                        <a className="portfolio-button-link mx-1" href="https://github.com/pie1011/salon" target="blank"><i className="bi bi-github"></i></a>

                    </Card.Body>
                </Card>

                
            </Container>
            <Container fluid className="portfolio-down mt-auto pt-5 pb-5 mx-auto text-white-50 text-center">
                <a href="#Contact" className="down-arrow" aria-label="Move to the Contact section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>

               
            </Container>
        </Container>
    )
}

export default Projects;
