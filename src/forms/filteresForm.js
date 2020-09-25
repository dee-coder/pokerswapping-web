import React from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const FiltersForm = ({ network, setNetwork }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={styles.card}>
            <Card.Header style={{ borderBottom: "1px solid #363840" }}>
              <h3 style={styles.header}>
                <i
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "14px",
                  }}
                  class="fa fa-filter"
                  aria-hidden="true"
                ></i>
                Filters
              </h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label style={styles.mylabel}>Network</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        View tournaments by a spacific network
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <i
                        ref={ref}
                        {...triggerHandler}
                        style={{
                          marginLeft: "5px",
                          marginRight: "5px",
                          fontSize: "14px",
                          color: "#FFF",
                        }}
                        class="fa fa-info-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </OverlayTrigger>
                  <Form.Control
                    style={styles.basicInput}
                    as="select"
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                  >
                    <option value={null}>Default select</option>
                    <option value="fulltill">Fulltilt</option>
                    <option value="skypoker">SkyPoker</option>
                    <option value="888poker">888Poker</option>
                    <option value="partypoker" selected>
                      PartyPoker
                    </option>
                    <option value="pokerstars">PokerStars</option>
                  </Form.Control>
                  {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={styles.mylabel}>Game Type</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        View tournaments by a spacific Game Type
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <i
                        ref={ref}
                        {...triggerHandler}
                        style={{
                          marginLeft: "5px",
                          marginRight: "5px",
                          fontSize: "14px",
                          color: "#FFF",
                        }}
                        class="fa fa-info-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </OverlayTrigger>
                  <Form.Control style={styles.basicInput} as="select">
                    <option>Default select</option>
                    <option>Texas Hold’em</option>
                    <option>Omaha Hi</option>
                    <option>Omaha Hi-Lo</option>
                    <option>7-Card Stud</option>
                    <option>2-7 Triple Draw</option>
                    <option>5-Card Draw</option>
                    <option>5-Card Omaha</option>
                    <option>Badugi</option>
                    <option>HORSE</option>
                    <option>Razz</option>
                    <option>Chinese Poker</option>
                    <option>Short Deck</option>
                    <option>Pineapple</option>
                  </Form.Control>
                  {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={styles.mylabel}>Price Pool</Form.Label>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        View tournaments by a price fund in the Game
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <i
                        ref={ref}
                        {...triggerHandler}
                        style={{
                          marginLeft: "5px",
                          marginRight: "5px",
                          fontSize: "14px",
                          color: "#FFF",
                        }}
                        class="fa fa-info-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </OverlayTrigger>
                  <Form.Control style={styles.basicInput} as="select">
                    <option>Default select</option>
                    <option>$0 To $100</option>
                    <option>$100 To $1000</option>
                    <option>$1000 To $5000</option>
                    <option>$5000 To $25000</option>
                    <option>$25000 To $100000</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" id="signn-in-btn">
                  Apply Filters
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  card: {
    backgroundColor: "#2c2e3e",
    border: "1px solid #363840",
  },
  header: {
    color: "#ffbb33",
    textAlign: "center",
    fontSize: "16px",
  },
  mylabel: {
    fontSize: "14px",
    color: "#FFF",
  },

  basicInput: {
    color: "#6f7079",
    backgroundColor: "#2c2e3e",
    borderColor: "#6f7079",
    borderRadius: "3px",
    fontSize: "14px",
  },
};

export default FiltersForm;
