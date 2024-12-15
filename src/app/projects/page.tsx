"use client";
import { motion } from "framer-motion"
import { projects } from "../experience/works";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {

  return(
  <div className="h-full overflow-hidden bg-gray-950 gap-10">
    <motion.div 
    initial={{
      opacity:0,
      y:-50
    }}
    animate={{
      opacity:1, y:0,
      transition:{
        type:"spring",
        delay:2.4,
        duration:1.6,
      }
    }}
    className="gap-5 p-4">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I have Created </p>
      <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">MY PROJECTS</h2>
    </motion.div>

    <motion.div 
    initial={{opacity:0,x:-50}}
    animate={{
      opacity:1,
      x:0,
      transition:{
        delay:2.6,duration:0.4,ease:"easeInOut"
      }}}
    className="h-full flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8  mt-2">
      {projects.map((project, index) => (
        <div
          className=" sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          key={index}>
          <PinContainer
            title={project.link}
            href={project.link}>
            <div
              className="flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10">
              <Image
                src={project.image}
                alt={project.title}
                className="z-10 bottom-0" />
            </div>
            <h2 className="fox:-50nt-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {project.title}
            </h2>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {project.iconList.map((icon, index) => (
                  <div key={index}
                    className="border border-white/[0.2] rounded-[50px]  bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index * 2}px)`
                    }}
                  >
                    <Image src={icon} alt="" className="p-2 object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple-400">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>

          </PinContainer>
        </div>
      ))}
    </motion.div> 

  </div>
  );
  
}

export default Projects