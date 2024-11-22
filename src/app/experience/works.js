
import regent from "@/app/assets/regent.jpeg";
import ngcdf from "../assets/ngcdf.png";
import sysre from "@/app/assets/sysre.png";
import java from '../assets/java.jpeg'
import web from '../assets/web.jpeg'
import full from '../assets/fullstack.jpeg'
import project from '../assets/project.jpeg'
import git from '@/app/assets/git.png'
import javas from '@/app/assets/java.png'
import nextjs from '@/app/assets/nextjs.png'
import csharp from '@/app/assets/csharp.png'
import javascript from '@/app/assets/javascript.png'
import unity from '@/app/assets/unity.png'
import typescript from '@/app/assets/typescript.png'
import reactjs from '@/app/assets/reactjs.png'
import mongodb from '@/app/assets/mongodb.png'
import mysql from '@/app/assets/mysql.png'
import tailwindcss from '@/app/assets/tailwind.png'
import Ecommerce from '../assets/ecommerc.png'
import PingPong from '../assets/pong.png'
import Fitness from '../assets/Fitnesstrack.png'




export const projects=[
    {
title:'Ecommerce Website',
description:"This is a react application for buying and selling of goods.With a login and signup authentification for security purposes",
image:Ecommerce,
link:"https://quick-shop-lime.vercel.app/",
iconList:[reactjs,mongodb,git]
},
{
    title:'Fitness track app',
    description:"This is a simple fitness app, that takes a workout as an input and returns daily caloriesBurnt and records workouts.",
    image:Fitness,
    link:"https://fitness-track-liard.vercel.app/",
    iconList:[javas]
    },
{
    title:'Java Ping-pong Game',
    description:"This is a java 2d game where the user can play ping pong with the PC",
    image:PingPong,
    link:"",
    iconList:[javas]
    },

]

export const technologies = [
    {
      name: "Java",
      icon: javas,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
        name: "TailwindCSS",
        icon: tailwindcss,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySQL",
        icon: mysql,
    }
];

export const cards = [
    {
        title:"Java Developer",
        icon: java,
    },
    {
        title:"Web Developer",
        icon: web,
    },
    {
        title:"Fullstack Developer",
        icon: full,
    },
    {
        title:"Project Management",
        icon: project,
    },
];

export const works = [
    {
        title: "PROJECT MANAGEMENT INTERN",
        company_name: "NG-CDF MACHAKOS TOWN CONSTITUENCY",
        icon: ngcdf,
        iconBg: "#fff",
        dates: "April, 2024 - June, 2024",
        points:[
           " Assisted project manager to built and developed project teams, enhancing performance which increased overall team productivity by 15%.",
    "Coordinated internal and external resources to ensure projects adhered to scope,schedule, and budget, achieving a 98% on-time project delivery rate.",
    "Analyzed project status and revised scope, schedule, or budget as necessary, ensuring project requirements were met and reducing project overruns by 20%.",
    "Established processes for managing scope during the project lifecycle, setting quality and performance standards, and effectively assessing risks."
        ],
    },
    {
        title: "JUNIOR SOFTWARE DEVELOPER",
        company_name: "SYSTEMS REENGINEERED LIMITED",
        icon: sysre,
        iconBg: "#fff",
        dates: "April, 2022 - August, 2022",
        points:[
           " Designing and implementing databases, SQL commands and functions using Microsoft SQL server Consuming Microsoft Dynamics NAV web services in C#",
    "Proficiency in front-end development languages and frameworks such as HTML,CSS, JavaScript, React and Bootstrap.",
    "APIs development using C# and ASP.NET CORE frameworks and testing them using swagger UI and POSTMAN.",
    "Demonstrated proficiency in developing applications using C# and WPF, as well as familiarity with other desktop application frameworks."
        ],
    },
    {
        title: "ICT INTERN",
        company_name: "REGENT MANAGEMENT LIMITED",
        icon: regent,
        iconBg: "#fff",
        dates: "March, 2022 - April, 2022",
        points:[
           " Worked with cross-functional teams to develop and integrate software solutions,leading to a 15% improvement in product efficiency and scalability.",
    "Proficient in relational database systems and Object-Oriented Programming (OOP) principles, facilitating the development of dynamic and data-driven web applications.",
    "Proficient in frontend technologies including TypeScript, React, GraphQL, and Tailwind, with a track record of leveraging these tools to develop polished user  interfaces and enhance user experiences.",
    "Collaborated with management to shape technical business strategies, crafted web APIs, and conducted thorough unit tests, driving successful project delivery and client satisfaction."
        ],
    },
];
