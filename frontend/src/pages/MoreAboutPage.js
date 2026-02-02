import React, { useState } from 'react';
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
        },
        {
            src: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/SpringBoot.mp4",
            description: "How Fast can i Code",
            thumbnail: "https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/SpringBoot.mp4"
        }
    ];

    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    return (
        <>
            <h2>More About Denzhe</h2>
            <div className="video-page-layout">
                <div className="video-player-container">
                    <video controls autoPlay key={selectedVideo.src}>
                        <source src={selectedVideo.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>{selectedVideo.description}</h3>
                </div>
                <div className="video-list-container">
                    {videos.map((video, index) => (
                        <div key={index} className="video-thumbnail-item" onClick={() => setSelectedVideo(video)}>
                            <video>
                                <source src={video.thumbnail} type="video/mp4" />
                            </video>
                            <p>{video.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="logout-button-container">
                <Logout />
            </div>
        </>
    );
};

export default MoreAboutPage;
