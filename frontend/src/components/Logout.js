import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        googleLogout();
        logout();
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
