"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about data
const about = {
  title: 'Sobre mi',
  description: 'Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes y tecnologías de programación.',
  info: [
    {
      fieldName: 'Nombre',
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
      fieldName: 'Freelance',
      fieldValue: 'Disponible'
    },
    {
      fieldName: 'Email',
      fieldValue: 'alexis.lerch123@gmail.com'
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
      degree: "Html 5 y Css",
      duration: "2022"
    },
    {
      institution: "FreeCodeCamp Online course platform",
      degree: "JavaScript",
      duration: "2023"
    },
    {
      institution: "FreeCodeCamp Online course platform",
      degree: "Python",
      duration: "2024"
    },
    {
      institution: "Autodidacta con tutoriales",
      degree: "React.js, Next.js",
      duration: "2024"
    },
  ]
}

// skills data
const skills = {
  title: "Mis habilidades",
  description: "Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes y tecnologías de programación.",
  skillList: [
    {
      icon: <FaPython />,
      name: "python"
    },
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
  ] 
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1,
      transition: {delay: 0.5, duration: 0.4, ease: "easeIn"}
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='education' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/* <TabsTrigger value="experience">Experiencia</TabsTrigger> */}
            <TabsTrigger className="rounded-[10px]" value="education">Educacion</TabsTrigger>
            <TabsTrigger className="rounded-[10px]" value="skills">Habilidades</TabsTrigger>
            <TabsTrigger className="rounded-[10px]" value="about">Sobre mi</TabsTrigger>
          </TabsList>

          {/* contenido */}
          <div className='min-h-[70vh] w-full'>

            {/* experiencia */}
            {/* <TabsContent value="experience" className="w-full">
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
                          
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent> */}

            {/* educacion */}
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {education.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 mb-2 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-white border-b-2 border-black'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[10px] h-[8px] rounded-full bg-black'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* habilidades */}
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                      <h3 className='text-4xl font-bold'>{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-7'>
                      {skills.skillList.map((skill, index) => {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-black transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
              </div>
            </TabsContent>

            {/* sobre mi */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='xl:text-xl'>{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume