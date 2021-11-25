import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { authOperations } from "../../redux/auth";

const styles = {
  text: {
    display: "inline-block",
    padding: 25,
    fontWeight: 700,
    color: "rgb(17, 159, 224)",
  },
  btn: {
    fontSize: "20px",
    width: "80px",
    height: "35px",
    borderRadius: "10px",
    color: "rgb(13, 122, 211)",
    backgroundColor: "orange",
    marginTop: "20px",
    marginRight: "15px",
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
      <span style={styles.text}>Greetings, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        style={styles.btn}
      >
        Leave
      </button>
    </div>
  );
}
