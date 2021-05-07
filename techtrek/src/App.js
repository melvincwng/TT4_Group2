import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Transfer from "./components/Transfer.js"
import LoginPage from "./components/LoginPage";
import TransactionHistory from "./components/TransactionHistory";
import Balance from "./components/balance";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <div>Homepage</div>} />
          <Route path="/login" exact component={() => <LoginPage />} />
          <Route path="/transfer" exact component={() => <div>Transfer</div>} />
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
