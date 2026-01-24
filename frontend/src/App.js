import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';

import EducationPage from './pages/EducationPage';
import MoreAboutPage from './pages/MoreAboutPage';
import LoginPage from './pages/LoginPage';
import ProjectsPage from './pages/ProjectsPage';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout'; // Add this line
import VideoPlayer from './components/VideoPlayer';
import './styles.css';

function App() {
  const googleClientId = "300214646176-c8unpu3b9k06mjkpsh47qmq5unrlt12i.apps.googleusercontent.com"; 

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
  
            <Route path="/education" element={<Layout><EducationPage /></Layout>} />
            <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
            <Route path="/more-about" element={
              <ProtectedRoute>
                <Layout><MoreAboutPage /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/video" element={<VideoPlayer />} />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;