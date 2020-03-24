import React from "react";
import "./components.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../Images/BTOLogo.png";
import { LoginDrawer } from "../components/loginSlide";

export const NavBar = () => {
  return (
    <div className="Navbar">
      <Navbar className="navColour" variant="dark" fixed="top">
        <Navbar.Brand className="logo-title" href="/">
          <img src={Logo} alt="BTO Logo" width="40" height="35" />
          BTOAnywhere
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/compare">Houses</Nav.Link>
          <Nav.Link href="/grant">Grants</Nav.Link>
          <Nav.Link href="/location">Locations</Nav.Link>
          <Nav.Link href="/FAQ">FAQ</Nav.Link>
        </Nav>
        <LoginDrawer />
      </Navbar>
    </div>
  );
};
