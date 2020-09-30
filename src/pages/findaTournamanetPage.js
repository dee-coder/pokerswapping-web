import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Table,
} from "react-bootstrap";
import FiltersForm from "../forms/filteresForm";
import NavBar from "../navbar/navbar";
import axios from "axios";
import JsonUrl from "../apiUrl.json";
import TournamentItem from "../components/tournamentItem";
import "./pages.css";

const FindATournament = () => {
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

  const [tournamentId, setTournamentId] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [noData, setNoData] = useState(false);

  const [type, setType] = useState("list");
  var urlNetwork =
    JsonUrl.baseUrl + JsonUrl.getTournamentFromSpacificNetwork + "?";
  useEffect(() => {
    setShowSpinner(true);
    setTournamentList([]);

    //data

    for (var i = 0; i < selectedNetwork.length; i++) {
      urlNetwork = urlNetwork + "networks=" + selectedNetwork[i].name + "&";
    }
    console.log(urlNetwork);

    axios
      .get(urlNetwork)
      .then((res) => {
        //console.log("Axios Response:", res.data);
        setShowSpinner(false);

        setTournamentList(res.data.result);
        //console.log(res.data.result);
        setShowSpinner(false);
        if (tournamentsList.length > 0) {
          setNoData(false);
        } else {
          setNoData(true);
        }
        console.log(noData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedNetwork]);

  function convertTimeDate(timestamp) {
    var time_to_show = timestamp; // unix timestamp in seconds

    var t = new Date(time_to_show * 1000);
    var formatted =
      ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2);
    return formatted;
  }

  const getASpacifiMatchById = (e) => {
    e.preventDefault();
    if (network === null || tournamentId === null) {
      console.log("Spacify all params.");
    } else {
      setTournamentList([]);
      setShowSpinner(true);
      axios
        .post(JsonUrl.getTournamentById, { id: tournamentId, network: network })
        .then((res) => {
          console.log("Axios Response:", res);
          setShowSpinner(false);

          setTournamentList([res.data.result.ActiveTournament]);
        })
        .catch((err) => {
          console.log("Axios Error:", err);
        });
    }
  };

  return (
    <div>
      <Container>
        <NavBar />
        <Container>
          <Row>
            <Col style={styles.findTournamentBox}>
              <h3>Find Tournaments</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FiltersForm
                network={network}
                setNetwork={setNetwork}
                selectedNetwork={selectedNetwork}
                setSelectedNetwork={setSelectedNetwork}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <span style={styles.resultFoundTag}>
                {" "}
                {tournamentsList.length} Tournaments found
              </span>
            </Col>
            <Col lg={2}>
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
                      <th>Date</th>
                      <th>Network</th>
                      <th>Name</th>
                      <th>Stake</th>
                      <th>Players</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tournamentsList.map((tournament) => {
                      return (
                        <tr>
                          <td>{tournament["sharkscope_id"]}</td>
                          <td>
                            {convertTimeDate(tournament["scheduledStartDate"])}
                          </td>
                          <td>{tournament["network"]}</td>
                          <td>{tournament["name"]}</td>
                          <td>{tournament["stake"]}</td>
                          <td>{tournament["totalEntrants"]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}

              {type === "list" &&
                tournamentsList.map((tournament) => {
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
    margin: "10px",
    border: "1px solid #363840",
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
    margin: "10px",

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
};

export default FindATournament;
