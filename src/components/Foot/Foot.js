import React from "react";
import "./Foot.css";
import Container  from 'react-bootstrap/Container';

const Foot = () => (
    <Container fluid className="portfolio-foot mt-auto mx-auto text-white-50 text-center">
        <a href="#About" className="down-arrow">
            <i className="bi bi-arrow-down-circle-fill"></i>
        </a>
        <p>
            Made with ♥️ by Katie
        </p>
        <p id="empty-link">filler for links</p>

    </Container>
)

export default Foot;