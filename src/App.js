import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "./Components/AppBar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
import "./App.css";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />

      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomeView />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted redirectTo="/">
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<HomeView />} />
        </Route>
        <Route
          path="/register"
          element={<PublicRoute restricted redirectTo="/contacts" />}
        >
          <Route path="/register" element={<RegisterView />} />
        </Route>
        <Route
          path="/login"
          element={<PublicRoute restricted redirectTo="/contacts" />}
        >
          <Route path="/login" element={<LoginView />} />
        </Route>
        <Route element={<PrivateRoute path="/contacts" redirectTo="/" />}>
          <Route path="/contacts" element={<ContactsView />} />
        </Route>
      </Routes> */}
    </div>
  );
  // return (
  //   <div className="App">
  //     <div className="InputWrapper">
  //       <h1 className="inputTitle">Phonebook</h1>
  //       <Form />
  //       <br />
  //       <Filter />
  //     </div>
  //     <div className="contactsSection">
  //       <h2 className="contactsSectionTitle">Contacts</h2>
  //       <ContactList />
  //     </div>
  //   </div>
}
