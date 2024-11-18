import { auth } from "../../utils/auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <img src={session.user.image} alt="User Avatar" />
      <h1>{session.user.name}</h1>
    </div>
  );
}
