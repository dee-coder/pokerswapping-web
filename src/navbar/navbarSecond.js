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
import { Link } from "react-router-dom";

const NavBarSecond = () => {
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
          <Nav.Link id="nav-links" href="#link">
            How It Works
          </Nav.Link>
        </Nav>
        <Link to="/signin">
          <Button id="sign-in-btn">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button id="sign-up-btn">Sign Up</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarSecond;
////
