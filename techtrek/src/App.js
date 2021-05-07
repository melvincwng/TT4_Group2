import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={() => <div>Homepage</div>} />
          <Route path="/login" exact component={() => <LoginPage />} />
          <Route path="/transfer" exact component={() => <div>Transfer</div>} />
          <Route path="/history" exact component={() => <div>History</div>} />
          <Route path="/balance" exact component={() => <div>Balance</div>} />
          <Route path="/chat" exact component={() => <div>Chat</div>} />
        </Switch>
      </Router>
    </div>
  );
}
