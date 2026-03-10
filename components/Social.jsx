import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AlexisLerch" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/alexis-lerch-6a9ba1217/" },
  { 
    icon: <FaWhatsapp />, 
    path: "https://wa.me/5493434677723?text=Hola%20Alexis%20vi%20tu%20portafolio%20y%20quiero%20contactarte"
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;