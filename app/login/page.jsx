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

  const createPost = async () => {
    try {
      await fetch(`{env.API_URL}/api/posts`, { method: "POST" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>

        <form className={styles.form}>
          <input type="text" placeholder="Enter username" name="username" />
          <input type="password" placeholder="Enter password" name="password" />
          <input
            type="password"
            placeholder="Repeat password"
            name="password-repeat"
          />
        </form>

        <SignIn />
      </div>
    </div>
  );
}

export default LoginPage;
