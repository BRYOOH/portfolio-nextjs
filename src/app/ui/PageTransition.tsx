"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}:any) => {
    const pathname = usePathname();
  return (<AnimatePresence>
    <div key={pathname}>
    <motion.div
    initial={{opacity:1}}
    animate={{
        opacity:0,
        transition:{delay:1 , duration:0.4, ease: "easeInOut"}
    }}
    className="h-screen w-screen fixed bg-green-500 top-0 pointer-events-none" 
    />
    {children}
    </div>
  </AnimatePresence>)
};

export default PageTransition;