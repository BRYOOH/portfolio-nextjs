"use client";
import { motion } from "framer-motion"

const Projects = () => {
  return (
   <div className="h-full overflow-hidden bg-gray-950 gap-10">
    <motion.div className="gap-5">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I have Created </p>
      <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">MY PROJECTS</h2>
    </motion.div>
  
   </div>
  )
}

export default Projects