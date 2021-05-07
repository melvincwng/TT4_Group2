import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";
//<Nav.Link href="/login">Login</Nav.Link>
function NavigationBar() {
  return (
    <Navbar bg="transparent" expand="lg" className={styles.navbar}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/transfer">Transfer</Nav.Link>
          <Nav.Link href="/history">Tx History</Nav.Link>
          <Nav.Link href="/balance">Balance</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
