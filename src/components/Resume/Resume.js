import React from "react";
import { useState } from "react";
import "./Resume.css";
import CalbrightImage from "./CalbrightImage.png";

import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Resume = (props) => {

    const [open, setOpen] = useState(false);

    if (!props.data) return null;



    const displayTraining = props.data.training.map(function (training) {
        const displayTrainingImage = (training.trainingImage) ? (
            <a href={training.trainingImage} target="_blank" rel="noreferrer">
                <img className="portfolio-resume-image" src={CalbrightImage} width="137" height="45" alt="Training" />
            </a>
        ) : null;
        return (
            <div key={training.site}>
                <h4 className="portfolio-resume-site small-caps ps-3 ps-xxlg-0"> {displayTrainingImage}  {training.site}</h4>
                <hr className="portfolio-resume-hr" />
                <div className="info pb-4">
                    {training.data.map(item => {
                        return (
                            <div key={item.name} className="d-flex flex-column flex-lg-row ps-3">
                                <h5>
                                    <span className="bull d-none d-lg-inline">&bull;</span>
                                    { item.name === "Salesforce CRM Administrator" ? <span className="fw-bold">{item.name}</span> : item.name }
                                </h5>
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
                <h4 className="portfolio-resume-site small-caps ps-3 ps-xxlg-0">{work.company}</h4>
                <hr className="portfolio-resume-hr" />
                <div key={work.years} className="info pb-4">
                    <div className="d-flex flex-column ps-3">
                        <h5 >{work.title}
                            <span className="bull d-none d-lg-inline">&bull;</span> <em className="small">{work.years} </em>
                        </h5>
                        <ul className="ps-4 ps-xxlg-5 ">
                            {work.description.map((item, index) => {
                                return (
                                    <li className="py-1 py-xxlg-3" id={`description-${index}-${item}`} key={`description-${index}-${item}`}>
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

    const swapDisplayMore = () => {
        let workMoreButtonShow = document.getElementById("workMore-collapse-button");
        workMoreButtonShow.toggleAttribute("hidden");
        let workMoreButtonHide = document.getElementById("workMore-collapse-button-hide");
        workMoreButtonHide.toggleAttribute("hidden");
        setOpen(!open)
    }

    const displayWorkMore = props.data.workMore.map(function (work) {
        return (
            <div key={work.title}>
                <h4 className="portfolio-resume-site small-caps ps-3 ps-xxlg-0">{work.company}</h4>
                <hr className="portfolio-resume-hr" />
                <div key={work.years} className="info pb-4">
                    <div className="d-flex flex-column ps-3">
                        <h5 >{work.title}
                            <span className="bull d-none d-lg-inline">&bull;</span> <em className="small">{work.years} </em>
                        </h5>
                        <ul className="ps-4 ps-xxlg-5 ">
                            {work.description.map((item, index) => {
                                return (
                                    <li className="py-1 py-xxlg-3" id={`description-${index}-${item}`} key={`description-${index}-${item}`}>
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
        <Container id="Resume" className="portfolio-resume d-flex flex-column min-vw-100 min-vh-100 pt-5">
            <Row className="row-cols-1 row-cols-md-2">
                <Col className="portfolio-resume-container col-md-4 me-1 me-md-5 text-center text-md-end">
                    <h2 className="display-1 name-header">Training</h2>
                    <p className="lead">
                        A sampling of certifcations completed or in progress.
                    </p>
                </Col>
                <Col className="mt-5 p-1 p-xxlg-5 ps-lg-4">
                    {displayTraining}
                </Col>
            </Row>
            <Row className="row-cols-1 row-cols-md-2 overflow-y-auto">
                <Col className="portfolio-resume-container col-md-4 me-1 me-md-5 text-center text-md-end">
                    <h2 className="display-1 name-header">Work</h2>
                    <p className="lead">I am happy to discuss additional education and employment history upon requestion. Please fill out the <a href="#Contact">contact form</a> to get in touch!.</p>

                </Col>
                <Col className="mt-5 p-1 p-xxlg-5 ps-lg-4">
                    {displayWork}

                    
                    <Collapse in={open}>
                        <div id="workMore-collapse-text">
                            {displayWorkMore}
                            <p className="lead text-white-50">I am happy to discuss additional education and employment history. Please fill out the <a href="#Contact">contact form</a> to get in touch!.</p>
                        </div>
                    </Collapse>
                    <Button
                        id="workMore-collapse-button"
                        className="btn portfolio-button secondary mx-3 mt-0 mb-5 px-3"
                        size="lg"
                        onClick={() => swapDisplayMore()}
                        aria-controls="workMore-collapse-text"
                        aria-expanded={open}
                    >
                        <i className="bi bi-caret-down-fill"></i> show more
                    </Button>
                    <Button
                        id="workMore-collapse-button-hide"
                        className="btn portfolio-button secondary mx-3 mt-0 mb-5 px-3"
                        size="lg"
                        onClick={() => swapDisplayMore()}
                        aria-controls="workMore-collapse-text"
                        aria-expanded={open}
                        hidden
                    >
                        <i className="bi bi-caret-up-fill"></i> show less
                    </Button>
 
                </Col>
            </Row>
            <Container fluid className="portfolio-down mt-auto pb-5 mx-auto text-white-50 text-center">
                <a href="#Projects" className="down-arrow" aria-label="Move to the Projects section.">
                    <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
            </Container>
        </Container>
    )
}

export default Resume;