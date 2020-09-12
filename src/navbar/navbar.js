import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  FormText,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import brandLogo from "../images/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar className="nav-background" expand="lg">
      <Navbar.Brand
        id="nav-brand-color"
        href="#home"
        className="nav-brand-color"
      >
        PokerSwapping
      </Navbar.Brand>{" "}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="my-nav" className="mr-auto">
          <Nav.Link id="nav-links" href="#home">
            Home
          </Nav.Link>
          <Nav.Link id="nav-links" href="#link">
            Find A Sponsor
          </Nav.Link>
          <Nav.Link id="nav-links" href="#link">
            Find A Tournament
          </Nav.Link>
          <Nav.Link id="nav-links" href="#link">
            Players
          </Nav.Link>
          <Nav.Link id="nav-links" href="#link">
            Affiliate
          </Nav.Link>
          <Nav.Link id="nav-links" href="#link">
            How It Works
          </Nav.Link>
        </Nav>
        <i class="fas fa-user"></i>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
////
