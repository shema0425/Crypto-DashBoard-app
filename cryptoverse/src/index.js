import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 rendering
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// Get the root element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <Router>
    <App />
  </Router>
);