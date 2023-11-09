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
                  <div className="first"><div>software developer</div></div>
                  <div className="second"><div>web developer</div></div>
                  <div className="third"><div>python developer</div></div>
              </div>
              <div className="discription"><p>{description}</p>
              </div>
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
