import React from 'react'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  
  return (
      <main>
        <Navbar />
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </main>
    
  );
}

export default App;
