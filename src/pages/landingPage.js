import React, { useState } from "react";
import "./landingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Navbar, Button } from "react-bootstrap";
import NavBar from "../navbar/navbar";
import Poster from "../images/poster.svg";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <NavBar />

        <Row id="landing-row">
          <Col id="textArea">
            <h1 id="bold-text">Swap your money!</h1>
            <br />
            <span id="description-text">
              {" "}
              A platform to swap money with Sponsor by Poker Players around
              globally. Earn extra with thousands of players by sposnsoring them
              with lot of Poker Networks.
            </span>
            <br />
            <Button id="find-sponsor-btn">Find Sponsors</Button>
            <Button id="sponsor-players-btn">Sponsor Players</Button>

            <br />
            <span id="how-it-works-btn">How it works?</span>
          </Col>
          <Col id="imageArea">
            <img id="poster" src={Poster} width="400" height="400" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
