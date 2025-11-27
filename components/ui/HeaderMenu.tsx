import { headerData } from '@/constants/data';
import Link from 'next/link';
import React from 'react';

const HeaderMenu = () => {
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className="relative group hover:text-shop_light_green transition-all duration-300"
        >
          {item?.title}

          {/* LEFT LINE */}
          <span
            className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-shop_light_green 
            transition-all duration-300 group-hover:left-0 group-hover:w-1/2"
          ></span>

          {/* RIGHT LINE */}
          <span
            className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-shop_light_green 
            transition-all duration-300 group-hover:right-0 group-hover:w-1/2"
          ></span>

        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
