import { Children } from "react"
import { cn } from "@/lib/utils"

export const Title = ({
  children,
  className
}: {children: React.ReactNode, className?: string})=>{
    return(
        <h2 className={ cn("text-3xl md:text-3xl font-semibold text-shop-_dark_green capitalize tracking-wide font-sans", className)}>
          {children}</h2>
    );
};

// export { Title };