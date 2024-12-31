/**
 * @module Projects.jsx
 * @description Portfolio of my work
 */

import React from 'react';
import rediwatch from '../assets/rediwatch.png';
import wildflowers from '../assets/flowers.png';
import { AiFillGithub } from 'react-icons/ai';

const projects = [
    {
        img: rediwatch,
        title: "Rediwatch",
        description: "Redis cache visualization tool for optimization of cache invalidation",
        links: {
            site: '#',
            github: '#',
        },
    },
    {
        img: wildflowers,
        title: "Project #2",
        description: "Description of project",
        links: {
            site: '#',
            github: '#',
        },
    },
    {
        img: wildflowers,
        title: "Project #3",
        description: "Description of project",
        links: {
            site: '#',
            github: '#',
        },
    },
];

const Projects = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-6 md:my-20' id='portfolio'>
            <h2 className='text-3xl font-semibold text-slate-300 mb-8'>Portfolio</h2>
            {/*Load Projects*/}
            {projects.map((project, i) => (
                <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} mb-12`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <img className='w-full h-full object-cover rounded-lg shadow-lg' src={project.img} alt={project.title}/>
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-slate-300 mb-4'>{project.title}</h3>
                        <p className='text-slate-300'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;