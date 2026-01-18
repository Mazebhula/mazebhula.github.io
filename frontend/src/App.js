import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import EducationPage from './pages/EducationPage';
import MoreAboutPage from './pages/MoreAboutPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import './styles.css';

function App() {
  const googleClientId = "300214646176-c8unpu3b9k06mjkpsh47qmq5unrlt12i.apps.googleusercontent.com"; 

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/more-about" element={
              <ProtectedRoute>
                <MoreAboutPage />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;