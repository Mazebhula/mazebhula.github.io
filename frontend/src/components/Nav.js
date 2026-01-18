import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/more-about">More About Denzhe</Link></li>
                <li><a href="https://github.com/mazebhula">My GitHub</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
