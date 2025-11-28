import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const SubText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <p className={`${className} text-sm`} {...props}>
      {children}
    </p>
  );
};

function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />

            <SubText className="text-gray-600 text-sm">
              Discover the best products at unbeatable prices. 
              ShopTech - Your
              ultimate online shopping destination!
            </SubText>

            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_dark_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
