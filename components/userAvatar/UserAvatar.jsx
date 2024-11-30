import { auth } from "@/auth";
import Image from "next/image";
import styles from "./userAvatar.module.css";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <Image
        className={styles.avatar}
        src={session?.user?.image}
        width={40}
        height={40}
        alt="User image"
      />
    </div>
  );
}
