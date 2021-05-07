import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Transfer from "./components/Transfer.js"

export default function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={() => <div>Homepage</div>} />
          <Route path="/login" exact component={() => <div>Login Page</div>} />
          <Route path="/transfer" exact component={(Transfer)} />
          <Route path="/history" exact component={() => <div>History</div>} />
          <Route path="/balance" exact component={() => <div>Balance</div>} />
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
