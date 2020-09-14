import React, { useState } from "react";
import SignUpFormPlayer from "../forms/signupFormPlayer";
import SignUpFormSponsor from "../forms/signupFormSponsor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signupPage.css";
import { Row, Col, Container } from "react-bootstrap";
import NavBarSecond from "../navbar/navbarSecond";
import TabSwitch from "../utils/tabLayout";

const SigninPage = () => {
  const [mode, setMode] = useState(0);
  //console.log(mode);

  return (
    <div>
      <Container>
        <NavBarSecond />

        <Row id="signin-container">
          <div>
            <TabSwitch mode={mode} setMode={setMode} />
            {mode === 0 ? <SignUpFormPlayer /> : <SignUpFormSponsor />}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SigninPage;
