// src/App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;
