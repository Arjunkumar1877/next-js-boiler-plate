import { cn } from "@/lib/utils";
import { ReactNode, forwardRef, HTMLAttributes } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export const P = forwardRef<HTMLParagraphElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("leading-7", className)} {...props}>
      {children}
    </p>
  );
});

export const Blockquote = forwardRef<HTMLQuoteElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <blockquote ref={ref} className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </blockquote>
  );
});

export const InlineCode = forwardRef<HTMLElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <code
      ref={ref}
      className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}
      {...props}
    >
      {children}
    </code>
  );
});

export const Lead = forwardRef<HTMLParagraphElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-xl text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
});

export const Large = forwardRef<HTMLDivElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </div>
  );
});

export const Small = forwardRef<HTMLElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <small ref={ref} className={cn("text-sm font-medium leading-none", className)} {...props}>
      {children}
    </small>
  );
});

export const Muted = forwardRef<HTMLParagraphElement, Props>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
});
