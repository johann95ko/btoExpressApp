import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Images/BTOLogo.png"


export const NavBar = () => {
  return (
    <div className="Navbar">
      <Navbar className="navColour" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <img 
          src= {Logo}
          alt="BTO Logo"
          width="50"
          height="45"
          />
          BTOAnywhere
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/compare">Compare</Nav.Link>
          <Nav.Link href="/grant">Grant Calculator</Nav.Link>
          <Nav.Link href="/location">Location Calculator</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
