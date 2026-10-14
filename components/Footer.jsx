import Social from "./Social";

const Footer = () => (
  <footer className="mt-24 border-t border-white/5">
    <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/45 md:flex-row">
      <p>
        © {new Date().getFullYear()} Alexis Lerch · Hecho con Next.js y Tailwind
      </p>
      <Social />
    </div>
  </footer>
);

export default Footer;
