import React from 'react';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
    const location = useLocation();
    const { videoSrc } = location.state;

    return (
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <video controls autoPlay style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
