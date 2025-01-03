import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './nav.css'
// import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({darkmode,togglemode}) => {

  
  
  return (
    <div className={darkmode ? 'navParent light-mode' : 'navParent dark-mode'}>
      <div className="div1">
      <h1>portfolio</h1>
      </div>
      <div className="div2">
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/experience">education</Link>
      <Link to="/skills">skills</Link>
      <Link to="/Works">project</Link>
      <Link to="/contact">contact</Link>
      <button onClick={togglemode}>{darkmode ? "Light Mode" : "Dark Mode"}</button>
      </div>

    </div>
  )
}

export default Navbar