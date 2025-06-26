import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  
  return (
    <nav className="navbar glass-navbar">
      <img src={logo} alt="Logo" className="logo-img" />
 
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
