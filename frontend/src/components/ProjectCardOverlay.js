import React from 'react';

const ProjectCardOverlay = ({ title, subtitle, progress }) => {
  return (
    <div className="project-card-overlay">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProjectCardOverlay;
