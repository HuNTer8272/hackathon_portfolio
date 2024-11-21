"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


const Reveal = ({ children, padding='0rem', width = "fit-content" }) => {
    const revealContainer = useRef(null); // Target the container instead of using classes
    
    useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
        if (!revealContainer.current) return;
  
    const ctx = gsap.context(() => {
      const fadeIn = revealContainer.current.querySelector(".fade-in");
      const slideOut = revealContainer.current.querySelector(".slide-out");
  
      gsap.fromTo(
        fadeIn,
        { opacity: 0, y: 75 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.35,
          scrollTrigger: {
            trigger: revealContainer.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
  
      gsap.fromTo(
        slideOut,
        { left: "0%" },
        {
          left: "100%",
          duration: 0.8,
          ease: "power1.in",
          scrollTrigger: {
            trigger: revealContainer.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    }, revealContainer);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <div
      ref={revealContainer}
      style={{position:"relative",width,overflow:'hidden',padding}} // Dynamic width
    //   className="relative overflow-hidden p-[0.6rem]"
    >
      <div className="fade-in">{children}</div>
      <div
        style={{
          background: "linear-gradient(to right, #f29e55, #f7a63a)",
          zIndex: 20,
        }}
        className="slide-out absolute top-[4px] bottom-[4px] left-0 right-0"
      ></div>
    </div>
  );
};

export default Reveal;
