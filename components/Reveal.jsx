"use client";

import { motion } from "framer-motion";

// Fade + leve desplazamiento. Por defecto anima al cargar; con `inView`
// espera a que el elemento entre en pantalla (para secciones más abajo).
const Reveal = ({ children, delay = 0, y = 24, inView = false, className }) => {
  const trigger = inView
    ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } }
    : { animate: { opacity: 1, y: 0 } };

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
