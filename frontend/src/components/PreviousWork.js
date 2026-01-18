import React from 'react';
import dockerImage from '../images/docker.png';
import gitImage from '../images/git-logo.png';
import postgresqlImage from '../images/postgresql-logo.png';
import javaImage from '../images/Java-Logo.png';
import reactImage from '../images/react.png';
import nodejsImage from '../images/Node.js_logo.svg';


const PreviousWork = () => {
    return (
        <section className="previous-work">
            <h2>Previous Work</h2>
            <div className="card-container">
                <article className="card contact-card">
                    <h3>Contact Me</h3>
                    <div className="contact-links">
                        <a href="mailto:dedzebujhb024@student.wethinkcode.co.za" className="contact-item">
                            <i className="fas fa-envelope"></i> Email
                        </a>
                        <a href="https://linkedin.com/in/denzhe-dzebu" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="tel:+27795687287" className="contact-item">
                            <i className="fas fa-phone"></i> Phone +27 79 568 7287
                        </a>
                    </div>
                </article>
                <article className="card card-animated">
                    <div className="image-slider image-slider-4">
                        <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python Logo" className="slider-image-4" />
                        <img src={javaImage} alt="Java Logo" className="slider-image-4" />
                        <img src={reactImage} alt="React Logo" className="slider-image-4" />
                        <img src={nodejsImage} alt="Node.js Logo" className="slider-image-4" />
                    </div>
                    <p className="card-content">
                        Languages I use frequently
                    </p>
                </article>
                <article className="card card-animated">
                    <div className="image-slider image-slider-3">
                        <img src={dockerImage} alt="Docker Logo" className="slider-image-3" />
                        <img src={gitImage} alt="Git Logo" className="slider-image-3" />
                        <img src={postgresqlImage} alt="PostgreSQL Logo" className="slider-image-3" />
                    </div>
                    <p className="card-content">
                        Tools I use frequently
                    </p>
                </article>
            </div>
        </section>
    );
};

export default PreviousWork;
