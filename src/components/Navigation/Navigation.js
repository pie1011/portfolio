import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
    return (
        <Navbar sticky="top" className="w-100">
            <Container fluid>
                <Navbar.Brand href="#home" className="nav nav-masthead text-light px-5">katieharshman.com</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="navigation d-flex justify-content-end px-5">
                    <a href="#empty-link" >
                        Home
                    </a>
                    <a href="#empty-link" >
                        Resume
                    </a>
                    <a href="#empty-link" >
                        Contact
                    </a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;