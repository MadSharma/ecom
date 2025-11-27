import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center relative">

        {/* Logo - Left */}
        <div className="absolute left-0 flex items-center">
          <Logo />
        </div>

        {/* Menu - Center */}
        <div className="w-full flex justify-center">
          <HeaderMenu />
          <div>
            <SearchBar />
          </div>
        </div>

      </Container>
    </header>
  );
}

export default Header;
