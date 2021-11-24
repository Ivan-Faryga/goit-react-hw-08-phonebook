import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { authSelectors } from "../redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Routes>
      <Route {...routeProps}>
        {shouldRedirect ? <Navigate to="/" /> : children}
      </Route>
    </Routes>
  );
}
