import React from 'react'
import Image from 'next/image'
import Reveal from './anim/Reveal'
import {FaGithub} from "react-icons/fa"
import { temp_1 } from '@/helper/ImageImport'
import ProjectStyle from "@/style/Project.module.css"


const ProjectCard = () => {
   const Projects = [
    {
        image:temp_1,
        title:"Title 1",
        lang:"MongoDB - Express - React - NodeJs",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum vero, perferendis quia temporibus, id maxime aut voluptas hic eaque voluptatum commodi dignissimos iusto tenetur distinctio ab! Illo blanditiis fuga veritatis cumque voluptatum error ducimus provident corrupti iure nisi illum eaque, necessitatibus eveniet ipsa, in consequuntur, repellat temporibus sapiente ad! Deserunt laboriosam, saepe excepturi dolorem nobis voluptate officiis incidunt. Velit vitae magni deleniti placeat esse unde, autem est aliquid saepe voluptatibus quibusdam impedit aliquam dicta aut voluptatum recusandae facere necessitatibus quasi, dignissimos provident sint alias consequuntur totam repellat. Rerum sunt nostrum quasi temporibus ipsam corrupti eum, quo reprehenderit at eius."
     },
    {
        image:temp_1,
        title:"Title 1",
        lang:"MongoDB - Express - React - NodeJs",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum vero, perferendis quia temporibus, id maxime aut voluptas hic eaque voluptatum commodi dignissimos iusto tenetur distinctio ab! Illo blanditiis fuga veritatis cumque voluptatum error ducimus provident corrupti iure nisi illum eaque, necessitatibus eveniet ipsa, in consequuntur, repellat temporibus sapiente ad! Deserunt laboriosam, saepe excepturi dolorem nobis voluptate officiis incidunt. Velit vitae magni deleniti placeat esse unde, autem est aliquid saepe voluptatibus quibusdam impedit aliquam dicta aut voluptatum recusandae facere necessitatibus quasi, dignissimos provident sint alias consequuntur totam repellat. Rerum sunt nostrum quasi temporibus ipsam corrupti eum, quo reprehenderit at eius."
     },
    {
        image:temp_1,
        title:"Title 1",
        lang:"MongoDB - Express - React - NodeJs",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum vero, perferendis quia temporibus, id maxime aut voluptas hic eaque voluptatum commodi dignissimos iusto tenetur distinctio ab! Illo blanditiis fuga veritatis cumque voluptatum error ducimus provident corrupti iure nisi illum eaque, necessitatibus eveniet ipsa, in consequuntur, repellat temporibus sapiente ad! Deserunt laboriosam, saepe excepturi dolorem nobis voluptate officiis incidunt. Velit vitae magni deleniti placeat esse unde, autem est aliquid saepe voluptatibus quibusdam impedit aliquam dicta aut voluptatum recusandae facere necessitatibus quasi, dignissimos provident sint alias consequuntur totam repellat. Rerum sunt nostrum quasi temporibus ipsam corrupti eum, quo reprehenderit at eius."
     },
    {
        image:temp_1,
        title:"Title 1",
        lang:"MongoDB - Express - React - NodeJs",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum vero, perferendis quia temporibus, id maxime aut voluptas hic eaque voluptatum commodi dignissimos iusto tenetur distinctio ab! Illo blanditiis fuga veritatis cumque voluptatum error ducimus provident corrupti iure nisi illum eaque, necessitatibus eveniet ipsa, in consequuntur, repellat temporibus sapiente ad! Deserunt laboriosam, saepe excepturi dolorem nobis voluptate officiis incidunt. Velit vitae magni deleniti placeat esse unde, autem est aliquid saepe voluptatibus quibusdam impedit aliquam dicta aut voluptatum recusandae facere necessitatibus quasi, dignissimos provident sint alias consequuntur totam repellat. Rerum sunt nostrum quasi temporibus ipsam corrupti eum, quo reprehenderit at eius."
     },
    {
        image:temp_1,
        title:"Title 1",
        lang:"MongoDB - Express - React - NodeJs",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum vero, perferendis quia temporibus, id maxime aut voluptas hic eaque voluptatum commodi dignissimos iusto tenetur distinctio ab! Illo blanditiis fuga veritatis cumque voluptatum error ducimus provident corrupti iure nisi illum eaque, necessitatibus eveniet ipsa, in consequuntur, repellat temporibus sapiente ad! Deserunt laboriosam, saepe excepturi dolorem nobis voluptate officiis incidunt. Velit vitae magni deleniti placeat esse unde, autem est aliquid saepe voluptatibus quibusdam impedit aliquam dicta aut voluptatum recusandae facere necessitatibus quasi, dignissimos provident sint alias consequuntur totam repellat. Rerum sunt nostrum quasi temporibus ipsam corrupti eum, quo reprehenderit at eius."
     },
    {
        image:temp_1,
        title:"Title 1",
        lang:"MongoDB - Express - React - NodeJs",
        desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum vero, perferendis quia temporibus, id maxime aut voluptas hic eaque voluptatum commodi dignissimos iusto tenetur distinctio ab! Illo blanditiis fuga veritatis cumque voluptatum error ducimus provident corrupti iure nisi illum eaque, necessitatibus eveniet ipsa, in consequuntur, repellat temporibus sapiente ad! Deserunt laboriosam, saepe excepturi dolorem nobis voluptate officiis incidunt. Velit vitae magni deleniti placeat esse unde, autem est aliquid saepe voluptatibus quibusdam impedit aliquam dicta aut voluptatum recusandae facere necessitatibus quasi, dignissimos provident sint alias consequuntur totam repellat. Rerum sunt nostrum quasi temporibus ipsam corrupti eum, quo reprehenderit at eius."
     },
 
   ] 
  return (
    <div className='relative'>
         {/* projectCard grid */}
         <div className="grid  grid-cols-3  gap-10 mx-[11rem]  mt-10">
               {Projects.map((project,index) => (
                <>
                {/* projects */}
                <div key={index} className="dark:text-[#ffffe3] text-light row-span-1">
                     <div className="h-[13.8rem] mb-5 w-[41vh] relative dark:bg-[#232323] bg-gray-200 overflow-hidden rounded-t-md">
                         <Image alt='project1' src={project.image} className={`absolute bottom-0 h-48 ${ProjectStyle.projectImage} cursor-pointer rounded-md left-8 w-80 bg-[#7e7e82]`}/>
                     </div>
                      {/* Project Title */}
                     <Reveal>
                       <div className="flex items-center justify-center ">
                         <h1 className=' font-bold text-[1.4rem]  '>{project.title}</h1>
                         <div className="w-60 h-[0.05rem] bg-[#7e7e82]  mr-3 ml-3"></div>
                         <FaGithub className='text-[1.4rem] dark:hover:text-white cursor-pointer '/>
                       </div>
                     </Reveal>
                     {/* Project Langauge */}
                     <Reveal>
                        <div className="mt-4 mb-2 font-poppins">
                           <h1 className='font-bold text-[#fec5fb] text-[.95rem] '>{project.lang}</h1>
                        </div>
                     </Reveal>
                      {/* Project description */}
                     <Reveal>
                        <div className="mt-2 mb-14 font-poppin ">
                           <p className='w-[24rem] text-[0.9rem] line-clamp-2 '> 
                            {project.desc}
                           </p><span className='font-semibold text-[0.9rem]  underline underline-offset-1 text-[#ffd074]'>learn more</span>
                        </div>
                     </Reveal>
                </div>
                </>
               ))}
                
            </div>
            

            {/* <div className="absolute  bottom-0 left-1/2 -translate-x-1/2 z-20 isolate  bg-red-500 w-[35rem] h-[52rem]">
                asds
            </div> */}
    </div>

  )
}

export default ProjectCard