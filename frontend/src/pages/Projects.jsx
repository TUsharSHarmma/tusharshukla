import React from 'react';
import './Projects.css';

const projects = [
  {
    title: '📍 Shortest Path Visualizer',
    description: 'A Full-Stack app to visualize shortest path algorithms like Dijkstra, A*, BFS, and DFS on a grid. Built with React for the frontend and Node.js for the backend.',
    tech: ['MERN', 'MonogoDB', 'Google Maps'],
    link: ''
  },
   {
    title: '🌐 Expense Tracker',
    description: (
      <>
        A Full-Stack expense tracker app with CRUD functionalities. Enabled real-time balance updates using Axios.
      </>
    ),
    tech: ['React', 'Node.js', 'MongoDB', 'RESTful APIs'],
    link: ''
  },
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
