// src/App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTracking = () => {
    const sections = ['profile', 'education', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTracking);
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, []);

  return (
    <div className="App">
      <Header onLinkClick={handleScroll} activeSection={activeSection} />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
