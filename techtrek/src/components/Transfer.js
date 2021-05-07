import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default function transfer() {
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

            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
  );
}