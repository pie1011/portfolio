import React, { useState, useEffect } from 'react';
import "./Bottom.css";
import Container from 'react-bootstrap/Container';

const Bottom = () => {

    let currentYear = new Date().getFullYear()

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
            <Container fluid className="mx-auto pt-5 text-white-50 text-center">
                <p className='portfolio-secret'>
                ╲╱│╱│╱╱╱╲│╱│╱╲╱╳╲╲╱│╲╲╲│╲╱│╲╱│╱╲╳╲╲╱│╱╱│╱╱╱╲│╱╳╲╱╲╲│╲╲╲│╱╱╲╳╱╱╲│╱╲╲╱╳╲╱│╱│╱╱╱╲│╱│╱╲╱╳╲╲╱│╲╲╲│╲╱│╲╱│╱╲╳╱╲╱╱│╱│╲╳╲╱╲╲│╲╲╲│╱╱╲╳╲╱╱│╲╲╲│╱╲╲│╲╱╳╲╱│╱│╱╱╱╲│╱│╱╲╱╳╲╲╱│╲╲╲│╲╱│╲╱│╱╲╳╱╲╱│╱╱╲│╲╱╳╱╲│╱╲╱│╲╲╲│╱╱╲│╲╱│╲╱╱╳╱╲│╲╱│╲╱╱╳╲╱╱│╱│╱╱╱│╱│╱╲╱│╲╳╲╱╲╲│╲╲╲│╱╱╲╳╲╱│╱│╱╱╱╲│╱│╱╲╱╳╲╲╱│╲╲╲│╲╱│╲╱│╱╲╳╲╲│╱╲│╲╱╲│╱╳╲╱╲╲│╲╲╲│╱╱╲╳╲╱╲╱│╱╲╱│╲╱╲╲╳╲╱│╱│╱╱╱╲│╱│╱╲╱╳╲╲╱│╲╲╲│╲╱│╲╱│╱╲╳╱╱╱│╱╲│╲╱╲╲╳╲╲╱│╲╲╲│╲╲╲│╲╱╱│╲╱╱╱│╲╱╲╲│╱╳╲╱│╱│╱╱╱╲│╱│╱╲╱╳╲╲╱│╲╲╲│╲╱│╲╱│╱╲╳╲│╱│╱╲╱╱│╱╲╱╱╳╱╲╳╱╲╱╱│╱╱│╱╳╱╲│╲╱│╲╱╱╳╱╱╱╱│╱╱╲│╱╲╱│╲╳╲╱╲╲│╲╲╲│╱╱╲╳
                </p>
                <p>
                    &copy; {currentYear} and made with ♥️ by me.
                </p>
            </Container>
            {scrollPosition > 800 && (
                <Container className="sticky-bottom portfolio-bottom ms-auto me-1 me-lg-5 p-0" sticky="bottom">
                    <a href="#Home" className="up-arrow">
                        <i className="bi bi-arrow-up-circle-fill"></i>
                    </a>
                </Container>
            )}

        </>
    );
};

export default Bottom;