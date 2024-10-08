"use client";
import { motion } from "framer-motion"
import { projects } from "../experience/works";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

const Projects = () => {
  return (
   <div className="h-full overflow-hidden bg-gray-950 gap-10">
    <motion.div className="gap-5">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I have Created </p>
      <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">MY PROJECTS</h2>
    </motion.div>
     
     <motion.div className="h-full flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8  mt-2">
      {projects.map((project,index)=>(
        <div 
        className=" sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]" 
        key={index}>
          <PinContainer 
          title={project.title} 
          href={project.link}>
            <div 
            className="flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
            <Image 
            src={project.image} 
            alt={project.title} 
            className="z-10 bottom-0"/>
            </div>
            <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
            {project.title}
            </h2>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
            {project.description}
            </p>
            
          </PinContainer>
        </div>
      ))}
     </motion.div>
    
  
   </div>
  )
}

export default Projects