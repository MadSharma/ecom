import { cn } from "@/lib/utils";
import Link from "next/link";
import React from 'react'

const Logo = ({className}:{className?:string}) => {
  return (
    <Link href="/" >
      <h2 className={cn("text-2xl text-shop-_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans"
        ,className)}>
        SHOPCAR<span className="text-shop_light_green group-hover:text-shop-_dark_green hoverEffect">t</span>
      </h2>
    
    </Link>
  )
}

export default Logo;


