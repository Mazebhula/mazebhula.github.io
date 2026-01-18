import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Logout from '../components/Logout';
import './MoreAboutPage.css';

const MoreAboutPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <main>
                <h2>More About Denzhe</h2>
                <p>Here are some videos about me:</p>
                <div className="video-container">
                    <video controls>
                        <source src="https://denzhe-portfolio.s3.eu-north-1.amazonaws.com/DJI_0042.MP4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="logout-button-container">
                    <Logout />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MoreAboutPage;
