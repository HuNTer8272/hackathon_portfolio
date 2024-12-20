"use client";
import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import AboutStyle from "@/style/About.module.css";
import OpenLink from '@/helper/OpenLink';

const AboutIcons = () => {
  return (
    <div className="flex items-center justify-center py-4">
      {/* Apply `group` to the parent container */}
      <div 
        className={`flex h-12 py-7 items-center justify-center ${AboutStyle.container} space-x-[1.6rem] w-fit transition-all border-2 dark:border-1 rounded-full dark:border-[#323228] p-5 group`}>
        
        {/* Individual Icon Containers */}
        <OpenLink href={'https://www.linkedin.com/in/nexora-b8804a33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
          <div className={`flex items-center justify-center ${AboutStyle.icon} cursor-pointer transition-all ease-out duration-200 bg-[#505052] text-gray-100 dark:bg-[#ffffe3] dark:text-[#0e100f] relative w-10 h-10 rounded-full group-hover:scale-[1.2] group-hover:opacity-100`}>
            <FaLinkedin className="text-2xl" />
          </div>
        </OpenLink>
        <OpenLink href={"https://github.com/Nexora-org"}>
          <div className={`flex items-center justify-center ${AboutStyle.icon} cursor-pointer transition-all ease-out duration-200 bg-[#424245] text-gray-100 dark:bg-[#ffffe3] dark:text-[#0e100f] relative w-10 h-10 rounded-full group-hover:scale-[1.2] group-hover:opacity-100`}>
            <FaGithub className="text-2xl" />
          </div>
        </OpenLink>
        <OpenLink href={'https://www.instagram.com/_nexora__/?next=%2F'}>
          <div className={`flex items-center justify-center ${AboutStyle.icon} cursor-pointer transition-all ease-out duration-200 bg-[#505052] text-gray-100 dark:bg-[#ffffe3] dark:text-[#0e100f] relative w-10 h-10 rounded-full group-hover:scale-[1.2] group-hover:opacity-100`}>
            <FaSquareInstagram className="text-2xl" />
          </div>
        </OpenLink>
      </div>
    </div>
  );
};

export default AboutIcons;
