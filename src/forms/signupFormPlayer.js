import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import "./form.css";
import { Link } from "react-router-dom";

const SignUpFormPlayer = () => {
  return (
    <Card id="my-form" style={{ width: "22rem", borderColor: "#6f7079" }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label id="my-label">Full Name</Form.Label>
            <Form.Control
              id="my-from-input"
              type="email"
              placeholder="Full Name"
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label id="my-label">Email</Form.Label>
            <Form.Control id="my-from-input" type="text" placeholder="Email" />
          </Form.Group>

          <Form.Group>
            <Form.Label id="my-label">Select Network</Form.Label>

            <Form.Control id="my-from-input" as="select">
              <option>Default select</option>
              <option>Fulltilt</option>
              <option>SkyPoker</option>
              <option>888Poker</option>
              <option>PartyPoker</option>
              <option>PokerStars</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label id="my-label">Network Username</Form.Label>
            <Form.Control
              id="my-from-input"
              type="text"
              placeholder="Network Username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label id="my-label">Password</Form.Label>
            <Form.Control
              id="my-from-input"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label id="my-label">Confirm Password</Form.Label>
            <Form.Control
              id="my-from-input"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox" id="agree-box">
            <Form.Check type="checkbox" label="I Agree" />
            <Form.Text>
              By checking on 'I Agree ' you agree with our{" "}
              <Link to="#">Terms & Condition</Link> and{" "}
              <Link to="#">Privacy Policy</Link>.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" id="signn-in-btn">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpFormPlayer;
