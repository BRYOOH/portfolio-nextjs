import { motion } from "framer-motion"

const stairsAnimation ={
    intial: {
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
};

const reverseIndex=(index)=>{
    const totalSteps =6;
    return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_,index)=>{
       return <motion.div
        key={index}
        variants={stairsAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration:0.4,
            delay:reverseIndex(index)*0.1,
            ease:"easeInOut",
        }}
        className="h-full w-full bg-accent relative"
        />
    })}
    </>
  )
}

export default Stairs