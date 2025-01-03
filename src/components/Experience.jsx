import React from 'react'
import './experience.css'

const Experience = ({ darkmode, togglemode }) => {
  return (
    <div className={`mainExperience ${darkmode ? 'light-mode' : 'dark-mode'}`}>
      <div className={`Experience ${darkmode ? 'light-mode' : 'dark-mode'}`}>
        <div className="Experience1">
          <h1><b>Education</b></h1>
        </div>
        <div className="Experience2">
          <p> <b>Narayana School</b> - passed Out: 2019 <br /> Scored: 10 CGPA</p>
        </div>
        <div className="Experience3">
          <p> <b>Narayana College</b> - passed Out: 2021 <br /> Scored: 95%</p>
        </div>
        <div className="Experience4">
          <p> <b>Amrita Vishwa Vidyapeetham</b> - B.Tech in Computer Science & Engineering <br /> CGPA: 8.04 (2021 - Present, Expected Graduation: June 2025)</p>
        </div>
      </div>
    </div>
  )
}

export default Experience;
