"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

function ProtectedRoutes({ children }) {
  const { status } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log(status);
    if (
      (status === "unauthenticated" && router.pathname !== "/auth/login") ||
      router.pathname !== "/auth/signIn"
    )
      router.push("/auth/login");
  }, [status]);

  return <>{children}</>;
}

export default ProtectedRoutes;
