import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import "./form.css";

const SignInForm = ({
  email,
  setEmail,
  password,
  setPassword,
  mode,
  setMode,
  handleSubmit,
}) => {
  return (
    <Card id="my-form" style={{ width: "22rem", borderColor: "#6f7079" }}>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label id="my-label">Email</Form.Label>
            <Form.Control
              id="my-from-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label id="my-label">I am</Form.Label>

            <Form.Control
              id="my-from-input"
              as="select"
              value={mode}
              onChange={(event) => setMode(event.target.value)}
            >
              <option value="none" selected={mode === "none"}>
                Default select
              </option>
              <option value="Player" selected={mode === "Player"}>
                Player
              </option>
              <option value="Sponsor" selected={mode === "Sponsor"}>
                Sponsor
              </option>
            </Form.Control>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            id="signn-in-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignInForm;
