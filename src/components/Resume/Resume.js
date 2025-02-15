import React from "react";
import { useState } from "react";
import "./Resume.css";
import CalbrightImage from "./CalbrightImage.png";

import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Resume = (props) => {

    const [openTrain, setOpenTrain] = useState(false);
    const [open, setOpen] = useState(false);

    if (!props.data) return null;

    // Tooltip for training items

    const Unit = ({ id, children, title }) => (
        <OverlayTrigger placement="right" overlay={
            <Tooltip id={id}>{title}</Tooltip>
        }>
          <span style={{"cursor": "help"}}>{children}</span>
        </OverlayTrigger>
      );


    // Display training items

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
                            <div key={item.name} className="d-flex flex-column ps-3">
                                <h5>
                                    { item.certificate === "Superbadge" ?  <span className="bull d-none d-lg-inline small text-secondary ps-3"> &bull; </span> : item.certificate === "Certificate in progress" ? <span className="bull d-none d-lg-inline">&bull; </span> : <span className="bull d-none d-lg-inline">&bull; </span> }
                                    { item.certificate === "Superbadge" ?  <Unit title={item.tooltip} id="t-1"><span className="small text-secondary">{item.name}</span></Unit> : item.certificate === "Certificate in progress" ? <span className="fw-bold">{item.name}</span> : item.name }
                                    { item.certificate === "Heading" ? <p className="d-inline d-lg-none small py-2"><br /> <i>Tap each to view a description of modules included.</i></p> : null }
                                
                                { item.certificate !== "Superbadge" && item.certificate !== "Heading" ? <em className=" ps-0 ps-lg-3 pb-3 pb-lg-0"> {item.certificate}  <span className="bull">&bull;</span> {item.date}</em> : item.certificate === "Certificate in progress" || item.certificate === "Superbadge" ? <em className="ps-0 ps-lg-3 pb-3 pb-lg-0 small text-secondary"> {item.certificate}  <span className="bull text-secondary">&bull;</span> {item.date}</em> : null }
                                </h5>
                                <div className=" small ps-5 pb-4" > {item.description} </div>

                            </div>

                        )
                    })}
                </div>
            </div>
        );
    });


    // Swap display of additional training items

    const swapDisplayMoreTrain = () => {
        let trainMoreButtonShow = document.getElementById("trainMore-collapse-button");
        trainMoreButtonShow.toggleAttribute("hidden");
        let trainMoreButtonHide = document.getElementById("trainMore-collapse-button-hide");
        trainMoreButtonHide.toggleAttribute("hidden");
        setOpenTrain(!openTrain)
    }

    const displayTrainMore = props.data.trainMore.map(function (training) {
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
                                    { item.certificate === "Superbadge" ?  <span className="bull d-none d-lg-inline small text-secondary ps-3"> &bull; </span> : item.certificate === "Certificate in progress" ? <span className="bull d-none d-lg-inline">&bull; </span> : <span className="bull d-none d-lg-inline">&bull; </span> }
                                    { item.certificate === "Superbadge" ?  <span className="small text-secondary">{item.name}</span> : item.certificate === "Certificate in progress" ? <span className="fw-bold">{item.name}</span> : item.name }

                                </h5>
                                { item.certificate !== "Superbadge" ? <em className="ps-0 ps-lg-3 pb-3 pb-lg-0"> {item.certificate}  <span className="bull">&bull;</span> {item.date}  </em> : <em className="ps-0 ps-lg-3 pb-3 pb-lg-0 small text-secondary"> {item.certificate}  <span className="bull text-secondary">&bull;</span> {item.date} {item.description}</em> }
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    });
    

    // Display work items

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


    // Swap display of additional work items

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
                    <h2 className="display-1 name-header">Education</h2>
                    <p className="lead">
                        A sampling of certificates completed or in progress.
                    </p>
                    <p className="">
                    <a href="https://salesforce.com/trailblazer/katharineharshman" target="_blank" rel="noreferrer"> <i class="bi bi-cloud-fill"></i> View my Trailhead profile</a> for my latest Salesforce training.
                    </p>
                </Col>
                <Col className="mt-5 p-1 p-xxlg-5 ps-lg-4">
                    {displayTraining}


                                        
                    <Collapse in={openTrain}>
                        <div id="trainMore-collapse-text">
                            {displayTrainMore}
                            <p className="lead text-white-50">
                                I am happy to discuss additional training I have completed. Please fill out the <a href="#Contact">contact form</a> to get in touch!.
                            </p>
                        </div>
                    </Collapse>
                    <Button
                        id="trainMore-collapse-button"
                        className="btn portfolio-button secondary mx-3 mt-0 mb-5 px-3"
                        size="lg"
                        onClick={() => swapDisplayMoreTrain()}
                        aria-controls="trainMore-collapse-text"
                        aria-expanded={openTrain}
                    >
                        <i className="bi bi-caret-down-fill"></i> show more
                    </Button>
                    <Button
                        id="trainMore-collapse-button-hide"
                        className="btn portfolio-button secondary mx-3 mt-0 mb-5 px-3"
                        size="lg"
                        onClick={() => swapDisplayMoreTrain()}
                        aria-controls="traingMore-collapse-text"
                        aria-expanded={openTrain}
                        hidden
                    >
                        <i className="bi bi-caret-up-fill"></i> show less
                    </Button>

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

