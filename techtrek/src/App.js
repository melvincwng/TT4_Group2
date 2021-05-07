import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import TransactionHistory from "./components/TransactionHistory";
import Balance from "./components/balance";
import Transfer from "./components/transfer";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <LoginPage />} />
          <Route path="/transfer" exact component={() => <Transfer />} />
          <Route
            path="/history"
            exact
            component={() => <TransactionHistory />}
          />
          <Route path="/balance" exact component={() => <Balance />} />
          <Route path="/chat" exact component={() => <div>Chat</div>} />
        </Switch>
      </Router>
    </div>
  );
}
