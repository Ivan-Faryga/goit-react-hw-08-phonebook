import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { authSelectors } from "../redux/auth";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <div>
      <div {...routeProps}>
        {shouldRedirect ? <Navigate to={redirectTo} /> : children}
      </div>
    </div>
  );
}
