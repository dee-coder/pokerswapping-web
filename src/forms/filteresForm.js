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

const DateHolderComponent = (setSelectedFilters, selectedFilters) => {
  const [startDate, setStartDate] = useState(new Date());
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const setSelectedDate = () => {
    //const unixDate = toTimestamp(date);
    setSelectedFilters([
      ...selectedFilters,
      { key: "scheduledStartDate", value: today },
    ]);
    setStartDate(new Date());
  };

  function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  const ExampleCustomInput = ({ value, onClick }) => (
    <Button style={styles.basicInput} onClick={onClick}>
      {value}
    </Button>
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setSelectedDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

const FiltersForm = ({
  network,
  setNetwork,
  selectedNetwork,
  setSelectedNetwork,
  gameType,
  setGameType,
  selectedFilters,
  setSelectedFilters,
}) => {
  useEffect(() => {
    //setSelectedNetwork([...networks,network])
    // setLayoutWidth(window.innerHeight());
    // if (layoutWidth < 600) {
    //   setRatio(12);
    // } else {
    //   setRatio(6);
    // }
  }, []);

  const [layoutWidth, setLayoutWidth] = useState();
  const [ratio, setRatio] = useState();

  const [buyIn, setBuyIn] = useState([
    {
      name: "$10 to $100",
      key: "1",
      name: "$100 to $500",
      key: "2",
    },
  ]);

  const [filters, setFilters] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const handleFilters = (filter) => {
    //console.log(filter);
    // setNetwork([...selectedNetwork, filter]);
    //setFilters([...filters, filter]);
  };

  const handleGameType = (type) => {
    setFilters([...filters, type]);
  };

  const onSelect = (list, Item) => {
    setSelectedNetwork([...selectedNetwork, Item]);
  };

  const onRemove = (list, Item) => {
    const newList = selectedNetwork.filter((item) => item.name !== Item.name);

    setSelectedNetwork(newList);
  };

  const collectAndApplyFilters = () => {
    console.log(filters);
  };

  const setGameTypeFilter = (type) => {
    setSelectedFilters([...selectedFilters, { key: "game", value: type }]);
  };

  const setPrizePool = (prizepool) => {
    setSelectedFilters([
      ...selectedFilters,
      { key: "guarantee", value: prizepool },
    ]);
  };

  const setTournamentState = (state) => {
    setSelectedFilters([...selectedFilters, { key: "state", value: state }]);
  };

  const setEntrants = (value) => {
    setSelectedFilters([
      ...selectedFilters,
      { key: "currentEntrants", value: value },
    ]);
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
              options={network}
              displayValue="name"
              selectedValues={selectedNetwork}
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

            <Form.Control
              style={styles.basicInput}
              as="select"
              onChange={(e) => setGameTypeFilter(e.target.value)}
            >
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
            <Form.Control
              style={styles.basicInput}
              as="select"
              onChange={(e) => setPrizePool(e.target.value)}
            >
              <option>Default select</option>
              <option value="100">$0 To $100</option>
              <option value="1000">$100 To $1000</option>
              <option value="5000">$1000 To $5000</option>
              <option value="25000">$5000 To $25000</option>
              <option value="100000">$25000 To $100000</option>
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
            <Form.Control
              style={styles.basicInput}
              as="select"
              onChange={(e) => setTournamentState(e.target.value)}
            >
              <option>Select State</option>
              <option value="Registering">Registering</option>
              <option value="Late Registering">Late Registering</option>
              <option value="Running">Running</option>
              <option value="Completed">Completed</option>
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
            <Form.Control
              style={styles.basicInput}
              as="select"
              onChange={(e) => setEntrants(e.target.value)}
            >
              <option>Select</option>
              <option value="50">10 - 50</option>
              <option value="100">50 - 100</option>
              <option value="200">100 - 200</option>
              <option value="500">100 - 500</option>
              <option value="1000">500 - 1000</option>
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
            <DateHolderComponent
              setSelectedFilters={setSelectedFilters}
              selectedFilters={selectedFilters}
            />
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
