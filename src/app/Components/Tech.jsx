"use client";
import { technologies } from "../experience/works";
import BallCanvas from "../Components/BallCanvas"

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((tech,index)=>(
        <div className="container w-28 h-28" key={index}>
        <BallCanvas key={tech.index} icon={tech.icon}/>  
         </div>
      ))}
    </div>
  )
}

export default Tech