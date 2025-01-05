import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './me.css'
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import sreepadhPic from '../assets/sreepadh_pic.jpg';

const Me = ({ darkmode, togglemode }) => {
  const openResume=()=>{
     const resumelink='https://amritavishwavidyapeetham-my.sharepoint.com/personal/cb_en_u4cse21009_cb_students_amrita_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcb%5Fen%5Fu4cse21009%5Fcb%5Fstudents%5Famrita%5Fedu%2FDocuments%2Fsandilya%5Fsreepadh%5Fresume1%2Epdf&parent=%2Fpersonal%2Fcb%5Fen%5Fu4cse21009%5Fcb%5Fstudents%5Famrita%5Fedu%2FDocuments&ga=1';
     window.open(resumelink,"_blank");
  }
  useEffect(() => {
    if (darkmode) {
      document.body.style.backgroundColor = "white";  // Dark mode background
    } else {
      document.body.style.backgroundColor = "black";  // Light mode background
    }
  }, [darkmode]);  // Runs when darkmode changes

  return (
    <div className={`me1 ${darkmode ? 'light-mode' : 'dark-mode'}`}>
     <div className="mebox">
      <div className="me1_1">
        <h1>Hi, I'm Sreepadh!</h1>
      </div>
      <div className="me1_1">
        <p>A passionate <b>Full Stack Developer</b> and an <b>ML/DL Enthusiast</b> specializing in building web applications and solving complex problems.</p>
      </div>
      <div className="me1_1">
        <button onClick={openResume}>resume</button>
      </div>
      </div>
      <div className={`meprofile ${darkmode ? 'light-mode' : 'dark-mode'}`}>
        <img src={sreepadhPic} alt='sree'/>
      </div>

    </div>
  )
}

export default Me