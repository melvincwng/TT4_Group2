import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./components/Header";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);
  function login() {
    console.warn(email, password);
    let item = { email, password };
    let response = fetch(
      "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    response = response.json();
    localStorage.setItem("x-api-key", JSON.stringify(response));
    history.push("/add");
  }
  return (
    <div>
      <Header />
      <h1> Login Details</h1>
      <div>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        ></input>
        <br />
        <input
          type="checkbox"
          placeholder="Remember me"
          className="form-control"
        ></input>
        <br />
        <button
          onClick={login}
          className="btn btn-primary"
          width="300"
          height="300"
        ></button>
      </div>
    </div>
  );
}
export default LoginPage;