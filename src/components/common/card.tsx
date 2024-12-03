import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import { Card as BaseCard } from "../ui/card";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva("p-4 bg-red-500", {
  variants: {
    variant: {
      default: "bg-background border",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary",
    },
    padding: {
      default: "p-4",
      sm: "p-2",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

type Props = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof cardVariants>;

export const Card = forwardRef<HTMLDivElement, Props>(({ children, className, variant, padding, ...props }, ref) => {
  return (
    <BaseCard ref={ref} className={cn(cardVariants({ variant, padding, className }))} {...props}>
      {children}
    </BaseCard>
  );
});
