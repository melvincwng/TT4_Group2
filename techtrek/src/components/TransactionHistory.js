import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
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

    const fetchTransactionHistory = () => {
        const response = axios.post(
            transactionAPI,
            credentials,
            config
            ).then((response) => {
                console.log(response);
                setTransactionHistory(response.data);
                }
            ).catch((err) => {
                console.log(err);
                }
            );
    }

    
    useEffect(() => {
        fetchTransactionHistory();
    },[]);
    
    return (
        <>
            <h1>Transaction History</h1>
            {transactionHistory.map((transactionHistory) => (
                <h3  key={transactionHistory.datetime}>
                {transactionHistory.message}
                </h3>

                ))}
        </>
    )
}

export default TransactionHistory
