import React from "react";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionButtons from "./action-buttons";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 border-b h-20">
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
}

export default Navbar;
