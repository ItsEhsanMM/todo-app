import React from "react";

//icons
import github from '../assets/github.svg'

const Contact = () => {
   return (
      <div className="relative flex h-64 w-[100%] flex-col items-center justify-center bg-dark">
         <h1 className="absolute top-16 text-center text-4xl font-bold leading-6  text-blue">Contact</h1>
         <div className=" w-10 h-10 absolute top-28">
            <a href="https://github.com/ItsEhsanMM" target="_blank"><img className="w-full h-full" src={github} alt="github" /></a>
         </div>
         <div className="cursor-pointer text-blue absolute top-44">
            <a href="mailto:ItsEhsanMM@gmail.com">ItsEhsanMM@gmail.com</a>
         </div>
      </div>
   );
};

export default Contact;
