import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./components/Header";

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  return (
    <div>
      <Header />
      <h1> Login Details</h1>
      <div>
        <input
          type="text"
          placeholder="Email Address"
          className="form-control"
        ></input>

        <br />
        <input
          type="text"
          placeholder="Password"
          className="form-control"
        ></input>
        <br />

        <input
          type="checkbox"
          placeholder="Remember me"
          className="form-control"
        ></input>
      </div>
    </div>
  );
}
export default LoginPage;
