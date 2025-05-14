"use client";
import { VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import {  motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {works} from './works'
import Image from 'next/image';


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

const ExperienceCard =({work},index)=>(
  <>
  <VerticalTimelineElement
    visible
    contentStyle={{background:"#026314", color :"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #217524"}}
    date={work.dates}
    iconStyle={{background: work.iconBg}}
    icon= {
      <div className='flex items-center justify-center w-full h-full border-none'>
        <Image src={work.icon} 
        alt=""
        className='h-[60px] w-[60px] rounded-[50%] object-contain '/>
        </div>
    }
    key={index}
    >
    <div>
      <h3 className=" text-[24px] font-bold ">{work.title}
   </h3>
      <p className=" text-secondary text-[16px] font-semibold "> {work.company_name}</p>
    </div>
    <ul style={{listStyle: "initial"}}>
      {work.points.map((point,index)=>(
        <li key={index}>{point}</li>
      ))} 
    </ul>
    </VerticalTimelineElement>
  </>
    );

const Experience = () => {
  return (
   <>
   
   <div className=' bg-gray-950 p-2'>
   <motion.div variants={textVariant} initial="hidden" animate="show" >
    <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
    Where I have worked before
    </p>
    <h2 className= "text-accent font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase"> Experiences </h2>
   </motion.div>

   <motion.div initial={{opacity:0}} 
   animate={{ opacity:1,
    transition:{
      delay:1.6,
      duration:2.4,
      ease:"easeIn"
    }}}
   className="mt-20 flex flex-col">
    <VerticalTimeline>
      {works.map((work,index)=>(
        <ExperienceCard key={index} work={work}/>
      ))}
    </VerticalTimeline>
   </motion.div>
   </div>
   </>
  )
}

export default Experience