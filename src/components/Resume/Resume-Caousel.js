import React from "react";
import { useState } from "react";
import "./Resume.css";

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const Resume = (props) => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    if (!props.data) return null;

    const displayTraining = props.data.training.map(function (training) {
        return (
            <div key={training.site}>
                <h4 className="portfolio-resume-site">{training.site}</h4>
                <hr className="portfolio-resume-hr" />
                <div className="info pb-4">
                    {training.data.map(item => {
                        return (
                            <div key={item.name} className="d-flex flex-column flex-lg-row ps-3">
                                <h5><span className="bull d-none d-lg-inline">&bull;</span> {item.name} </h5>
                                <em className="ps-0 ps-lg-3 pb-3 pb-lg-0"> {item.certificate}  <span className="bull">&bull;</span> {item.date}</em>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    });

    const displayWork = props.data.work.map(function (work) {
        return (
            <div key={work.title}>
                <h4 className="portfolio-resume-site">{work.company}</h4>
                <hr className="portfolio-resume-hr" />
                <div key={work.years} className="info pb-4">
                    <div className="d-flex flex-column ps-3">
                        <h5>{work.title}
                            <span className="bull d-none d-lg-inline">&bull;</span> <em className="small">{work.years} </em>
                        </h5>
                        <ul className="ps-5">
                            {work.description.map((item, index) => {
                                return (
                                    <li id={`description-${index}-${item}`} key={`description-${index}-${item}`}>
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    });


    return (
        <Container id="Resume" className="portfolio-resume d-flex flex-column min-vw-100 min-vh-100">
            <Carousel activeIndex={index} onSelect={handleSelect} data-bs-interval="false" data-bs-ride="true">
                <Carousel.Item>
                    <Container className="portfolio-resume-container d-flex flex-column flex-lg-row">
                        <div className="portfolio-resume-heading p-1 p-lg-5 text-end">
                            <h2 className="display-1 name-header">Training</h2>
                            <p className="lead">
                                A sampling of certifcations I have completed.
                            </p>
                        </div>
                        <div className="p-1 p-lg-5">
                            {displayTraining}
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="portfolio-resume-container d-flex flex-column flex-lg-row">
                        <div className="portfolio-resume-heading p-1 p-lg-5 text-end">
                            <h2 className="display-1 name-header">Work</h2>
                        </div>
                        <div className="p-1 p-lg-5">
                            {displayWork}
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>




            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                <a href="#About" className="down-arrow" aria-label="Move to the About section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
            </Container>
        </Container>
    )
}

export default Resume;


// <Container className="portfolio-resume-container d-flex flex-column flex-lg-row">
// <div className="portfolio-resume-heading p-1 p-lg-5 text-end">
//     <h2 className="display-1 name-header">Training</h2>
//     <p className="lead">
//         A sampling of certifcations I have completed.
//     </p>
// </div>
// <div className="p-1 p-lg-5">
//     {displayTraining}
// </div>
// </Container>
// <Container className="portfolio-resume-container d-flex flex-column flex-lg-row">
// <div className="portfolio-resume-heading p-1 p-lg-5 text-end">
//     <h2 className="display-1 name-header">Work</h2>
// </div>
// <div className="p-1 p-lg-5">
//     {displayWork}
// </div>
// </Container>
// <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
// <a href="#About" className="down-arrow" aria-label="Move to the About section.">
//     <i className="bi bi-arrow-down-circle-fill"></i>
// </a>
// </Container>