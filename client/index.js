/**
 * @module index.js
 * @description entry point for react application
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.css'

// Render React app off of 'root' element using DOM manipulation
const root = createRoot(document.getElementById('root'));

root.render(
    <App />
);