import React from "react";
import "./Resume.css";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Resume = (props) => {

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
            <Row className="row-cols-1 row-cols-md-2">
                <Col className="portfolio-resume-container col-md-4 me-1 me-md-5 text-center text-md-end">
                    <h2 className="display-1 name-header">Training</h2>
                    <p className="lead">
                        A sampling of certifcations I have completed.
                    </p>
                </Col>
                <Col className="mt-4 p-1 p-xxlg-5 ps-lg-4">
                    {displayTraining}
                </Col>
            </Row>
            <Row className="row-cols-1 row-cols-md-2">
                <Col className="portfolio-resume-container col-md-4 me-1 me-md-5 text-center text-md-end">
                    <h2 className="display-1 name-header">Work</h2>
                </Col>
                <Col className="mt-4 p-1 p-xxlg-5 ps-lg-4">
                    {displayWork}
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