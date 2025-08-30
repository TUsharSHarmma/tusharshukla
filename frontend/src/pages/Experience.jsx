import React from 'react';
import './Projects.css';
import './About.css'
const Experience = () => {
  return (
    <section className="projects-section" id="experience">
      <h2 className="section-title">🧑‍💻 Experience</h2>
      <div className="projects-grid">
        <div className="project-card">
        <div className="terminal-header">
          <span className="green-dot" />
          <span className="yellow-dot" />
          <span className="red-dot" />
          <p className="terminal-title">June 2025 – Present</p>
        </div>
          <h3 style={{color:"#ffee00"}}>Full Stack Developer Intern</h3>
          
          <p className="company"><span className='zen'>ZenExim Pvt Ltd</span>, Ahmedabad</p>

          <ul style={{ textAlign: "left", marginTop: "1rem" }}>
            <li>
              Developed and enhanced MERN stack applications, improving UI/UX
              with React and backend APIs with Node.js and Express.js.
            </li>
            <li>
              Integrated MongoDB for scalable data storage and implemented
              RESTful API endpoints.
            </li>
            <li>
              Worked on a Dijkstra-based shortest path visualization project,
              implementing multiple shortest path detection and interactive
              graph visualization features.
            </li>
          </ul>

          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">MongoDB</span>
            <span className="tag">Algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
