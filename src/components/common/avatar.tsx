import React, { HTMLAttributes } from "react";
import { Avatar as AvatarBase, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva("", {
  variants: {
    size: {
      default: "",
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      lg: "w-12 h-12",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type Props = {
  className?: string;
  src: string;
} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof avatarVariants>;

export const Avatar = ({ src, size, className, ...props }: Props) => {
  return (
    <AvatarBase className={cn(avatarVariants({ size, className }))} {...props}>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarBase>
  );
};
