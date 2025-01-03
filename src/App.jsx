import { BrowserRouter, Routes, Route } from "react-router-dom"; // Add Routes and Route import
import { About, Contact, Experience, Navbar, Works } from './components';
import React, { useState } from 'react';
import Me from './components/Me';
import Skills from './components/Skills';
import './app.css';

const App = () => {
  const [darkmode,setdarkmode]=useState(false);
  const togglemode=()=>{
    setdarkmode(!darkmode);
  }
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar darkmode={darkmode} togglemode={togglemode}/>
        <Routes> {/* Use Routes here to define routes */}
          <Route path="/" element={<Me darkmode={darkmode} togglemode={togglemode}/>} />
          <Route path="/about" element={<About darkmode={darkmode} togglemode={togglemode}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience darkmode={darkmode} togglemode={togglemode}/>} />
          <Route path="/skills" element={<Skills darkmode={darkmode} togglemode={togglemode}/>} />
          <Route path="/works" element={<Works darkmode={darkmode} togglemode={togglemode}/>} /> {/* Updated path to match the Navbar link */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
