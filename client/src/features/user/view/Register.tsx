/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../model/hooks";
// import { addUser } from "../model/userSlice";
import { registerAsync } from "../controlers/userAPI";

const Register = () => {
  const dispatch = useAppDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(registerAsync({ name: userName, password }));
    setPassword("");
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Full Name:{" "}
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:{" "}
        <input
          id="password"
          name="password"
          type="text"
          placeholder="!!234256%@#%$@"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Register;
