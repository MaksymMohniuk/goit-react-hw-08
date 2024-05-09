import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div className={styles.menu}>
      <p className={styles.user}>Welcome, {user.name}!</p>
      <button className={styles.logoutButton} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
