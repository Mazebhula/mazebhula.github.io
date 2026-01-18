import React from 'react';
import Login from '../components/Login';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <main className="login-page-main">
                <div className="login-motivation">
                    <p>
                        This section of the portfolio demonstrates a practical understanding of modern cloud security and cost management. 
                        By implementing Google Authentication (gauth), I can control access to resources, such as the videos stored in an AWS S3 bucket below. 
                        This approach not only secures the content but also minimizes costs by ensuring that resources are only consumed by authenticated users.
                    </p>
                    <p>
                        This project showcases my ability to work with and integrate different cloud products from major providers like Google (for authentication) and Amazon Web Services (for storage). 
                        This multi-cloud proficiency is essential for building flexible, scalable, and cost-effective solutions in today's diverse technology landscape.
                    </p>
                </div>
                <div className="login-button-container">
                    <Login />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;
