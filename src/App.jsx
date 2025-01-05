import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Navbar, Works } from './components';
import Me from './components/Me';
import Skills from './components/Skills';
import './app.css';

const App = () => {
  const [darkmode, setdarkmode] = useState(false);

  const togglemode = () => {
    setdarkmode(!darkmode);
  };

  return (
    <div className="main">
      <Navbar darkmode={darkmode} togglemode={togglemode} />
      <Routes>
        <Route path="/" element={<Me darkmode={darkmode} togglemode={togglemode} />} />
        <Route path="/about" element={<About darkmode={darkmode} togglemode={togglemode} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience darkmode={darkmode} togglemode={togglemode} />} />
        <Route path="/skills" element={<Skills darkmode={darkmode} togglemode={togglemode} />} />
        <Route path="/works" element={<Works darkmode={darkmode} togglemode={togglemode} />} />
      </Routes>
    </div>
  );
};

export default App;
