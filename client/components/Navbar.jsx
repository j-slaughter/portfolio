/**
 * @module Navbar.jsx
 * @description Navigation bar
 */

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'motion/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    // Manage state of mobile hamburger menu
    const [nav, setNav] = useState(false);
    const toggleNav = () => {setNav(!nav)};

    return (
        <div className='fixed top-0 left-0 w-full backdrop-blur-md bg-opacity-70 z-50'>
            <div className='text-teal-200 text-xl flex justify-between items-center mx-auto px-12 h-20' >
                <a href='#'>Logo</a>
                <ul className='hidden md:flex gap-12 z-10 cursor-pointer' >
                    <li><Link to='about' smooth={true} offset={-20} duration={500}>About</Link></li>
                    <li><Link to='projects' smooth={true} offset={30} duration={500}>Portfolio</Link></li>
                    <li><Link to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>

                {/* For mobile hamburger menu*/}
                <div className='md:hidden z-50' onClick={toggleNav}>
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
                {/* Animated menu */}
                <motion.div 
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={{open: {x : 0}, closed: {x : '-100%'}}}
                transition={{stiffness: 20, damping: 15}}
                className='bg-gray-900 fixed top-0 left-0 w-full min-h-screen bg-opacity-70 z-40'>
                    <ul className='text-4xl text-center mt-24 space-y-8'>
                        <motion.li whileHover={{scale: 1.2}}><Link to='skills' onClick={toggleNav} smooth={true} offset={50} duration={500}>About</Link></motion.li>
                        <motion.li whileHover={{scale: 1.2}}><Link to='projects' onClick={toggleNav} smooth={true} offset={50} duration={500}>Portfolio</Link></motion.li>
                        <motion.li whileHover={{scale: 1.2}}><Link to='contact' onClick={toggleNav} smooth={true} offset={50} duration={500}>Contact</Link></motion.li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;