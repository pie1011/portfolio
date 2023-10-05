import React from "react";
import "./Cover.css";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Cover = () => {
    return (
            <div className="d-flex min-vh-100 w-100 h-100 p-3 mx-auto flex-column" style={{border: "1px solid red"}}>
                <div className="mb-auto"></div>

                <Container className="cover-container align-self-center px-3">
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
                </Container>

                <footer className="mt-auto text-white-50">
                    <a href="#About" className="down-arrow">
                        <i class="bi bi-arrow-down-circle-fill"></i>
                    </a>
                    <p>
                        Made with ♥️ by Katie
                    </p>
                    <p id="empty-link">filler for links</p>

                </footer>
            </div>
    )
}

export default Cover;