import { signInWithGoogle } from "@/serverFunctions";
import styles from "./signIn.module.css";

export default function SignIn() {
  return (
    <form action={signInWithGoogle}>
      <button type="submit" className={styles.button}>
        Signin with Google
      </button>
    </form>
  );
}
