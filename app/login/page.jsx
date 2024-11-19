"use client";

import React, { useContext, useEffect } from "react";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SignIn from "@/components/signIn/SignIn";

function LoginPage() {
  const { status } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log(status);
    if (status === "authenticated") router.push("/");
  }, [status]);

  return (
    <div>
      <h1>Login</h1>
      <SignIn />
    </div>
  );
}

export default LoginPage;
