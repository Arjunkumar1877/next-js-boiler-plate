import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export const Container = forwardRef<HTMLDivElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("container mx-auto px-2", className)} {...props}>
      {children}
    </div>
  );
});
