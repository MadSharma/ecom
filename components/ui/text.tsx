import React from "react";
import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: TextProps) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-3xl font-semibold text-shop_dark_green capitalize tracking-wide font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const SubText = ({ children, className }: TextProps) => {
  return (
    <p className={cn("text-gray-600 text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
};
export default { Title, SubText };