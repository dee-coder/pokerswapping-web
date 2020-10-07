import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Table,
  Pagination,
  Modal,
} from "react-bootstrap";
import FiltersForm from "../forms/filteresForm";
import NavBar from "../navbar/navbar";
import axios from "axios";
import JsonUrl from "../apiUrl.json";
import TournamentItem from "../components/tournamentItem";
import "./pages.css";
import { useLocation, useParams } from "react-router-dom";

const FindATournament = (props) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  const [selectedFilters, setSelectedFilters] = useState([]);
  //{ key: "scheduledStartDate", value: today }

  // const queries = qs.parse(props.location.search, {
  //   ignoreQueryPrefix: true,
  // });

  const [allFilters, setAllFilters] = useState([]);

  console.log(allFilters);

  // const setCustomDateFilter = () => {
  //   if (date !== null || date !== undefined) {
  //     setAllFilters([
  //       ...allFilters,
  //       { key: "scheduledStartDate", value: date.replace(/-/g, "/") },
  //     ]);
  //     console.log(date.replace(/-/g, "/"));
  //   }
  // };

  //const parsed = qs.parse(params);
  console.log(props.match);
  //console.log(parsed.network);
  const [tournamentsList, setTournamentList] = useState([]);
  const [network, setNetwork] = useState([
    { name: "partypoker", key: "1" },
    { name: "skypoker", key: "2" },
    { name: "888poker", key: "3" },
    { name: "pokerstars", key: "4" },
    { name: "fullfilt", key: "5" },
  ]);
  const [selectedNetwork, setSelectedNetwork] = useState([
    { name: "partypoker", key: "1" },
  ]);

  const [tournamentId, setTournamentId] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [noData, setNoData] = useState(false);
  const [type, setType] = useState("list");
  const [selectedNetworkForCustomId, setSelectedNetworkForCustomId] = useState(
    null
  );
  const [selectedCustomId, setSelectedCustomId] = useState();

  const [selectedPrizepool, setSelectedPrizePool] = useState([]);
  const [selectedGameType, setSelectedGameType] = useState([]);
  const [selectedSpeed, setSelectedSpeed] = useState([]);
  const [selectedTournamentsState, setSelectedTournamentsState] = useState([]);
  const [selectedEnrollment, setSelectedEnrollment] = useState([]);

  const [pagination, setPagination] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [startPaginationValues, setStartPaginationValues] = useState(0);
  const [endPaginationValue, setEndPaginationValue] = useState(30);
  const [pages, setPages] = useState([]);
  const [activePage, setActivePages] = useState(1);
  const [showNetworkModal, setShowNetworkModal] = useState(false);

  const [gameType, setGameType] = useState(null);

  var urlNetwork =
    JsonUrl.baseUrl + JsonUrl.getTournamentFromSpacificNetwork + "?";
  useEffect(() => {
    setShowSpinner(true);
    setTournamentList([]);
    var list = [];

    //data
    if (selectedNetwork.length == 0) {
      setShowSpinner(false);
      setNoData(true);
    } else {
      for (var i = 0; i < selectedNetwork.length; i++) {
        urlNetwork = urlNetwork + "networks=" + selectedNetwork[i].name + "&";
      }
      //console.log(selectedFilters);
      if (selectedFilters.length == 0) {
        console.log(urlNetwork);
        setShowSpinner(false);
      } else {
        for (var k = 0; k < allFilters.length; k++) {
          urlNetwork =
            urlNetwork + allFilters[k].key + "=" + allFilters[k].value + "&";
        }

        console.log(urlNetwork);
        setShowSpinner(false);
      }
      setShowSpinner(true);
      axios
        .get(urlNetwork)
        .then((res) => {
          //console.log("Axios Response:", res.data);
          setShowSpinner(false);
          if (res.data.status === "ok") {
            setTournamentList(res.data.result);
            setNoData(false);
            setShowSpinner(false);
            var lenght = res.data.result.length;
            console.log(lenght);
            var sets = lenght / 30;
            console.log(sets);
            var pagess = Math.ceil(sets);
            console.log(pagess);
            list = Array(pagess - 1 + 1)
              .fill()
              .map((_, idx) => 1 + idx);
            //var list = Array.from(Array(pagess).keys());
          } else if (res.data.status === "failed") {
            setNoData(true);

            setShowSpinner(false);
          }
          setPages(list);
          console.log("Pages:", list);
          //setCustomDateFilter();

          // console.log(res.data.result);
          // setShowSpinner(false);
          // if (res.data.result === 0) {
          //   setNoData(true);
          // } else {
          //   setNoData(false);
          // }
          //console.log(noData);
          //console.log(Object.keys(tournamentsList).length);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [allFilters]);

  function convertTimeDate(timestamp) {
    var theDate = new Date(timestamp * 1000);
    var dateString = theDate.toGMTString();
    return dateString;
  }

  const getASpacifiMatchById = (e) => {
    e.preventDefault();
    if (selectedNetworkForCustomId === null) {
      //alert("Spacify all params.");
      setShowNetworkModal(true);
    } else {
      setShowNetworkModal(false);

      //setTournamentList([]);
      setShowSpinner(true);
      axios
        .get(
          JsonUrl.baseUrl +
            JsonUrl.getTournamentById +
            "?id=" +
            selectedCustomId +
            "&network=" +
            selectedNetworkForCustomId
        )
        .then((res) => {
          console.log("Axios Response:", res);

          setTournamentList([]);

          setTournamentList([res.data.result]);
          setShowSpinner(false);
        })
        .catch((err) => {
          console.log("Axios Error:", err);
        });
    }
  };

  function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
  }

  const handlePaginationValue = (page) => {
    setActivePages(page);
    console.log(page);
    setStartPaginationValues(activePage * 10);
    console.log(startPaginationValues);

    setEndPaginationValue(activePage * 10 + 10);
    console.log(endPaginationValue);
  };

  return (
    <div>
      <Container>
        <Modal
          show={showNetworkModal}
          onHide={() => setShowNetworkModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Select Network </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Select Network of Tournament</p>
            <select
              type="option"
              onChange={(e) => setSelectedNetworkForCustomId(e.target.value)}
            >
              <option value="skypoker">SkyPoker</option>
              <option value="partypoker">PartyPoker</option>
              <option value="888poker">888Poker</option>
              <option value="pokerstars">PokerStars</option>
              <option value="fullfilt">fullfilt</option>
            </select>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => setShowNetworkModal(false)}
            >
              Cancel
            </Button>
            <Button variant="primary" onClick={(e) => getASpacifiMatchById(e)}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal>
        <NavBar />
        <Container>
          <Row>
            <Col style={styles.findTournamentBox}>
              <h3>
                {" "}
                <i
                  style={{
                    color: "#ffbb22",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                  class="fas fa-search"
                ></i>
                Find Tournaments
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FiltersForm
                network={network}
                setNetwork={setNetwork}
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                selectedPrizepool={selectedPrizepool}
                setSelectedPrizePool={setSelectedPrizePool}
                selectedGameType={selectedGameType}
                setSelectedGameType={setSelectedGameType}
                selectedSpeed={selectedSpeed}
                setSelectedSpeed={setSelectedSpeed}
                selectedTournamentsState={selectedTournamentsState}
                setSelectedTournamentsState={setSelectedTournamentsState}
                selectedEnrollment={selectedEnrollment}
                setSelectedEnrollment={setSelectedEnrollment}
                setAllFilters={setAllFilters}
                allFilters={allFilters}
                selectedCustomId={selectedCustomId}
                setSelectedCustomId={setSelectedCustomId}
                getASpacifiMatchById={getASpacifiMatchById}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <span style={styles.resultFoundTag}>
                {" "}
                {tournamentsList.length} Results
              </span>
            </Col>

            <Col lg={4}>
              <div style={{ float: "right", marginRight: "30px" }}>
                <button
                  style={
                    type === "table"
                      ? styles.listViewTypeSelected
                      : styles.listViewType
                  }
                  onClick={() => setType("table")}
                >
                  <i class="fas fa-table"></i>
                </button>

                <button
                  style={
                    type === "list"
                      ? styles.listViewTypeSelected
                      : styles.listViewType
                  }
                  onClick={() => setType("list")}
                >
                  <i class="fas fa-stream"></i>
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <span style={styles.resultFoundTag}>
                {" "}
                Showing {startPaginationValues} to {endPaginationValue}{" "}
                Tournaments
              </span>
            </Col>
            <Col lg={8}>
              <Form inline style={{ float: "right", marginRight: "30px" }}>
                <Button disabled style={styles.paginationItem}>
                  Previous
                </Button>
                <Button style={styles.paginationItem}>Next</Button>

                {pages.map((page) => {
                  return (
                    <Button
                      style={
                        activePage === page
                          ? styles.activeItemPage
                          : styles.paginationItem
                      }
                      onClick={() => handlePaginationValue(page)}
                    >
                      {" "}
                      {page}
                    </Button>
                  );
                })}
              </Form>
            </Col>
          </Row>
          <Row>
            {/* <Form style={styles.form} inline>

              </Form> */}

            <Container style={{ marginTop: "20px" }}>
              {showSpinner && (
                <Spinner style={styles.spinner} animation="grow" />
              )}
              {noData && (
                <h3 style={{ color: "#FFF", marginTop: "30px" }}>
                  No Result Found.
                </h3>
              )}
              {type === "table" && (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>NETWORK</th>
                      <th>NAME</th>
                      <th>CURRENCY</th>
                      <th>GUARANTEE</th>
                      <th>OVERLAY</th>
                      <th>TOTAL ENTRANTS</th>
                      <th>STATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tournamentsList
                      .slice(startPaginationValues, endPaginationValue)
                      .map((tournament) => {
                        return (
                          <tr>
                            <td>{tournament["sharkscope_id"]}</td>
                            <td>{tournament["scheduledStartDate"]}</td>
                            <td>{tournament["network"]}</td>
                            <td>{tournament["name"]}</td>
                            <td>{tournament["currency"]}</td>
                            <td>{tournament["guarantee"]}</td>
                            <td>{tournament["overlay"]}</td>
                            <td>{tournament["totalEntrants"]}</td>
                            <td>{tournament["state"]}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              )}

              {type === "list" &&
                tournamentsList
                  .slice(startPaginationValues, endPaginationValue)
                  .map((tournament, index) => {
                    return <TournamentItem obj={tournament} />;
                  })}
            </Container>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

const styles = {
  filtersSection: {
    width: "100%",
    height: "100px",

    borderRadius: "3px",
  },

  paginationItem: {
    background: "#2c2e3e",
    color: "#FFF",
    borderRadius: "0px",
    borderColor: "#363840",
    width: "auto",
    outlineShadow: "none",
    height: "40px",
  },
  activeItemPage: {
    background: "#ffbb33",
    color: "#FFF",
    borderRadius: "0px",
    borderColor: "#ffbb33",
    width: "auto",
    height: "40px",
  },
  tournamentSection: {
    width: "100%",
    height: "100px",
  },
  mainContainer: {
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  titleRow: {
    marginTop: "45px",
    width: "100%",
    textAlign: "center",
  },
  findTournamentTitle: {
    color: "#FFF",
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "5px",
  },
  findTournamentBox: {
    height: "60px",
    textAlign: "center",
    color: "#FFF",
    marginTop: "30px",
  },
  findTournamentTitleBox: {
    color: "#6f7079",
    backgroundColor: "#2c2e3e",
    borderColor: "#6f7079",
    borderTopLeftRadius: "3px",
    width: "65%",
    marginLeft: "20px",
    borderBottomLeftRadius: "3px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  basicInput: {
    color: "#6f7079",
    backgroundColor: "#2c2e3e",
    borderColor: "#6f7079",
    borderRadius: "3px",
    fontSize: "14px",
  },

  searchBtn: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    backgroundColor: "#ffbb33",
    borderColor: "#ffbb33",
  },
  form: {
    width: "100%",
  },
  listContainer: {
    textAlign: "center",
  },
  spinner: {
    color: "#ffbb33",
    marginTop: "40px",
  },
  listViewType: {
    backgroundColor: "#363840",
    fontSize: "14px",
    color: "#FFF",
    height: "35px",
    width: "35px",
    borderRadius: "4px",
    textAlign: "center",
    marginLeft: "10px",
    border: "1px solid #363840",
    marginTop: "10px",
    marginBottom: "10px",
    float: "right",
    "&:hover": {
      cursor: "pointer",
    },
  },
  listViewTypeSelected: {
    backgroundColor: "#ffbb22",
    fontSize: "14px",
    color: "#FFF",
    height: "35px",
    width: "35px",
    float: "right",

    borderRadius: "4px",
    border: "1px solid #ffbb22",
    marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "10px",

    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  resultFoundTag: {
    color: "#FFF",
    fontSize: "18px",
    fontWeight: "600",
  },
  pagination: {
    backgroundColor: "#ffbb22",
  },
};

export default FindATournament;
