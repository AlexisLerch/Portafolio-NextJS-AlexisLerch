import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { profile } from "@/lib/data";

const socials = [
  { icon: <FaGithub />, href: profile.github, label: "GitHub" },
  { icon: <FaLinkedinIn />, href: profile.linkedin, label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: profile.whatsapp, label: "WhatsApp" },
];

const Social = ({ className = "" }) => (
  <div className={`flex gap-3 ${className}`}>
    {socials.map((item) => (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-lg text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent hover:text-primary"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

export default Social;
