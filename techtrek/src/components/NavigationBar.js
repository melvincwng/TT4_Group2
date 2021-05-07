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
          <Nav.Link href="/" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link href="/transfer" style={{ color: "white" }}>
            Transfer
          </Nav.Link>
          <Nav.Link href="/history" style={{ color: "white" }}>
            Tx History
          </Nav.Link>
          <Nav.Link href="/balance" style={{ color: "white" }}>
            Balance
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
