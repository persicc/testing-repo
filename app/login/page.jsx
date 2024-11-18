import React, { useContext } from "react";

import SignIn from "@/components/signIn/SignIn";
import { AuthContext } from "@/context/AuthContext";

function LoginPage() {
  const { status } = useContext(AuthContext);

  return (
    <div>
      <h1>Login</h1>
      <SignIn />
    </div>
  );
}

export default LoginPage;
