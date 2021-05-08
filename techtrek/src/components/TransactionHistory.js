import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
/*
 * User must be able to view his/her own transaction history.
 * Data visualization through simple graphs.
 * View Transaction Details - /POST
 * https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view
 * Retrieves transaction information.
 */

function TransactionHistory() {
  // /POST configurations
  // API for view transaction details
  const transactionAPI =
    "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view";

  const responseObject = JSON.parse(localStorage.userData);

  // JSON Body containing the customer Id and account key
  const credentials = {
    custID: responseObject.custID,
    accountKey: responseObject.accountKey,
  };

  // Config containing headers for the api key.
  const config = {
    headers: {
      "x-api-key": "PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a",
    },
  };

  // States
  const [transactionHistory, setTransactionHistory] = useState([]);

  const fetchTransactionHistory = async () => {
    const response = axios
      .post(transactionAPI, credentials, config)
      .then((response) => {
        console.log(response);
        setTransactionHistory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return response;
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  function convertUnixToDate(timestamp) {
    let unix_timestamp = timestamp;
    let date = new Date(unix_timestamp * 1000);
    let formattedDateTime = date + "";
    // let hours = date.getHours();
    // let minutes = "0" + date.getMinutes();
    // let seconds = "0" + date.getSeconds();
    // let formattedDateTime =
    //   date + hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedDateTime;
  }

  return (
    <>
      <NavigationBar />
      <h1 style={{ color: "white" }}>Transaction History</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Date Time</th>
            <th>Amount</th>
            <th>e-Gift</th>
            <th>Expenses</th>
            <th>message</th>
            <th>Payee Id</th>
          </tr>
        </thead>
        <tbody>
          {console.log(transactionHistory.datetime)}
          {transactionHistory.map((transactionHistory, index) => (
            <tr key={index}>
              <td>{transactionHistory.custID}</td>
              <td>{convertUnixToDate(transactionHistory.datetime)}</td>
              <td>
                {transactionHistory.payeeID == credentials.custID
                  ? `+${transactionHistory.amount}`
                  : `-${transactionHistory.amount}`}
              </td>
              <td>{JSON.stringify(transactionHistory.eGift)}</td>
              <td>{transactionHistory.expenseCat}</td>
              <td>{transactionHistory.message}</td>
              <td>{transactionHistory.payeeID}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TransactionHistory;
