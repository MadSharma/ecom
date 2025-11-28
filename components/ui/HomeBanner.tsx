import React from "react";
import Image from "next/image";
import { Title } from "./text";
import Link from "next/link";
import { banner_2 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div  className="max-w-lg">
        <Title >
          Grab Upto 50% Off on
          <br /> Selected Items
        </Title>

        <Link
          href="/shop"
          className="inline-block mt-4 bg-green-900 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 hover:bg-green-800 hover:scale-105"
        >
          Buy Now
        </Link>
      </div>

      <div>
        <Image 
        src={banner_2} 
        alt="banner_2" 
        className="hidden md:inline-flex w-96" />
      </div>
    </div>
  );
};

export default HomeBanner;
