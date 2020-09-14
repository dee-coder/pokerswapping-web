import React from "react";
import logo from "./logo.svg";
import LandingPage from "./pages/landingPage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignupPage from "./pages/signupPage";
import SigninPage from "./pages/signinPage";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/signup" component={SignupPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </main>
  );
}

export default App;