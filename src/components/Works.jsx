import React from 'react';
import './works.css';

const Works = ({ darkmode, togglemode }) => {
  const projects = [
    {
      title: "VirtualClassroom",
      role: "Backend Developer",
      description: "Implemented token-based authentication and role-based access control for a virtual classroom using NextJS, ReactJS, and NodeJS. Designed a scalable MySQL database to manage user credentials, courses, assignments, and grades while supporting secure access for different roles. Integrated real-time code collaboration with WebRTC and CRTD, ensuring seamless multi-user editing.",
      image: ['https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', 'https://cdn.worldvectorlogo.com/logos/next-js.svg', 'https://www.svgrepo.com/show/303251/mysql-logo.svg'],
      git: ['https://github.com/sreepadh-sandilya/virtualClassroom_frontend', 'https://github.com/sreepadh-sandilya/virtual_classroom_backend', 'https://github.com/sreepadh-sandilya/collaborativeCoding_webRTC']
    },
    {
      title: "Air Files",
      role: "Backend Developer",
      description: "Collaborated with a team of 4 to develop a cross-platform file-sharing app, ensuring fast and reliable performance. Achieved 20%-43% file compression on the server, improving response speed by over 20%. Implemented secure file sharing with token-based authentication and developed APIs using ExpressJS and MySQL.",
      image: ['https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', 'https://cdn.worldvectorlogo.com/logos/next-js.svg', 'https://www.svgrepo.com/show/303251/mysql-logo.svg'],
      git: ['https://github.com/sreepadh-sandilya/air_files_app', 'https://github.com/sreepadh-sandilya/air_files_server', 'https://github.com/sreepadh-sandilya/air_files_web', 'https://github.com/sreepadh-sandilya/file_compression_dsa']
    },
    {
      title: "WorldCup Playing 11 Prediction",
      role: "Backend Developer",
      description: "Utilized web scraping to efficiently compile relevant datasets and applied data imputation, normalization, and feature engineering for quality enhancement. Achieved 90% accuracy in predicting the playing 11 for World Cup cricket matches using Linear Regression, SVM, Decision Trees, and Random Forest algorithms. Demonstrated strong expertise in data analysis and sports analytics.",
      image: ['https://www.svgrepo.com/show/376344/python.svg'],
      git: ['https://github.com/sreepadh-sandilya/Dream11WorldCupTeamWithRegression']
    },
    {
      title: "The IPL Scheduler",
      role: "Backend Developer",
      description: "Led a remote team of 4 during the COVID-19 pandemic to develop a menu-driven IPL tournament scheduling app using the Round Robin Scheduling algorithm. Implemented a rescheduling function to handle match alterations, cancellations, and delays, demonstrating strong problem-solving skills.",
      image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/760px-C_Programming_Language.svg.png?20201031132917'],
      git: ['https://github.com/sreepadh-sandilya/The-IPL-Scheduler']
    },
    {
      title: "PasswordManager",
      role: "Backend Developer",
      description: "Developed a Password Manager web app using ReactJS, HTML/CSS, and Node.js/Express.js, enabling secure password storage and generation. Integrated password strength assessment to enhance security and designed a MySQL database with AES encryption for managing user credentials and passwords.",
      image: ['https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', 'https://www.svgrepo.com/show/303251/mysql-logo.svg'],
      git: ['https://github.com/sreepadh-sandilya/Password_Management']
    }
  ];

  const openlink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={`workmain ${!darkmode ? 'darkmode' : ''}`}>
      <div className="work">
        {projects.map((item, index) => (
          <div className="card" key={index}>
            <div className="div1">
              <h2>{item.title}</h2>
            </div>
            <div className="div2">
              <p>Role: {item.role}</p>
            </div>
            <div className="div3">
              <p>{item.description}</p>
            </div>
            <div className="div4">
              {item.image.map((img, key) => (
                <img src={img} alt="logo" key={key} />
              ))}
            </div>
            <div className="div6">
              {item.git.map((gitLink, i) => (
                <div className="div5" key={i}>
                  <button onClick={() => openlink(gitLink)}>View On Github</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
