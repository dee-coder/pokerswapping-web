import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

const DateHolderComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = ({ value, onClick }) => (
    <Button style={styles.basicInput} onClick={onClick}>
      {value}
    </Button>
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

const FiltersForm = ({ network, setNetwork }) => {
  useEffect(() => {
    // setLayoutWidth(window.innerHeight());
    // if (layoutWidth < 600) {
    //   setRatio(12);
    // } else {
    //   setRatio(6);
    // }
  }, []);

  const [gameType, setGameType] = useState("");
  const [layoutWidth, setLayoutWidth] = useState();
  const [ratio, setRatio] = useState();
  const [networks, setNetworks] = useState([
    { name: "FullFilt", key: "1" },
    { name: "PartyPoker", key: "2" },
    { name: "PokerStars", key: "3" },
    { name: "888Poker", key: "4" },
    { name: "SkyPoker", key: "5" },
  ]);

  const [buyIn, setBuyIn] = useState([
    {
      name: "$10 to $100",
      key: "1",
      name: "$100 to $500",
      key: "2",
    },
  ]);

  const [prizePool, setPrizePool] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState([]);
  const [filters, setFilters] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const handleFilters = (filter) => {
    //console.log(filter);
    setSelectedNetwork([...selectedNetwork, filter]);
    setFilters([...filters, filter]);
  };

  const handleGameType = (type) => {
    setFilters([...filters, type]);
  };

  const onSelect = (list, Item) => {
    //console.log(Item);
    setSelectedNetwork([...selectedNetwork, Item]);
    setFilters([...filters, Item.name]);
  };

  const onRemove = (list, Item) => {
    //console.log(Item);
    filters.splice(filters.indexOf(Item) - 1, 1);
    selectedNetwork.splice(filters.indexOf(Item) - 1, 1);
    setSelectedNetwork(selectedNetwork);

    setFilters(filters);
  };

  const collectAndApplyFilters = () => {
    console.log(filters);
  };

  return (
    <Form>
      <Row className="myRow">
        <Col md={6}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>Network</Form.Label>
            <OverlayTrigger
              placement="top"
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
            <Multiselect
              options={networks}
              displayValue="name"
              style={{
                searchBox: {
                  color: "#6f7079",
                  backgroundColor: "#2c2e3e",
                  borderColor: "#6f7079",
                  borderRadius: "3px",
                  fontSize: "14px",
                  marginTop: "10px",
                  marginRight: "10px",
                  height: "40px",
                  padding: "3px",
                },
                chips: {
                  backgroundColor: "#ffbb22",
                },
              }}
              showCheckbox={true}
              placeholder="Select Networks"
              onSelect={onSelect}
              onRemove={onRemove}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>Tournament ID</Form.Label>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">
                  View tournaments by a ID
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
            <Form.Group style={{ marginTop: "10px" }}>
              <Form inline>
                <Form.Control
                  style={styles.findTournamentTitleBox}
                  placeholder="e.g. Texas hold 'em., ID:2386389399 "
                  // onChange={(e) => setTournamentId(e.target.value)}
                />

                <Button
                  style={styles.searchBtn}
                  //onClick={(e) => getASpacifiMatchById(e)}
                >
                  {" "}
                  <i
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                    class="fa fa-search"
                    aria-hidden="true"
                  ></i>
                </Button>
              </Form>
            </Form.Group>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4} lg={2}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={styles.mylabel}>Game Type </Form.Label>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id="button-tooltip-2">
                  View tournaments by spacific game type
                </Tooltip>
              }
            >
              {({ ref, ...triggerHandler }) => (
                <i
                  ref={ref}
                  {...triggerHandler}
                  style={{
                    marginLeft: "10px",
                    marginRight: "20px",
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
              <option value="H">Hold'em</option>
              <option value="O">Omaha</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>Prize Pool</Form.Label>
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
        </Col>

        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>Speed</Form.Label>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">
                  View tournaments by a game speed
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
              <option>Select Speed</option>
              <option>Slow</option>
              <option>Turbo</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>State</Form.Label>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">
                  View tournaments by present state
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
              <option>Select State</option>
              <option>Registering</option>
              <option>Late Registering</option>
              <option>Running</option>
              <option>Completed</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>Enrollment</Form.Label>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">
                  View tournaments by amount of enrolled player
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
              <option>Select</option>
              <option>10 - 50</option>
              <option>50 - 100</option>
              <option>100 - 200</option>
              <option>100 - 500</option>
              <option>500 - 1000</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4} lg={2}>
          <Form.Group>
            <Form.Label style={styles.mylabel}>Date</Form.Label>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">
                  View tournaments by date
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
            <DateHolderComponent />
          </Form.Group>
        </Col>
      </Row>
    </Form>
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

  overlayGroup: {
    marginRight: "20px",
    marginBottom: "5px",
  },
  networkLabel: {
    color: "#FFF",
    fontSize: "14px",
  },
  searchBtn: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    backgroundColor: "#ffbb33",
    borderColor: "#ffbb33",
  },
  findTournamentTitleBox: {
    color: "#6f7079",
    backgroundColor: "#2c2e3e",
    borderColor: "#6f7079",
    borderTopLeftRadius: "3px",
    width: "82%",

    borderBottomLeftRadius: "3px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  filterItem: {
    width: "auto",
    margin: "10px",
    textAlign: "center",
    backgroundColor: "#ffbb22",
    color: "#FFF",
    border: "1px solid #ffbb22",
    borderRadius: "3px",
    fontWeight: "600",
    padding: "5px",
    fontSize: "14px",
  },

  basicInput: {
    color: "#6f7079",
    backgroundColor: "#2c2e3e",
    borderColor: "#6f7079",
    borderRadius: "3px",
    fontSize: "14px",
    marginTop: "10px",
    height: "40px",
    marginRight: "10px",
  },
};

export default FiltersForm;
