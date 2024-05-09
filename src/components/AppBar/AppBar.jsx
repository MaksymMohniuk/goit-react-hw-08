import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import styles from "./AppBar.module.css";

const AppBar = () => {
  const isSignedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;
