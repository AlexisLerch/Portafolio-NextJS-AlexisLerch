import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-primary hover:bg-accent-hover hover:shadow-[0_0_30px_-6px_rgba(255,255,255,0.45)]",
        outline: "border border-white/15 bg-white/[0.03] text-white hover:border-accent/60 hover:text-accent",
        ghost: "text-white/70 hover:bg-white/5 hover:text-white",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        default: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
