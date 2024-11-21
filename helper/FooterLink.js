"use client"
import React from 'react'

const FooterLink = ({children,href}) => {
  const handleClick = (event) => {
    event.preventDefault(); 

    // Get the target ID from the href
    const id = href?.slice(1); 
    if (!id) return;

    // Locate the target element and scroll into view
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
      });
    }
  };
  return (
    <span onClick={handleClick}>
      {children}
    </span>
  )
}

export default FooterLink