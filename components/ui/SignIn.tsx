import React from "react";
import { Button } from "./button";
import { SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <Button className="bg-transparent border border-tech_orange text-tech_orange px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-tech_orange hover:text-white hover:scale-105">
        Login
      </Button>
    </SignInButton>
  );
};

export default SignIn;
