import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import './App.css'; // ✅ Required for styling
import Experience from './pages/Experience';


function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  if (loading) return <Loader />;

  return (
    <>
      <CursorGlow />
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      {/* 🏠 Unique background for Home */}
      <div className="home-bg">
        <Home />
      </div>

      {/* 🎯 Shared background for other sections */}
      <div className="global-bg">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
