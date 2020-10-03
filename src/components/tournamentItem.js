import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const TournamentItem = ({ obj }) => {
  return (
    <Card style={styles.container}>
      <Card.Body>
        <Row>
          <Col lg={10} style={{ textAlign: "left" }}>
            <span style={styles.idBox}>#{obj["sharkscope_id"]}</span>
          </Col>
          <Col lg={2}>
            <span style={{ float: "right", fontSize: "14px" }}>
              <i style={{ color: "#ffbb22" }} class="fas fa-calendar-week"></i>{" "}
              {obj["scheduledStartDate"]}
            </span>
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

        <Row style={{ marginTop: "20px" }}>
          {" "}
          <Col lg={2}>
            <span style={{ fontSize: "14px", color: "#FFF" }}>
              CURRENCY
              <i style={{ marginLeft: "10px" }} class="fas fa-info-circle"></i>
            </span>
            <br />
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {obj["currency"]}
            </span>
          </Col>
          <Col lg={2}>
            <span style={{ fontSize: "14px", color: "#FFF" }}>
              GUARANTEE
              <i style={{ marginLeft: "10px" }} class="fas fa-info-circle"></i>
              <br />
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                {obj["guarantee"]}
              </span>
            </span>
          </Col>
          <Col lg={2}>
            <span style={{ fontSize: "14px", color: "#FFF" }}>
              OVERLAY
              <i style={{ marginLeft: "10px" }} class="fas fa-info-circle"></i>
              <br />
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                {obj["overlay"]}
              </span>
            </span>
          </Col>
          <Col lg={3}>
            <span style={{ fontSize: "14px", color: "#FFF" }}>
              TOTAL ENTRANTS
              <i style={{ marginLeft: "10px" }} class="fas fa-info-circle"></i>
            </span>
            <br />
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {obj["totalEntrants"]}
            </span>
          </Col>
          <Col lg={2}>
            <span style={{ fontSize: "14px", color: "#FFF" }}>
              STATE
              <i style={{ marginLeft: "10px" }} class="fas fa-info-circle"></i>
            </span>
            <br />
            <span style={{ fontSize: "14px", fontWeight: "600" }}>
              {obj["state"]}
            </span>
          </Col>
        </Row>
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
