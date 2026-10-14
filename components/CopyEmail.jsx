"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "./ui/button";

const CopyEmail = ({ email, className }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <Button variant="ghost" size="sm" onClick={copy} className={className} aria-live="polite">
      <span className="font-mono">{copied ? "¡Email copiado!" : email}</span>
      {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
};

export default CopyEmail;
