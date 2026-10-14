import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import CopyEmail from "@/components/CopyEmail";
import Reveal from "@/components/Reveal";
import { process, profile, projects, skills } from "@/lib/data";

const featured = projects.filter((project) => project.featured);

const Home = () => (
  <>
    {/* hero */}
    <section className="container grid items-center gap-14 pb-20 pt-12 xl:grid-cols-[1.1fr_0.9fr] xl:pb-28 xl:pt-20">
      <div className="order-2 text-center xl:order-none xl:text-left">
        <Reveal y={16}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponible para proyectos freelance
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 font-mono text-lg text-accent">{profile.role}</p>
          <h1 className="mt-2 font-mono text-4xl font-bold leading-[1.1] text-white sm:text-6xl xl:text-7xl">
            Hola, soy <br />
            <span className="gradient-text">{profile.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65 xl:mx-0">{profile.intro}</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start">
          <Button asChild size="lg">
            <Link href="/work">
              Ver mis proyectos <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.cv} download="AlexisLerch-cv.pdf">
              Descargar CV <Download className="h-5 w-5" />
            </a>
          </Button>
        </Reveal>

        <Reveal
          delay={0.4}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start"
        >
          <Social />
          <span className="hidden h-6 w-px bg-white/10 sm:block" />
          <CopyEmail email={profile.email} />
        </Reveal>
      </div>

      <div className="order-1 xl:order-none">
        <Photo />
      </div>
    </section>

    {/* proyectos destacados */}
    <section className="container mt-28">
      <Reveal inView className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Proyectos destacados</span>
          <h2 className="mt-3 font-mono text-3xl font-bold text-white md:text-4xl">Lo que más me gustó hacer</h2>
        </div>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          Ver todos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {featured.map((project, index) => (
          <Reveal inView key={project.num} delay={index * 0.1} className="h-full">
            <Link href="/work" className="card card-hover group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <Image
                  src={project.image}
                  alt={`Vista previa de ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-accent">{project.category}</span>
                <h3 className="mt-2 font-mono text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{project.description}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* tecnologías */}
    <section className="container mt-28">
      <Reveal inView className="text-center">
        <span className="eyebrow">Stack</span>
        <h2 className="mt-3 font-mono text-3xl font-bold text-white md:text-4xl">Con qué trabajo</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map((skill, index) => (
          <Reveal inView key={skill.name} delay={index * 0.05} className="card card-hover group p-6 text-center">
            <div className="flex justify-center text-4xl text-white/70 transition-colors duration-300 group-hover:text-white">
              {skill.icon}
            </div>
            <p className="mt-3 text-sm font-medium text-white/70">{skill.name}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* cómo trabajo */}
    <section className="container mt-28">
      <Reveal inView className="text-center">
        <span className="eyebrow">Proceso</span>
        <h2 className="mt-3 font-mono text-3xl font-bold text-white md:text-4xl">Cómo trabajo</h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {process.map(({ icon: Icon, title, description }, index) => (
          <Reveal inView key={title} delay={index * 0.1} className="card p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-4xl font-bold text-outline">0{index + 1}</span>
            </div>
            <h3 className="mt-6 font-mono text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* cierre */}
    <section className="container mt-28">
      <Reveal inView className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" aria-hidden />
        <h2 className="relative font-mono text-3xl font-bold text-white md:text-4xl">¿Tenés una idea en mente?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/60">
          Contame de qué se trata y vemos cómo hacerla realidad. Sin compromiso.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Escribime <ArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  </>
);

export default Home;
