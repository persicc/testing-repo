import React from "react";
import SignIn from "../signIn/SignIn";
import { SignOut } from "../signOut/SignOut";

function Navbar() {
  return (
    <div>
      <SignIn />
      <SignOut />
    </div>
  );
}

export default Navbar;
