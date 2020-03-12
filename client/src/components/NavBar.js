import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";


export const NavBar = () => {
  return (
    <div className="Navbar">
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">View All</Nav.Link>
          <Nav.Link href="/compare">Compare</Nav.Link>
          <Nav.Link href="/grant">Grant Calculator</Nav.Link>
          <Nav.Link href="/location">Location Calculator</Nav.Link>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
