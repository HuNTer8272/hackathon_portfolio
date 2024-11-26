import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='border-t p-5 relative  dark:border-[#323228] '>
         <div className=" mb-10 mt-8 px-[12rem]">
            <h1 className='text-[2rem] font-bold text-[#a374ff]   '>Projects </h1>
         </div>
         <div className="mt-4 ">
            <ProjectCard/>
         </div>
    </div>
  )
}

export default Projects