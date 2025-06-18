import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar glass-navbar">
      <img src={logo} alt="Logo" className="logo-img" />

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
