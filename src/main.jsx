import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter or HashRouter, not both.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio"> {/* Add basename here */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
