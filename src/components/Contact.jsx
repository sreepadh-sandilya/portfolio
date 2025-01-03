import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-main">
      <h1>Contact Me</h1>
      <p className="contact-intro">
        Feel free to reach out if you have any questions or just want to connect!
      </p>
      <div className="contact-info">
        <p><b>Email:</b> <a href="mailto:sreepadhkadapa@gmail.com">sreepadhkadapa@gmail.com</a></p>
        <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/avadhanam-sandilya-sreepadh-055720248/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sreepadh</a></p>
        <p><b>Phone:</b> <a href="tel:+919896893224">+91 9896893224</a></p>
      </div>
    </div>
  );
};

export default Contact;
