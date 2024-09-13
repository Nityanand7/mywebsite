import React from 'react';
import resume from './resume.pdf';
import Image from './images/Nityanand.jpg';
import githubIcon from './images/github.png';
import linkedinIcon from './images/linkedin.png';

function Home() {
  return (
    <section id="home" className="home">
      <img 
        src={Image}
        alt="Profile"
        className="profile-image"
      />
      <h1>Nityanand Madpathi</h1>
      <p>📉 The Data Wizard 📈</p>
      {/* <a href={resume} download>
        <button>Resume</button>
      </a> */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/nityanandmadpathi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Nityanand7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
      </div>
    </section>
  );
}

export default Home;