"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { saveAs } from "file-saver";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

// componentes
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";


const Home = () => {
  return (
    <section className="h-full">
      <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: 
      {delay: 0.5, duration: 0.4, ease: "easeIn"},}} >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none sm:item-center md:item-center">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 ">Hola soy <br /> <span className="text-white/45 ">Alexis Lerch</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Me destaco en la creación de experiencias digitales elegantes dominando varios lenguajes y tecnologías de programación.</p>

            {/* boton y social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button onClick={() => {navigator.clipboard.writeText('alexis.lerch123@gmail.com'); {alert("Email copiado!");}}} variant="outline" size="sm" className="mb-5 flex items-center gap-2">
                  <span>alexis.lerch123@gmail.com</span>
                    <FaCopy />
                </Button>
              </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets1/AlexisLerch-cv.pdf" target='_blank' download='AlexisLerch-cv.pdf'>
              <Button variant="outline" size="sm" className="uppercase flex items-center gap-2 sm:items-center">
                <span >Descargar CV</span>
                <FiDownload className="text-xl " />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-color-white rounded-[10px] flex justify-center items-center bg-black text-base hover:bg-white hover:text-black hover:border-[11px] hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
        
      {/* <Stats /> */}
      </motion.section>
    </section>
  )
}

export default Home