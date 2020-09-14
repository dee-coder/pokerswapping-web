import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import "./form.css";

const SignInForm = () => {
  return (
    <Card id="my-form" style={{ width: "22rem", borderColor: "#6f7079" }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label id="my-label">Email address</Form.Label>
            <Form.Control
              id="my-from-input"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label id="my-label">Password</Form.Label>
            <Form.Control
              id="my-from-input"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label id="my-label">I am</Form.Label>

            <Form.Control id="my-from-input" as="select">
              <option>Default select</option>
              <option>Player</option>
              <option>Sponsor</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" id="signn-in-btn">
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignInForm;
