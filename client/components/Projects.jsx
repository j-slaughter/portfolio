/**
 * @module Projects.jsx
 * @description Portfolio of my work
 */

import React from 'react';
import rediwatch from '../assets/rediwatch.png';
import spareoom from '../assets/spare.png';
import dragonite from '../assets/dragonite.png';
import travelotl from '../assets/travelotl.png';
import skillswap from '../assets/skillswap.png';
import { AiFillGithub } from 'react-icons/ai';

const projects = [
    {
        img: rediwatch,
        title: "Rediwatch",
        description: "Redis cache visualization tool for optimization of cache invalidation.",
        links: {
            site: '#',
            github: '#',
        },
    },
    {
        img: spareoom,
        title: "The Spare Oom",
        description: "Film location travel planner website. Find the real-life places of your favorite films.",
        links: {
            site: '#',
            github: '#',
        },
    },
    {
        img: dragonite,
        title: "Dragonite Gym",
        description: "Virtual gym app that allows users to search for and save exercises and chat message other gym enthusiasts.",
        links: {
            site: '#',
            github: '#',
        },
    },
    {
        img: travelotl,
        title: "Travelotl",
        description: "AI-generated travel itinerary. Uses OpenAi to generate custom travel plans according to user selections.",
        links: {
            site: '#',
            github: '#',
        },
    },
    {
        img: skillswap,
        title: "Skill Swap",
        description: "Co-op learning website where users share skill knowledge by uploading videos.",
        links: {
            site: '#',
            github: '#',
        },
    },
];

const Projects = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-6 md:my-20' id='projects'>
            <h2 className='text-3xl font-semibold text-slate-300 mb-8'>Portfolio</h2>
            {/*Load Projects*/}
            {projects.map((project, i) => (
                <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} mb-12`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <img className='w-full h-full object-cover rounded-lg shadow-lg' src={project.img} alt={project.title}/>
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold text-amber-200 mb-4'>{project.title}</h3>
                        <p className='text-slate-300'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;