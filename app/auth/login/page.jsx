"use client";

import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SignIn from "@/components/signIn/SignIn";
import styles from "./login.module.css";

function LoginPage() {
  const { status } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status]);

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <input type="text" placeholder="Enter username" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Repeat password" />
        <SignIn />
      </div>
    </div>
  );
}

export default LoginPage;
