import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

  const options = {
    duration: 500,
    smooth: true,
  };

  return (
    <nav>
      <div className='menuClosed' >
        <Link to="home" smooth={true} duration={500} onClick={() => scroll.scrollToTop(options)}>Home</Link>
        <Link to="expsxr" smooth={true} duration={500}>XP</Link>
        <Link to="section__experience" smooth={true} duration={500}>Projects</Link>
        <Link to="div__skills" smooth={true} duration={500}>Skills</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
