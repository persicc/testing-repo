import React from "react";
import SignIn from "../signIn/SignIn";
import { SignOut } from "../signOut/SignOut";
import UserAvatar from "../userAvatar/UserAvatar";

function Navbar() {
  return (
    <div>
      <SignIn />
      <SignOut />
      <UserAvatar />
    </div>
  );
}

export default Navbar;
