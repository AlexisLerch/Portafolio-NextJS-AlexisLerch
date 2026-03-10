"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";

// experience data
const experience = {
  icon: "/assets1/resume/badge.svg",
  title: "Mi experiencia",
  description:
    "Participación en proyectos de desarrollo web creando interfaces dinámicas, optimizadas y enfocadas en la experiencia del usuario.",
  items: [
    {
      company: "SwaplyAr - Argentina",
      position: "Frontend Developer (Pasantía)",
      duration: "Mayo 2025 - Noviembre 2025",
      description:
        "Desarrollo de interfaces con React y Next.js, integración con APIs y mejoras en la experiencia de usuario.",
    },
  ],
};

// education data
const education = {
  icon: "/assets1/resume/cap.svg",
  title: "Mi educación",
  description:
    "He desarrollado mis conocimientos a través de cursos online y aprendizaje autodidacta, enfocándome en tecnologías clave del desarrollo web.",
  items: [
    {
      institution: "FreeCodeCamp",
      degree: "HTML5 y CSS3",
      duration: "2022",
    },
    {
      institution: "FreeCodeCamp",
      degree: "JavaScript",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Python",
      duration: "2024",
    },
    {
      institution: "Aprendizaje autodidacta",
      degree: "React.js & Next.js",
      duration: "2024 - 2025",
    },
  ],
};

// skills data
const skills = {
  title: "Tecnologías",
  description:
    "Stack de tecnologías que utilizo para construir interfaces modernas, rápidas y escalables en el desarrollo web.",
  skillList: [
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaPython />, name: "python" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="relative min-h-[80vh] flex items-center py-12 xl:py-0"
    >
      {/* FOTO */}

      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row items-start gap-[60px]"
        >
          {/* TABS */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <div className="flex flex-col items-center">
              <Photo />
            </div>
            <TabsTrigger className="rounded-[10px]" value="experience">
              Experiencia
            </TabsTrigger>

            <TabsTrigger className="rounded-[10px]" value="skills">
              Tecnologías
            </TabsTrigger>

            <TabsTrigger className="rounded-[10px]" value="education">
              Educación
            </TabsTrigger>
          </TabsList>

          {/* CONTENIDO */}
          <div className="min-h-[70vh] w-full mt-20">
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] hover:bg-[#2a2a32] transition-colors py-6 px-8 rounded-xl flex flex-col gap-3"
                      >
                        <span className="text-white font-bold">
                          {item.duration}
                        </span>

                        <h3 className="text-lg font-semibold">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-2 text-white/70">
                          <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                          {item.company}
                        </div>

                        <p className="text-sm text-white/60">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] hover:bg-[#2a2a32] transition-colors py-6 px-8 rounded-xl flex flex-col gap-2"
                      >
                        <span className="text-white font-bold">
                          {item.duration}
                        </span>

                        <h3 className="text-lg">{item.degree}</h3>

                        <div className="flex items-center gap-2 text-white/60">
                          <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                          {item.institution}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[140px] bg-[#232329] hover:bg-[#2a2a32] transition-colors rounded-xl flex justify-center items-center group">
                            <div className="text-5xl group-hover:scale-110 transition">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>

                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
