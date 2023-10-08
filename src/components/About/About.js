import React from "react";
import "./About.css";
import KatieProfile from "./KatieProfile.jpg";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


const About = (props) => {

    if (!props.data) return null;

    const bio1 = props.data.bio1;
    const bio2 = props.data.bio2;
    const bio3 = props.data.bio3;

    return (
        <Container id="About" className="portfolio-about d-flex flex-column min-vw-100 min-vh-100">
            <Container className="portfolio-about-container d-flex flex-column flex-lg-row">

                <div className="p-1 p-lg-5 text-center">
                    <Image className="portfolio-about-image img-thumbnail shadow-md" roundedCircle src={KatieProfile} alt="Katie Harshman" />
                    <p className="lead pt-5 pb-0">Katie Harshman</p>
                    <p className="lead pt-0">Campbell, California</p>
                </div>

                <div className="p-1 p-lg-5">
                    <h2 className="display-1 name-header">About Me</h2>
                    <p className="lead">{bio1}</p>
                    <p>{bio2}</p>
                    <p>{bio3}</p>
                    <p className="lead">
                        <Button className="btn portfolio-button" size="lg">
                            Learn more
                        </Button>
                    </p>
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

export default About;
