/**
 * @module Hero.jsx
 * @description Hero section of website.
 */

import React from 'react';
import { motion } from 'motion/react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import wildflowers from '../assets/flowers.png';
import headshot from '../assets/hsmall.png';

const Hero = () => {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto relative'>
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
                    className='text-slate-300 tracking-tight mb-4 text-lg md:text-xl'>
                        Harry Potter Ispum: A week ago. Harry would have said finding a partner
                         for a dance would be a cinch compared to taking on a Hungarian Horntail.
                          But now that he had done the latter, and was facing the prospect of asking
                           a girl to the ball, he thought he'd rather have another round with the dragon.
                    </motion.p>
                    <motion.div 
                    initial={{opacity: 0, x: -50}} 
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 1}}>
                        <p>Get Résumé</p>
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