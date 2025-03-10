import React from 'react'
import { useState, useEffect } from 'react'

export const Dynamicpage = () => {
  const [windowWidth, setwindowwidth]=useState(window.innerWidth)
  
  const handleResize = () => {
    setwindowwidth(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize);
  },[])
  
  return (
    <div>{windowWidth}</div>
  )
}
