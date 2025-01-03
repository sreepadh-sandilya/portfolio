import React from 'react';
import './skills.css';

const Skills = ({ darkmode, togglemode }) => {
  const skills = [
    { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', projects: ['Portfolio Website', 'Social Media App', 'Efficient Code Review Automation', 'Internship at Providence'] },
    { name: 'Node.js', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', projects: ['Code Review Automation', 'Social Media APP', 'Internship at Providence'] },
    { name: 'MongoDB', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg', projects: ['Social Media Application'] },
    { name: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', projects: ['Internship at Providence'] },
    { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', projects: ['Brain Tumor Prediction', 'Recommender Smart Cart', 'Multimodal Emotion Recognition'] },
    { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg', projects: ['Brain Tumor Prediction', 'Multimodal Emotion Recognition'] },
    { name: 'Scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', projects: ['Brain Tumor Prediction', 'Multimodal Emotion Recognition'] },
    { name: 'Git', img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', projects: ['Version Control'] },
    { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', projects: ['Basic E-Commerce Website'] },
    { name: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', projects: ['Social Media APP', 'Portfolio Website', 'Efficient Code Review Automation', 'Internship at Providence'] },
    { name: 'React Native', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/React_Native.png', projects: ['Learning Phase'] },
    { name: 'Redux Toolkit', img: 'https://redux.js.org/img/redux-logo-landscape.png', projects: ['Internship at Providence'] },
  ];

  return (
    <div className={`skillsmain ${!darkmode ? 'dark-mode' : ''}`}>
      <div className="cards">
        {skills.map((item, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={item.img} alt={`${item.name} logo`} />
            </div>
            <div className="name">
              <b>{item.name}</b>
            </div>
            {/* <div className="projects">
              <ul>
                {item.projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
