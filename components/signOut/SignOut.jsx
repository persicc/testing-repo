import { _signOut } from "@/serverFunctions";

export function SignOut() {
  return (
    <form action={_signOut}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
