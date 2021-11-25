import { NavLink } from "react-router-dom";

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

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        end
        style={(data) => (data.isActive ? styles.active : styles.link)}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        end
        style={(data) => (data.isActive ? styles.active : styles.link)}
      >
        Sign In
      </NavLink>
    </div>
  );
}
