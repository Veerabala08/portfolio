// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'
// import React, { useEffect } from 'react';
import { Link, animateScroll } from 'react-scroll';


const Navbar = () => {
  const options = {
    duration: 500,
    smooth: true,
  };

  const [menuOpen, setmenuOpen] = useState(true)
  return (

    <nav>
      <a><Link onClick={() => animateScroll.scrollToTop(options)}>Home</Link></a>
      <div className={menuOpen ? 'menuOpen' : ""}><a><Link to="expsxr" smooth={true} duration={500}>XP</Link></a>
        <a><Link to="section__experience" smooth={true} duration={500}>Projects</Link></a>
        <a><Link to="div__skills" smooth={true} duration={500}>Skills</Link></a>
        <a><Link to="contact" smooth={true} duration={500}>Contact</Link></a>
      </div> <div className='menu' onClick={() => {
        setmenuOpen(!menuOpen);
      }}><span></span><span></span><span></span></div>
    </nav>

  );
}

export default Navbar;
