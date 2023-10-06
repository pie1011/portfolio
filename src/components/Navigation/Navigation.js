import React from "react";
import "./Navigation.css";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="portfolio-nav w-100 fixed-top text-center">
            <Container fluid className="px-5 px-xxlg-1 mx-5 mx-xxlg-1">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="portfolio-nav-text mx-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Resume">Resume</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;