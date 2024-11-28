import AuthLinks from "../authLinks/authLinks";
import UserAvatar from "../userAvatar/UserAvatar";

function Navbar() {
  return (
    <div>
      <AuthLinks />
      <UserAvatar />
    </div>
  );
}

export default Navbar;
