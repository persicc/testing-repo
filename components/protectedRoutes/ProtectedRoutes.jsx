"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function ProtectedRoutes({ children }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(status);
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  return <>{children}</>;
}

export default ProtectedRoutes;
