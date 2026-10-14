"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile, services } from "@/lib/data";

// No hay backend: al enviar se abre el cliente de correo con el mensaje ya armado.
const ContactForm = () => {
  const params = useSearchParams();
  const [service, setService] = useState(params.get("servicio") ?? "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = service ? `Consulta: ${service}` : "Consulta desde tu portafolio";
    const body = `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-6 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/60">
          Nombre
          <Input name="name" required autoComplete="name" placeholder="Tu nombre" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/60">
          Email
          <Input name="email" type="email" required autoComplete="email" placeholder="tu@email.com" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm text-white/60">¿Qué necesitás?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((item) => (
            <button
              type="button"
              key={item.title}
              aria-pressed={service === item.title}
              onClick={() => setService(service === item.title ? "" : item.title)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                service === item.title
                  ? "border-accent bg-accent font-semibold text-primary"
                  : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 text-sm text-white/60">
        Mensaje
        <Textarea name="message" required placeholder="Contame sobre tu proyecto..." />
      </label>

      <Button type="submit" className="self-start">
        Enviar mensaje <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
