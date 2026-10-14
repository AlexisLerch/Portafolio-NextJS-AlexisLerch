"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Social from "./Social";
import { navLinks } from "@/lib/data";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-accent/60 hover:text-accent"
        aria-label="Abrir menú"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="font-mono text-2xl font-bold text-white">
          Alexis Lerch<span className="text-accent">.</span>
        </SheetTitle>
        <SheetDescription className="sr-only">Navegación del sitio</SheetDescription>

        <nav className="mt-16 flex flex-col gap-2">
          {navLinks.map((link) => {
            const active = link.path === pathname;
            return (
              <SheetClose asChild key={link.path}>
                <Link
                  href={link.path}
                  className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                    active ? "bg-accent text-primary" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto pb-2">
          <Social />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
