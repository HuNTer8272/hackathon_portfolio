"use client";
import React from 'react'

const OpenLink = ({ href , children}) => {
    const handleLinkOpen = () => {
        window.open(href, '_blank');
    }
  return (
    <span onClick={handleLinkOpen}>
       {children}
    </span>
  )
}

export default OpenLink