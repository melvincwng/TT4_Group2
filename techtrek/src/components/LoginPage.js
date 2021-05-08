import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import styles from "./LoginPage.module.css";

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

  // To store a value in localStorage, need to parse the value as a string first
  // Following which, we can then convert the string into an object via JSON.parse()
  // Essentially means that, in the other components, they need to JSON.parse(localStorage.userData)
  // to get the response object and then extract out the data that they need.
  function storeUserSession(data) {
    let dataToStore = JSON.stringify(data);
    localStorage.setItem("userData", dataToStore);
    console.log(localStorage.userData);
    console.log(typeof localStorage.userData);
    console.log("ToRetrieveObject: ", JSON.parse(localStorage.userData));
  }

  function handleSubmit(e) {
    async function fetchAPI(formData) {
      try {
        const response = await axios
          .post(url, formData, config)
          .then((response) => storeUserSession(response.data));
        alert("You logged in!");
        window.location.href = "/balance";
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
      <div className={styles.warningMessage}>
        <h1>ALERT: </h1>
        There are scam calls targeting customers to make bank transfers. DO NOT
        disclose any account details, User ID, PINs or SMS OTP to anyone. Due to
        COVID-19, we have limited our Secured Mailbox services. For queries,
        visit Help and Support or chat with us.
      </div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className={styles.loginForm}
      >
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
