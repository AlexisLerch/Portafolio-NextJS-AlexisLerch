"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const badges = [
  { icon: <FaReact />, label: "React", className: "left-2 top-8 sm:-left-6 xl:-left-10", delay: "0s" },
  { icon: <SiNextdotjs />, label: "Next.js", className: "right-2 top-1/2 sm:-right-6 xl:-right-10", delay: "1.5s" },
  { icon: <SiTailwindcss />, label: "Tailwind", className: "-bottom-3 left-8 md:left-4", delay: "3s" },
];

const Photo = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    className="relative mx-auto w-[280px] sm:w-[340px] xl:w-[420px]"
  >
    {/* resplandor */}
    <div className="absolute -inset-6 rounded-[3rem] bg-white/10 blur-3xl" aria-hidden />

    {/* marco desplazado */}
    <div
      className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-accent/40"
      aria-hidden
    />

    {/* foto */}
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
      <Image
        src="/assets1/alexisperfil.jpg"
        alt="Alexis Lerch"
        fill
        priority
        quality={90}
        sizes="(max-width: 640px) 900px, 1400px"
        className="object-cover object-[53%_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
    </div>

    {/* insignias flotantes */}
    {badges.map((badge) => (
      <div
        key={badge.label}
        style={{ animationDelay: badge.delay }}
        className={`absolute z-10 flex animate-float items-center gap-2 rounded-full border border-white/10 bg-surface/90 px-3 py-2 text-sm font-medium text-white shadow-xl backdrop-blur ${badge.className}`}
      >
        <span className="text-lg text-accent">{badge.icon}</span>
        {badge.label}
      </div>
    ))}
  </motion.div>
);

export default Photo;
