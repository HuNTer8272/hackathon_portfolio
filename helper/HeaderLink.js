"use client";

import React from "react";

const HeaderLinks = ({ href, linkName, svg, HeaderStyle }) => {
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
    <span
      onClick={handleClick} 
      className={`relative flex items-center justify-center space-x-3 cursor-pointer ${HeaderStyle.headerLinks} hover:text-[#09090b] dark:hover:text-white`}
    >
      {svg}
      <span>{linkName}</span>
    </span>
  );
};

export default HeaderLinks;
