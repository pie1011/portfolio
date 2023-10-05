import React from "react";
import "./About.css";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <Container className="container container-fluid min-vh-100 h-100 w-100 about" >
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <p className="float-md-start mb-0">katieharshman.com</p>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <a
                                className="nav-link fw-bold py-1 px-0 active"
                                aria-current="page"
                                href="#empty-link"
                            >Home</a
                            >
                            <a className="nav-link fw-bold py-1 px-0" href="#empty-link">Features</a>
                            <a className="nav-link fw-bold py-1 px-0" href="#empty-link">Contact</a>
                        </nav>
                    </div>
                </header>

                <main className="px-3">
                    <h1 className="display-1 name-header">Hi, I'm Katie.</h1>
                    <p className="lead">
                        Cover is a one-page template for building simple and beautiful home
                        pages. Download, edit the text, and add your own fullscreen background
                        photo to make it your own.
                    </p>
                    <p className="lead">
                        <Button className="btn btn-portfolio" size="lg">
                            Learn more
                        </Button>
                    </p>
                </main>

                <footer className="mt-auto text-white-50">
                    <a href="#empty-link" className="down-arrow">
                        <i class="bi bi-arrow-down-circle-fill"></i>
                    </a>
                    <p>
                        Made with ♥️ by Katie
                    </p>
                    <p id="empty-link">filler for links</p>

                </footer>
            </div>
        </Container>
    )
}

export default About;