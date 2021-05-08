import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";

function Balance() {
  const url =
    "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts";

  const responseObject = JSON.parse(localStorage.userData);

  const credentials = {
    custID: responseObject.custID,
    accountKey: responseObject.accountKey,
  };

  const apikey = {
    headers: {
      "x-api-key": "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a",
    },
  };

  const [Balance, setBalance] = useState([]);

  const fetchBalance = () => {
    const res = axios
      .post(url, credentials, apikey)
      .then((response) => {
        console.log(response);
        setBalance(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div style={{ color: "white" }}>
      {console.log(responseObject)}
      <NavigationBar />
      <h1>View Balance</h1>
      <Table striped bordered hover style={{ color: "white" }}>
        <thead>
          <tr>
            <th>Account Type</th>
            <th>Account Number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {Balance.map((Balance) => (
            <tr style={{ color: "white" }}>
              <td>{Balance.accountName}</td>
              <td>{Balance.accountNumber}</td>
              <td>{Balance.availableBal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Balance;
