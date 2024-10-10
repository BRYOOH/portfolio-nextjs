'use client';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import { GlobeDemo } from "../ui/GlobeDemo";

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

const Contact = () => {

  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_96b50mg', 'template_o7k8wg3', form.current, {
        publicKey: 'j5lxyQK3Pt3mDexe0',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          alert("Successiful sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
<div className="flex xl:flex-row flex-col-reverse overflow-hidden sm:gap-3 gap-10 bg-gray-950">
    
    <motion.div className="flex-[0.75] bg-black-100 p-4 rounded-lg ">
   <motion.div variants={textVariant} initial="hidden" animate="show" >
   <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in Touch</p>
   <h2 className="text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">Contact</h2>
   </motion.div>
  <form className="mt-12 sm:mt-4 flex flex-col sm:gap-4 gap-8" ref={form} onSubmit={sendEmail}>
    
    <label className="flex flex-col">
      <span className="text-white font-medium mb-2">
      Your Name  
      </span>  
    <input 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-[10px] outline-none border-none font-medium" 
    type="text" 
    name="user_name"
    placeholder="Your Name"/> 
    </label>

    <label className="flex flex-col">
      <span className="text-white font-medium mb-2">
        Your Email Address
      </span>
    <input 
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-[10px] outline-none border-none font-medium"  
    type="text" 
    name="user_email"
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
   <GlobeDemo/>
  </motion.div>
  </div>
  )
}

export default Contact;