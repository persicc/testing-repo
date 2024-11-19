"use client";

import React, { createContext } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext({ status: "unauthenticated", session: null });

const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  return (
    <AuthContext.Provider value={{ session, status }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
