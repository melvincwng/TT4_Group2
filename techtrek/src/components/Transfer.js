import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default function Transfer() {
    // /POST configurations
    // API for view transaction details
    const transactionAPI = 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add';

    // JSON Body containing the customer Id and account key
    const credentials = {
        'custID': 2,
        'accountKey': '4jzir16n-izjd-ytll-cjlp-u8i5ney8lkx',
        'payeeID': 15,
        'amount': 1,
        'eGift': false,
        'message': 'testing2'
    };

    // Config containing headers for the api key.
    const config = {
        headers: {
            'x-api-key' : 'PXeFPCR73iU4khaSqcRM1KBX5SblxPm4R1Rzt07a'
        }
    }

    // States
    const [transaction, setTransaction] = useState();

    const submitTransaction = () => {
        axios.post(
            transactionAPI,
            credentials,
            config
            ).then((response) => {
                console.log(response);
                setTransaction(response.data);
                // filterTransaction(credentials.custID);
                }
            ).catch((err) => {
                console.log(err);
                }
            );
    }

    // const filterTransaction = (customerId) => {
    //     setTransaction(transaction.filter((transactionDetail) => transactionDetail.custID === customerId ))
    // }
    
    // useEffect(() => {
    //     submitTransaction();
    // },[]);

    return (
        <form>
            <div class="mx-auto Form-centered" style={{width: 50 + '%'}}>
                <label class="sr-only" for="amount">Amount</label>
                <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">$</div>
                    </div>
                    <input type="text" class="form-control" id="amount" placeholder="Amount" />
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Name"/>
                </div>

                <br/>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="egift"/>
                    <label class="form-check-label" for="exampleCheck1">E-Gift</label>
                </div>

                <button type="submit" className="btn btn-primary" onClick={submitTransaction()}>Submit</button>
            </div>
        </form>
    );
}