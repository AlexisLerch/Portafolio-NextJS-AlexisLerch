import * as React from "react";

import { cn } from "@/lib/utils";

const fieldStyles =
  "w-full rounded-xl border border-white/10 bg-primary/60 px-4 text-base text-white placeholder:text-white/35 outline-none transition-colors focus:border-accent/70 focus:bg-primary";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input type={type} className={cn(fieldStyles, "h-12", className)} ref={ref} {...props} />
));
Input.displayName = "Input";

export { Input, fieldStyles };
