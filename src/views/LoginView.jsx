import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./LoginView.module.css";

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className={s.title}>PLease, sign in</h1>

      <form
        onSubmit={handleSubmit}
        className={s.formWrapper}
        autoComplete="off"
      >
        <label className={s.label}>
          <p className={s.labelText}>your email</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.formInput}
          />
        </label>

        <label className={s.label}>
          <p className={s.labelText}>password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.formInput}
          />
        </label>

        <button type="submit" className={s.formBtn}>
          sign in
        </button>
      </form>
    </div>
  );
};

export default LoginView;
