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
    <nav>
                {/* <div className="logo"><a><img src={Logo} alt="Logo" /></a></div> */}
                <a><Link onClick={() => animateScroll.scrollToTop(options)}>Home</Link></a>
                <a><Link to="section__title" smooth={true} duration={500}>Projects</Link></a>
                <a><Link to="div__skills" smooth={true} duration={500}>Skills</Link></a>
                <a><Link to="contact" smooth={true} duration={500}>Contact</Link></a>
            </nav>
</nav>
  );
}

export default Navbar;
