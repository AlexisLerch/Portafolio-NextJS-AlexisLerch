"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "./ui/sheet";

const links = [
    {
        name: "inicio",
        path: "/",
    },
    {
        name: "proyectos",
        path: "/work",
    },
    {
        name: "resumen",
        path: "/resume",
    },
    {
        name: "servicios",
        path: "/services",
    },
    {
        name: "contacto",
        path: "/contact",
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                    capitalize font-medium hover:text-accent transition-all`}>
                        
                            {link.name}
                        
                    </Link>  
                );
            })}
        </nav>
    )
}

export default Nav