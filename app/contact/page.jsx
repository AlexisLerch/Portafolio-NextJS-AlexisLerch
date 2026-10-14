import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata = { title: "Contacto · Alexis Lerch" };

const info = [
  { icon: Mail, title: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, title: "Celular", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, title: "Ubicación", value: profile.address },
];

const Contact = () => (
  <div className="container py-14 xl:py-20">
    <SectionHeading
      eyebrow="Contacto"
      title="Trabajemos juntos"
      description="Contame qué estás pensando y vemos cómo llevarlo adelante. Te respondo lo antes posible."
    />

    <div className="mt-12 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
      <Reveal className="order-2 xl:order-none">
        <Suspense>
          <ContactForm />
        </Suspense>
      </Reveal>

      <Reveal delay={0.1} className="order-1 xl:order-none">
        <ul className="flex flex-col gap-4">
          {info.map(({ icon: Icon, title, value, href }) => {
            const content = (
              <>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/40">{title}</p>
                  <p className="mt-0.5 break-words text-white">{value}</p>
                </div>
              </>
            );
            return (
              <li key={title}>
                {href ? (
                  <a href={href} className="card card-hover group flex items-center gap-4 p-5">
                    {content}
                  </a>
                ) : (
                  <div className="card group flex items-center gap-4 p-5">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  </div>
);

export default Contact;
