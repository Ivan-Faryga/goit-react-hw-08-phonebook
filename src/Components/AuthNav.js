import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  active: {
    color: "#E84A5F",
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        end
        // style={styles.link}
        style={(data) => (data.isActive ? styles.active : styles.link)}
        /*activeStyle={styles.activeLink}*/
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        end
        style={styles.link}
        /*activeStyle={styles.activeLink}*/
      >
        Sign In
      </NavLink>
    </div>
  );
}
