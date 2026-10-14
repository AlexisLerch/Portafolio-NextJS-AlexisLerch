"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navLinks } from "@/lib/data";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
      {navLinks.map((link) => {
        const active = link.path === pathname;
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active ? "text-primary" : "text-white/65 hover:text-white"
            }`}
          >
            {active && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
