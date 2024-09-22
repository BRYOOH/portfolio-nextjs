"use client";

import Link from "next/link";

const links = [
    {
        name:"home",
        path:"/home",
    },
    {
        name:"experience",
        path:"/experience",
    },
    {
        name:"skills",
        path:"/skills",
    },
    {
        name:"projects",
        path:"/projects",
    },
    {
        name:"contact",
        path:"/contact",
    }
];
const Nav = () => {
    
    return(
        <nav className="flex gap-5 ">
        {links.map((link,index)=>{
            return(
                <Link href={link.path} key={index} 
                className={`${pathname===link.path && "text-accent border-b-4 border-accent"}
                capitalize hover:text-accent transition-all `}>
                    {link.name}
                </Link>
            )
        })}
        </nav>
    )
   
};

export default Nav