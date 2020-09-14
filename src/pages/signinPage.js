import React from "react";
import SignInForm from "../forms/signinFormBoth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signinPage.css";
import { Row, Col, Container } from "react-bootstrap";
import NavBarSecond from "../navbar/navbarSecond";

const SigninPage = () => {
  return (
    <div>
      <Container>
        <NavBarSecond />

        <Row id="signin-container">
          <div>
            <SignInForm />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SigninPage;
