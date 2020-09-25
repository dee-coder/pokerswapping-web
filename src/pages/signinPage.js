import React, { useState } from "react";
import SignInForm from "../forms/signinFormBoth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signinPage.css";
import { Row, Col, Container } from "react-bootstrap";
import NavBarSecond from "../navbar/navbarSecond";
import axios from "axios";
import urls from "../apiUrl.json";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, "email");
    console.log(password, "password");
    console.log(mode, "mode");

    var params = {
      email: email,
      password: password,
    };

    axios
      .post(urls["signinSponsor"], params)
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <Container>
        <NavBarSecond />

        <Row id="signin-container">
          <div>
            <SignInForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              mode={mode}
              setMode={setMode}
              handleSubmit={handleSubmit}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SigninPage;
