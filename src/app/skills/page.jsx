"use client";
import { motion } from "framer-motion"
import {cards} from "../experience/works"
import { Tilt } from "react-tilt";
import Image from "next/image";
import Tech from "../Components/Tech"

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const textVariant ={
  hidden : {
    y: -50,
    opacity: 0,
  },
  show : {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.4,
      delay: 1.6,
    },
  },
};

const SkillsCard=({title,icon,index})=>(
  <Tilt className="sm:w-[250px] w-full">
  <motion.div variants={fadeIn("right", "spring",2.4*index,0.75)} 
  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
  <div options={{max:45,scale:1,speed:450}}
    className="bg-tertiary rounded-[20px] py-5 px-12 border-1.5 border-accent min-h-[280px] flex justify-evenly items-center flex-col">
  <Image src={icon} alt={title} className="w-28 h-28 object-cover"/>
  <h2 className="text-white text-[20px] font-bold text-center">{title}</h2>
  </div>
  </motion.div>
</Tilt>
);


const Skills = () => {
  return (
   <>
   <div className="h-full w-full bg-gray-950"> 
    <motion.div variants={textVariant} initial="hidden" animate="show">
    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
      Technology and skills obtained</p>
    <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">Skills</h2>
   </motion.div>

   <div className="mt-20 flex flex-wrap items-center justify-center gap-10 mb-28" >
    {cards.map((card,index)=>(
  
      <SkillsCard key={card.title} index={index} {...card}/>
    ))}
   </div>

   <Tech/>
  

   </div>
   
   </>
  )
}

export default Skills