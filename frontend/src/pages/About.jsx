import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaAward } from 'react-icons/fa6'

function About() {
  return (
    <section className="about-section" id="about">
    <h2 className="section-title">🙋About Me</h2>
      <motion.div
        className="about-terminal"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="terminal-header">
          <span className="green-dot" />
          <span className="yellow-dot" />
          <span className="red-dot" />
          <p className="terminal-title">Tushar.shukla@about:~$</p>
        </div>
 
        <div className="terminal-body">
          <pre>
            <code>
              <span className="prompt">$</span> who_am_i <br />
              <span className="response">Final Year CSE Student | Full Stack Developer</span> <br /><br />


              <span className="prompt">$</span> hobbyism <br />
              <span className="response">
                Passionate about solving real-world problems with code. <br />
                Specialize in React, Node.js, MongoDB, Firebase & more. <br />
                Exploring AI, Web3 & System Design. <br />
                Believer in continuous learning & clean architecture.
              </span>
            </code>
          </pre>
        </div>
      </motion.div>

      <motion.div
        className="about-highlights"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div className="highlight-box">
          <FaCode className="highlight-icon" />
          <h3>50K+ LoC</h3>
          <p>Coded in projects, contests, & open source</p>
        </div>
        <div className="highlight-box">
          <FaBrain className="highlight-icon" />
          <h3>Problem Solver</h3>
          <p>700+ DSA problems solved across platforms</p>
        </div>
        <div className="highlight-box">
          <FaAward className="highlight-icon" />
          <h3>Top 5%</h3>
          <p>On HackerRank, LeetCode & GeeksforGeeks</p>
        </div>
      </motion.div>
    </section>
  )
}
 
export default About
