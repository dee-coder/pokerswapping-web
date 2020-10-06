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
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

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
  selectedFilters,
  setSelectedFilters,
  selectedPrizepool,
  setSelectedPrizePool,
  selectedGameType,
  setSelectedGameType,
  selectedSpeed,
  setSelectedSpeed,
  selectedTournamentsState,
  setSelectedTournamentsState,
  selectedEnrollment,
  setSelectedEnrollment,
  allFilters,
  setAllFilters,
  setSelectedCustomId,
  selectedCustomId,
  getASpacifiMatchById,
}) => {
  useEffect(() => {
    //setSelectedNetwork([...networks,network])
    // setLayoutWidth(window.innerHeight());
    // if (layoutWidth < 600) {
    //   setRatio(12);
    // } else {
    //   setRatio(6);
    // }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    setShowFilters([
      ...selectedPrizepool,
      ...selectedGameType,
      ...selectedSpeed,
      ...selectedTournamentsState,
      ...selectedEnrollment,
    ]);

    setAllFilters([
      ...selectedPrizepool,
      ...selectedGameType,
      ...selectedSpeed,
      ...selectedTournamentsState,
      ...selectedEnrollment,
    ]);

    console.log("Filters array:", showfilters);
  }, [
    selectedPrizepool,
    selectedGameType,
    selectedSpeed,
    selectedTournamentsState,
    selectedEnrollment,
  ]);

  const [layoutWidth, setLayoutWidth] = useState();
  const [ratio, setRatio] = useState();
  const [showfilters, setShowFilters] = useState([]);

  const [prizepool, setPrizePool] = useState([
    { value: "BETWEEN 100 AND 500", label: "$100 To $500", key: "gaurantee" },
    {
      value: " BETWEEN 500 AND 1000",
      label: "$500 To $1000",
      key: "gaurantee",
    },
    {
      value: " BETWEEN 1000 AND 2000",
      label: "$1000 To $2000",
      key: "gaurantee",
    },
    {
      value: " BETWEEN 2000 AND 5000",
      label: "$2000 To $5000",
      key: "gaurantee",
    },
    {
      value: " BETWEEN 5000 AND 10000",
      label: "$5000 To $10000",
      key: "gaurantee",
    },
  ]);

  const [gameType, setGameType] = useState([
    { value: "H", label: "Hold'em", key: "game" },
    { value: "O", label: "Omaha", key: "game" },
  ]);

  const [speed, setSpeed] = useState([
    { value: " Turbo", label: "Turbo", key: "speed" },
    { value: " Slow", label: "Slow", key: "speed" },
  ]);

  const [tournamentsStates, setTournamentStates] = useState([
    { value: "Registering", label: "Registering", key: "state" },
    { value: "Late Registering", label: "Late Registering", key: "state" },
    { value: "Running", label: "Running", key: "state" },
    { value: " Completed", label: "Completed", key: "state" },
  ]);

  const [enrollment, setEnrollment] = useState([
    { label: " 10 To 50", value: "BETWEEN 10 To 50", key: "currentEntrants" },
    { label: " 50 To 100", value: "BETWEEN 50 To 100", key: "currentEntrants" },
    {
      label: " 100 To 1000",
      value: "BETWEEN 100 To 1000",
      key: "currentEntrants",
    },
    {
      label: " 1000 To 2000",
      value: "BETWEEN 1000 To 2000",
      key: "currentEntrants",
    },
    {
      label: " 2000 To 5000",
      value: "BETWEEN 2000 To 5000",
      key: "currentEntrants",
    },
    {
      label: " 5000 To 10000",
      value: "BETWEEN 5000 To 10000",
      key: "currentEntrants",
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

  //------Network-------
  const onSelectNetwork = (list, Item) => {
    //setSelectedPrizePool([...selectedPrizepool,Item]);
    //setSelectedFilters([...selectedFilters,{key:'gaurantee',value:Item.name}]);
    setSelectedNetwork([...selectedNetwork, Item]);
  };

  const onRemoveNetwork = (list, Item) => {
    const newList = selectedNetwork.filter((item) => item.value !== Item.name);

    setSelectedNetwork(newList);
  };
  //------PricePool-------
  const onSelectprizepool = (selectedArr) => {
    console.log(selectedArr);
    setSelectedPrizePool(selectedArr);
    console.log(selectedPrizepool);
    // setSelectedPrizePool([...selectedPrizepool, Item]);

    //setSelectedNetwork([...selectedNetwork, Item]);
  };

  //------GameType-------
  const onSelectGameType = (selectedArr) => {
    setSelectedGameType(selectedArr);

    //setSelectedGameType([...selectedGameType, Item]);
    //setSelectedFilters([...selectedFilters, { key: "game", value: Item.name }]);
    //setSelectedNetwork([...selectedNetwork, Item]);
  };

  //------Speed-------
  const onSelectSpeed = (selectedArr) => {
    setSelectedSpeed(selectedArr);

    // setSelectedSpeed([...selectedSpeed, Item]);
    // setSelectedFilters([
    //   ...selectedFilters,
    //   { key: "speed", value: Item.name },
    // ]);
    //setSelectedNetwork([...selectedNetwork, Item]);
  };

  //------State-------
  const onSelectState = (selectedArr) => {
    setSelectedTournamentsState(selectedArr);

    // setSelectedState([...selectedState, Item]);
    // setSelectedFilters([
    //   ...selectedFilters,
    //   { key: "state", value: Item.name },
    // ]);
    //setSelectedNetwork([...selectedNetwork, Item]);
  };

  //------Enrollment-------
  const onSelectEnrollment = (selectedArr) => {
    setSelectedEnrollment(selectedArr);

    // setSelectedEnrollment([...selectedEnrollment, Item]);
    // setSelectedFilters([
    //   ...selectedFilters,
    //   { key: "currentEntrants", value: Item.name },
    // ]);
    //setSelectedNetwork([...selectedNetwork, Item]);
  };

  const collectAndApplyFilters = () => {
    console.log(filters);
  };

  // const setGameTypeFilter = (type, e) => {
  //   if (type === "null") {
  //     //updateList(list);
  //     setSelectedFilters(selectedFilters.filter(({ key }) => key !== "game"));
  //     //const key = e.target.getAttribute("key");
  //     //setSelectedFilters(selectedFilters.filter((item) => item.key !== "game"));
  //     //setSelectedFilters([...selectedFilters, { key: "state", value: state }]);
  //   } else {
  //     setSelectedFilters([...selectedFilters, { key: "game", value: type }]);
  //   }
  // };
  //
  // const setPrizePool = (prizepool, e) => {
  //   if (prizepool === "null") {
  //     setSelectedFilters(
  //       selectedFilters.filter(({ key }) => key !== "guarantee")
  //     );
  //
  //     //setSelectedFilters([...selectedFilters, { key: "state", value: state }]);
  //   } else {
  //     setSelectedFilters([
  //       ...selectedFilters,
  //       { key: "guarantee", value: prizepool },
  //     ]);
  //   }
  // };
  //
  // const setTournamentState = (state, e) => {
  //   if (state === "null") {
  //     setSelectedFilters(selectedFilters.filter(({ key }) => key !== "state"));
  //
  //     //setSelectedFilters([...selectedFilters, { key: "state", value: state }]);
  //   } else {
  //     setSelectedFilters([...selectedFilters, { key: "state", value: state }]);
  //   }
  // };
  //
  // const setEntrants = (value, e) => {
  //   if (value === "null") {
  //     setSelectedFilters(
  //       selectedFilters.filter(({ key }) => key !== "currentEntrants")
  //     );
  //
  //     //setSelectedFilters([...selectedFilters, { key: "state", value: state }]);
  //   } else {
  //     setSelectedFilters([
  //       ...selectedFilters,
  //       { key: "currentEntrants", value: value },
  //     ]);
  //   }
  // };

  const handleEvent = (value) => {
    console.log(value);
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
              onSelect={onSelectNetwork}
              onRemove={onRemoveNetwork}
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
                  value={selectedCustomId}
                  onChange={(e) => setSelectedCustomId(e.target.value)}
                />

                <Button
                  onClick={(e) => getASpacifiMatchById(e)}
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

            <ReactMultiSelectCheckboxes
              options={gameType}
              onChange={(value) => onSelectGameType(value)}
            />
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
            <ReactMultiSelectCheckboxes
              style={{
                dropdownButton: {
                  color: "#6f7079",
                  backgroundColor: "#2c2e3e",
                  borderColor: "#6f7079",
                  borderRadius: "3px",
                  fontSize: "14px",
                  marginTop: "10px",
                  height: "40px",
                  marginRight: "10px",
                },
              }}
              options={prizepool}
              onChange={(value) => onSelectprizepool(value)}
            />
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
            <ReactMultiSelectCheckboxes
              style={{
                dropdownButton: {
                  color: "#6f7079",
                  backgroundColor: "#2c2e3e",
                  borderColor: "#6f7079",
                  borderRadius: "3px",
                  fontSize: "14px",
                  marginTop: "10px",
                  height: "40px",
                  marginRight: "10px",
                },
              }}
              options={speed}
              onChange={(value) => onSelectSpeed(value)}
            />
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

            <ReactMultiSelectCheckboxes
              options={tournamentsStates}
              onChange={(value) => onSelectState(value)}
            />
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
            <ReactMultiSelectCheckboxes
              options={enrollment}
              onChange={(value) => handleEvent(value)}
            />
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
      <label style={{ color: "#FFF" }}> Selected Filters </label>
      <Row style={{ marginBottom: "30px", width: "100%" }}>
        <Col>
          {showfilters.map((filter) => {
            return (
              <span style={styles.filterTag}>
                {filter.label}{" "}
                <i
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "14px",
                    color: "#FFF",
                  }}
                  class="fa fa-times-circle"
                  aria-hidden="true"
                />{" "}
              </span>
            );
          })}
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
  filterTag: {
    backgroundColor: "#ffbb33",
    color: "#fff",
    width: "auto",
    fontSize: "12px",
    padding: "5px",
    borderRadius: "3px",
    marginRight: "10px",
  },
  dropDownBtn: {
    color: "#6f7079",
    backgroundColor: "#2c2e3e",
    borderColor: "#6f7079",
    borderRadius: "3px",
    fontSize: "14px",
    marginTop: "10px",
    height: "40px",
    marginRight: "10px",
  },
  header: {
    color: "#ffbb33",
    textAlign: "center",
    fontSize: "16px",
  },
  mylabel: {
    fontSize: "14px",
    color: "#FFF",
    marginBottom: "20px",
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
