import React from 'react';
import './Skills.css';
import {
  FaReact, FaNodeJs, FaGithub, FaAndroid, FaDatabase, FaProjectDiagram, FaJava
} from 'react-icons/fa';
import {
  SiMongodb, SiFirebase, SiJavascript, SiHtml5, SiCss3,
  SiFigma,SiCplusplus,
} from 'react-icons/si';


const techStack = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiHtml5 />, label: 'HTML5' },
  { icon: <SiCss3 />, label: 'CSS3' },
  { icon: <FaJava />, label: 'Java' },
  { icon: <FaDatabase />, label: 'SQL' },
  { icon: <FaAndroid />, label: 'Kotlin' },
  { icon: <SiCplusplus />, label: 'C++' },
];

const tools = [
  { icon: <SiFigma />, label: 'Figma' },
  { icon: <FaGithub />, label: 'GitHub' },
  { icon: <SiFirebase />, label: 'Firebase' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <FaProjectDiagram />, label: 'draw.io' },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills & Tools</h2>
      <div className="skills-container">
        <div className="tools-stack">
          <h3>🛠 Tools</h3>
          <div className="circular-tools">
            {tools.map((tool, index) => (
              <div key={index} className="circular-tool-item">
                <div className="icon">{tool.icon}</div>
                <p>{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="panel tech-stack">
          <h3>Language</h3>
          <div className="skills-grid">
            {techStack.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
