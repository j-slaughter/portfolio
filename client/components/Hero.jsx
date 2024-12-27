/**
 * @module Hero.jsx
 * @description Hero section of website.
 */

import React from 'react';
import { motion } from 'motion/react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import wildflowers from '../assets/flowers.png';
import headshot from '../assets/hsmall.png';

const Hero = () => {
    return (
        <div className='mt-28 max-w-[1200px] mx-auto relative'>
            <div className='grid md:grid-cols-2 mx-4 place-items-center gap-4'>
                <motion.div 
                initial={{opacity: 0, y: -50}} 
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 2}}
                className='text-center'>
                    {/* Animated role describer*/}
                    <TypeAnimation 
                    sequence={[
                        // Same substring will only be typed once at start
                        '#SOFTWARE ENGINEER', 1000,
                        '#FULLSTACK DEVELOPER', 1000,
                        '#CREATIVE PROBLEM-SOLVER', 1000,
                        '#WEB DEVELOPER', 1000,
                        '#TECH PROGRAMMER', 1000,
                        '#HELLO WORLD', 1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className='font-semibold text-slate-300 mb-4 text-xl md:text-2xl'/>
                    <motion.p 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 2, delay: 1}}
                    className='text-slate-300 tracking-tight mb-8 text-2xl md:text-5xl'>
                        Hello, My name is <span>Jennifer</span>.
                    </motion.p>
                    <motion.p 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 2, delay: 1.5}}
                    className='text-slate-300 tracking-tight mb-8 text-lg md:text-xl'>
                        I'm a fullstack software engineer with a passion for problem-solving 
                        and creative engineering. Check out my portfolio to see some of my 
                        previous projects. Thanks for stopping by my little corner of the internet!
                    </motion.p>
                    <motion.div 
                    initial={{opacity: 0, x: -50}} 
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 1}}
                    className='flex gap-6 justify-center items-center'>
                        <motion.button 
                        whileHover={{scale: 1.05, boxShadow: "0px 0px 8px rgba(232, 232, 42, 0.44)"}}
                        className='z-10 cursor-pointer font-bold text-slate-300 md:w-auto p-2 border border-amber-200 rounded-lg'>
                            <div className='flex gap-2 items-center'><FaFileDownload/> Résumé</div>
                        </motion.button>
                        <div className='flex gap-6 flex-row text-4xl text-amber-200 z-20'>
                            <motion.a whileHover={{scale: 1.2}} href='https://github.com/j-slaughter'><AiOutlineGithub/></motion.a>
                            <motion.a whileHover={{scale: 1.2}} href='https://www.linkedin.com/in/j-slaughter'><AiOutlineLinkedin/></motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div 
                initial={{opacity: 0, y: 50}} 
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 2}}
                className='relative'>
                    <img src={wildflowers}/>
                    <img className='border-double border-4 rounded-2xl absolute right-10 top-20' src={headshot}/>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;