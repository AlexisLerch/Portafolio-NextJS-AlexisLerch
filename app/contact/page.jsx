"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaPhoneAlt,FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Celular',
    description: '(+54)3434677723'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'alexis.lerch123@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Direccion',
    description: 'Brasil 355, Libertador San Martin, Entre Rios CP: 3103, Argentina'
  },
]

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 0.5, duration: 0.4, ease: "easeIn"},
    }} 
    className="py-6"
    >
      <div className="container mx-auto">
      <h2 className="text-center pb-10 text-xl text-white/70">Esta seccion es solo de demostracion</h2>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-white font-bold'>Trabajemos juntos</h3>
              <p className='text-white/60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil sapiente pariatur ir totam.</p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input className="rounded-[10px]" type="firstname" placeholder="Nombre" />
                <Input className="rounded-[10px]" type="lastname" placeholder="Apellido" />
                <Input className="rounded-[10px]" type="email" placeholder="Direccion de Email" />
                <Input className="rounded-[10px]" type="phone" placeholder="Numero de celular" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className='w-full rounded-[10px]'>
                  <SelectValue className="rounded-[10px]" placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un servicio</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea className="h-[200px] rounded-[10px]" placeholder="Escribe tu mensaje aqui." />
              {/* btn */}
              <Button size="sm" className="max-w-40">Enviar mensaje</Button>
            </form>
            </div>
            {/* info */}
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              <ul className='flex flex-col gap-10'>
                {info.map((item, index) => {
                  return <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-white text-black rounded-[10px] flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60 '>{item.title}</p>
                      <h3 className=''>{item.description}</h3>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
    </motion.section>
  );
}

export default Contact