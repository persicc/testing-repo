"use client";

import React, { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext({ status: "unauthenticated", session: null });

const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    setCurrentId(session?.user?.id);
  }, [session]);

  return (
    <AuthContext.Provider value={{ session, status, currentId }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
