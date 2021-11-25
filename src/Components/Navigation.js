import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 25,
    fontWeight: 700,
    color: "rgb(17, 159, 224)",
  },
  active: {
    display: "inline-block",
    textDecoration: "none",
    padding: 25,
    fontWeight: 700,
    color: "#E84A5F",
  },
};

const Navigation = () => {
  const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        end
        style={(data) => (data.isActive ? styles.active : styles.link)}
      >
        Homepage
      </NavLink>

      {isLoggedin && (
        <NavLink
          to="/contacts"
          end
          style={(data) => (data.isActive ? styles.active : styles.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
