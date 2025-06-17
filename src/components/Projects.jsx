import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects" id='projects'>
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Weather Forecasting Website</h3>
          <p>Built a dynamic weather site with real-time updates and interactive UI..</p>
          <a href="https://github.com/AnkitSharma030" target="_blank">View on GitHub</a>
        </div>
        <div className="project-card">
          <h3>Blog Website</h3>
          <p>Created an engaging blog platform with community features and personalized content.</p>
          <a href="https://github.com/AnkitSharma030" target="_blank">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;