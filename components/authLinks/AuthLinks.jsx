"use client";

import React, { useContext } from "react";
import SignIn from "../signIn/SignIn";
import { SignOut } from "../signOut/SignOut";
import { AuthContext } from "@/context/AuthContext";
import styles from "./authLinks.module.css";

function AuthLinks() {
  const { status } = useContext(AuthContext);

  return (
    <div className={styles.authLinksContainer}>
      {status === "unauthenticated" && <SignIn />}
      <SignOut />
    </div>
  );
}

export default AuthLinks;
