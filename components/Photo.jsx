"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* imagen */}
        <motion.div className="w-[320px] h-[320px] xl:w-[320px] xl:h-[320px] absolute -top-[30px] left-[0px]">
          <Image
            src="/assets1/perfil6.png"
            priority
            quality={100}
            fill
            alt="perfil"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[320px] xl:w-[320px] h-[320px] xl:h-[320px]"
          fill="transparent"
          viewBox="0 0 506 506"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
