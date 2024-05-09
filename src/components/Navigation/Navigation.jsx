import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "../../App.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink
          className={getNavLinkClassName}
          activeClassName={styles.active}
          exact
          to="/"
        >
          Home
        </NavLink>
        {isSignedIn && (
          <NavLink
            className={getNavLinkClassName}
            activeClassName={styles.active}
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
