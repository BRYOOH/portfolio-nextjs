"use client";
import CountUp from "react-countup"

const info = [
  {
    num:2,
    name: "Years of experience"
  }, 
  {
    num:8,
    name: "Technologies learnt"
  },
  {
    num:27,
    name: "Project completed"
  },
  {
    num:182,
    name: "Number of Total commits"
  },
]; 

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vm] mx-auto xl:max-w-none pb-14 ">
          {info.map((stat,index)=>{
            return (
            <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start ">
            <CountUp
            end={stat.num}
            duration={6}
            delay={2}
            className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className={`${stat.name.length<15 ? "max-w-[100px]":"max-w-[150px]"}`}>{stat.name}</p>
            </div>);
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats