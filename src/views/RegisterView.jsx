import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { authOperations } from "../redux/auth";
import s from "./RegisterView.module.css";

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  const uniqueIdName = uuid();
  const uniqueIdEmail = uuid();
  const uniqueIdPassword = uuid();

  return (
    <div className={s.registerWrapper}>
      <h1 className={s.title}>Sign up, and check the benefits of our App :)</h1>

      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={s.formWrapper}
      >
        <label htmlFor={uniqueIdName} className={s.label}>
          <p className={s.labelText}>Name</p>
          <input
            id={uniqueIdName}
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
            className={s.formInput}
          />
        </label>

        <label htmlFor={uniqueIdEmail} className={s.label}>
          <span className={s.labelText}>e-mail</span>
          <input
            id={uniqueIdEmail}
            type="email"
            name="email"
            value={email}
            required
            onChange={handleInputChange}
            className={s.formInput}
          />
        </label>

        <label htmlFor={uniqueIdPassword} className={s.label}>
          <span className={s.labelText}>Password</span>
          <input
            id={uniqueIdPassword}
            type="password"
            name="password"
            value={password}
            required
            onChange={handleInputChange}
            className={s.formInput}
          />
        </label>

        <button type="submit" className={s.formBtn}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default RegisterView;
