import FooterLink from '@/helper/FooterLink';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mx-5  p-5 border dark:border-[#323228]  rounded-t-md h-[17rem]'>
           <div className="flex justify-between ">
               {/* logo */}
                <div className="px-5 py-4 ">
                     <h1 className='text-xl font-bold uppercase font-uk color-accent'>nexora</h1>
                </div>
                {/* explore links */}
                <div className="">
                    <h1 className='font-bold text-[1.2rem] text-[#ff8709] '>Explore</h1>
                    <ul className='mt-5 space-y-5  text-[1rem] dark:text-[#ffffe3] text-light text-light '>
                      <FooterLink href={"#header"}>
                       <li className='flex items-center mb-3 space-x-5 font-semibold transition-all duration-200 ease-out cursor-pointer group'>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>Home</span>
                            <FaArrowRight className='mt-[2px] transition-all duration-200 ease-out text-[#3dad82] group-hover:rotate-[-40deg] ' />
                       </li>
                      </FooterLink>
                      <FooterLink href={"#about"}>
                       <li className='flex items-center mb-3 space-x-5 font-semibold transition-all duration-200 ease-out cursor-pointer group'>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>About</span>
                            <FaArrowRight className='mt-[2px] transition-all duration-200 ease-out text-[#3dad82] group-hover:rotate-[-40deg] ' />
                       </li>
                      </FooterLink>
                      <FooterLink href={"#projects"}>
                       <li className='flex items-center mb-3 space-x-5 font-semibold text-left transition-all duration-200 ease-out cursor-pointer group'>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>Projects</span>
                            <FaArrowRight className='mt-[2px] transition-all duration-200 ease-out text-[#3dad82] group-hover:rotate-[-40deg] ' />
                       </li>
                      </FooterLink>
                      <FooterLink href={"#contact"}>
                       <li className='flex items-center mb-3 space-x-5 font-semibold transition-all duration-200 ease-out cursor-pointer group'>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>Contact</span>
                            <FaArrowRight className='mt-[2px] transition-all duration-200 ease-out text-[#3dad82] group-hover:rotate-[-40deg] ' />
                       </li>
                      </FooterLink>
                    </ul>
                </div>
                {/* contact us  */}
                <div className="">
                    <h1 className='font-bold text-[1.1rem] text-[#17f0d0]'>Contact Us</h1>
                    <ul className='mt-5 space-y-2 text-[1rem] dark:text-[#ffffe3] text-light '>
                       <li className='flex items-center mb-3 space-x-3 font-semibold transition-all duration-200 ease-out cursor-pointer group'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 256 256" >
	                     <g fill="none">
		                   <rect width="256" height="256" fill="#fff" rx="60" />
		                   <rect width="256" height="256" fill="#0a66c2" rx="60" />
		                   <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" />
	                     </g>
                        </svg>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>Linkedin</span>
                       </li>
                       <li className='flex items-center mb-3 space-x-3 font-semibold transition-all duration-200 ease-out cursor-pointer group'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 256 256" >
	                       <g fill="none">
	                       	<rect width="256" height="256" fill="#242938" rx="60" />
	                       	<path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097" />
	                       </g>
                         </svg>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>Github</span>
                       </li>
                       <li className='flex items-center mt-5 space-x-3 font-semibold transition-all duration-200 ease-out cursor-pointer group'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3  em" viewBox="0 0 256 256" >
	                       <g fill="none">
	                       	<rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
	                       	<rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
	                       	<path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" />
	                       	<defs>
	                       		<radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
	                       			<stop stopColor="#fd5" />
	                       			<stop offset=".1" stopColor="#fd5" />
	                       			<stop offset=".5" stopColor="#ff543e" />
	                       			<stop offset="1" stopColor="#c837ab" />
	                       		</radialGradient>
	                       		<radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
	                       			<stop stopColor="#3771c8" />
	                       			<stop offset=".128" stopColor="#3771c8" />
	                       			<stop offset="1" stopColor="#60f" stopOpacity="0" />
	                       		</radialGradient>
	                       	</defs>
	                       </g>
                          </svg>
                         <span className='group-hover:text-[#a57afa] transition-all duration-200 ease-out'>Instagram</span>
                       </li>
                    </ul>
                </div>
                <div className=""></div>
           </div>
    </div>
  )
}

export default Footer