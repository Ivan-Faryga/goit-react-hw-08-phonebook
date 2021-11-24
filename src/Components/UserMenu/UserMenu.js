import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { authOperations } from "../../redux/auth";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
