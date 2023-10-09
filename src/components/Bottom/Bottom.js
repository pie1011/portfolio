import React, { useState, useEffect } from 'react';
import "./Bottom.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Bottom = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
                    <Container fluid className="portfolio-foot mx-auto pt-5 text-white-50 text-center">
                <p>
                    Made with ♥️ by Katie
                </p>
            </Container>
            {scrollPosition > 800 && (
                <Navbar className="sticky-bottom ms-auto me-0" sticky="bottom">
                    <Container className="bottom-container">
                        <a href="#Home" className="up-arrow">
                            <i className="bi bi-arrow-up-circle-fill"></i>
                        </a>
                    </Container>
                </Navbar>
            )}

        </>
    );
};

export default Bottom;