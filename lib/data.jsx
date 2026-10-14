import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Code, Smartphone, LayoutTemplate, BarChart3, MessageSquare, PenTool, Rocket } from "lucide-react";

export const profile = {
  name: "Alexis Lerch",
  role: "Desarrollador de software",
  tagline: "Interfaces claras, rápidas y bien cuidadas.",
  intro:
    "Soy desarrollador de software de San Martín de los Andes, Neuquén, Argentina. Me gusta convertir ideas en sitios y aplicaciones que se ven bien, andan rápido y se sienten simples de usar. Trabajo sobre todo con React, Next.js y JavaScript.",
  email: "lerchalexisdamian@gmail.com",
  phone: "(+54) 3434677723",
  phoneHref: "tel:+543434677723",
  address: "San Martín de los Andes, Neuquén, Argentina",
  cv: "/assets1/AlexisLerch-cv.pdf",
  github: "https://github.com/AlexisLerch",
  linkedin: "https://www.linkedin.com/in/alexis-lerch-6a9ba1217/",
};

export const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/work" },
  { name: "Resumen", path: "/resume" },
  { name: "Servicios", path: "/services" },
  { name: "Contacto", path: "/contact" },
];

export const projectCategories = ["Todos", "E-commerce", "Frontend", "JavaScript", "Datos", "Python", "SQL", "Mobile"];

const projectList = [
  {
    title: "La Comarca de Cera",
    category: "E-commerce",
    featured: true,
    description:
      "Tienda online de velas artesanales: catálogo con búsqueda, favoritos, carrito de compras y pago con Mercado Pago. Productos y pedidos guardados en una base de datos con Prisma y Supabase.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Mercado Pago"],
    image: "/assets1/work/thumb16.png",
    live: "https://lacomarcadecera.vercel.app/",
    github: "https://github.com/AlexisLerch/velas-ecommerce",
  },
  {
    title: "E-commerce MyEc",
    category: "E-commerce",
    featured: true,
    description:
      "E-commerce completo con Next.js: registro e inicio de sesión con NextAuth, catálogo por categorías, carrito y pantalla de checkout, con animaciones hechas con Framer Motion.",
    stack: ["Next.js", "TypeScript", "NextAuth", "Prisma", "Supabase", "Tailwind"],
    image: "/assets1/work/thumb15.png",
    live: "",
    github: "https://github.com/AlexisLerch/e-commers",
  },
  {
    num: "01",
    title: "Promo de videojuego",
    category: "Frontend",
    featured: true,
    description:
      "Sitio de lanzamiento para un videojuego, con videos de fondo, animaciones y sonido. Pensado para impactar desde el primer scroll y verse bien en cualquier pantalla.",
    stack: ["JavaScript", "React.js", "Tailwind"],
    image: "/assets1/work/thumb7.png",
    live: "https://reactjs-awwwards-website.vercel.app/",
    github: "https://github.com/AlexisLerch/Reactjs-app-awwwards",
  },
  {
    num: "02",
    title: "Landing de IA",
    category: "Frontend",
    description:
      "Landing page de una inteligencia artificial ficticia. Un ejercicio de diseño oscuro y moderno, con secciones claras y totalmente responsiva.",
    stack: ["JavaScript", "React.js", "Tailwind"],
    image: "/assets1/work/thumb2.png",
    live: "https://reactjs-web-two.vercel.app/",
    github: "https://github.com/AlexisLerch/website-reactjs",
  },
  {
    num: "03",
    title: "Juego de rol",
    category: "JavaScript",
    description:
      "Un RPG por turnos en el navegador: peleás contra monstruos, juntás oro para comprar armas y pociones, y llegás hasta el dragón final.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets1/work/thumb6.png",
    live: "https://juego-de-rol.onrender.com/",
    github: "https://github.com/AlexisLerch/Juego-de-Rol",
  },
  {
    num: "04",
    title: "App de banco",
    category: "Frontend",
    description:
      "Sitio de un banco digital ficticio: presenta los servicios, las estadísticas y los planes con una interfaz limpia y adaptable a celular.",
    stack: ["JavaScript", "React.js", "Tailwind"],
    image: "/assets1/work/thumb1.png",
    live: "",
    github: "https://github.com/AlexisLerch/react-bank-app",
  },
  {
    num: "05",
    title: "Portafolio con React",
    category: "Frontend",
    description:
      "Portafolio personal hecho con React: presentación, proyectos y contacto en una página simple y responsiva.",
    stack: ["JavaScript", "React.js", "Tailwind"],
    image: "/assets1/work/thumb4.png",
    live: "https://portfolio-react-main-sigma.vercel.app/",
    github: "https://github.com/AlexisLerch/portfolio-react",
  },
  {
    num: "06",
    title: "Portafolio con Next.js",
    category: "Frontend",
    description:
      "Portafolio personal hecho con Next.js y navegación entre páginas, para practicar el framework.",
    stack: ["JavaScript", "Next.js", "Tailwind"],
    image: "/assets1/work/thumb3.png",
    live: "",
    github: "https://github.com/AlexisLerch/nextjs-portfolio",
  },
  {
    num: "07",
    title: "Buscador de Pokémon",
    category: "JavaScript",
    description:
      "Escribís el nombre o el número de un Pokémon y la app trae sus datos, tipos y estadísticas desde la PokéAPI.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets1/work/thumb8.png",
    live: "https://pokemon-search-app.onrender.com",
    github: "https://github.com/AlexisLerch/Pokemon-search-app",
  },
  {
    num: "08",
    title: "Mapa de coropletas",
    category: "Datos",
    description:
      "Mapa interactivo de Estados Unidos hecho con D3.js que muestra el porcentaje de adultos con título universitario por condado (2010-2014).",
    stack: ["HTML", "CSS", "JavaScript", "D3.js"],
    image: "/assets1/work/thumb12.png",
    live: "https://choropleth-map-c4zw.onrender.com",
    github: "https://github.com/AlexisLerch/Choropleth-Map",
  },
  {
    num: "09",
    title: "PIB de Estados Unidos",
    category: "Datos",
    description:
      "Gráfico de barras con D3.js que recorre el PIB de Estados Unidos entre 1947 y 2015, con detalle al pasar el mouse.",
    stack: ["HTML", "CSS", "JavaScript", "D3.js"],
    image: "/assets1/work/thumb9.png",
    live: "https://usa-gdp-6nev.onrender.com",
    github: "https://github.com/AlexisLerch/USA-GDP",
  },
  {
    num: "10",
    title: "Carrito de compras",
    category: "JavaScript",
    description:
      "Carrito de compras con JavaScript: agregás productos, ves el subtotal, los impuestos y el total. Proyecto de freeCodeCamp.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets1/work/thumb10.png",
    live: "https://shopping-cart-javascript.onrender.com",
    github: "https://github.com/AlexisLerch/Shopping-cart-javascript",
  },
  {
    num: "11",
    title: "Juego de plataformas",
    category: "JavaScript",
    description:
      "Juego de plataformas hecho desde cero con JavaScript, aplicando programación orientada a objetos.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/assets1/work/thumb11.png",
    live: "https://poo-platformer-game.onrender.com",
    github: "https://github.com/AlexisLerch/POO-platformer-game",
  },
  {
    num: "12",
    title: "Ejercicios de Python",
    category: "Python",
    description:
      "Un menú con los ejercicios que fui resolviendo mientras estudiaba Python, para practicar lógica y estructuras básicas.",
    stack: ["Python"],
    image: "/assets1/work/thumb5.png",
    live: "",
    github: "https://github.com/AlexisLerch/Python/blob/main/menu.py",
  },
  {
    num: "13",
    title: "Tienda de bicicletas",
    category: "SQL",
    description:
      "Base de datos relacional de una tienda de bicicletas con PostgreSQL: tablas, relaciones y consultas. Proyecto de freeCodeCamp.",
    stack: ["PostgreSQL", "SQL"],
    image: "/assets1/work/thumb13.png",
    live: "",
    github: "https://github.com/AlexisLerch/Bike-shop-psql",
  },
  {
    num: "14",
    title: "Buscador de películas",
    category: "Mobile",
    description:
      "App móvil para buscar películas, hecha con React Native, TypeScript y Expo, consumiendo una API pública.",
    stack: ["React Native", "TypeScript", "Expo"],
    image: "/assets1/work/thumb14.png",
    live: "https://alexislerch-reactnative--nby5ipxa73.expo.app/",
    github: "https://github.com/AlexisLerch/Movie-app",
  },
];

// la numeración se calcula sola para poder sumar proyectos sin renumerar
export const projects = projectList.map((project, index) => ({
  ...project,
  num: String(index + 1).padStart(2, "0"),
}));

export const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "HTML 5", icon: <FaHtml5 /> },
  { name: "CSS 3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

export const education = [
  { degree: "HTML 5 y CSS", institution: "freeCodeCamp · cursos online", year: "2022" },
  { degree: "JavaScript", institution: "freeCodeCamp · cursos online", year: "2023" },
  { degree: "Python", institution: "freeCodeCamp · cursos online", year: "2024" },
  { degree: "React.js y Next.js", institution: "Autodidacta, con tutoriales y proyectos propios", year: "2024" },
];

export const about = {
  paragraphs: [
    "Empecé a programar por mi cuenta en 2022 con HTML y CSS, y desde entonces no paré de aprender: JavaScript, Python, React, Next.js y hasta apps móviles con React Native.",
    "Aprendo haciendo. Cada proyecto de este portafolio nació de querer entender cómo funciona algo, y por eso todos tienen su código abierto en GitHub.",
  ],
  info: [
    { label: "Nombre", value: "Alexis Lerch" },
    { label: "Nacionalidad", value: "Argentino" },
    { label: "Ubicación", value: "Neuquén, Argentina" },
    { label: "Freelance", value: "Disponible" },
    { label: "Email", value: profile.email },
    { label: "Celular", value: profile.phone },
  ],
};


export const process = [
  {
    icon: MessageSquare,
    title: "Escucho",
    description: "Charlamos sobre qué necesitás, para quién es y qué querés lograr, antes de escribir una línea de código.",
  },
  {
    icon: PenTool,
    title: "Diseño y construyo",
    description: "Armo la interfaz y la programo con cuidado por los detalles, para que funcione bien en celular y en escritorio.",
  },
  {
    icon: Rocket,
    title: "Publico y ajusto",
    description: "Lo dejo online, funcionando, y hacemos los ajustes que hagan falta para que quede como lo imaginaste.",
  },
];

export const services = [
  {
    num: "01",
    title: "Desarrollo web",
    icon: Code,
    description:
      "Sitios y aplicaciones a medida con React y Next.js. Rápidos, responsivos y fáciles de mantener y de hacer crecer.",
  },
  {
    num: "02",
    title: "Landing pages",
    icon: LayoutTemplate,
    description:
      "Una página clara y atractiva para presentar tu proyecto, producto o servicio, pensada para que te contacten.",
  },
  {
    num: "03",
    title: "Apps móviles",
    icon: Smartphone,
    description:
      "Aplicaciones para Android y iOS con React Native y Expo, conectadas a APIs y con una interfaz cómoda de usar.",
  },
  {
    num: "04",
    title: "Visualización de datos",
    icon: BarChart3,
    description:
      "Gráficos y mapas interactivos con D3.js que transforman tablas de números en algo fácil de entender.",
  },
];
