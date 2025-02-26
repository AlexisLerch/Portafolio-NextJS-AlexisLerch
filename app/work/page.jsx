"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGit, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: "Pagina web creada con React.JS responsiva la promocion de un juego, con videos, imagenes, animaciones y sonido",
    stack: [
      {name: 'HTML CSS'},
      {name: 'React.Js'},
      {name: 'Tailwind'}
    ],
      image: '/assets1/work/thumb7.png',
      live: 'https://reactjs-awwwards-website.vercel.app/',
      github: 'https://github.com/AlexisLerch/Reactjs-app-awwwards',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description: "Pagina web creada con React.JS responsiva de una IA ficticia.",
    stack: [
      {name: 'HTML CSS'},
      {name: 'React.Js'},
      {name: 'Tailwind'}
    ],
      image: '/assets1/work/thumb2.png',
      live: 'https://reactjs-web-two.vercel.app/',
      github: 'https://github.com/AlexisLerch/website-reactjs',
  },
  {
    num: '03',
    category: 'javaScript',
    title: 'project 3',
    description: "Juego de rol donde podes pelar contra monstruos comprar armas o vida para asi acabar con ellos mas facil hasta matar al dragon final para ganar el juego.",
    stack: [
      {name: 'JavaScript'},
      {name: 'HTML'},
      {name: 'CSS'}
    ],
      image: '/assets1/work/thumb6.png',
      live: 'https://juego-de-rol.onrender.com/',
      github: 'https://github.com/AlexisLerch/Juego-de-Rol',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'project 4',
    description: "Pagina web creada con React.JS responsiva de un banco ficticio.",
    stack: [
      {name: 'HTML CSS'},
      {name: 'React.Js'},
      {name: 'Tailwind'}
    ],
      image: '/assets1/work/thumb1.png',
      live: 'https://github.com/AlexisLerch/react-bank-app',
      github: 'https://github.com/AlexisLerch/react-bank-app',
  },
  {
    num: '05',
    category: 'frontend',
    title: 'project 5',
    description: "Pagina web creada con React.JS responsiva de un portafolio personal ficticio.",
    stack: [
      {name: 'HTML CSS'},
      {name: 'React.js'},
      {name: 'Tailwind'},
    ],
      image: '/assets1/work/thumb4.png',
      live: 'https://portfolio-react-main-sigma.vercel.app/',
      github: 'https://github.com/AlexisLerch/portfolio-react',
  },
  {
    num: '06',
    category: 'frontend',
    title: 'project 6',
    description: "Pagina web creada con Next.JS responsiva de un portafolio personal ficticio.",
    stack: [
      {name: 'HTML CSS'},
      {name: 'Next.js'},
      {name: 'Tailwind'},

    ],
      image: '/assets1/work/thumb3.png',
      live: 'https://github.com/AlexisLerch/nextjs-portfolio',
      github: 'https://github.com/AlexisLerch/nextjs-portfolio',
  },
  {
    num: '07',
    category: 'python',
    title: 'project 7',
    description: "Menu con algunos ejercicion que fui haciendo para estudiar Python.",
    stack: [
      {name: 'Python'},
    ],
      image: '/assets1/work/thumb5.png',
      live: 'https://github.com/AlexisLerch/Python/blob/main/menu.py',
      github: 'https://github.com/AlexisLerch/Python/blob/main/menu.py',
  },
  
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: 
      {delay: 2.4, duration: 0.4, ease: "easeIn"},}} 
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
      {/* <h2 className="text-center pb-20 text-xl text-white/70">Esta seccion es solo de demostracion</h2> */}
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">   
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-2">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl font-extrabold text-withe">
                    {item.name}
                    {/* sacar la ultima coma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className=" border border-4 border-black"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live projects button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-wrap text-3xl group-hover:text-black" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github projects button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-wrap text-3xl group-hover:text-black" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image alt="" src={project.image} fill className="object-cover"/>
                    </div>
                  </div>
                  </SwiperSlide>);
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-black rounded-[10px] hover:bg-white text-white hover:text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work