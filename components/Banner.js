import React from 'react'
import WaterDrop from './anim/WaterDrop'
import Reveal from './anim/Reveal'

const Banner = () => {
  return (
    <div  className='flex relative  h-[50rem] dark:text-[#ffffe3]  font-poppin font-normal text-light  p-5 py-16 justify-center pr-[25%]'>
       <div className="relative flex flex-col   justify-center w-[50%]">
          <div className="absolute left-[8rem]  z-10 isolate top-[8rem] ">
             <Reveal padding='0.6rem'>   
              <h1 className='text-[3.4rem]  font-[paytone one] leading-[3.5rem]  font-semibold  w-[30rem]'>Welcome to Nexora! <span className='text-[4rem]  color-accent'>.</span></h1>
             </Reveal>
             <Reveal padding='0.6rem'>
              <p className='text-[1rem]   '>We’re a group of student developers specializing in <span className='font-semibold color-accent'>full-stack and app development</span> 💻📱, building innovative solutions. This website is our group portfolio, showcasing our skills and projects 🚀. Let’s connect and explore tech together! 🤝 </p>
             </Reveal>
             <Reveal padding='0.6rem'>
              <button className='p-3 px-5 font-semibold dark:text-[#ffffe3] text-gray-100 rounded-full active-color bg-accent'>Contact Us</button>
             </Reveal>
          </div>
       </div>
       <div className="absolute left-[26%] w-[60%]">
            <WaterDrop GRID_WIDTH={20} GRID_HEIGHT={18}  />
       </div>
    </div>
  )
}

export default Banner