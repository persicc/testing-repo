import AuthLinks from "../authLinks/authLinks";
import UserAvatar from "../userAvatar/UserAvatar";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <UserAvatar />
      <AuthLinks />
    </div>
  );
}

export default Navbar;
