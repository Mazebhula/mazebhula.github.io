import React from 'react';
import profilePhoto from '../images/denje.png';

const About = () => {
    return (
        <section className="intro">
            <div className="intro-container">
                <div className="intro-text">
                    <h2>About Me</h2>
                    <p>
                        Hi, I'm Denzhe Dzebu, a recent graduate of the software development program at WeThinkCode_ in Johannesburg, South Africa (course completed December 2025, 
                        awaiting formal graduation). I hold an AWS Certified Cloud Practitioner certification (AWS Cloud Practitioner Essentials, completed January 2026), 
                        demonstrating my foundational knowledge of AWS Cloud concepts, services, and terminology.
                        My technical skills include Java, Python, SQL, HTML, CSS, and JavaScript,
                         along with tools like Docker, Git, Make, and message queues (ActiveMQ and AWS SQS). I have applied these in projects such as Ragnarize, SmartHealth, and YouTube Video Downloader.
                        I am passionate about cloud technologies and eager to contribute to innovative software solutions as a junior developer.    
                    </p>
                </div>
                <img src={profilePhoto} alt="Dzebu Denzhe" className="profile-photo" />
            </div>
        </section>
    );
};

export default About;
