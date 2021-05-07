import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const url =
    "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  function login() {
    console.warn(username, password);
  }

  const config = {
    headers: {
      "x-api-key": "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a",
    },
  };

  function storeUserSession(data) {
    var dataToStore = JSON.stringify(data);
    localStorage.setItem("userData", dataToStore);
    console.log(localStorage.userData);
  }

  function handleSubmit(e) {
    async function fetchAPI(formData) {
      try {
        const response = await axios
          .post(url, formData, config)
          .then((response) => storeUserSession(response.data));
        alert("You logged in!");
        window.location.href = "/";
      } catch (err) {
        console.log(err);
      }
    }

    e.preventDefault();
    let formData = {};
    formData["userName"] = username;
    formData["userPass"] = password;
    console.log(formData);
    fetchAPI(formData);
  }

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <Header />
        <h1> Login Details</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
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
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
