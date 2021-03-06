import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div {...routeProps}>
      {isLoggedIn ? children : <Navigate to="/login" />}
    </div>
  );
}
