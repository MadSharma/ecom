import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-lightColor">
          <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0 ">
            <MobileMenu />
            <Logo />
          </div>

        {/* Menu - Center */}
        <div className="w-full flex justify-center">
          <HeaderMenu />
          <div className="w-auto md:w-1/3 flex itmes-center justify-end gap-5">
            <SearchBar />
            <CartIcon />
            <FavoriteButton />
            <SignIn />
          </div>
        </div>

      </Container>
    </header>
  );
}

export default Header;
