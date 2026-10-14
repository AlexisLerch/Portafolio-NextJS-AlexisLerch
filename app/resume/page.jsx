"use client";

import { GraduationCap, Sparkles, User } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { about, education, skills } from "@/lib/data";

const tabs = [
  { value: "education", label: "Educación", icon: GraduationCap },
  { value: "skills", label: "Habilidades", icon: Sparkles },
  { value: "about", label: "Sobre mí", icon: User },
];

const Resume = () => (
  <div className="container py-14 xl:py-20">
    <SectionHeading
      eyebrow="Resumen"
      title="Mi recorrido"
      description="Dónde aprendí, qué herramientas manejo y quién está detrás del código."
    />

    <Tabs defaultValue="education" className="mt-12 flex flex-col gap-8 xl:flex-row xl:gap-14">
      <TabsList className="flex-row overflow-x-auto xl:w-72 xl:shrink-0 xl:flex-col" aria-label="Secciones">
        {tabs.map(({ value, label, icon: Icon }) => (
          <TabsTrigger key={value} value={value} className="gap-2">
            <Icon className="h-4 w-4" />
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="min-w-0 flex-1">
        {/* educación */}
        <TabsContent value="education">
          <h2 className="font-mono text-3xl font-bold text-white">Mi educación</h2>
          <ol className="relative mt-8 space-y-5 border-l border-white/10 pl-8">
            {education.map((item) => (
              <li key={item.degree} className="relative">
                <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-accent ring-4 ring-accent/15" />
                <div className="card card-hover p-6">
                  <span className="font-mono text-sm text-accent">{item.year}</span>
                  <h3 className="mt-1 text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm text-white/55">{item.institution}</p>
                </div>
              </li>
            ))}
          </ol>
        </TabsContent>

        {/* habilidades */}
        <TabsContent value="skills">
          <h2 className="font-mono text-3xl font-bold text-white">Mis habilidades</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <li key={skill.name} className="card card-hover group p-6 text-center">
                <div className="text-5xl text-white/70 transition-colors duration-300 group-hover:text-accent">
                  {skill.icon}
                </div>
                <p className="mt-4 text-sm font-medium text-white/75">{skill.name}</p>
              </li>
            ))}
          </ul>
        </TabsContent>

        {/* sobre mí */}
        <TabsContent value="about">
          <h2 className="font-mono text-3xl font-bold text-white">Sobre mí</h2>
          <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-white/60">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.info.map((item) => (
              <div key={item.label} className="card p-5">
                <dt className="font-mono text-xs uppercase tracking-widest text-white/40">{item.label}</dt>
                <dd className="mt-1 break-words text-lg text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </TabsContent>
      </div>
    </Tabs>
  </div>
);

export default Resume;
