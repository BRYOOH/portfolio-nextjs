import Profile from "./Components/Profile";
import Social from "./Components/Social";
import Stats from "./Components/Stats";
import { Button } from "./ui/button";
import {FiDownload} from 'react-icons/fi'

export default function Home() {
  return (
    <section className="h-full bg-gray-950">
      <div className="container h-full mx-auto">
      <div className="h-full flex flex-col xl:flex-row 
      items-center justify-between xl:pb-24 xl:pt-2">

        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Fullstack Developer</span>
          <h1 className="h1">
            Hello I'm <br/> <span className="text-accent">Brian Muriuki </span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
           Results-driven Full Stack Engineer with experience in multiple languages.
           I deliver high-quality software solutions that exceed user expectations.
           </p>
           <div className="flex flex-col xl:flex-row items-center gap-4">  
            <Button variant="outline" size='lg' 
            className="uppercase flex items-center gap-2 text-accent hover:text-white/50 rounded-[30px]">
              <span>Download cv</span>
              <FiDownload className="text-xl"/>
            </Button>

            <div className=" mt-1 mb-8 xl:mb-0 flex items-center justify-center">
            <Social containerStyles="flex gap-5"
            iconStyles= "w-9 h-9 border border-accent rounded-[40px] flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
           </div>
           </div>
        </div>

        <div className="order-1 xl:order-none mb-5">
          <Profile/>
        </div>
      </div>
      <Stats/>
      </div>
      
    </section>
  );
}
