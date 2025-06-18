import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Tushar Sharma</p>
      <div className="social-icons">
        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
