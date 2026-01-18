import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from '../components/About';
import PreviousWork from '../components/PreviousWork';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <main>
                <About />
                <PreviousWork />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
