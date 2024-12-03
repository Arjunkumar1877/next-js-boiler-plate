import { cn } from "@/lib/utils";
import { ReactNode, forwardRef, HTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>;

export const H1 = forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
      {...props}
    >
      {children}
    </h1>
  );
});

export const H2 = forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}
      {...props}
    >
      {children}
    </h2>
  );
});

export const H3 = forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h3 ref={ref} className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
});

export const H4 = forwardRef<HTMLHeadingElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <h4 ref={ref} className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h4>
  );
});
