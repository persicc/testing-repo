"use client";

import React, { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext({ status: "unauthenticated", session: null });

const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (session?.user) setUserId(session.user.id);
  }, [session]);

  return (
    <AuthContext.Provider value={{ session, status, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
