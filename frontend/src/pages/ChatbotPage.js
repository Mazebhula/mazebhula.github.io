import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ChatbotPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <main style={{ textAlign: 'center', padding: '50px' }}>
                <p style={{ fontSize: '2em', fontWeight: 'bold' }}>Coming Soon</p>
            </main>
            <Footer />
        </>
    );
};

export default ChatbotPage;
