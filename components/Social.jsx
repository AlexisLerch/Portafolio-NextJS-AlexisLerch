import Link from "next/link"

import {FaGithub, FaLinkedinIn,} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/AlexisLerch'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/alexis-lerch-6a9ba1217/'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link target="_blank" key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
        })}
    </div>
  )
}

export default Social