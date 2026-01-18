import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import awsCertificate from '../images/certification/aws_denzhe.png';
import ibmCertificate from '../images/certification/Ibm webdev.png';
import wtcImage from '../images/wtc.png';
import './EducationPage.css';

const educationData = [
    {
        id: 1,
        title: 'Software Developer',
        institution: 'WeThinkCode',
        dates: 'Sept 2024 - Dec 2025',
        description: 'Intensive software development program covering full-stack development, data structures, algorithms, and more.',
        image: wtcImage
    },
    {
        id: 2,
        title: 'AWS Certified Cloud Practitioner',
        institution: 'Amazon Web Services',
        dates: 'Issued Jan 2024',
        description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
        image: awsCertificate
    },
    {
        id: 3,
        title: 'Web Development Fundamentals',
        institution: 'IBM SkillsBuild',
        dates: 'Issued Jun 21, 2025',
        description: 'Completed the Web Development Fundamentals course.',
        image: ibmCertificate
    }
];

const EducationPage = () => {
    const [flipped, setFlipped] = useState(null);

    const handleFlip = (id) => {
        setFlipped(flipped === id ? null : id);
    };

    return (
        <>
            <Header />
            <Nav />
            <main>
                <h2>Education & Certifications</h2>
                <div className="education-container">
                    {educationData.map((item) => (
                        <div 
                            className={`education-card ${flipped === item.id ? 'flipped' : ''}`} 
                            key={item.id}
                            onClick={() => handleFlip(item.id)}
                        >
                            <div className="card-inner">
                                <div className="card-front">
                                    <h3>{item.institution}</h3>
                                    <h4>{item.title}</h4>
                                    <p><strong>Dates:</strong> {item.dates}</p>
                                </div>
                                <div className="card-back">
                                    <p>{item.description}</p>
                                    {item.image && <img src={item.image} alt={item.title} />}
                                    {item.pdf && <a href={item.pdf} target="_blank" rel="noopener noreferrer">View Certificate</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default EducationPage;
