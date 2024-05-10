import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./AuthNav.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(styles.navLink, {
    [styles.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink className={getNavLinkClassName} to="/register">
          Register
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/login">
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
