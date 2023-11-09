// Navbar.js
import React from 'react';
import './Navbar.css'
// import React, { useEffect } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav>
  <ul className="menu">
    <li><Link to="container" smooth={true} duration={500}>Home</Link></li>
    <li><Link to="section__title" smooth={true} duration={500}>Projects</Link></li>
    <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
  </ul>
</nav>
  );
}

export default Navbar;
