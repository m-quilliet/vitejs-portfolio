import React from 'react'
import ProjectItem from './ProjectItem'
import memory from '../assets/memory.jpeg'
import movies from '../assets/movies.jpeg'
import pins from '../assets/pins.jpeg'
import poke from '../assets/poke.jpeg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={movies} title='Movies App' />
                <ProjectItem img={pins} title='Pins App' />
                <ProjectItem img={poke} title='Poke App' />
                <ProjectItem img={memory} title='Memory App' />
            </div> 
        </div>
    )
}

export default Projects