import React from 'react'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import './App.css';

function App() {
  
  return (
      <div className='App'>
        <Navbar />
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </div>
    
  );
}

export default App;
