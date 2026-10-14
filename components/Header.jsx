import Link from "next/link";

import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => (
  <header className="sticky top-0 z-40 border-b border-white/5 bg-primary/70 backdrop-blur-xl">
    <div className="container flex h-20 items-center justify-between">
      <Link href="/" className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Alexis Lerch<span className="text-accent">.</span>
      </Link>

      <div className="hidden items-center gap-6 xl:flex">
        <Nav />
        <Button asChild size="sm">
          <Link href="/contact">Contactame</Link>
        </Button>
      </div>

      <div className="xl:hidden">
        <MobileNav />
      </div>
    </div>
  </header>
);

export default Header;
