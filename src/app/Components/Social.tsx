import Link from 'next/link';
import React from 'react'
import { FaLinkedin,FaGithub } from 'react-icons/fa'

const socials =[
    {
        icon: <FaLinkedin/>,
        path: "https://www.linkedin.com/in/brian-muriuki/",
    },
    {
        icon: <FaGithub/>,
        path: "https://github.com/BRYOOH",
    }
];

const Social = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link href={item.path} key={index} className={iconStyles}>
             {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social