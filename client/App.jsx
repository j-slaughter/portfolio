/**
 * @module App.jsx
 * @description Main page of website.
 */

import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>Hi, I'm Jennifer! Welcome to my corner of the internet.</h1>
            <Hero />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;