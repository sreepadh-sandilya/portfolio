import React from 'react'
import './about.css'

const About = ({ darkmode }) => {
  return (
    <div className={`mainabout ${darkmode ? 'light-mode' : 'dark-mode'}`}>
      <div className={`about ${darkmode ? 'light-mode' : 'dark-mode'}`}>
        <div className="about1">
          <h1><b>About Me</b></h1>
        </div>
        <div className="about2">
          <p>Hello! I'm <b>Sreepadh</b>, a passionate Full Stack Developer and ML/DL enthusiast. I love creating seamless web applications and exploring cutting-edge technologies to solve real-world problems. With experience in <b>React</b>, <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>PostgreSQL</b>, I strive to deliver user-friendly and efficient solutions.</p>
        </div>
        <div className="about3">
          <p>I always aim to learn new technologies and improve my skill set. Currently, I am learning React Native to expand my expertise in mobile app development.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
