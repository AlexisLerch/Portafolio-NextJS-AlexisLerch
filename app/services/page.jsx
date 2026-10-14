import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export const metadata = { title: "Servicios · Alexis Lerch" };

const Services = () => (
  <div className="container py-14 xl:py-20">
    <SectionHeading
      eyebrow="Servicios"
      title="En qué te puedo ayudar"
      description="Desde la idea hasta tener tu proyecto publicado y funcionando. Elegí lo que necesitás y lo hablamos."
    />

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.num} delay={(index % 2) * 0.1}>
            <Link
              href={`/contact?servicio=${encodeURIComponent(service.title)}`}
              className="card card-hover group relative block h-full overflow-hidden p-8"
            >
              <span className="absolute right-6 top-4 font-mono text-6xl font-bold text-outline opacity-40 transition-opacity duration-500 group-hover:opacity-100">
                {service.num}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-8 font-mono text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-3 max-w-md leading-relaxed text-white/60">{service.description}</p>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors group-hover:text-accent">
                Consultar <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  </div>
);

export default Services;
