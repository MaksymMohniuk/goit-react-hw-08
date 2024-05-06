import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
