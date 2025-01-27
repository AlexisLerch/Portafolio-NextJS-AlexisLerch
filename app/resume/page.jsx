"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about = {
  title: 'Sobre mi',
  dedscription: 'Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes y tecnologías de programación.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Alexis Lerch'
    },
    {
      fieldName: 'Celular',
      fieldValue: '(+54)3434677723'
    },
    {
      fieldName: 'Experiencia',
      fieldValue: '+1 Año'
    },
    {
      fieldName: 'Nacionalidad',
      fieldValue: 'Argentino'
    },
    {
      fieldName: 'Email',
      fieldValue: 'alexis.lerch123@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
  ]
}

// experience data
const experience = {
  icon: '/assets1/resume/badge.svg',
  title: 'My experiencia',
  description: "Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2025 - Presente",
    },
    {
      company: "Web Design Studio",
      position: "Front Developer",
      duration: "Verano 2025",
    },
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer",
      duration: "2025 - Presente",
    },
    {
      company: "Web Design Studio",
      position: "Front Developer",
      duration: "Verano 2025",
    },
  ]
}

// education data
const education = {
  icon: "/assets1/resume/cap.svg",
  title: "Mi educacion",
  description: "Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes",
  items: [
    {
      institution: "FreeCodeCamp Online course platform",
      degree: "Full Stack Web Development",
      duration: "2023"
    },
    {
      institution: "FreeCodeCamp Online course platform",
      degree: "Full Stack Web Development",
      duration: "2023"
    },
    {
      institution: "FreeCodeCamp Online course platform",
      degree: "Full Stack Web Development",
      duration: "2023"
    }
  ]
}

// skills data
const skills = {
  title: "Mis habilidades",
  description: "Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes y tecnologías de programación.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python"
    }
  ] 
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educacion</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mi</TabsTrigger>
          </TabsList>

          {/* contenido */}
          <div className='min-h-[70vh] w-full'>
            {/* experiencia */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* educacion */}
            <TabsContent value="education" className="w-full">
              educacion
            </TabsContent>
            {/* habilidades */}
            <TabsContent value="skills" className="w-full">
              habilidades
            </TabsContent>
            {/* sobre mi */}
            <TabsContent value="about" className="w-full">
              sobre mi
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume