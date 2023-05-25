import React, { FormEvent } from "react";
import { useAuth } from "../../context/auth-context";
// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  // const login = (param: { username: string; password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(param),
  //   }).then(async (response) => {
  //     if (response.ok) {
  //     }
  //   });
  // };
  //import useAuth to login
  const { login, user } = useAuth();
  // handle submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>login successfully, username: {user?.name}</div> : null}
      <div>
        <label htmlFor={"username"}>username</label>
        <input type={"text"} id={"username"} />
      </div>
      <div>
        <label htmlFor={"password"}>password</label>
        <input type={"password"} id={"password"} />
      </div>
      <button type={"submit"}>login</button>
    </form>
  );
};
