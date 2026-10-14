import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldStyles } from "./input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea className={cn(fieldStyles, "min-h-[160px] resize-y py-3", className)} ref={ref} {...props} />
));
Textarea.displayName = "Textarea";

export { Textarea };
