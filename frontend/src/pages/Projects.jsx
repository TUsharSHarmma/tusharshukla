import React from 'react';
import './Projects.css';

const projects = [
  {
    title: '📍 Real-Time Location Tracker',
    description: 'An Android app that tracks and stores the last 6 hours of location history with a one-time friend request system.',
    tech: ['Kotlin', 'Firebase', 'Google Maps'],
    link: '#'
  },
   {
    title: '🌐 Tstore Web App',
    description: (
      <>
        A React & Node.js-based mini playstore where I upload and manage my own Android APKs.
        <br />
        Visit: <a href="https://www.tusharstore.xyz" target="_blank" rel="noopener noreferrer" style={{ color: '#00aaff' }}>https://www.tusharstore.xyz</a>
      </>
    ),
    tech: ['React', 'Node.js', 'MongoDB', 'UploadThing'],
    link: 'https://www.tusharstore.xyz'
  },
  {
    title: '💉 Blood Bank Management System',
    description: 'A full-stack project managing blood donation, requests, and supply using digital tools.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    link: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn project-btn">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
