"use client";

import { createContext } from "react";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// blogContext.js

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { status } = useSession();
  const router = useRouter();

  return (
    <AuthContext.Provider value={{ status }}>{children}</AuthContext.Provider>
  );
};

export default { AuthContext, AuthProvider };
