import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "../Components/UserMenu/UserMenu";
import { authSelectors } from "../redux/auth";

const styles = {
  header: {
    paddingTop: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header style={styles.header}>
        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <UserMenu />
        <AuthNav />
      </header>
    </div>
  );
}
