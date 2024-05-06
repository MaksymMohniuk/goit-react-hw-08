import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../../App.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AuthNav = () => {
  return (
    <div>
      <nav className={css.nav}>
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
