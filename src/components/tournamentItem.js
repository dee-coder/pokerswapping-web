import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const TournamentItem = ({ obj }) => {
  return (
    <Card style={styles.container}>
      <Card.Body>
        <Row>
          <Col style={{ textAlign: "left" }}>
            <span style={styles.idBox}>#{obj["sharkscope_id"]}</span>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col style={{ textAlign: "left" }}>
            {" "}
            <h5>{obj["name"]}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 style={{ color: "#ffbb33", textAlign: "left" }}>
              {obj["network"]}
            </h6>
          </Col>
        </Row>
        <Row></Row>
      </Card.Body>
    </Card>
  );
};

const styles = {
  container: {
    marginTop: "0px",
    marginBottom: "30px",
    marginRight: "30px",

    backgroundColor: "#363840",
    color: "#FFF",
    borderColor: "#363840",
  },
  idBox: {
    padding: "3px",
    backgroundColor: "#ffbb33",
    fontSize: "10px",
    color: "#FFF",
    fontWeight: "900",

    border: "1px solid #ffbb33",
    borderRadius: "3px",
  },
};

export default TournamentItem;
