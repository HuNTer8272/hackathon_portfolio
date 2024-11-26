'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import Image from 'next/image';
import { IoMdExit } from "react-icons/io";
import OpenLink from '@/helper/OpenLink';

const ProjectModal = ({ isOpen, closeModal, project }) => {
  const modalRef = useRef(null);
  const lenis = useLenis();

  const disableScroll = () => {
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    window.scrollTo(0, 0);
  };

  const enableScroll = () => {
    if (lenis) lenis.start();
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
      if (modalRef.current) {
        gsap.from(modalRef.current, {
          bottom: '-100%',
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md backdrop-filter backdrop-brightness-75"
      onClick={closeModal}
    >
      <div
        ref={modalRef}
        className="project-modal relative w-11/12 overflow-hidden dark:bg-[#232323] bg-gray-200 rounded-lg shadow-lg md:w-2/3 lg:w-[40rem] h-[50rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute font-semibold text-[#ffffe3] hover:text-gray-100 top-4 right-4"
          onClick={closeModal}
        >
          <IoClose size={20} />
        </button>
        {/* Upper section */}
        <div className="bg-gray-100 h-[45%]">
          <Image
            src={project.image}
            className="w-full h-full bg-cover"
            alt={project.title || "project"}
          />
        </div>
        {/* Lower section */}
        <div className="p-5 h-[calc(100%-45%)] font-poppins">
          {/* Title and links */}
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-[1.58rem] text-[#a374ff]">{project.title}</h1>
              <p className="font-bold text-[#fec5fb] text-[0.95rem] mt-2 mb-2">{project.lang}</p>
            </div>
            <div className="flex my-3 space-x-5">
              {project.github && (
                <OpenLink href={project.github}> 
                  <div className="flex  space-x-2 justify-center cursor-pointer hover:scale-[1.07] ease-out transition-all duration-200  dark:text-[#ffffe3] text-light">
                    <FaGithub className="text-[0.9rem]" />
                    <span className="text-[0.8rem] font-poppin text-gray-50">Source Code</span>
                  </div>
                </OpenLink>
              )}
              {project.hosted && (
                <OpenLink href={project.hosted}>
                <div className="flex  space-x-2 justify-center cursor-pointer hover:scale-[1.07] ease-out transition-all duration-200  dark:text-[#ffffe3] text-light">
                  <IoMdExit className="text-[1rem]" />
                  <span className="text-[0.8rem] font-poppin text-gray-50">Live project</span>
                </div>
                </OpenLink>
              )}
            </div>
          </div>
          {/* Description */}
          <p dangerouslySetInnerHTML={{ __html: project.desc }} className="mt-3 dark:text-[#ffffe3] text-light text-[0.9rem]"/>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
