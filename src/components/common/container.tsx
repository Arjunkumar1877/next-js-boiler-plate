import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  topPadding?: boolean;
} & HTMLAttributes<HTMLElement>;

export const Container = forwardRef<HTMLDivElement, Props>(({ children, className, topPadding, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("container mx-auto px-2", topPadding ? "mt-4" : "", className)} {...props}>
      {children}
    </div>
  );
});
