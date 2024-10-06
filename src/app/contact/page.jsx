'use client';
import { motion } from "framer-motion";
import EarthCanvas from "../Components/EarthCanvas";

const Contact = () => {
  return (
  <div className="flex xl:flex-row flex-col-reverse overflow-hidden gap-10 bg-gray-950">
    
    <motion.div className="flex-[0.75] bg-black-100 p-4 rounded-lg ">
    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in Touch</p>
    <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">Contact</h2>
  
  <form className="mt-12 flex flex-col gap-8">
    
    <label className="flex flex-col">
      <span className="text-white font-medium mb-2">
      Your Name  
      </span>  
    <input 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-[10px] outline-none border-none font-medium" 
    type="text" 
    placeholder="Your Name"/> 
    </label>

    <label className="flex flex-col">
      <span className="text-white font-medium mb-2">
        Your Email Address
      </span>
    <input 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-[10px] outline-none border-none font-medium"  
    type="text" 
    placeholder="Your Name"/>
    </label>
    <label className="flex flex-col">
      <span className="text-white font-medium mb-2">
        Your Message
      </span>
    <textarea 
    name="message"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-[10px] outline-none border-none font-medium" 
    placeholder="Write your Message" 
    rows ={5} />
    </label>
    <button
    type="submit"
    className="bg-white hover:bg-accent px-14 py-3 outline-none w-fit text-black shadow-md shadow-primary rounded-[20px]"
    >
  Send
    </button>
   
  </form>
    </motion.div>
  
  <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"> 
    <EarthCanvas/>
  </motion.div>
  </div>
  )
}

export default Contact;