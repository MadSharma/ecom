import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* LOGO + DESCRIPTION */}
          <div className="space-y-4">
            <Logo />

            <SubText className="text-gray-600 text-sm">
              Discover the best products at unbeatable prices. ShopTech — Your
              ultimate shopping destination!
            </SubText>

            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_dark_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4 ">
              {quickLinksData.map((items) => (
                <li key={items.title}>
                  <Link
                    href={items.href}
                    className="text-gray-600 hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
             <div className="space-y-4">
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4 ">
              {categoriesData.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`categories/${item?.href}`}
                    className="text-gray-600 hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>

            <SubText>
              Subscribe to our newsletter for the latest updates and offers.
            </SubText>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:border-green-600 
                text-sm"
              />

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-md
                font-semibold text-sm hover:bg-green-800 
                transition-all duration-300 hoverEffect"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
