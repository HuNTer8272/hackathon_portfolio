import React from "react";
import AboutIcons from "./AboutIcons";
import { HiDesktopComputer } from "react-icons/hi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import Slider from "@/components/Slider";
import { bootstrap_svg, css_svg, flask_svg, git_svg, html_svg, java_svg, javascript_svg, jquery_svg, mongodb_svg, nextjs_svg, node_svg, php_svg, python_svg, react_svg, shadcn_svg, sql_svg, svelte_svg, tailwind_svg, typescript_svg } from "@/helper/ImageImport";
import Reveal from "./anim/Reveal";
const AboutUs = () => {
 
  return (
    <div id="about" className="border-t    p-5   dark:border-[#323228]">
       <AboutIcons/>
       <div className="mt-20 px-[14rem] text-light dark:text-[#ffffe3] ">
        <Reveal>
            <h1 className="mb-5 text-[2.8rem] font-extrabold uppercase font-poppin">About Us</h1>
          </Reveal>
          <Reveal>
            <p className=" w-[58rem] font-semibold text-[1.2rem]   "><span className="text-[#ffd074]">Nexora </span>is a group of student developers with a focus on <span className="text-[#17f0d0]">web development</span>, <span className=" text-[#a374ff]">app development</span>, and <span>UI design</span>. We're passionate about creating functional and user-friendly projects, working together to improve our skills and collaborate on real-world solutions.</p>
          </Reveal>
          <Reveal>
            <p className=" w-[58rem] font-semibold mt-7 text-[1.2rem]  ">As a team, we strive to keep learning and pushing the boundaries of what we can build, all while helping each other grow. Whether it's building websites, mobile apps, or designing intuitive interfaces, we take pride in delivering quality work that speaks for itself.</p>
          </Reveal>
       </div>
       <div className="mt-24 px-[14rem] dark:text-[#ffffe3]  flex flex-col">
       <h1 className="mb-5 text-[2rem] font-extrabold text-[#fec5fb] uppercase font-poppin self-center">What We Do</h1>
           {/* card div */}
           <div className="flex justify-between mt-12 bgpurple-500 ">
                {/* card  website */}
                <div className="dark:bg-neutral-900 bg-[#f9fafb] shadow-lg  w-[23rem] h-[15rem] overflow-hidden rounded-xl">
                  {/* upper section */}
                  <div className="w-full h-16">
                    <div className="flex w-full h-full">
                      <div className="w-20 h-full rounded-br-xl flex justify-center items-center dark:bg-[#0c0a09] bg-white ">
                          <div className="rounded-full flex justify-center items-center text-2xl  bg-[#eeedf9] text-[#a57afa] size-10">
                            <HiDesktopComputer/>
                          </div>
                      </div>
                          <div className="dark:bg-[#0c0a09] bg-white size-3 ">
                              <div className="rounded-tl-full bg-[#f9fafb] dark:bg-neutral-900 size-3"></div>
                          </div>
                          </div>
                          <div className="dark:bg-[#0c0a09] bg-white size-3 ">
                              <div className="rounded-tl-full bg-[#f9fafb] dark:bg-neutral-900 size-3">
                          </div>
                      </div>
                    </div>
                    {/* lower section */}
                    <div className=" flex flex-col py-9  items-center h-[calc(100%-3.5rem)]">
                        <h1 className="font-bold text-[1.1rem] text-[#a374ff] ">Web Development</h1>
                        <p className="px-5 mt-3 text-center text-[0.9rem]">Building clean, responsive websites that adapt to any device and provide a seamless experience.</p>
                    </div>
                </div>
                {/* card app  */}
                <div className="dark:bg-neutral-900 bg-[#f9fafb] shadow-md w-[23rem] h-[15rem] overflow-hidden rounded-xl">
                  {/* upper section */}
                  <div className="w-full h-16">
                    <div className="flex w-full h-full">
                      <div className="w-20 h-full rounded-br-xl flex justify-center items-center  dark:bg-[#0c0a09] bg-white ">
                          <div className="rounded-full flex justify-center items-center text-2xl  bg-[#fbf5e7] text-[#ff8709] size-10">
                            <MdOutlinePhoneAndroid/>
                          </div>
                      </div>
                          <div className="dark:bg-[#0c0a09] bg-white size-3 ">
                              <div className="rounded-tl-full bg-[#f9fafb] dark:bg-neutral-900 size-3"></div>
                          </div>
                          </div>
                          <div className="dark:bg-[#0c0a09] bg-white size-3 ">
                              <div className="rounded-tl-full bg-[#f9fafb] dark:bg-neutral-900 size-3">
                          </div>
                      </div>
                    </div>
                    {/* lower section */}
                    <div className=" flex flex-col py-9  items-center h-[calc(100%-3.5rem)]">
                        <h1 className="font-bold text-[1.1rem] text-[#ff8709] ">App Development</h1>
                        <p className="px-5 mt-3 text-center text-[0.9rem]">Creating functional and user-friendly mobile applications designed to meet specific needs and provide value.</p>
                    </div>
                </div>
                {/* card ui ux  */}
                <div className="dark:bg-neutral-900 bg-[#f9fafb] shadow-md w-[23rem] h-[15rem] overflow-hidden rounded-xl">
                  {/* upper section */}
                  <div className="w-full h-16">
                    <div className="flex w-full h-full">
                      <div className="w-20 h-full rounded-br-xl flex justify-center items-center dark:bg-[#0c0a09] bg-white ">
                          <div className="rounded-full flex justify-center items-center text-2xl  bg-[#ddfef5] text-[#3dad82] size-10">
                            <FaPaintBrush/>
                          </div>
                      </div>
                          <div className="dark:bg-[#0c0a09] bg-white size-3 ">
                              <div className="rounded-tl-full bg-[#f9fafb] dark:bg-neutral-900 size-3"></div>
                          </div>
                          </div>
                          <div className="dark:bg-[#0c0a09] bg-white size-3 ">
                              <div className="rounded-tl-full bg-[#f9fafb] dark:bg-neutral-900 size-3">
                          </div>
                      </div>
                    </div>
                    {/* lower section */}
                    <div className=" flex flex-col py-9  items-center h-[calc(100%-3.5rem)]">
                        <h1 className="font-bold text-[1.1rem] text-[#3dad82] ">UI & UX</h1>
                        <p className="px-5 mt-3 text-center text-[0.9rem]">Designing intuitive user interfaces with a focus on clarity and ease of use, ensuring a smooth user experience across all platforms.</p>
                    </div>
                </div>
                
           </div>
       </div>
       <div className="mt-20 ">
           <div className="flex items-center justify-center pb-5">
              <h1 className=" font-bold uppercase text-[2rem] text-[#f02767]">Our TechStack</h1> 
            </div>
            <div className="flex items-center justify-center py-10 pb-16">
              
            <Slider widht={"70px"}   height={"70px"} items={[css_svg,git_svg,html_svg,java_svg,javascript_svg,jquery_svg,svelte_svg,flask_svg,bootstrap_svg,tailwind_svg,php_svg,mongodb_svg,nextjs_svg,python_svg, node_svg,react_svg,shadcn_svg,sql_svg,typescript_svg]}/>
            </div>
            
            
          </div>
    </div>
  );
};

export default AboutUs;
