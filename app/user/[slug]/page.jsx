import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

function UserPage() {
  const [user, setUser] = useState(null);
  const { currentid } = useContext(AuthContext);
  const router = useRouter();
  const userId = router.pathname.split("/")[2];

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${env.API_URL}/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };
    getData();
  }, [userId]);

  const handleFollow = async () => {
    try {
      await fetch(`${env.API_URL}/follow/${userId}`, {
        method: "POST",
        body: JSON.stringify({ followerId: currentid }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{user?.name}</h1>
      <Image src={user?.image} width={100} height={100} />
      <p>{user?.email}</p>

      <button onClick={handleFollow}>Follow</button>
    </div>
  );
}

export default UserPage;
