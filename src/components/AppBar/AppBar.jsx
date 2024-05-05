import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../../App.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const AppBar = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/register">
          Register
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/login">
          Login
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/contacts">
          Contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default AppBar;
