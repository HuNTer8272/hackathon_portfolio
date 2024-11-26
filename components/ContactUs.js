import React from 'react'
import Reveal from './anim/Reveal'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <div id='contact' className='border-t p-5 dark:border-[#323228]'>
      <div className="px-[10rem] text-light dark:text-[#ffffe3]">
              <Reveal>
                 <h1 className='mb-5 text-[2rem] font-extrabold mt-12  uppercase font-poppin'>Contact Us</h1>
              </Reveal>
              <Reveal>
                 <p className='mt-6 font-semibold text-[1.5rem] mb-8'> Collaborate with <span className='text-[#a57afa]'>Nexora</span> to Build Something <span className='text-[#17f0d0]'>Amazing</span> </p>
              </Reveal>
      </div>
      {/* contact form */}
      <ContactForm/>
    </div>
  ) 
}

export default ContactUs