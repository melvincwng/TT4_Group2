import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import { Table } from "react-bootstrap";
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
    const transactionAPI = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view';

    // JSON Body containing the customer Id and account key
    const credentials = {
        'custID': 2,
        'accountKey': '4jzir16n-izjd-ytll-cjlp-u8i5ney8lkx'
    };

    // Config containing headers for the api key.
    const config = {
        headers: {
            'x-api-key' : 'PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a'
        }
    }

    // States
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [tableInfo, setTableInfo] = useState([]);
    const fetchTransactionHistory = async () => {
        const response = axios.post(
            transactionAPI,
            credentials,
            config
            ).then((response) => {
                setTransactionHistory(response.data);
                }
            ).catch((err) => {
                console.log(err);
                }
            );
            
        return response;
    }

    const convertTransactionHistoryDateTime = () => {
        let data = [];
        for(var i in transactionHistory)
        {
            let val = transactionHistory[i]
            let unix_timestamp = val.datetime;
            var date = new Date(unix_timestamp * 1000);
            data.push({...val, datetime: date});
        }
        setTableInfo(data)
    }

    useEffect(() => {
        fetchTransactionHistory();
        convertTransactionHistoryDateTime();
    },[]);
    
    return (
        <>
            <h1>Transaction History</h1>
            <Table striped bordered hover>
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
                    {tableInfo.map((transactionHistory, index) => (
                    <tr key={index}>
                    <td>{transactionHistory.custID}</td>
                    <td>{transactionHistory.datetime}</td>
                    <td>{(transactionHistory.payeeID === credentials.custID) ? `+${transactionHistory.amount}` : `-${transactionHistory.amount}`}</td>
                    <td>{JSON.stringify(transactionHistory.eGift)}</td>
                    <td>{transactionHistory.expenseCat}</td>
                    <td>{transactionHistory.message}</td>
                    <td>{transactionHistory.payeeID}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default TransactionHistory
