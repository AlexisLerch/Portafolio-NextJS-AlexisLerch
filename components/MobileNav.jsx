"use client";

import {Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'inicio',
        path: '/',
    },
    {
        name: 'proyectos',
        path: '/work',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'servicio',
        path: '/services',
    },
    {
        name: 'contacto',
        path: '/contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32]px text-white' />
        </SheetTrigger>
        <SheetContent className='flex flex-col'>
            <SheetTitle></SheetTitle>
            {/* logo */}
            <div className='mt-32 mb-40 text-center text-2xl'>
            <SheetClose asChild>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Alexis<span className='text-black'>.</span>
                    </h1>
                </Link>
            </SheetClose>
            </div>
            {/* nav */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) =>{
                    return (
                    <SheetClose asChild key={index}>
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-white border-b-2 border-black"} text-xl capitalize hover:text-black transition-all`} >
                            {link.name}
                        </Link>
                    </SheetClose>
                )  
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav