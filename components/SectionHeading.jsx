import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <span className="eyebrow">{eyebrow}</span>
    <h1 className="mt-3 font-mono text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
    {description && <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">{description}</p>}
  </Reveal>
);

export default SectionHeading;
