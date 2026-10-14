"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import SectionHeading from "@/components/SectionHeading";
import { projectCategories, projects } from "@/lib/data";

const Work = () => {
  const [filter, setFilter] = useState("Todos");
  const visible = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container py-14 xl:py-20">
      <SectionHeading
        eyebrow="Proyectos"
        title="Cosas que construí"
        description="Sitios, juegos, apps y visualizaciones con las que fui aprendiendo. Todos tienen su código abierto en GitHub."
      />

      {/* filtros */}
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar proyectos">
        {projectCategories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={filter === category}
            onClick={() => setFilter(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              filter === category
                ? "border-accent bg-accent text-primary"
                : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* grilla */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.num}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary/80 px-3 py-1 font-mono text-xs text-accent backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-mono text-xl font-bold text-white">{project.title}</h2>
                  <span className="font-mono text-sm text-white/30">{project.num}</span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-white/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-semibold text-primary transition-colors hover:bg-accent-hover"
                    >
                      Ver sitio <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    <FaGithub /> Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Work;
