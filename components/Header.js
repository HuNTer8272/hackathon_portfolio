import React from "react";
import { ModeToggle } from "./ui/ToggleTheme";
import { logo_golden } from "@/helper/ImageImport";
import Image from "next/image";
import HeaderStyle from "@/style/Header.module.css"
import HeaderLinks from "@/helper/HeaderLink";


const Header = () => {
  return (
    <header id="header" className="primary-bg">
      <div className="primary-bg px-10 flex  h-[4.8rem] items-center justify-between border-b  dark:border-[#323228] p-5  py-9">
        {/* logo */}
        <div className="flex items-center justify-center space-x-3">
          {/* <Image
            src={logo_golden}
            alt="logo"
            className="h-9 w-9 lg:h-[3.2rem] lg:w-[3.2rem] xl:h-[2rem] xl:w-[7.5rem]"
          /> */}
          <h1 className="text-[1.55rem] uppercase font-uk color-accent">Nexora</h1>
        </div>
        {/* header Link */}
        <div className="mr-2 flex h-12 items-center justify-center space-x-7 rounded-full border dark:border-[#323228] p-5 text-[0.9rem] font-bold uppercase text-light  dark:text-[#ffffe3]">
          <ul className="flex items-center justify-center space-x-7">
            {/* about link */}
            <HeaderLinks HeaderStyle={HeaderStyle} href={"#about"} linkName={"About"} svg={ <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" >
	             <path fill="currentColor" d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18s3.583-.386 4.865-1.203C16.167 15.967 17 14.69 17 13a2 2 0 0 0-2-2z" />
             </svg>}/>
          
            {/* projects link */}
            <HeaderLinks HeaderStyle={HeaderStyle} href={'#projects'} linkName={"Projects"} svg={  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" >
                  	<path fill="currentColor" d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z" />
             </svg>}/>
          
            {/* contact link */}
            <HeaderLinks HeaderStyle={HeaderStyle} href={"#contact"} linkName={"Contact"} svg={ <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" >
	<path fill="currentColor" d="m20.487 17.14l-4.065-3.696a1 1 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a1 1 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39" />
</svg>} />
          </ul>
        </div>
        {/* theme changer */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};




export default Header;
