// Navbar.js
import React from 'react';
import './Navbar.css'
// import React, { useEffect } from 'react';
import { Link , animateScroll} from 'react-scroll';


const Navbar = () => {
  const options = {
  duration: 500,
  smooth: true,
};
  return (
    <nav>
  <ul className="menu">
    <li className="home"onClick={() => animateScroll.scrollToTop(options)}>Home</li>
    <li><Link to="section__title" smooth={true} duration={500}>Projects</Link></li>
    <li><Link to="div__skills" smooth={true} duration={500}>Skills</Link></li>
    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
  </ul>
</nav>
  );
}

export default Navbar;
