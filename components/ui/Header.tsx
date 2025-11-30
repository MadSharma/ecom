import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";



const Header = async () => {
  const user = await currentUser();
  
  
  return (
    <header className="bg-white py-5">
      <Container className="flex items-center justify-between text-lightColor">

        {/* LEFT SECTION */}
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start">
          <MobileMenu />
          <Logo />
        </div>

        {/* CENTER MENU */}
        <div className="hidden md:flex justify-center flex-1">
          <HeaderMenu />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-auto md:w-1/2 flex items-center justify-end gap-4">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>

      </Container>
    </header>
  );
};

export default Header;
