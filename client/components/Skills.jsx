/**
 * @module Skills.jsx
 * @description List of tech skills.
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
    DiHtml5, 
    DiCss3, 
    DiJsBadge, 
    DiNodejs, 
    DiReact,
    DiMongodb, 
    DiDocker } from 'react-icons/di';

const Skills = () => {
    return (
        <div className='mt-36 mb-24'>
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.5}}
            className='flex flex-row justify-center items-center gap-4 text-slate-300 text-4xl z-20'>
                <p>Tech Skills:</p>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiJsBadge className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiNodejs className='text-6xl ' style={{color: '#3F7D3D'}}/>
                <DiDocker className='text-6xl text-blue-600'/>
                <DiMongodb className='text-green-400'/>
            </motion.div>
            <div className='mt-2 w-full h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-200 to-teal-950'></div>
        </div>
    );
};

export default Skills;