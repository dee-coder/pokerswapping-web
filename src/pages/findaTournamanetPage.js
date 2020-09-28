import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import FiltersForm from "../forms/filteresForm";
import NavBar from "../navbar/navbar";
import axios from "axios";
import JsonUrl from "../apiUrl.json";
import TournamentItem from "../components/tournamentItem";

const FindATournament = () => {
  const [tournamentsList, setTournamentList] = useState([]);
  const [network, setNetwork] = useState("partypoker");
  const [tournamentId, setTournamentId] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    setShowSpinner(true);
    axios
      .post("http://15.206.92.119:1234/tournaments/all", {
        network: network,
      })
      .then((res) => {
        console.log("Axios Response:", res);
        setShowSpinner(false);
        setTournamentList(res.data.tournamentlist);
        console.log(res.data.tournamentlist);
        setShowSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <Col xs={4} style={styles.filtersSection}>
              {" "}
              <FiltersForm network={network} setNetwork={setNetwork} />
            </Col>
            <Col xs={8} style={styles.tournamentSection}>
              <Form style={styles.form} inline>
                <Form.Control
                  style={styles.basicInput}
                  as="select"
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                >
                  <option value={null}>Select Network</option>
                  <option value="fulltill">Fulltilt</option>
                  <option value="skypoker">SkyPoker</option>
                  <option value="888poker">888Poker</option>
                  <option value="partypoker" selected>
                    PartyPoker
                  </option>
                  <option value="pokerstars">PokerStars</option>
                </Form.Control>
                <Form.Control
                  style={styles.findTournamentTitleBox}
                  placeholder="e.g. Texas hold 'em., ID:2386389399 "
                  onChange={(e) => setTournamentId(e.target.value)}
                />

                <Button
                  style={styles.searchBtn}
                  onClick={(e) => getASpacifiMatchById(e)}
                >
                  {" "}
                  <i
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                    class="fa fa-search"
                    aria-hidden="true"
                  ></i>
                </Button>
              </Form>
              <Row>
                <Col style={styles.listContainer}>
                  {showSpinner && (
                    <Spinner style={styles.spinner} animation="grow" />
                  )}
                  {tournamentsList.map((tournament) => {
                    return <TournamentItem obj={tournament} />;
                  })}
                </Col>
              </Row>
            </Col>
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
};
export default FindATournament;
