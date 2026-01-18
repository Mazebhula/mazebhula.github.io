import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const responseGoogle = (response) => {
        console.log(response);
        login(response);
        navigate(from, { replace: true });
    };

    const handleError = () => {
        console.log('Login Failed');
    };

    return (
        <div>
            <h2>Login with Google</h2>
            <GoogleLogin
                onSuccess={responseGoogle}
                onError={handleError}
            />
        </div>
    );
};

export default Login;
