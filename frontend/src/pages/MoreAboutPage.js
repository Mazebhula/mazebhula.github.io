import React from 'react';
import Logout from '../components/Logout';
import './MoreAboutPage.css';

const MoreAboutPage = () => {
    const videos = [
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/who+is.mov",
            description: "Who is Denzhe?",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/who+is.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/the+why.mov",
            description: "The Why",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/the+why.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/experience.mov",
            description: "Experience",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/experience.mov"
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/what+did+i+learn.mov",
            description: "What did I learn?",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/what+did+i+learn.mov"
        }
    ];

    return (
        <>
            <h2>More About Denzhe</h2>
            <p>Here are some videos about me:</p>
            <div className="video-gallery">
                {videos.map((video, index) => (
                    <a key={index} href={video.src} target="_blank" rel="noopener noreferrer" className="video-thumbnail">
                        <video>
                            <source src={video.thumbnail} type="video/mp4" />
                        </video>
                        <p>{video.description}</p>
                    </a>
                ))}
            </div>
            <div className="logout-button-container">
                <Logout />
            </div>
        </>
    );
};

export default MoreAboutPage;
