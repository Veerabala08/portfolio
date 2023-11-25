// import React from 'react';
import './Home.css'; // Import your CSS file
import GithubIcon from '../Assets/square-github.png'
import LinkedinIcon from '../Assets/linkedin.png'
import ResumeIcon from '../Assets/file-regular.png'
import {about} from '../../profile'
import Spline from '@splinetool/react-spline';

const Home = () => {
    const {name, description, resume, github, linkedin } = about
  return (  
      <div className="center-container">
          <div className="center-content">   
                  <div className="intro-line">Hello &#127758;, I'm {name}</div>
                  <div className="animation">
                      <div className="first"><div>WEB_DEV</div></div>
                      <div className="second"><div>DEV</div></div>
                      <div className="third"><div>PY_DEV</div></div>
                  </div>
                  <p>&nbsp; &nbsp; {description}</p>
              <div className="icon-container">
                 <a href={github} target="_blank" rel="noopener noreferrer" title='Github'>
                     <img src={GithubIcon} alt="GitHub" className="icon" />
                 </a>
                 <a href={linkedin} target="_blank" rel="noopener noreferrer" title='LinkedIn'>
                     <img src={LinkedinIcon} alt="LinkedIn" className="icon" />
                 </a>
                 <a href={resume} target="_blank" rel="noopener noreferrer" title='Resume'>
                     <img src={ResumeIcon} alt="Resume" className="icon" />
                 </a>
             </div>
          </div>
          <div>
          <Spline scene="https://prod.spline.design/oSffpT1YX3vNpNoV/scene.splinecode" />
          </div>
      </div>

  );
};

export default Home;
