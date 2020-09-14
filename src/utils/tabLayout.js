import React from "react";
import "./tabLayout.css";
import { Container, Row, Col, Form } from "react-bootstrap";

const TabSwitch = ({ mode, setMode }) => {
  return (
    <Container>
      <Form.Group id="form-role">
        <Form.Label id="select-role-label">Select Your Role</Form.Label>
      </Form.Group>

      <Row id="tab-box">
        {mode === 0 ? (
          <Col id="player-box-hover" onClick={() => setMode(0)}>
            Player
          </Col>
        ) : (
          <Col id="player-box" onClick={() => setMode(0)}>
            Player
          </Col>
        )}
        {mode === 1 ? (
          <Col id="sponsor-box-hover" onClick={() => setMode(1)}>
            Sponsor
          </Col>
        ) : (
          <Col id="sponsor-box" onClick={() => setMode(1)}>
            Sponsor
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default TabSwitch;
