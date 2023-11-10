// import React from 'react';
import './Home.css'; // Import your CSS file
import GithubIcon from '../Assets/square-github.svg'
import LinkedinIcon from '../Assets/linkedin.svg'
import ResumeIcon from '../Assets/file-regular.svg'
import {about} from '../../profile'


const Home = () => {
    const {name, description, resume, github, linkedin } = about
  return (  
      <div className="container">
          <div className="content">
              <div className="intro-line">Hello 👋 I'm {name}</div>
              <div className="animation">
                  <div className="first"><div>WEB_DEV</div></div>
                  <div className="second"><div>DEV</div></div>
                  <div className="third"><div>PY_DEV</div></div>
              </div>
              <div className="description"><p>{description}</p> </div>
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
      </div>

  );
};

export default Home;
