"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Reveal from './anim/Reveal';
import { FaGithub } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

import { chatroom, dischat, fighting_game, kshatriya, photography_site, quickLink, temp_1 } from '@/helper/ImageImport';
import ProjectStyle from "@/style/Project.module.css";
import ProjectModal from './ProjectModal';
import OpenLink from '@/helper/OpenLink';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const Projects = [
    {
      image: kshatriya,
      title: "Kshatriya Studios",
      lang: "NextJs",
      desc: "The Kshatriya Studios website was built using Next.js to showcase the studio's creative offerings and provide an engaging user experience. The website highlights the studio's expertise in 2D and 3D animation, visual effects, and motion graphics, catering to both entertainment and corporate sectors. With a focus on storytelling and high-quality visuals, the site captures the essence of Kshatriya Studios' mission: to bring stories to life through dynamic animation.<br><br>Designed to be visually appealing and functional, the website provides a seamless platform for clients to explore the studio's services and portfolio. It embodies the studio's passion for creativity while leveraging modern web development practices to ensure speed, responsiveness, and accessibility across devices.",
      hosted: "https://kshatriyastudios.in/",
    },
    {
      image: fighting_game,
      title: "Fighting Game",
      lang: "HTML - CSS - JavaScript",
      desc: `
        This is a two-player fighting game built using <strong class="font-bold">HTML</strong>, <strong class="font-bold">CSS</strong>, and <strong class="font-bold">JavaScript</strong>, utilizing the <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">canvas</code> element for animations. The game features sprite-based characters animated using the flipbook logic, delivering a smooth and engaging experience. Players can choose between two distinct characters: <strong>one with slow attack speed but powerful hits</strong>, and <strong>another with faster attacks but slightly lower damage</strong>, offering a strategic gameplay dynamic.
        <br><br>
        The first character is controlled using <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">W</code> (jump), <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">A</code> (move left), <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">S</code> (attack), and <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">D</code> (move right), while the second character is controlled using the arrow keys: <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">Arrow Up</code> (jump), <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">Arrow Left</code> (move left), <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">Arrow Down</code> (attack), and <code class="bg-gray-100 dark:bg-gray-800 text-[#a57afa] dark:text-[#fec5fb] px-1.5 py-0.5 rounded font-mono">Arrow Right</code> (move right).
      `,
      github: "https://github.com/HuNTer8272/Fighting-Game",
      hosted: "https://fighting-game-hunter.netlify.app/",
    },
    {
      image: chatroom,
      title: "Chatroom",
      lang: "HTML - CSS - JavaScript - WebRTC",
      desc: `
        This Chatroom application is built using <strong class="font-bold">HTML</strong>, <strong class="font-bold">CSS</strong>, <strong class="font-bold">JavaScript</strong>, and <strong class="font-bold">WebRTC</strong>. It allows users to enter their name and room ID to join or create a chatroom. Once in the room, you can chat with friends, make voice and video calls, and even share your screen.<br><br>
        The app also features a chatbot that greets users when they enter and notifies when they leave the room, making the experience more interactive. Whether you’re chatting, calling, or sharing your screen, the app ensures smooth, real-time communication with your peers.<br><br>
        The integration of <strong class="font-bold">WebRTC</strong> enables seamless peer-to-peer connections, providing a platform for direct communication without relying on a central server for media streaming.
      `,
      github: "https://github.com/HuNTer8272/dischat",
      hosted: "https://dischat-chatroom.netlify.app/",

    },
    {
      image: dischat,
      title: "Dischat",
      lang: "React - Firebase",
      desc: `
        Dischat is a messaging application built with <strong class="font-bold">React</strong> and <strong class="font-bold">Firebase</strong>, created as part of the Innohive Hackathon during an internship at Sagar and Sons. The app allows users to chat with friends, check their online/offline status, and update their profile. It also supports Google login, making it easy to get started.<br><br>
        One of the standout features of Dischat is its integration with the <strong class="font-bold">Chatroom</strong> project. Together, these applications provide a seamless user experience for real-time communication. Whether you’re sending messages or video chatting, Dischat delivers an interactive and engaging platform. This project won third place in the Innohive Hackathon, showcasing its functionality and user-friendly design.
      `,
      github: "https://github.com/HuNTer8272/dischat",
    },
    {
      image: quickLink,
      title: "QuickLink",
      lang: "MongoDB - Express - React - NodeJs",
      desc: "A simple and efficient web application designed to convert long URLs into compact, shareable links. The platform ensures quick redirection to the original URL while offering features such as link customization, analytics for tracking link performance, and user-friendly interfaces for seamless usage.",
      // hosted: "#",

    },
      {
         image: photography_site,
         title: "Photography Site",
         lang: "MongoDB - Express - HTML - CSS - NodeJs",
         desc: `Photography and Cinematography Portfolio Website
                Our team developed a dynamic portfolio website to highlight a client’s photography and cinematography expertise. The website features:
                Homepage: A stunning slider, a 9x6 grid showcasing logos of brands the client has collaborated with, and categorized sections for wedding photography, cinematography, and celebrity shoots.
                Interactive Pages: Dedicated pages for weddings and events, complete with clickable collages to explore detailed content.
                Admin Dashboard: A secure, authenticated dashboard enabling the client to efficiently manage images and videos (add, update, delete).
                We used Express.js and MongoDB for the backend, and EJS with Tailwind CSS for the frontend, ensuring a seamless and user-friendly experience.`,
        //  github: "#",
      },
  
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-10 mx-[11rem] mt-10">
        {Projects.map((project, index) => (
          <div key={index} onClick={() => openModal(project)}>
            <div className="dark:text-[#ffffe3] text-light row-span-1 cursor-pointer">
              <div className="h-[13.8rem] mb-5 w-[41vh] relative dark:bg-[#232323] bg-gray-200 overflow-hidden rounded-t-md">
                <Image
                  alt="project1"
                  src={project.image}
                  className={`absolute bottom-0 h-48 ${ProjectStyle.projectImage} rounded-md left-8 w-80`}
                />
              </div>
              <Reveal>
                <div className="flex items-center justify-center">
                  <h1 className="font-bold text-[1.4rem]   ">{project.title}</h1>
                  <div className={`${project.title.length > 12 ? "w-[10rem]" : "w-[12rem]"} h-[0.05rem] bg-[#7e7e82] mr-3 ml-3`}></div>
                  <div className="flex space-x-3 ">
                  {project.github && (
                   <OpenLink href={project.github}>
                     <FaGithub className="text-[1.4rem] dark:hover:text-white" />  
                   </OpenLink>   
                  )}
                  {project.hosted && (
                  <OpenLink href={project.hosted}>
                     <IoMdExit className="text-[1.4rem] dark:hover:text-white" />
                  </OpenLink>   
                  )}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-4 mb-2 font-poppins">
                  <h1 className="font-bold text-[#fec5fb] text-[.95rem]">{project.lang}</h1>
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-2 mb-14 font-poppin">
                  <p dangerouslySetInnerHTML={{ __html: project.desc}} className="w-[24rem] text-[0.9rem] line-clamp-2"/>
                  <span className="font-semibold text-[0.9rem] underline underline-offset-1 text-[#ffd074]">
                    Learn more
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectCard;
